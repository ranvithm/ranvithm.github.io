import {Timeline} from '@mui/lab'
import {Box, Container, Grid, Paper, Card, CardContent, Typography, LinearProgress, styled} from '@mui/material'
import CustomizedTimeline from '../components/timeline'

const Experience = () => {
 return (
  <Box component='section' id='experience' m='50px 0'>
   <Container fixed>
    <Typography variant='h4' sx={{textAlign: 'center'}} gutterBottom>
     Experience & Project
    </Typography>
    <Typography variant='h5' sx={{textAlign: 'center'}} gutterBottom>
     GainInsights Solutions Pvt. Ltd. / June 2016 - Present.
    </Typography>
    <Paper
     sx={{
      p: 2,
      margin: 'auto',
      flexGrow: 1,
      backgroundColor: '#fff',
     }}>
     <Timeline>
      <CustomizedTimeline>
       <Card>
        <CardContent>
         <Typography gutterBottom variant='h6' component='div'>
          Anywhere Embed Website - Full Stack Senior Developer
         </Typography>
         <Typography gutterBottom variant='overline' component='div'>
          Nov 2022 - Present
         </Typography>
         <Typography variant='body1' color='text.secondary'>
          Bring KPI's from multiple Qlik apps, to integrate into Website.
         </Typography>
        </CardContent>
       </Card>
      </CustomizedTimeline>
      <CustomizedTimeline>
       <Card>
        <CardContent>
         <Typography gutterBottom variant='h6' component='div'>
          InfoXD - Senior Developer
         </Typography>
         <Typography gutterBottom variant='overline' component='div'>
          Jan 2020 - Oct 2022
         </Typography>
         <Typography variant='body1' color='text.secondary'>
          Developed the self service No Code UI Platform. Bring KPI's from multiple Qlik apps without the know-how of
          the underlying data sources and define access controls on your views.
         </Typography>
        </CardContent>
       </Card>
      </CustomizedTimeline>
      <CustomizedTimeline>
       <Card>
        <CardContent>
         <Typography gutterBottom variant='h6' component='div'>
          Business CRM - Developer
         </Typography>
         <Typography gutterBottom variant='overline' component='div'>
          Jun 2018 - Dec 2019
         </Typography>
         <Typography variant='body1' color='text.secondary'>
          Developed a business CRM tool which is used to manage the process of overseeing and directing future sales in
          various stages. Also, the developer performance can be analyzed based on the project process. Developed using
          Angular & NodeJS. This can be migrated to Meteor framework.
         </Typography>
        </CardContent>
       </Card>
      </CustomizedTimeline>
      <CustomizedTimeline>
       <Card>
        <CardContent>
         <Typography gutterBottom variant='h6' component='div'>
          Qlik Sense API - Junior Developer
         </Typography>
         <Typography gutterBottom variant='overline' component='div'>
          Jun 2017 - Apr 2018
         </Typography>
         <Typography variant='subtitle2' color='text.secondary'>
          Developed the Extensions & Mashups using React, Angular, Node & Python. The few projects are,
         </Typography>
         <Box>
          <Box display='flex' alignItems='center'>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            InfoSnap:
           </Typography>
           <Typography variant='body2' flex='2' display='block' gutterBottom>
            Smart alert to send the email & SMS.
           </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            InfoShare:
           </Typography>
           <Typography variant='body2' flex='2' display='block' gutterBottom>
            Collaborative analysis within Qlik sense application
           </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            InfoWrite :
           </Typography>
           <Typography variant='body2' flex='2' display='block' gutterBottom>
            Automated data write-back to the qlik sense application.
           </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            Report builder :
           </Typography>
           <Typography variant='body2' flex='2' display='block' gutterBottom>
            To Generate P&L report based on user choose.
           </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            D3:
           </Typography>
           <Typography variant='body2' flex='2' display='block' gutterBottom>
            Developed lots of charts(Bar, Line, Pie & Combo) using D3.
           </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            Mashups:
           </Typography>
           <Typography variant='body2' flex='2' display='block' gutterBottom>
            Connected to multiple qlik sense application and interact filters with all the apps.
           </Typography>
          </Box>
         </Box>
        </CardContent>
       </Card>
      </CustomizedTimeline>
      <CustomizedTimeline>
       <Card>
        <CardContent>
         <Typography gutterBottom variant='h6' component='div'>
          QAP (Qlik Analytics Platform) - Junior Developer
         </Typography>
         <Typography gutterBottom variant='overline' component='div'>
          Aug 2016 - May 2017
         </Typography>
         <Typography variant='body1' color='text.secondary'>
          Developed the platform for building rich and smart data-driven analytic analytic applications. Which extends
          the Qlik Sense functionality with the help of Qlik sense API by using ReactJS and Python flask.
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

export default Experience
