import React, { useState, useEffect } from 'react'
import './MainPage.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import useLoggedInUser from '../../../hooks/useLoggedInUser';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import LockResetIcon from '@mui/icons-material/LockReset';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AddLinkIcon from '@mui/icons-material/AddLink';
import Post from '../../Feed/Post/Post';
import axios from 'axios';
import EditProfile from '../EditProfile/EditProfile'


const MainPage = ({user}) => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState('');
  //const [imageUrl, setImageUrl] = useState('');
  const username = user?.email?.split('@')[0];
  const [loggedInUser] = useLoggedInUser();

  
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
      fetch(`http://localhost:5000/userPost?${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log("user email" + user?.email);
          setPosts(data);
      })
  },[posts, user?.email]);

  const handleUploadCoverImage = (e) =>{
    setIsLoading(true);
        const image = e.target.files[0];
        
        const formData = new FormData();
        formData.set('image', image);

        axios.post('https://api.imgbb.com/1/upload?key=95133aaeb95425950d0842157f7b15cb', formData)
        .then(res =>{
          const url = res.data.data.display_url
            const userCoverImage = {
              email: user?.email,
              coverImage: url
            }
            setIsLoading(false);
            if(url){
              axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, userCoverImage);
            }
        }).catch(error=>{
            console.log(error);
            setIsLoading(false);
        });
  }
  
  const handleUploadProfileImage = (e) =>{
    setIsLoading(true);
    const image = e.target.files[0];
    
    const formData = new FormData();
    formData.set('image', image);

    axios.post('https://api.imgbb.com/1/upload?key=95133aaeb95425950d0842157f7b15cb', formData)
    .then(res =>{
      const url = res.data.data.display_url
      const userProfileImage = {
        email: user?.email,
        profileImage: url
      }
        setIsLoading(false);
        if(url){
          axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, userProfileImage);
        }
    }).catch(error=>{
        console.log(error);
        setIsLoading(false);
    });
  }



  return (
    <div>
      <ArrowBackIcon className='arrow-icon' onClick={()=>{navigate('/')}}/>
      <h4 className='heading-4'>@{username}</h4>
      <div className='mainProfile'>
        <div className='profile-bio'>
          {
            <div>
              <div className='coverImageContainer'>
                <img src={loggedInUser.coverImage ? loggedInUser.coverImage : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} 
                alt="" className='coverImage'/>
                <div className='hoverCoverImage'>
                <label htmlFor='image' className='imageIcon'>
                  {
                    isLoading ? 
                    <LockResetIcon className='photoIcon photoIconDisabled' />
                    :
                    <CenterFocusWeakIcon className='photoIcon' />
                    }
                </label>
                  <div className='imageIcon_tweetButton'>
                    <input type='file' id='image' className='imageInput'  onChange={handleUploadCoverImage}/>
                  </div>
                </div>
              </div>
              <div className='avatar-img'>
                <div className='avatarContainer'>
                  <img src={loggedInUser.profileImage ? loggedInUser.profileImage : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} className='avatar' />
              
                <div className='hoverAvatarImage'>
                  <div className='imageIcon_tweetButton'>
                  <label htmlFor='profileImage' className='imageIcon'>
                  {
                    isLoading ? 
                    <LockResetIcon className='photoIcon photoIconDisabled' />
                    :
                    <CenterFocusWeakIcon className='photoIcon' />
                    }
                  </label>
                  <div className='imageIcon_tweetButton'>
                    <input type='file' id='profileImage' className='imageInput'  onChange={handleUploadProfileImage}/>
                  </div>
                  </div>
                </div>
                </div>
                <div className='userInfo'>
                  <div>
                    <h3 className='heading-3'>
                    {loggedInUser.name ? loggedInUser.name : user && user?.displayName}
                    </h3>
                    <p className='usernameSection'>@{username}</p>
                  </div>
                  <EditProfile />
                  </div>
                  <div className='infoContainer'>
                      {loggedInUser[0]?.bio ? loggedInUser[0]?.bio : ''}
                      <div className='locationAndLink'>
                      {loggedInUser[0]?.location ? <p className='subInfo'><MyLocationIcon/>{loggedInUser.location}</p> : ''}
                      {loggedInUser[0]?.website ? <p className='subInfo'><AddLinkIcon/>{loggedInUser.website}</p> : ''}
                     </div>
                  </div>
                  <h4 className='tweetText'>Tweets</h4>
                  <hr/>
                </div>
                {
                  posts.map((p) =><Post id={p._id} p={p} />)
                }
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default MainPage;