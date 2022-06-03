import { combineReducers } from 'redux'

import conterReducer from './counterReducer'
import logsReducer from './logsReducer'
import workerReducer from './workerReducer'

const rootReducer = combineReducers({
  counter: conterReducer,
  logs: logsReducer,
  worker: workerReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
