import React from 'react'
import { useDispatch } from 'react-redux'
import { CODE_KEY } from '../constants'
import useLocalStore from '../hooks/useLocalStore'
import {
  startScriptAction,
  stopScriptAction,
} from '../redux/actions/scriptActions'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'
import { Fab, Snackbar } from '@material-ui/core'
import styled from 'styled-components'
import { StyledTheme } from '../theme'
import Logger from './Logger'
import useWorkersData from '../hooks/useWrokersData'
import { clearMessageAction } from '../redux/actions/workerActions'
import { Alert } from '@material-ui/lab'
import Processor from './Processor'

const Preview = () => {
  const [isRunning, setIsRunning] = React.useState(false)
  const [code] = useLocalStore(CODE_KEY)
  const worker = useWorkersData()
  const dispatch = useDispatch()

  const handleStart = () => {
    dispatch(startScriptAction({ code }))
  }

  const handleStop = () => {
    dispatch(stopScriptAction())
  }

  const handleFabToggle = () => {
    if (isRunning) {
      handleStop()
    } else {
      handleStart()
    }

    setIsRunning(!isRunning)
  }

  const closeSnackbar = () => {
    dispatch(clearMessageAction())
  }

  React.useEffect(
    () => () => {
      closeSnackbar()
      handleStop()
    },
    []
  )

  return (
    <>
      <Content>
        <Logger />
        <Processor />
      </Content>
      <Snackbar
        open={!!worker.error || worker.successful}
        autoHideDuration={3000}
        onClose={closeSnackbar}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity={worker.error ? 'error' : 'success'}
        >
          {worker.error || 'Script started'}
        </Alert>
      </Snackbar>
      <FabWrapper onClick={handleFabToggle} isRunning={isRunning}>
        {!isRunning ? <PlayArrowIcon /> : null}
        {isRunning ? <StopIcon /> : null}
      </FabWrapper>
    </>
  )
}

const Content = styled.div`
  display: flex;
  height: 87%;
`

const FabWrapper = styled(Fab)<{ isRunning?: boolean }>`
  position: absolute !important;

  bottom: 16px;
  right: 16px;
  color: ${({ theme }: StyledTheme) => theme.palette.common.white} !important;
  background-color: ${({ theme, isRunning }: StyledTheme) =>
    (isRunning ? theme.palette.error : theme.palette.secondary)
      .light} !important;
`

export default Preview
