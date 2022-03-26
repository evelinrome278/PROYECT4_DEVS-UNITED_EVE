import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from '../firebase';
import {AppContext} from "../Context/AppContext";

import Login from "../pages/Login";
import "../Assets/Styles/UserProfile.css";
import back from "../Assets/img/back.svg";
import imglogout from "../Assets/img/logout.svg";


const HeaderProfile = () => {

  const {user}= useContext(AppContext);
 
  return (
    
    <header className="containerHeader">
      <div className="headerDevs">
        <div className="headerBack">
          <Link to="/Feed">
            <img className="textUserName" src={back}  alt="back" />
          </Link>
          <span className="textUserName">{user.displayName}</span>
        </div>
        
        <div className="btnLogout">
          <Link to="/" element={<Login />}>
            <span className="textLogout" onClick={logout}>LOGOUT</span>
          
            <img className="logout" src={imglogout} alt="logout" onClick={logout} />
            </Link> 
        </div>
        </div>
      <div className="containerCreatePost">
        <div className="ContainerImgPost">
          <img className="imgUserProfile" src={user.photoURL} alt="avatar" />
        </div>

        <div className="ContainerContadorPost">
          <p className="rectUser">{user.displayName}</p>
        </div>

        <div className="ContainerTab"> 
          <Link to="/MyPosts"> 
            <button  className="tabActive btnPosts" >POSTS </button>
          </Link>
        
          <Link to="/Favorites"> 
            <button  className= "tabActive "  >FAVORITES</button> 
          </Link>
        
        </div>

           
      </div>








      


      
    </header>



  );
};

export default HeaderProfile;
