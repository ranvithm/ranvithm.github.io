import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

export default function CustomizedTimeline(props: {children: JSX.Element}) {
 const {children} = props
 return (
  <TimelineItem sx={{'&:before': {flex: 0}}}>
   <TimelineSeparator>
    <TimelineConnector sx={{bgcolor: 'primary.main'}} />
    <TimelineDot color='primary' variant='outlined'></TimelineDot>
    <TimelineConnector sx={{bgcolor: 'primary.main'}} />
   </TimelineSeparator>
   <TimelineContent sx={{py: '12px', px: 2}}>{children}</TimelineContent>
  </TimelineItem>
 )
}
