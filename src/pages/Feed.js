import React, { useEffect, useState,useContext } from "react";
import { Navigate } from "react-router-dom";
import {AppContext} from "../Context/AppContext";
import CreateTweets from "../Components/CreateTweets"

import "../Assets/Styles/Feed.css";

import Copyright from "../Components/Copyright";
import HeaderDevs from "../Components/HeaderDevs";


function Feed() {

  const {user}= useContext(AppContext);
  if (!user) return <Navigate to ="/"/>

  return (
    <section className="containerPost">
      <div>
        <HeaderDevs />

    <div>
         <CreateTweets /> 
     </div>
       
        <Copyright />
      </div>
    </section>
  );
}

export default Feed;