import React from 'react'
import styled from 'styled-components'
import { Log } from '../redux/reducers/logsReducer'
import useLoggerData from '../hooks/useLoggerData'

const Logger = () => {
  const logs = useLoggerData()

  return (
    <LoggerWrappper>
      {logs.map((log) => (
        <Log type={log.type} key={`${log.id}`}>
          {log.time} - {String(log.text)}
        </Log>
      ))}
    </LoggerWrappper>
  )
}

const LoggerWrappper = styled.div`
  height: 100%;
  width: 33.3%;
  overflow: auto;
  background-color: #444;
`

const Log = styled.div<{ type: Log['type'] }>`
  color: ${({ type }) => (type === 'error' ? 'red' : 'white')};
`

export default Logger
