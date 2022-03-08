import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Feed from "./Feed";


function Home() {

  
  return (
    <Routes>
 <Route exact path="/" element={<Login/>} />
 <Route path="/Feed" element={<Feed/>} />
 
 </Routes>

  )
}

export default Home;



