import React from 'react'
import Sidebaroptions from './Sidebaroptions'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Sidebar = () => {
  return (
    <div className='sidebar'>
<Sidebaroptions src='' title={"shivam patel"}/>
<Sidebaroptions src='https://cdn3d.iconscout.com/3d/premium/thumb/covid-19-3274180-2732760@0.png' title={"covid 19 information center"}/>
<Sidebaroptions src='https://png.pngtree.com/png-vector/20220725/ourmid/pngtree-happy-friends-group-gathering-png-image_6072378.png' title={"Friends"}/>
<Sidebaroptions src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHWRnZxPL5oBT2bxqrenP_TRYKOkg1W32oQ&s" title={"Groups"}/>
<Sidebaroptions src='https://i.pinimg.com/736x/08/b1/b2/08b1b2257696356af258a73cb2776de9.jpg' title={"Watch"}/>
<Sidebaroptions src='https://cdn-icons-png.flaticon.com/512/2558/2558944.png '  title={'Events'}/>
<Sidebaroptions Icon={KeyboardArrowDownIcon} title={"See more"}/>
    </div>
  )
}

export default Sidebar