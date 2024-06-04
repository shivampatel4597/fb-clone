import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';


import "./css/post.css"
import { Avatar } from '@mui/material';
const Post = ({photoURl, image, username, timestamp, message}) => {
  return (
    <div className='post'>
  <div className='post_top'>
  <div className='post_topLeft'>
    <Avatar src={photoURl}/>
    <div className='post_info'>
        <h4>{username}</h4>
        <p>{timestamp}<PublicIcon/> </p>

    </div>

</div>
<MoreHorizIcon/>

  </div>
  <div className='post_middle'>
<p>{message}</p>
{image && <img src={image}/> }

  </div>
  <div className='post_bottom'>
    <div className='post_bottomOptions'>
  <ThumbUpIcon/><p>Like</p>
    </div>
    <div className='post_bottomOptions'>
 <ChatBubbleIcon/> <p>Chat</p>
    </div>
    <div className='post_bottomOptions'>
  <ShareIcon/><p>Share</p>
    </div>
  </div>
    </div>
  )
}

export default Post