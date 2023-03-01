import {Timeline} from '@mui/lab'
import {Box, Container, Paper, Card, CardContent, Typography} from '@mui/material'
import CustomizedTimeline from '../components/timeline'

const Library = () => {
 return (
  <Box component='section' id='library' m='50px 0'>
   <Container fixed>
    <Typography variant='h4' sx={{textAlign: 'center'}} gutterBottom>
     Libraries
    </Typography>
    <Paper
     sx={{
      p: 2,
      margin: 'auto',
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.primary.contrastText,
     }}>
     <Timeline>
      <CustomizedTimeline>
       <Card>
        <CardContent>
         <Typography variant='h6' component='a' sx={{textDecoration: 'blink'}} href='https://www.npmjs.com/package/qlik'>
          Qlik
         </Typography>
         <Typography variant='body1' color='text.secondary'>
          This package will serve as a web application wrapper for the Qlik API. This utility manages the Qlik connection, loads the required files, and retrieves the fundamental
          Qlik operations. And by connecting the Qlik sense numerous apps with this tool, we may access the Qlik sense API.
         </Typography>
        </CardContent>
       </Card>
      </CustomizedTimeline>
      <CustomizedTimeline>
       <Card>
        <CardContent>
         <Typography gutterBottom variant='h6' component='div'>
          Simple Logger
         </Typography>
         <Typography variant='body1' color='text.secondary'>
          Logging messages are captured during the execution of a program. This is build by node file stream technique. We can use all the node applications.
         </Typography>
        </CardContent>
       </Card>
      </CustomizedTimeline>
      <CustomizedTimeline>
       <Card>
        <CardContent>
         <Typography gutterBottom variant='h6' component='div'>
          Text Editor
         </Typography>
         <Typography variant='body1' color='text.secondary'>
          Developed text editor to format and styling whenever the user select text. This is a UI component built completely in React.
         </Typography>
        </CardContent>
       </Card>
      </CustomizedTimeline>
     </Timeline>
    </Paper>
   </Container>
  </Box>
 )
}

export default Library
