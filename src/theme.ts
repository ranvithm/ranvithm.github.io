import {createTheme} from '@mui/material/styles'
import '@mui/lab/themeAugmentation'

const theme = createTheme({
 palette: {
  primary: {
   main: '#FE8B5E',
   contrastText: '#fff',
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
