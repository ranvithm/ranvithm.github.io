import {Box, Container, Avatar, Button, IconButton, SvgIcon, styled} from '@mui/material'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faNPM} from '@fortawesome/free-solid-svg-icons'
import './style.css'

const ImageButton = styled(IconButton)(({theme}) => ({
 backgroundColor: '#888',
 color: '#fff',
 '&:hover': {
  backgroundColor: theme.palette.primary.main,
 },
}))

const Main = () => {
 const backgroundStyle = {
  backgroundImage: "url('./cover.jpg') ",
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  zIndex: '-1',
 }
 return (
  <Box className='page--header'>
   <Box sx={backgroundStyle}></Box>
   <Container
    sx={{
     width: '100vw',
     height: '100%',
     zIndex: 2,
     position: 'relative',
     display: 'flex',
     justifyContent: 'center',
    }}
    fixed>
    <Box
     display='flex'
     flexDirection='column'
     alignItems='center'
     justifyContent='center'
     sx={{
      top: '50%',
      left: '50%',
      width: '100%',
      color: '#FFFFFF',
      padding: '0 15px',
      maxWidth: '880px',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
     }}>
     <Box className='profile--image' display='flex' justifyContent='center'>
      <Box component='a' position='relative'>
       <Avatar alt='Ranjith' src='./profile.png' sx={{width: 150, height: 150}} />
      </Box>
     </Box>
     <Box component='h1' m='10px 0 '>
      Ranjithkumar M
     </Box>
     <Box component='h4' m='10px 0'>
      Full stack Javascript Developer
     </Box>
     <Box display='flex' gap='20px' mt='10px'>
      <Button component='a' href='#contact' variant='contained'>
       Hire me
      </Button>
      <Button variant='contained'>Download CV</Button>
     </Box>
    </Box>
    <Box display='flex' gap='20px' sx={{bottom: '-20px', position: 'absolute'}}>
     <ImageButton>
      <SvgIcon viewBox='0 0 576 512'>
       <path d='M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z' />
      </SvgIcon>
     </ImageButton>
     <ImageButton>
      <SvgIcon viewBox='0 0 448 512'>
       <path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z' />
      </SvgIcon>
     </ImageButton>
     <ImageButton>
      <SvgIcon viewBox='0 0 448 512'>
       <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
      </SvgIcon>
     </ImageButton>
     <ImageButton>
      <SvgIcon viewBox='0 0 512 512'>
       <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' />
      </SvgIcon>
     </ImageButton>
    </Box>
   </Container>
  </Box>
 )
}

export default Main
