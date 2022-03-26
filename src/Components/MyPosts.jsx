import React, {useContext} from "react";
import {AppContext} from "../Context/AppContext";
import HeaderProfile from "../Components/HeaderProfile";
import "../Assets/Styles/UserProfile.css"
import trash from "../Assets/img/trash.svg";


function MyPosts() {
    const {tweets,user,deleteTweet,showLikes}= useContext(AppContext);
    
   return (
       <div> 
           <HeaderProfile />

            {tweets.map((tweet)=>{
                {if (tweet.email=== user.email){
                    return(
                        <div className="containerShowPost" key={tweet.id}>
                            <div className= "userShowPost">
                                <img className="imgAvatarPost" src={tweet.image} alt="user" />
                                <span className="tabUser">{tweet.user}</span>{user !== null && user.email === tweet.email &&
                                <img className="basura" src={trash} onClick={() => deleteTweet(tweet.id)}/>} 
                            </div> 
                        
                            <p className="textShowPost">{tweet.message}</p>
                            <div className="containerliked">
                <span > {showLikes(tweet)} {tweet.likedBy.length}</span> 
                    
                </div>  
                            
                            <hr/>
                        </div>

                    )
                }}
            })}
        </div>
    )

}

export default MyPosts;