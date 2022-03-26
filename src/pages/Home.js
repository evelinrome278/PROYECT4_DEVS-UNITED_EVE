import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Feed from "./Feed";
import UserProfile from "./UserProfile";
import Favorites from "../Components/Favorites";
import MyPosts from "../Components/MyPosts";

function Home() {

  
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/Feed" element={<Feed />} />
      <Route path="/UserProfile" element= {<UserProfile />} />
      <Route path="/Favorites" element= {<Favorites />} />
      <Route path="/MyPosts" element= {<MyPosts />} />
    </Routes>

  )
}

export default Home;



