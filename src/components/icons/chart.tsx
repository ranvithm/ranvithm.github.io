import {SvgIcon} from '@mui/material'
import React, {memo} from 'react'

const Icon: React.FC = () => {
 return (
  <SvgIcon sx={{width: '2em', height: '2em'}} viewBox='0 0 448 512'>
   <path d='M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z' />
  </SvgIcon>
 )
}
export default memo(Icon)