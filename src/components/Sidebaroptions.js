import { Avatar } from '@mui/material'
import React from 'react'
import "./css/sidebaroption.css"
const Sidebaroptions = ({src, Icon, title}) => {
  return (
    <div className='sidebarrow'>
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}
        <p>{title}</p>
    </div>
  )
}

export default Sidebaroptions