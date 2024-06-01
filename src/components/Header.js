import React from 'react';
import './css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';  
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import fb_logo from './images/vecteezy_facebook-png-icon_16716447.png';
import { Avatar, IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <img className='imz' src={fb_logo} alt='fb' />
        <div className='header_search'>
          <SearchIcon />
          <input type='text' placeholder='search on facebook' />
        </div>
      </div>
      <div className='header_middle'>
        <div className='header_options '>
          <HomeIcon className='active' fontSize='large' />
        </div>
        <div className='header_options'>
          <GroupIcon fontSize='large' />
        </div>
        <div className='header_options'>
          <OndemandVideoIcon fontSize='large' />
        </div>
        <div className='header_options'>
          <SportsEsportsIcon fontSize='large' />
        </div>
      </div>
      <div className='header_right'>
        <div className='header_info'>
          <Avatar />
          <h4>Shivam Patel</h4>
        </div>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
