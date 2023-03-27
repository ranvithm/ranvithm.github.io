import {ChangeEvent, useState} from 'react'
import {Box, Container, Grid, Paper, Card, CardContent, Typography, TextField, Button, Snackbar} from '@mui/material'

interface IContactInfo {
 name?: string
 mailId?: string
 message?: string
}

const validMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const Contact = () => {
 const [contact, setContactInfo] = useState<IContactInfo>()
 const [showToaster, setShowToaster] = useState<boolean>(false)

 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const {name, value} = e.currentTarget
  const _contact: IContactInfo = {...contact}
  _contact[name as keyof typeof _contact] = value
  setContactInfo(_contact)
 }

 const submitFn = async () => {
  if (contact?.name && contact?.message && contact?.mailId && contact.mailId.match(validMail)) {
   await fetch('https://mail-ranjithm.vercel.app/sendmail', {
    //    await fetch('http://localhost:5000/sendmail', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
   })
   setShowToaster(true)

   setContactInfo({
    name: '',
    mailId: '',
    message: '',
   })
   setTimeout(() => {
    setShowToaster(false)
   }, 3000)
  }
 }

 return (
  <Box component='section' id='contact' py='65px'>
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
           <Button disabled={!(contact?.name && contact?.message && contact?.mailId && contact.mailId.match(validMail))} onClick={submitFn} variant='contained'>
            Contact
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
   <Snackbar
    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
    open={showToaster}
    message={`I appreciate you contacting me. I'll get back to you about your message soon.`}
   />
  </Box>
 )
}

export default Contact
