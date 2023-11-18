import React from 'react'
import './MainPage.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import useLoggedInUser from '../../../hooks/useLoggedInUser'


const MainPage = ({user}) => {

  const navigate = useNavigate();
  const username = user?.email?.split('@')[0];
  const [loggedInUser] = useLoggedInUser();

  const handleUploadCoverImage = () =>{
    console.log("object")
  }




  return (
    <div>
      <ArrowBackIcon className='arrow-con' onClick={()=>{navigate('/')}}/>
      <h4>@{username}</h4>
      <div className='mainProfile'>
        <div className='profile-bio'>
          {
            <div>
              <div className='coverImageContainer'>
                <img src={loggedInUser[0]?.coverImage ? loggedInUser[0]?.coverImage : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} 
                alt="" className='coverImage'/>
                <div className='hoverCoverImage'>
                  <div className='imageIcon_tweetButton'>
                    <input type='file' id='image' className='imageInput'  onChange={handleUploadCoverImage}/>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default MainPage;