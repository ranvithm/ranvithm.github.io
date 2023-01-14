import {useEffect, useState} from 'react'
import {Box, LinearProgress, Typography, styled} from '@mui/material'

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
 height: 10,
 borderRadius: 5,
}))

export default function LinearDeterminate(props: {name: string; value: number}) {
 const {value, name} = props
 const [progress, setProgress] = useState<number>(0)

 useEffect(() => {
  const timer = setInterval(() => {
   setProgress((oldProgress) => {
    const diff = 10
    return Math.min(oldProgress + diff, value)
   })
  }, 300)

  return () => {
   clearInterval(timer)
  }
 }, [value])

 return (
  <Box sx={{width: '100%', mb: 2}}>
   <Box display='flex' justifyContent='space-between'>
    <Typography variant='button' gutterBottom>
     {name}
    </Typography>
    <Typography variant='button' gutterBottom>
     {progress}%
    </Typography>
   </Box>
   <BorderLinearProgress variant='determinate' value={progress} />
  </Box>
 )
}
