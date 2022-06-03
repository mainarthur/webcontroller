import {
  clearMessageAction,
  startErrorAction,
  startSuccessfulAction,
} from '../actions/workerActions'
import Action from '../types/Action'

const initialState = {
  error: '',
  successful: false,
}

const prepareErrorText = (functions: string[]) =>
  functions.length > 1
    ? `${functions.join(', ')} are not functions`
    : `${functions.join(', ')} is not a function`

export default function workerReducer(
  state = initialState,
  action: Action
): typeof initialState {
  if (startErrorAction.match(action)) {
    return { ...initialState, error: prepareErrorText(action.payload) }
  }
  if (startSuccessfulAction.match(action)) {
    return { ...initialState, successful: true }
  }
  if (clearMessageAction.match(action)) {
    return initialState
  }
  return state
}
