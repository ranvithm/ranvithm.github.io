import {useState, useEffect} from 'react'
import {AppBar, Box, Container, Toolbar} from '@mui/material'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem/ListItem'
import List from '@mui/material/List/List'
import ListItemButton from '@mui/material/ListItemButton/ListItemButton'
import ListItemText from '@mui/material/ListItemText/ListItemText'

const Header = () => {
 const [offset, setOffset] = useState(0)

 useEffect(() => {
  const onScroll = () => setOffset(window.pageYOffset)
  window.removeEventListener('scroll', onScroll)
  window.addEventListener('scroll', onScroll, {passive: true})
  return () => window.removeEventListener('scroll', onScroll)
 }, [])

 return (
  <Box sx={{flexGrow: 1}}>
   <AppBar sx={{backgroundColor: offset > 400 ? '' : 'transparent', color: (theme) => theme.palette.primary.contrastText}} component='nav'>
    <Container sx={{width: '100vw'}} fixed>
     <Toolbar>
      <Box display='flex' justifyContent='space-between' width='100%'>
       <Box display='flex' alignItems='center'>
        <Typography variant='h5'>Ranjithkumar M</Typography>
       </Box>
       <Box component='nav' display='flex' gap='10px'>
        <List sx={{display: {xs: 'none', md: 'flex'}}} disablePadding>
         <ListItem disablePadding>
          <ListItemButton component='a' href='#about'>
           <ListItemText primary='About' />
          </ListItemButton>
         </ListItem>
         <ListItem disablePadding>
          <ListItemButton component='a' href='#skill'>
           <ListItemText primary='Skill' />
          </ListItemButton>
         </ListItem>
         <ListItem disablePadding>
          <ListItemButton component='a' href='#experience'>
           <ListItemText primary='Experience' />
          </ListItemButton>
         </ListItem>
         <ListItem disablePadding>
          <ListItemButton component='a' href='#library'>
           <ListItemText primary='Library' />
          </ListItemButton>
         </ListItem>
         <ListItem disablePadding>
          <ListItemButton component='a' href='#contact'>
           <ListItemText primary='Contact' />
          </ListItemButton>
         </ListItem>
        </List>
       </Box>
      </Box>
     </Toolbar>
    </Container>
   </AppBar>
  </Box>
 )
}

export default Header
