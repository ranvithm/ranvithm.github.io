import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './theme'
import App from './container/App'
import reportWebVitals from './reportWebVitals'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
 <StrictMode>
  <ThemeProvider theme={theme}>
   <CssBaseline />
   <App />
  </ThemeProvider>
 </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
