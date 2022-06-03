import { ScriptActions } from '../constants'
import { createAction } from '../helpers'
import ScriptPayload from '../types/payloads/StartScriptPayload'

export const startScriptAction = createAction<ScriptPayload>(
  ScriptActions.START_SCRIPT
)

export const stopScriptAction = createAction(ScriptActions.STOP_SCRIPT)
