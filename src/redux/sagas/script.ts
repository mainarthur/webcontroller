import { takeEvery } from '@redux-saga/core/effects'
import { createWorker, injectUserCode } from '../../utils'
import { LoggerActions, ScriptActions, WorkerTypes } from '../constants'
import store from '../store'
import Action from '../types/Action'
import ScriptPayload from '../types/payloads/StartScriptPayload'

let worker: Worker

function* startScript(action: Action<ScriptPayload>) {
  const {
    payload: { code },
  } = action

  const runCode = injectUserCode(code)
  worker = createWorker(runCode)

  worker.postMessage({ type: WorkerTypes.START })

  worker.onmessage = (event: MessageEvent<any>) => {
    const action = event.data ?? {}

    store.dispatch(action)
  }
}

function* stopScript() {
  worker?.terminate()
}

function* watchScript() {
  yield takeEvery(ScriptActions.START_SCRIPT, startScript)
  yield takeEvery(ScriptActions.STOP_SCRIPT, stopScript)
}

export default watchScript
