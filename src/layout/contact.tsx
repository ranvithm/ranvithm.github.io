import {Box, Container, Grid, Paper, Card, CardContent, Typography, TextField, Button} from '@mui/material'
import {ChangeEvent, useState} from 'react'

interface IContactInfo {
 name?: string
 mailId?: string
 message?: string
}

const Contact = () => {
 const [contact, setContactInfo] = useState<IContactInfo>()

 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const {name, value} = e.currentTarget
  const _contact: IContactInfo = {...contact}
  _contact[name as keyof typeof _contact] = value
  setContactInfo(_contact)
 }

 const submitFn = async () => {
  const response = await fetch('https://mail-ranjithm.vercel.app/sendmail', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(contact),
  })
  console.log(response)
  setContactInfo({
   name: '',
   mailId: '',
   message: '',
  })
 }

 return (
  <Box component='section' id='contact' m='50px 0'>
   <Container fixed>
    <Paper
     sx={{
      p: 2,
      margin: 'auto',
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.primary.contrastText,
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
           <TextField size='small' name='name' value={contact?.name} onChange={handleChange} label='Contact Name' fullWidth />
           <TextField size='small' name='mailId' value={contact?.mailId} onChange={handleChange} label='Contact E-mail' fullWidth />
          </Box>
          <Box>
           <TextField size='small' name='message' value={contact?.message} onChange={handleChange} label='Message' fullWidth multiline minRows={4} />
          </Box>
          <Box display='flex' justifyContent='flex-end'>
           <Button onClick={submitFn} variant='contained'>
            Send
           </Button>
          </Box>
         </Box>
        </CardContent>
       </Card>
      </Grid>
      <Grid item xs={12} md={4}>
       <Card variant='outlined' sx={{border: 0}}>
        <CardContent>
         <Box>
          <Box display='flex' gap={1}>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            ADDRESS:
           </Typography>
           <Typography variant='body1' flex='2' display='block' gutterBottom>
            Srivilliputtur, 626110.
           </Typography>
          </Box>
          <Box display='flex' gap={1}>
           <Typography variant='button' flex='1' display='block' gutterBottom>
            PHONE:
           </Typography>
           <Typography variant='body1' flex='2' display='block' gutterBottom>
            +91-8072455127
           </Typography>
          </Box>
          <Box display='flex' gap={1}>
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
