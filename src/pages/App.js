import React,{useEffect,useState,useRef}  from "react";
import "../Assets/Styles/styles.css";
import {firestore,storage} from '../firebase'
import { Route } from "react-router-dom";
import { useProtectedContext } from "../Context/Protecter";


function App(){

const [tweets, setTweets]= useState([]);
const [body, setBody]= useState ({});
const [file, setFile]=useState({});
const [hasUpdate, SetUpdate]= useState(false);
const [progress, setProgress]= useState(0);

//Manejadores

const handleUpload =(e) =>{
     setFile(e.target.files[0]);
  };
  
  const handleChange= (e) =>{
    let newTweet ={
      ...body,
      [e.target.name]: e.target.value
    }
    setBody(newTweet);
      
  }
  



}

export default App;