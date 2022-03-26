
import React, {useContext, useEffect} from "react";
import { auth,loginG} from '../firebase';
import {AppContext} from "../Context/AppContext";
import "../Assets/Styles/styles.css";
import "../Assets/Styles/Login.css";
import Feed from "../pages/Feed";

import logoGoogle from "../Assets/img/google.png"
import LogoDevs from "../Assets/img/logo big.svg";
import Copyright from "../Components/Copyright";


function LoginGoogle() {
    const {user,setUser}=useContext(AppContext);

    useEffect(() => {
  
        auth.onAuthStateChanged((user)=>{
            setUser(user);
                });
                
             },[]);
             
             return(

              <div>
                {user ? (
                    
                    <Feed/>
                    
                    
                    ):(

             
             <div className="containerLogin">
               <div className="containerLogo">
                 <div>
                   <img
                     className="imgSearch"
                     src={LogoDevs}
                     alt="Logo Devs United"
                     type="text"
                   />
                 </div>
               </div>
               <div className="containerAcceso">
                 <div>
                   <h1 >Welcome</h1>
                  
                 </div>
                 <div>
                   <p className="text_login">Puedes acceder con tu usuario de Google</p>
                 </div>
                 <div className="btnGoogle">
                    <img src={logoGoogle}  onClick={loginG} alt="Acceder Google"/>
                 </div>
                 <div>
                   {" "}
                   <Copyright />
                 </div>
               </div>
             </div>
             
             )}
           </div>
             );        
         };
  
  export default LoginGoogle;