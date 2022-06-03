import { all } from 'redux-saga/effects'
import watchCounter from './counter'
import watchScript from './script'

export default function* rootSaga() {
  yield all([watchCounter(), watchScript()])
}
