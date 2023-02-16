import {Box, Container, Grid, Paper, Card, CardContent, Typography} from '@mui/material'

const About = () => {
 return (
  <Box component='section' id='about' m='50px 0'>
   <Container fixed>
    <Paper
     sx={{
      p: 2,
      margin: 'auto',
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.primary.contrastText,
     }}>
     <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
       <Card variant='outlined' sx={{border: 0}}>
        <CardContent>
         <Typography gutterBottom variant='h4' component='div'>
          About
         </Typography>
         <Typography variant='body1' color='text.secondary'>
          Passionate Full Stack Developer with 6+ years of hands-on experience designing, developing and maintaining web
          applications. Possesses diverse experience of creating mashup and extensions using different tech stacks.
          Adept at understanding the requirements of the clients and delivering the projects accordingly. Highly skilled
          at collaborating with team members to ship beautiful products within deadlines.
         </Typography>
        </CardContent>
       </Card>
      </Grid>
      <Grid item xs={12} md={6}>
       <Card variant='outlined' sx={{border: 0}}>
        <CardContent>
         <Typography gutterBottom variant='h4' component='div'>
          Basic Information
         </Typography>
         <Box>
          <Box display='flex' alignItems='center'>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            AGE:
           </Typography>
           <Typography variant='body1' flex='2' display='block' gutterBottom>
            29
           </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            EMAIL:
           </Typography>
           <Typography variant='body1' flex='2' display='block' gutterBottom>
            ranvitranjit@gmail.com
           </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            PHONE:
           </Typography>
           <Typography variant='body1' flex='2' display='block' gutterBottom>
            +91-8072455127
           </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            ADDRESS:
           </Typography>
           <Typography variant='body1' flex='2' display='block' gutterBottom>
            Srivilliputtur, 626110.
           </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            LANGUAGE:
           </Typography>
           <Typography variant='body1' flex='2' display='block' gutterBottom>
            Tamil, English
           </Typography>
          </Box>
         </Box>
        </CardContent>
       </Card>
      </Grid>
     </Grid>
    </Paper>
   </Container>
  </Box>
 )
}

export default About
