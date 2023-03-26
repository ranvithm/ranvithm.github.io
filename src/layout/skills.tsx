import {Box, Container, Grid, Paper, Typography, SvgIcon} from '@mui/material'
import SkillsList from '../components/skills'

const Skills = () => {
 return (
  <Box component='section' id='skill' pt='65px'>
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
     <Grid sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', rowGap: 3, columnGap: 3}} spacing={3}>
      {SkillsList.map((skill) => (
       <Paper
        elevation={2}
        sx={{
         p: 1,
         minWidth: 150,
         cursor: 'pointer',
         minHeight: 100,
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'space-evenly',
         alignItems: 'center',
         ':hover': {
          backgroundColor: (theme) => theme.palette.primary.contrastText,
         },
        }}>
        <Box>{skill.icon && <SvgIcon sx={{width: '2em', height: '2em'}} component={skill.icon} />}</Box>
        <Typography variant='caption' fontSize={15}>
         {skill.name}
        </Typography>
       </Paper>
      ))}
     </Grid>
    </Paper>
   </Container>
  </Box>
 )
}

export default Skills
