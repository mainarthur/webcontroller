import Action from '../types/Action'
import {
  incrementAction,
  decrementAction,
} from '../actions/couterActions'

export type CounterState = {
  curretValue: number
}

const initialState: CounterState = {
  curretValue: 0,
}

export default function counterReducer(state = initialState, action: Action): CounterState {
  const newState = { ...state }

  if (incrementAction.match(action)) {
    newState.curretValue += action.payload.value
  }

  if (decrementAction.match(action)) {
    newState.curretValue -= action.payload.value
  }

  return newState
}
