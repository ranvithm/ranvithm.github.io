import {createTheme} from '@mui/material/styles'
import '@mui/lab/themeAugmentation'

const theme = createTheme({
 palette: {
  primary: {
   main: '#144272',
   contrastText: '#f5f9ff',
  },
 },
 //  components: {
 //   MuiTimeline: {
 //    styleOverrides: {
 //     root: {
 //      backgroundColor: '#fff',
 //     },
 //    },
 //   },
 //  },
})

export default theme
