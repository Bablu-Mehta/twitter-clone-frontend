import {react} from 'react';
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
import DoneIcon from '@mui/icons-material/Done';
import ListItemIcon from '@mui/icons-material/ListItemIcon';

const Sidebar = () =>{
    return(
        <div className='sidebar'>
            <TwitterIcon className='sidebar_twitterIcon' />
            <SidebarOptions active Icon={HomeIcon} text='Home'/>
            <SidebarOptions active Icon={SearchIcon} text='Home'/>
            <SidebarOptions active Icon={NotificationsIcon} text='Home'/>
            <SidebarOptions active Icon={HomeIcon} text='Home'/>
            <SidebarOptions active Icon={HomeIcon} text='Home'/>
            <SidebarOptions active Icon={HomeIcon} text='Home'/>
            <SidebarOptions active Icon={HomeIcon} text='Home'/>
            <SidebarOptions active Icon={HomeIcon} text='Home'/>
        </div>
    );
};

export default Sidebar;