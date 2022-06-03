import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider as ReduxStoreProvider } from 'react-redux'

import store from './redux/store'

import App from './App'
import { MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <ReduxStoreProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxStoreProvider>
    </MuiThemeProvider>
  </ThemeProvider>,
  document.querySelector('.root')
)
