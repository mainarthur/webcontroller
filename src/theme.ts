import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2b2a33',
    },
    secondary: {
      main: '#33944e',
    },
  },
})

export type Theme = typeof theme

export type StyledTheme = { theme: Theme; [key: string]: any }
