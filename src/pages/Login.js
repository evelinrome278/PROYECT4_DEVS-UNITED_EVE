import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import LoginGoogle from "../Components/LoginGoogle";
import {AppContext} from "../Context/AppContext";

function Login() {
 const {user}= useContext(AppContext);

 if (user) return <Navigate to ="/Feed" />
 return(
   <div><LoginGoogle /></div>
 );

}

export default Login;
