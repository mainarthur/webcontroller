import { WorkerTypes } from '../constants'
import { createAction } from '../helpers'

export const startErrorAction = createAction<string[]>(WorkerTypes.START_ERROR)

export const startSuccessfulAction = createAction(WorkerTypes.START_SUCCESSFUL)

export const clearMessageAction = createAction(WorkerTypes.CLEAR_MESSAGE)
