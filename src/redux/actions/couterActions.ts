import { createAction } from '../helpers'
import { CounterAction } from '../constants'
import CounterPayload from '../types/payloads/CounterPayload'

export const incrementAction = createAction<CounterPayload>(CounterAction.INCREMENT)

export const decrementAction = createAction<CounterPayload>(CounterAction.DECREMENT)

export const incrementAsyncAction = createAction<CounterPayload>(CounterAction.INCREMENT_ASYNC)
