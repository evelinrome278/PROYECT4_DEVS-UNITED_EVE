import React, {useContext } from "react";
import {AppContext} from "../Context/AppContext";
import HeaderProfile from "../Components/HeaderProfile";
import "../Assets/Styles/UserProfile.css"
import "../Assets/Styles/Feed.css"

import trash from "../Assets/img/trash.svg";



function Favorites() {
    const {tweets,user,deleteTweet,showLikes}= useContext(AppContext);
    //if (isLoading) return <Loading/>
   return (
       <div> 
           <HeaderProfile />

            {tweets.map((tweet)=>{
            const myFavorite= tweet.likedBy.findIndex((liked)=>user.email===liked)    


                {if (myFavorite>=0){
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

export default Favorites;