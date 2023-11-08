import {react, useState} from 'react';
import './sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DoneIcon from '@mui/icons-material/Done';
// import ListItemIcon from '@mui/icons-material/ListItemIcon';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Avatar, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';

const Sidebar = ({hangleLogout, user}) =>{

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClick = e =>{
        setAnchorEl(e.currentTarget);
    }

    const handleClose =()=>{
        setAnchorEl(null);
    }

    return(
        <div className='sidebar'>
            <TwitterIcon className='sidebar_twitterIcon' />
            <SidebarOptions active Icon={HomeIcon} text='Home'/>
            <SidebarOptions active Icon={SearchIcon} text='Explore'/>
            <SidebarOptions active Icon={NotificationsIcon} text='Notification'/>
            <SidebarOptions active Icon={MailOutlineIcon} text='Messages'/>
            <SidebarOptions active Icon={BookmarkIcon} text='Bookmarks'/>
            <SidebarOptions active Icon={ListAltIcon} text='Lists'/>
            <SidebarOptions active Icon={PermIdentityIcon} text='Profile'/>
            <SidebarOptions active Icon={MoreVertIcon} text='More'/>

            <Button variant='outlined' className='sidebar_tweet'>Tweet</Button>

            <div className='Profile_info'>
                <Avatar src='' />
                <div className='user_info'>
                    <h4>Bablu Mehta</h4>
                    <h5>@mr_mehta_15</h5>
                </div>
                <IconButton
                 size='small'
                  sx={{ml: 2}}
                  aria-controls={openMenu ? "basic-menu":undefined}
                  aria-haspopup='true'
                  aria-aria-expanded={openMenu ? "true":undefined}
                  onClick={handleClick}
                  > 
                  <MoreHorizIcon/> 
                  </IconButton>

                  <Menu id='basic-menu' anchorEl={anchorEl} open={openMenu} onClick={handleClose} onClose={handleClose}>
                    <MenuItem className='Profile_info1'>
                        <Avatar src='' />
                        <div className='user_info subUser_info'>
                            <div>
                            <h4>Bablu Mehta</h4>
                            <h5>@mr_mehta_15</h5>
                            </div>
                            <ListItemIcon className='done_icon'> <DoneIcon/> </ListItemIcon>
                        </div>
                    </MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleClose}>Add an Existing Account</MenuItem>
                    <MenuItem onClick={hangleLogout}>Logout @mr_mehta_15</MenuItem>

                  </Menu>
            </div>
        </div>
    );
};

export default Sidebar;