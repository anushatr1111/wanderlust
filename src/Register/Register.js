import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "./../Hooks/useAuth";
import './Regester.css';

const Register = () => {
   
     
    const { signInWithGoogle, createAccountWithGoogle,setUser , setIsLoading , updateName } = useAuth();

    const history= useHistory()
    const location = useLocation()
    const url= location.state?.from || "/home"

const [name , setName] =useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const handleGetName=(e)=> {
    console.log(e.target.value);
   setName(e.target.value)
}

const handleGetEmail=(e)=> {
    console.log(e.target.value);
   setEmail(e.target.value)
}

const handleGetPassword=(e)=> {
    console.log(e.target.value);
   setPassword(e.target.value)
}



const handleRegistration=(e)=> {
    e.preventDefault();
    createAccountWithGoogle(email,password)
    .then((res) => {
      setIsLoading(true)
      updateName(name)
        setUser(res.user)
        history.push(url)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(()=> {
        setIsLoading(false)
      })
}


    
const handleGoogleLogin = () => {
        signInWithGoogle()
          .then((res) => 
            {
              setIsLoading(true)
              setUser(res.user)
              history.push(url)
            }
              )
          .catch((err) => console.log(err))
          .finally(() => {
            setIsLoading(false)
          })
      };
    

    return (
      <div className="mt-5">
        <div className="row">
<div className="col-md-3 form">
<div className="form-bg">
<div className="headline">
          <h3>Register</h3>
    </div>

    <div className="mb-3">
      <button onClick={handleGoogleLogin} type="submit" className="btn btn-outline-dark google-btn-custom">Continue with Google</button>
    </div>
<form onSubmit={handleRegistration}>

    <div><p className="text-center">or</p></div>

    <div className="mb-3">
      <input onBlur={handleGetName} placeholder="Your Name" type="text" className="form-control form-custom" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
      <input onBlur={handleGetEmail} placeholder="Email" type="email" className="form-control form-custom" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
      <input onBlur={handleGetPassword} placeholder="Password" type="password" className="form-control form-custom" id="exampleInputPassword1"/>
    </div>

    <button type="submit" className="btn btn-success custom-btn">Register</button>

    <div className="already-account">
          <p>Already have an account? <Link className="reg-link" to="/login">Login</Link> </p>
    </div>
    
</form>
</div>
</div>

</div>
    </div>
    );
};

export default Register;