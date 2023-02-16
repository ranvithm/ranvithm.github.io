import {createTheme} from '@mui/material/styles'
import '@mui/lab/themeAugmentation'

const theme = createTheme({
 palette: {
  primary: {
   main: '#144272',
   contrastText: '#FFE7CC',
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
