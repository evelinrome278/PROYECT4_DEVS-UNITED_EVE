import "./styles/App.css"
import { firestore, storage } from './firebase';
import React, { useEffect, useState, useRef } from 'react';
import Home from './Components/Home'
import { Route } from "react-router-dom";
import { useProtectedContext } from '../Context/Protecter'

function App() {
  let isLogged= useProtectedContext();

  console.log(isLogged);

const [tweets, setTweets]=useState([]);
const [body, setBody]= useState ({});
const [file, setFile]=useState({});
const [hasUpdate, SetUpdate]= useState(false);
const [progress, setProgress]= useState(0);

//manejadoras
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

const handleTweetUpdate =(tweet)=>{
  SetUpdate(!hasUpdate);
  setBody(tweet);
};

if (!isLogged){
  return <p>No Logeado</p>
}


// Crear Tweets 
let createTweets =(e)=>{
  e.preventDefault();
  
  const uploadTask = storage.ref().child(`/tweets/${file.name}`).put(file);
  uploadTask
  .on('state_changed', (snapshot)=>{
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  
    setProgress(progress);
  },(err)=>{
    console.error(err.message);
  }, ()=>{
    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
      firestore
      .collection('tweets')
      .add({...body, image:url})
      .then (()=>console.log('se subio la imagen'))
      .catch((err)=>console.error(err.message));

    })
    setProgress(0);
  
  } );
}

// Actualizar Likes 
const LikeTweet =(tweet)=>{

  firestore.doc(`tweets/${tweet.id}`)
    .update({likes:tweet.likes +1})
    .then(()=>{
    console.log("se actualizó like");
  })
    .catch((err) => console.error(err.message));
}

// Actualizar Tweet 
const UpdateTweet =(tweet)=>{

  firestore.doc(`tweets/${tweet.id}`)
    .update({message:tweet.message})
    .then(()=>{
    console.log("se acctualizó tweet");
  })
    .catch((err) => console.error(err.message));
}


// Eliminar Tweets 
const deleteTweet = (id) => {
  firestore
    .collection('tweets')
    .doc(id)
    .delete()
    .then(() => {
      console.log('La operacion fue Exitosa')
    })
    .catch((err) => console.error(err.message));
};


  useEffect(()=>{
  // getAllTweets();
  const desuscribir= firestore.collection("tweets")
    .onSnapshot(snapshot =>{
      const tweets = snapshot.docs.map(doc=>{
        return{
          message:doc.data().message,
          user:doc.data().user,
          likes:doc.data().likes || 0,
          image:doc.data().image || false,
          id:doc.id

        }
      })
      setTweets(tweets);
      
      
    })
    return () => desuscribir();
  },[]);

 

  return (
    <div className="App">
      {<Home />}
      <div className="containerFormTweet">
        <form onSubmit={!hasUpdate ? createTweets: UpdateTweet}>
          <div>
            <input 
            className="formUserName"
            placeholder="Autor"
            name="user" 
            defaultValue={body.user}
            onChange={handleChange} 
            type="text" />
          </div>

          <div>
            <textarea
              className="messageFormTweet"
              placeholder="¿Qué estás pensando?"
              name="message"
              onChange={handleChange}
              value={body.message} />
          </div>
                    
          <input onChange={handleUpload} type="file" />

          {progress > 0 && <progress id="file" max="100" value={progress}></progress>}
          
          <div>
            <button className="buttonFormTweet" type="submit" value="Enviar">{!hasUpdate ? "Enviar" : "Guardar"}</button> 
          </div>
          <hr/>
        </form>
      </div>



      {
        tweets.map((tweet)=>{
          return(
          <div className="containerTweet">
            <div key={tweet.id} />
              <div className="containerImgTweet">
                  { tweet.image && <img className="imgTweet" width='56' height='56'src={tweet.image} />}
                  <p className="userName">{tweet.user}</p>
              </div>
              <div className="containerBodyTweet" >
                <p className="messageTweet">{tweet.message}</p>
              </div >
                <p className="numLikes">{tweet.likes}</p>
              <div  className="containerControlsTweet">
                <button className="buttonTweet" onClick={()=> LikeTweet(tweet)}>Me gusta</button>
                <button className="buttonTweet" onClick={()=> handleTweetUpdate(tweet)}>Actualizar Tweet</button>
                <button className="buttonTweet" onClick={()=> deleteTweet(tweet.id)}>Eliminar Tweet</button>
              </div>
                <hr />
            
          </div>
          )
          
        })


      }
      
      
    </div>
  );
}

export default App;