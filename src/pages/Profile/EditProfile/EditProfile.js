import React from 'react'
import Modal from '@mui/material/Modal'
import './EditProfile.css'
import { Box, Button, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


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

function EditChild({dob, setDob}){
  const [open, setOpen] = React.useState(false);

  const handleOpen = () =>{
    setOpen(true);
  }

  const handleClose = () =>{
    setOpen(false);
  }

  return(
    <React.Fragment>
      <div className='birthdate-section' onClick={handleOpen}>
        <text>Edit</text>
      </div>
      <Modal 
      hideBackdrop
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      >
        <Box sx={{...style, width:300, height:300}}>
          <div className='text'>
            <h2>Edit Date of Birth?</h2>
            <p>This can only be changed few times.<br />
            make sure you enter the age of the <br />
            person using account</p>
            <input type='date'
            onChange={e=>{setDob(e.target.value)}}
            />
            <Button className='e-button' onClick={()=>setOpen(false)}>Cancel</Button>
          </div>
          
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default function EditProfile({user, loggedInUser}) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [dob, setDob] = React.useState('');

  

  const handleSave = () =>{
    console.log('saving...');
    setOpen(false);
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
              <h2 className='header-title'>Edit Profile</h2>
              <button className='save-btn' onClick={handleSave}>Save</button>
            </div>
            <form className='fill-content'>
              <TextField className='text-field' fullWidth label='Name' is='fullWidth' 
              variant='filled' onChange={(e)=>{setName(e.target.value)}} defaultValue={loggedInUser?.name ? loggedInUser?.name : ''}/> 

              <TextField className='text-field' fullWidth label='Bio' is='fullWidth' 
              variant='filled' onChange={(e)=>{setBio(e.target.value)}} defaultValue={loggedInUser?.bio ? loggedInUser?.bio : ''}/>

              <TextField className='text-field' fullWidth label='Location' is='fullWidth' 
              variant='filled' onChange={(e)=>{setLocation(e.target.value)}} defaultValue={loggedInUser?.location ? loggedInUser?.location : ''}/>

              <TextField className='text-field' fullWidth label='Website' is='fullWidth' 
              variant='filled' onChange={(e)=>{setWebsite(e.target.value)}} defaultValue={loggedInUser?.website ? loggedInUser?.website : ''}/>    
            </form>
            <div className='birthDate-selection'>
              <p>Birth Date</p>
              <p>.</p>
              <EditChild dob={dob} setDob={setDob} />
            </div>
            <div className='last-section'>
              {
                loggedInUser?.dob ? 
                <h2>{loggedInUser?.dob}</h2>
                :
                <h2>{
                  dob ? dob : 'Add your Date of Birth'
                  }</h2>
              }
              <div className='last-btn'>
                <h2>switch to professional</h2>
                <ChevronRightIcon />
              </div>
            </div>

        </Box>


      </Modal>
    </div>
  )
}


