import {createTheme} from '@mui/material/styles'
import '@mui/lab/themeAugmentation'

const LightTheme = createTheme({
 palette: {
  mode: 'light',
  primary: {
   main: '#144272',
   contrastText: '#c9d9f1',
  },
 },
})

export default LightTheme
