import {createTheme} from '@mui/material/styles'
import '@mui/lab/themeAugmentation'

const darkTheme = createTheme({
 palette: {
  mode: 'dark',
  primary: {
   main: '#c9d9f1',
   contrastText: '#144272',
  },
 },
})

export default darkTheme
