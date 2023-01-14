import {Box} from '@mui/material'
import About from '../layout/about'
import Contact from '../layout/contact'
import Experience from '../layout/experience'
import Header from '../layout/header'
import Library from '../layout/libraries'
import Main from '../layout/main'
import Skills from '../layout/skills'

function App() {
 return (
  <Box>
   <Header />
   <Main />
   <About />
   <Skills />
   <Experience />
   <Library />
   <Contact />
  </Box>
 )
}

export default App
