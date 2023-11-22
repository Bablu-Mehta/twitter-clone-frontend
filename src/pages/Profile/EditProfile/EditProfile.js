import React from 'react'
import Modal from '@mui/material/Modal'
import './EditProfile.css'
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function EditProfile({user, loggedInUser}) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [dob, setDob] = React.useState('');

  const style ={
      position:'absolute',    
      top:'50%',    
      left:'50%',    
      transform:'translate(-50%, -50%)',    
      width:'600px',    
      height:'600px',      
      bgColor:'black',   
      boxShadow:24,   
      borderRadius:8
  }
  
  return (
    <div>
      <button className='Edit-profile-btn' onClick={()=>{setOpen(true)}}>Edit Profile</button>

      <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='modal'>
            <div className='header'>
              <IconButton onClick={() =>{setOpen(false)}}><CloseIcon/></IconButton>
            </div>
            <div className='fill-content'></div>
            <div className='birthDate-selection'></div>
            <div className='last-section'></div>
        </Box>


      </Modal>
    </div>
  )
}


