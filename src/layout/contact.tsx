import {
 Box,
 Container,
 Grid,
 Paper,
 Card,
 CardContent,
 Typography,
 TextField,
 TextareaAutosize,
 Button,
} from '@mui/material'

const Contact = () => {
 return (
  <Box component='section' id='contact' m='50px 0'>
   <Container fixed>
    <Paper
     sx={{
      p: 2,
      margin: 'auto',
      flexGrow: 1,
      backgroundColor: '#fff',
     }}>
     <Typography variant='h5' gutterBottom>
      Contact
     </Typography>
     <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
       <Card variant='outlined' sx={{border: 0}}>
        <CardContent>
         <Box component='form' display='flex' gap='20px' flexDirection='column'>
          <Box display='flex' gap='20px' justifyContent='space-between'>
           <TextField label='Your Name' fullWidth variant='standard' />
           <TextField label='Your E-mail' fullWidth variant='standard' />
          </Box>
          <Box>
           <TextareaAutosize placeholder='Your Message' style={{width: '100%'}} minRows={6} />
          </Box>
          <Box>
           <Button variant='contained'>Send</Button>
          </Box>
         </Box>
        </CardContent>
       </Card>
      </Grid>
      <Grid item xs={12} md={4}>
       <Card variant='outlined' sx={{border: 0}}>
        <CardContent>
         <Box>
          <Box>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            ADDRESS:
           </Typography>
           <Typography variant='body1' flex='2' display='block' gutterBottom>
            Srivilliputtur, 626110.
           </Typography>
          </Box>
          <Box>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            PHONE:
           </Typography>
           <Typography variant='body1' flex='2' display='block' gutterBottom>
            +91-8072455127
           </Typography>
          </Box>
          <Box>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            EMAIL:
           </Typography>
           <Typography variant='body1' flex='2' display='block' gutterBottom>
            ranvitranjit@gmail.com
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

export default Contact
