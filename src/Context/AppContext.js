import React, {createContext, useState, useEffect} from 'react';
import { firestore } from '../firebase';
import { confirmAlert } from 'react-confirm-alert';
import '../Assets/Styles/react-confirm-alert.css'; 
import whiteheart from "../Assets/img/whiteheart.svg";
import redheart from "../Assets/img/redheart.svg";

export const AppContext = createContext();


export const AppProvider= (props)=>{
  const [user, setUser]=useState(null);
  const [tweets, setTweets] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  
  

 
    


  useEffect(() => {
    const desuscribir = firestore
    .collection("tweets")
    
    .onSnapshot((snapshot) => {
    const tweets = snapshot.docs.map((doc) => {
    return {
    id: doc.id,
    message: doc.data().message,
    user: doc.data().user,
    email: doc.data().email, 
    likedBy: doc.data().likedBy,
    image: doc.data().image
    };
    });

    
    
    setTweets(tweets);
    setIsLoading(false);
    });
    return () => desuscribir();
    }, []);

//Eliminar Tweet

    const deleteTweet = (id) => {
    confirmAlert({
    title: 'Confirmación Eliminar',
    message: '¿Estás seguro de eliminar este Post?',
    buttons: [
    {
    label: 'Si',
    onClick: () => {
    firestore.doc(`tweets/${id}`)
    .delete()
    .then(()=> console.log("deleted"))
    .catch (()=> console.log("Algo salio mal"))
    } },
    {
    label: 'No'
    } ]
    });
    };

    //Like Tweet

   const likeTweet = (tweet) =>{
    let newLikedBy = [...tweet.likedBy, user.email];
    firestore.doc(`tweets/${tweet.id}`)
    .update({ likedBy: newLikedBy })
    .then(()=> console.log("Exitoso"))
    .catch (()=> console.log("Algo salio mal"))
   };

   //Quitar Like

   const dislikeTweet = (tweet) =>{
    let newLikedBy = tweet.likedBy.filter((like)=> like !== user.email)
    firestore.doc(`tweets/${tweet.id}`)
    .update({ likedBy: newLikedBy })
    .then(()=> console.log("Exitoso"))
    .catch (()=> console.log("Algo salio mal"))
   };

   //Ver Likes

   const showLikes = (tweet)=>{
    if (tweet.likedBy && user.email){
    const isLiked = tweet.likedBy.findIndex((liked)=> user.email === liked);
    
    if (isLiked < 0){
    return (
    <>
    <img className="iconLiked"src={whiteheart} onClick={() => likeTweet(tweet)}/>
    </>
    )
    }
    else {
    return (
    <>
    <img className="iconLiked"src={redheart} onClick={() => dislikeTweet(tweet)}/>
    </>
    ) }
    } }

    return (
      <AppContext.Provider value={{ 
      user, 
      setUser,
      tweets, 
      setTweets,
      isLoading,
      setIsLoading,
      deleteTweet,
      likeTweet,
      dislikeTweet,
      showLikes,}}>
      {props.children}
      </AppContext.Provider>
      );
     };
     

