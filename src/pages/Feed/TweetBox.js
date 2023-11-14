import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import axios from "axios";
import useLoggedInUser from "../../hooks/useLoggedInUser";
//import axios from "axios";
function TweetBox() {
    const [post, setPost] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState('');
    const [loggedInUser] = useLoggedInUser();
    //console.log(loggedInUser);

    const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : "";

    const handleUploadImage = (e) =>{
        setIsLoading(true);
        const image = e.target.files[0];
        
        const formData = new FormData();
        formData.set('image', image);

        axios.post('https://api.imgbb.com/1/upload?key=95133aaeb95425950d0842157f7b15cb', formData)
        .then(res =>{
            setImageUrl(res.data.data.display_url)
            console.log(res.data.data.display_url);
            setIsLoading(false);
        }).catch(error=>{
            console.log(error);
            setIsLoading(false);
        });
    }


    const handleTweet = (e) =>{
        e.preventDefault();
        
       if(imageUrl)
    {
        const userPost = {
            post:post,
            photo:imageUrl
        }
        console.log(userPost);
        fetch('http://localhost:5000/post',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userPost)
        }).then((res)=>res.json()).then(data => console.log(data)).catch(error =>{console.log("fetch error" + error)});
  
    }  

}

    return <div className="tweetBox">
        <form onSubmit={handleTweet}>
            <div className="tweetBox__input">
                <Avatar src='' />
                <input
                    type="text"
                    placeholder="What's happening?"
                    onChange={(e) => setPost(e.target.value)}
                   
                />

            </div>
            <div className="imageIcon_tweetButton">
                <label htmlFor='image' className="imageIcon">
                  
                {
                    isLoading? <p>Uploading the image</p> : <p> {imageUrl ? 'image uploaded': <AddPhotoAlternateOutlinedIcon /> } </p>
                  }

                         
                    
                </label>
                <input
                    type="file"
                    id='image'
                    className="imageInput"
                    onChange={handleUploadImage}
                    
                />
                <Button className="tweetBox__tweetButton" type="submit">Tweet</Button>
            </div>
        </form>

    </div>
}
export default TweetBox;