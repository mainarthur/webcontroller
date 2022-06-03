import { WorkerTypes } from './redux/constants'

export function createWorker(code: string) {
  const blob = new Blob([code])
  const url = URL.createObjectURL(blob)

  return new Worker(url)
}

export function injectUserCode(code: string) {
  return `
  const nativePostMessage = postMessage;

  const embeddedConsole = {
    error: function() {
      nativePostMessage({type: 'ERROR', payload: { 
        text:
          Array.from(arguments).map(data => {
            try {
              return JSON.stringify(data)
            } catch(e) {
              return String(data)
            }
          }).join(', ')
        }
      })
    },
    log: function() {
      nativePostMessage({type: 'DEBUG', payload: { 
        text:
          Array.from(arguments).map(data => {
            try {
              return JSON.stringify(data)
            } catch(e) {
              return String(data)
            }
          }).join(', ')
        }
      })
    },
  }

  const mainFunctions = {};
  const processorsAPIs = {_$_: mainFunctions};
  const apis = { console: embeddedConsole, Math, int: parseInt, float: parseFloat, Object, JSON};
  
  const has = function() {
    return true;
  }

  const get = function(target, key) {
    if(key === Symbol.unscopables) return undefined;
    return target[key];
  }

  const sandboxProxy = new Proxy(Object.assign(processorsAPIs, apis), {has, get});
  
  with(sandboxProxy) {
    (function(_$_) {
        try {
          ${code};
          _$_['init'] = init;
          _$_['loop'] = loop;
          _$_['siganl'] = signal;
        } catch(error) {
          console.error(error)
        }
      }).call({}, _$_)
  }

  console.log(Object.keys(sandboxProxy))

  onmessage = function (message) {
    const payload = message.data
    if(payload) {
      const type = payload.type

      switch(type) {
        case '${WorkerTypes.START}':
          if(
            typeof mainFunctions['init'] !== 'function' || 
            typeof mainFunctions['loop'] !== 'function'
          ) {
            postMessage({
              type: '${WorkerTypes.START_ERROR}',
              payload: ['init', 'loop'].filter( key => typeof mainFunctions[key] !== 'function')
            })
            break
          }
          mainFunctions['init']()
          setInterval(() => {
            try {
              mainFunctions['loop']()
            } catch (err) {
              
            }
          }, 10)
          postMessage({
            type: '${WorkerTypes.START_SUCCESSFUL}'
          })
          break;
        
      }
    }
  }`
}
