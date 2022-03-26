import React, {useContext } from "react";
import {AppContext} from "../Context/AppContext";
import "../Assets/Styles/Feed.css";
import trash from "../Assets/img/trash.svg";

import Loading from "./Loading";

function ShowTweets ()  {

    const {tweets,user,isLoading, deleteTweet,showLikes}= useContext(AppContext);
    
    if (isLoading) return <Loading/>
    return (
        <div> 
            {tweets.map((tweet) => {
                console.log(showLikes(tweet));
            return (
            <div className="containerShowPost" key={tweet.id}> 
                <div className= "userShowPost">
                    <img className="imgAvatarPost" src={tweet.image} alt="user" />
                    <span className="tabUser">{tweet.user}</span>
                
                    
                    {user !== null && user.email === tweet.email &&
                    <img className="basura" src={trash} onClick={() => deleteTweet(tweet.id)}/>} 
                </div>   
                
                <p className="textShowPost">{tweet.message}</p>

                <div className="containerliked">
                <span > {showLikes(tweet)} {tweet.likedBy.length}</span> 
                    
                </div>   
                    
                    <hr/>
            </div>
            
            )
            })}
        </div>
    ) };



     export default ShowTweets;
    