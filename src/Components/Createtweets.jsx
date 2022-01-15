import React from 'react';


function CreateTweets(){

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
}

export default CreateTweets;