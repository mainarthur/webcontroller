import {
  put,
  takeEvery,
  delay,
} from 'redux-saga/effects'

import AsyncAction from '../types/AsyncAction'

import { CounterAction } from '../constants'

import CounterPayload from '../types/payloads/CounterPayload'
import { incrementAction } from '../actions/couterActions'

function* incrementRequested(action: AsyncAction<{}, CounterPayload>) {
  const {
    payload,
    next,
  } = action

  yield delay(1000)

  yield put(incrementAction(payload))

  next()
}

function* watchCounter() {
  yield takeEvery(CounterAction.INCREMENT_ASYNC, incrementRequested)
}

export default watchCounter
