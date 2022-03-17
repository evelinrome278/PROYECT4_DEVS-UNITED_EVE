import React, {useContext } from "react";
import {AppContext} from "../Context/AppContext";
import "../Assets/Styles/Feed.css";
import trash from "../Assets/img/trash.svg";
import whiteheart from "../Assets/img/whiteheart.svg";


import Loading from "./Loading";

function ShowTweets ()  {

    const {tweets,user,isLoading, deleteTweet,showLikes}= useContext(AppContext);
     //if (isLoading) return <Loading/>
    return (
        <div> 
            {tweets.map((tweet) => {
            return (
            <div className="containerShowPost" key={tweet.id}> 
                <div className= "userShowPost">
                    <img className="imgAvatarPost" src={tweet.image} alt="user" />
                    <span className="tabUser">{tweet.user}</span>{user !== null && user.email === tweet.email &&
                    <img className="basura" src={trash} onClick={() => deleteTweet(tweet.id)}/>} 
                </div>    
                
                <p className="textShowPost">{tweet.message}</p>

                <div className="containerliked">
                    <img className="iconLiked" src={whiteheart} alt="" />
                    <span className="cantliked "> 1 </span> 
                </div>   
                    {/* <span className="liked"> {showLikes(tweet)} {tweet.likes.length}</span> */}
                    <hr/>
            </div>
            
            )
            })}
        </div>
    ) };



     export default ShowTweets;
    