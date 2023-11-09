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
import CustomLink from './CustomLink';

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

            <CustomLink to='/home/feed'>
                <SidebarOptions active Icon={HomeIcon} text='Home'/>
            </CustomLink>

            <CustomLink to='/home/explore'>
                <SidebarOptions active Icon={SearchIcon} text='Explore'/>
            </CustomLink>

            <CustomLink to='/home/notifications'>
                <SidebarOptions active Icon={NotificationsIcon} text='Notification'/>
            </CustomLink>

            <CustomLink to='/home/messages'>
                <SidebarOptions active Icon={MailOutlineIcon} text='Messages'/>
            </CustomLink>

            <CustomLink to='/home/bookmarks'>
                <SidebarOptions active Icon={BookmarkIcon} text='Bookmarks'/>
            </CustomLink>

            <CustomLink to='/home/lists'>
                <SidebarOptions active Icon={ListAltIcon} text='Lists'/>
            </CustomLink>

            <CustomLink to='/home/profile'>
                <SidebarOptions active Icon={PermIdentityIcon} text='Profile'/>
            </CustomLink>

            <CustomLink to='/home/more'>
                <SidebarOptions active Icon={MoreVertIcon} text='More'/>
            </CustomLink>

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