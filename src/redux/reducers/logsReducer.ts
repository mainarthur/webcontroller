import { clearAction } from '../actions/loggerActions'
import Action from '../types/Action'
import LogPayload from '../types/payloads/LogPayload'

export type Log = {
  type: 'code' | 'error' | 'debug'
  text: string
  time?: string
  id?: number
}

const initialState: Log[] = []
let currentId = 0

export default function logsReducer(
  state = initialState,
  action: Action<LogPayload>
): typeof initialState {
  const { type, payload } = action
  const typeToCompare = type.toLowerCase()
  if (
    typeToCompare === 'code' ||
    typeToCompare === 'error' ||
    typeToCompare === 'debug'
  ) {
    return [
      {
        type: typeToCompare as Log['type'],
        text: payload.text,
        time: new Date().toLocaleTimeString(),
        id: ++currentId,
      },
      ...state,
    ]
  }

  if (clearAction.match(action)) return initialState

  return state
}
