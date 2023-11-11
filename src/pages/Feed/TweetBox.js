import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import axios from "axios";
function TweetBox() {
    const [post, setPost] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    const handleTweet = (e) =>{
        e.preventDefault();
        
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
        }).then((res)=>res.json()).then(data => console.log(data));
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
                  
                         <AddPhotoAlternateOutlinedIcon />
                    
                </label>
                <input
                    type="file"
                    id='image'
                    className="imageInput"
                    
                />
                <Button className="tweetBox__tweetButton" type="submit">Tweet</Button>
            </div>
        </form>

    </div>
}
export default TweetBox;