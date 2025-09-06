import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "./../Hooks/useAuth";
import './Login.css';

const Login = () => {
  const { signInWithGoogle,setUser ,loginWithEmailAndPassword, setIsLoading} = useAuth();

const history= useHistory()
const location = useLocation()

const url= location.state?.from || "/home"

const [email , setEmail]= useState("")
const [password , setPassword] = useState("")


const handleGetEmail = (e) =>{
  setEmail(e.target.value);
}

const handleGetPassword = (e)=> {
    setPassword(e.target.value);
}




const handleLoginWithEmailAndPassword=(e)=>{
    e.preventDefault();

    loginWithEmailAndPassword(email,password)
    .then((res) => {
      setIsLoading(true)
        setUser(res.user);
        history.push(url)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
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
            <div className="row pt-5">
    <div className="col-md-3 form">
      <div className="form-bg">

            <div className="headline">
              <h3>Login</h3>
            </div>

            <div className="mb-3">
              <button onClick={handleGoogleLogin} type="submit" className="btn btn-outline-dark google-btn-custom">Continue with Google</button>
            </div>

        <form onSubmit={handleLoginWithEmailAndPassword}>

            <div><p className="text-center">or</p></div>

            <div className="mb-3">
              <input onBlur={handleGetEmail} placeholder="Email" type="email" className="form-control form-custom" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
              <input onBlur={handleGetPassword} placeholder="Password" type="password" className="form-control form-custom" id="exampleInputPassword1"/>
            </div>

            <button type="submit" className="btn btn-success custom-btn">Login</button>

            <div className="already-account">
            <p><a href="/">Forgot password?</a></p>
            </div>

            <div className="already-account">
            <p>No account? <Link className="log-link" to="/register">Create one</Link> </p>
            </div>
        </form>
        </div>
    </div>

    </div>
        </div>
  );
};

export default Login;
