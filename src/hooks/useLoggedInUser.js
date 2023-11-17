import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";


const useLoggedInUser = ()=>{
    const [user] = useAuthState(auth);
    const email = user?.email;

    const [loggedInUser, setLoggedInUser] = useState({}); //the error was here after adding the {} it got resolved

    useEffect(() =>{
        fetch(`http://localhost:5000/loggedInUser?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            //console.log("fetch :" + data);
            setLoggedInUser(data);
        })
    },[email, loggedInUser]);

    return [loggedInUser, setLoggedInUser];

};

export default useLoggedInUser;