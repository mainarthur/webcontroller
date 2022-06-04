import React, { useState } from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import styled from 'styled-components'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import { AppBar, IconButton, Tab, Tabs, Toolbar } from '@material-ui/core'
import { EDITOR_TAB, Pages } from './constants'
import logo from '../static/logo-white.png'
import { Route, Switch, useHistory } from 'react-router'
import { StyledTheme } from './theme'

import HomeIcon from '@material-ui/icons/Home'
import MainPage from './pages/MainPage'
import HelpPage from './pages/HelpPage'

const App = () => {
  const [currentTab, setCurrentTab] = useState(EDITOR_TAB)
  const history = useHistory()

  const handleTabChange = (_event: any, newValue: number) => {
    setCurrentTab(newValue)
  }

  const handleGoHelp = () => history.push(Pages.HELP)

  const handleGoMain = () => history.push(Pages.MAIN)

  const handleGoHome = () =>
    window.open('https://masterarthur.xyz', '_blank').focus()

  return (
    <MainBox>
      <AppBarWrapper position="static" color="primary">
        <Toolbar>
          <Heading variant="h6">
            <MainIcon src={logo} />
            WebProcessor
          </Heading>
          <Switch>
            <Route exact path={Pages.MAIN}>
              <WhiteIconButton onClick={handleGoHelp}>
                <HelpOutlineIcon />
              </WhiteIconButton>
            </Route>
            <Route exact path={Pages.HELP}>
              <WhiteIconButton onClick={handleGoMain}>
                <CreateOutlinedIcon />
              </WhiteIconButton>
            </Route>
          </Switch>
          <WhiteIconButton onClick={handleGoHome}>
            <HomeIcon />
          </WhiteIconButton>
        </Toolbar>
        <Switch>
          <Route exact path={Pages.MAIN}>
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              variant="fullWidth"
              centered
              aria-label="full width tabs"
            >
              <Tab label="♂GachiScript♂ Editor" />
              <Tab label="Preview" />
            </Tabs>
          </Route>
        </Switch>
      </AppBarWrapper>
      <Switch>
        <Route exact path={Pages.MAIN}>
          <MainPage currentTab={currentTab} />
        </Route>
        <Route exact path={Pages.HELP} component={HelpPage} />
      </Switch>
    </MainBox>
  )
}

const MainIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`

const Heading = styled(Typography)`
  display: flex;
  text-align: center;
  width: 100%;
`

const WhiteIconButton = styled(IconButton)`
  color: ${({ theme }: StyledTheme) => theme.palette.common.white} !important;
`

const AppBarWrapper = styled(AppBar)`
  margin-bottom: 4px;
`

const MainBox = styled(Box)`
  height: 100%;
  background-color: #1e1e1e;
`

export default App
