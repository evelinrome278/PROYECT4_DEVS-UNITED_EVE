import React, { useState,useContext } from "react";
import { firestore } from "../firebase";
import {AppContext} from "../Context/AppContext";
import ShowTweets from "./ShowTweets";
import "../Assets/Styles/Feed.css";

function CreateTweets(){
    const [textLength, setTextLength] = useState("0");
    const { user}= useContext(AppContext);
    const [body, setBody] = useState({
    message: "",
    user: "",
    id: "",
    mail: "",
    image: "",
    });
    const handleChange = (e) => {
    let newTweet = {
    message: e.target.value,
    email: user.email,
    user: user.displayName,
    image: user.photoURL,
    likedBy: []
    };
    setTextLength(e.target.value.length);
    setBody(newTweet);
    };


    const createTweet = (e) => {
    e.preventDefault();
    firestore.collection("tweets")
    .add(body)
    .then(()=> console.log("Creado"))
    .catch (()=> console.log("Algo salio mal"))
    setBody({...body,
    tweet: ""})
    };
    return (
         
        <div>
            <div className="containerCreatePost">
            <form>    
                <div className="ContainerImgPost">
                    <img className="imgAvatarPost" src={user.photoURL} alt="avatar" />
                
                    <textarea
                        className="textPost"
                        value={body.tweet}
                        onChange={handleChange}
                        placeholder="What´s happening?"
                        name="tweet" 
                     />
                </div>

                <div className="ContainerContadorPost">
                    <p className="contMax">{textLength}</p>
                    <p className="textMax">200 max. </p>
                </div>  

                <div className="ContainerBtnPost">     
                    <button
                    className="postbtn tabActive" 
                    onClick={createTweet}>POST
                    </button>
                </div>
            </form>
            </div>
            <ShowTweets/>
           
        </div>    
    
    
    
    
    );
   
}

export default CreateTweets;