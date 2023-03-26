import {Box, Container, Grid, Paper, Card, CardContent, Typography} from '@mui/material'

const About = () => {
 return (
  <Box component='section' id='about' pt='65px'>
   <Container fixed>
    <Paper
     sx={{
      p: 2,
      margin: 'auto',
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.primary.contrastText,
     }}>
     <Grid container spacing={1}>
      <Grid item xs={12}>
       <Card variant='outlined' sx={{border: 0}}>
        <CardContent>
         <Typography gutterBottom variant='h4' component='div'>
          About
         </Typography>
         <Typography variant='body1' color='text.secondary'>
          I'm a full-stack developer with more than six years of experience, and I'm passionate about creating scalable, usable solutions that address challenging business issues.
          I have experience with back-end technologies like Node.js, Express, and Nest.js as well as full-stack technologies like Next.js and Meteor. I also have experience with
          front-end technologies like HTML, CSS, JavaScript, React, and Angular. I also have expertise with web applications, mashups, and qlik sense extensions. Git and Jira are
          both familiar to me. Whether I'm developing a new feature, troubleshooting a problem, or cooperating with other team members, my primary goal is to produce high-quality
          code that satisfies or exceeds client expectations. Let's talk about how we can collaborate to make your vision a reality.
         </Typography>
        </CardContent>
       </Card>
      </Grid>
      {/* <Grid item xs={12} md={5}>
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
      </Grid> */}
     </Grid>
    </Paper>
   </Container>
  </Box>
 )
}

export default About
