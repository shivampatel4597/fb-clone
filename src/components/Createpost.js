import { Avatar , IconButton, Modal} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import "./css/createposts.css"
import React, { useState } from 'react'

const Createpost = () => {
    const[open, setOpen] = useState(true);
    const handleClose = ()=>{
        setOpen(false); 
    }
    const handleOpen = ()=>{
        setOpen(true); 
    }
  return (
    <>
     <Modal open= {open} onClose={handleClose}>
      <div className='modal_popup'>
<form>
    <div className='modal_heading'>
<h3>Create post</h3>
<IconButton onClick={handleClose}>
<CloseIcon/>
</IconButton>
    </div>
    <div className='modalHeader_top'>
<Avatar/>
<h5>Shivam Patel</h5>
    </div>
    <div className='modalbody'>
        <textarea rows='5'placeholder="what's on your mind shivam patel "/>
    </div>
    <div className='modal_footer'>
<div className='footer_left'>
<h4>Add to your post</h4>
</div>
<div className='footer_right'>
<IconButton>
    <VideoChatIcon fontSize='large' style={{color:"lightgreen"}}/>
    <PhotoLibraryIcon fontSize='large' style={{color:"red"}}/>
    <SentimentVerySatisfiedIcon fontSize='large' style={{color:"yellow"}}/>
</IconButton>
</div>

    </div>
    <input type='submit' className='post_submit' value='post' />
</form>
      </div>
     </Modal>
 
    <div className='createpost'>
        
        <div className='createposTop'>
            <Avatar/>
           <form>
            <input type='text' placeholder='whats on your mind shivam' onClick={handleOpen}/>
           </form>
        </div>
        <div className='createposBottom'>
            <div className='messengeroption'>
                <VideoChatIcon style={{color:"red"}} fontSize='large'/>
                <p>Live video</p>

            </div>
            <div className='messengeroption'>
        <PhotoLibraryIcon style={{color:"lightgreen"}} fontSize='large'/>
                <p>Photos</p>

            </div>
            <div className='messengeroption'>
             <SentimentVerySatisfiedIcon style={{color:"purple"}} fontSize='large'/>
                <p>Feeling / Activity</p>

            </div>
        </div>

    </div>
    </>
  )
}

export default Createpost