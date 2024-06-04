import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import "./css/rightside.css"
import { Avatar } from '@mui/material';

const Rightsidebar = () => {
  return (
    <div className='widget'>
      <div className='widget_header'>
        <div className='widget_headerLeft'>
  <h4>Your Pages</h4>
        </div>
<MoreHorizIcon/>
      </div>
      <div className='widget_body'>
        <div className='widget_bodyOptions '>
<Avatar src='https://avatars.githubusercontent.com/u/112004425?v=4'/>
<h4>Everyday with shivam</h4>
        </div>
        <div className='widget_bodyOptions ml10'>
<NotificationsIcon/>
<p>1 Notification</p>
        </div>
        <div className='widget_bodyOptions ml10'>
<VolumeUpIcon/>
<p>Create Promotions</p>
        </div>

      </div>
      <hr/><br/>
      <div className='widget_header'>
        <div className='widget_headerLeft'>
  <h4>Contacts</h4>
        </div>
        <div className='widget_headerRight'>
<VideoCallIcon/>
<SearchIcon/>
<MoreHorizIcon/>
        </div>


      </div>
      <div className='widget_body'>
        <div className='widget_bodyOptions '>
<Avatar src='https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY1100_.jpg'/>
<h4>Tony Stark</h4>
        </div>
        <div className='widget_bodyOptions '>
<Avatar src='https://lovethynerd.com/wp-content/uploads/2023/10/110723-article-BG.jpg'/>
<h4>Captain America</h4>
        </div>
        <div className='widget_bodyOptions '>
<Avatar src='https://ew.com/thmb/R5fdezwEjy9LRb0qWEu5mPvLPKQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/thor_0-089c20afcf824c53bacb8fd5b5961f27.jpg'/>
<h4>Thor</h4>
        </div>
        <div className='widget_bodyOptions '>
<Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhRJjYezOI308ObtWx5jUtO_D9o3ygZ0lqRvKNN_MswNGpWLzrLKxR7Avj5xhvRuIDqQ&usqp=CAU'/>
<h4>Bucky barns</h4>
        </div>
        <div className='widget_bodyOptions '>
<Avatar src='https://images.thedirect.com/media/article_full/spider-man-4-peter-parker.jpg'/>
<h4>Peter Parker</h4>
        </div>
        <div className='widget_bodyOptions '>
<Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MDCN3TrfEK15qPMup87v3hchg7YkaXgZglzgTM-SfyZB2VWV_jmHm1EJHhh80XvYklk&usqp=CAU'/>
<h4>Dr Stephen Strange</h4>
        </div>

     

      </div>
    </div>
  );
}

export default Rightsidebar;
