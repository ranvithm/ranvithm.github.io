import {Box, Container, Grid, Paper, Card, CardContent, Typography} from '@mui/material'
import LinearDeterminate from '../components/linearDeterminate'

const Skills = () => {
 return (
  <Box component='section' id='skill' m='50px 0'>
   <Container fixed>
    <Typography variant='h5' sx={{textAlign: 'center'}} gutterBottom>
     Professional Skills
    </Typography>
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
         <LinearDeterminate name='HTML' value={85} />
         <LinearDeterminate name='Javascript' value={80} />
         <LinearDeterminate name='Typescript' value={75} />
         <LinearDeterminate name='Nextjs' value={75} />
         <LinearDeterminate name='Angular' value={70} />
         <LinearDeterminate name='Qlik Extension' value={80} />
        </CardContent>
       </Card>
      </Grid>
      <Grid item xs={12} md={6}>
       <Card variant='outlined' sx={{border: 0}}>
        <CardContent>
         <LinearDeterminate name='CSS' value={80} />
         <LinearDeterminate name='React' value={85} />
         <LinearDeterminate name='Node' value={80} />
         <LinearDeterminate name='nestjs' value={70} />
         <LinearDeterminate name='Qlik Mashup' value={85} />
         <LinearDeterminate name='Qlik Webapp' value={85} />
        </CardContent>
       </Card>
      </Grid>
     </Grid>
    </Paper>
   </Container>
  </Box>
 )
}

export default Skills
