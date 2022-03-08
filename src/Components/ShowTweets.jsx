import React, {useContext } from "react";
import {AppContext} from "../Context/AppContext";
import "../Assets/Styles/Feed.css";

import Loading from "./Loading";




function ShowTweets ()  {

    const {tweets,user,isLoading, deleteTweet,showLikes}= useContext(AppContext);
     //if (isLoading) return <Loading/>
    return (
        <div className="containerShowPost"> 
            {tweets.map((tweet) => {
            return (
            <div className="tweet" key={tweet.id}> 
                <div className= "usertweet">
                    <span className="autor">{tweet.user}</span>{user !== null && user.email === tweet.email &&
                    <img className="trash" src="../Assets/img/trash.svg" onClick={() => deleteTweet(tweet.id)}/>} 
                    <img className="autorpic" src={tweet.image} alt="" />
                    <p>{tweet.message}</p>
                    {/* <span className="liked"> {showLikes(tweet)} {tweet.likes.length}</span> */}
                    <hr/>
                </div>
            </div>
            )
            })}
        </div>
    ) };



     export default ShowTweets;
    