import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './style/theme'
import App from './container/App'
// import darkTheme from './style/dark-theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <React.StrictMode>
  <ThemeProvider theme={theme}>
   <CssBaseline />
   <App />
  </ThemeProvider>
 </React.StrictMode>,
)
