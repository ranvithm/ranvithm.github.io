import {Timeline} from '@mui/lab'
import {Box, Container, Paper, Card, CardContent, Typography} from '@mui/material'
import CustomizedTimeline from '../components/timeline'

const Experience = () => {
 return (
  <Box component='section' id='experience' pt='65px'>
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
      backgroundColor: (theme) => theme.palette.primary.contrastText,
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
          This is package embedding. The qlik sense app may be integrated into a variety of other websites or online environments. They enable its clients to include analytics
          information, including as reports, dashboards, and other materials, into their own websites, applications, and other platforms.
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
          No Code UI Builder for Qlik Sense. Personalize dashboarding experiences with a self-service platform
         </Typography>
         <Typography color='text.secondary' variant='body1' component='p' sx={{mb: 1, mt: 2}}>
          <Typography variant='button' sx={{mr: 2}} component='span'>
           CREATE:
          </Typography>
          Accelerate custom dashboard creation by collating KPIs from across Qlik Sense apps and organizing them for user-specific needs
         </Typography>
         <Typography color='text.secondary' variant='body1' component='p' sx={{mb: 1}}>
          <Typography variant='button' sx={{mr: 2}} component='span'>
           CUTOMIZE:
          </Typography>
          Govern the dashboarding process at most granular levels to create a unified, seamless experience for both internal and external users
         </Typography>
         <Typography color='text.secondary' variant='body1' component='p' sx={{mb: 1}}>
          <Typography variant='button' sx={{mr: 2}} component='span'>
           COLLABORATE:
          </Typography>
          Trigger conversations around data as and when you need to. Make the discovery process collaborative at every step, without having to wait for apps to be published
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
          We used meteor to construct the CRM tool. From lead generation to opportunity management to deal closure, it enables firms to monitor and manage their sales funnel.
          Businesses may build and carry out personalized marketing campaigns to contact potential consumers at the correct time and with the right message with the aid of
          marketing automation solutions. It assists companies in providing exceptional customer service by tracking and promptly and effectively addressing client complaints and
          requests.
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
          With the aid of a QAP License, we are developing a QAP Add on platform that will increase Qlik Sense's capability. The platform provides a range of dashboard creation and
          data visualization features. By adopting an associative data architecture that enables people to explore data in a flexible and natural manner, it makes it easier to
          detect trends, patterns, and insights.
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
