import { LoggerActions } from '../constants'
import { createAction } from '../helpers'
import LogPayload from '../types/payloads/LogPayload'

export const codeAction = createAction<LogPayload>(LoggerActions.CODE)

export const debugAction = createAction<LogPayload>(LoggerActions.DEBUG)

export const errorAction = createAction<LogPayload>(LoggerActions.ERROR)

export const clearAction = createAction(LoggerActions.CLEAR)
