import React, { useContext } from "react";
import "../Assets/Styles/UserProfile.css";
import MyPosts from "../Components/MyPosts";




function UserProfile() {
 

  return (
    <section className="containerPost">
    
    <div className="porDefecto">
      <MyPosts />
      
      </div>
    </section>
  );
    
    
   
  
}

export default UserProfile;