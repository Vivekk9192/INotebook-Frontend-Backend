import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credential,setCredential] = useState({email:"",password:""});
    // let history = useHistory();
    const navigate = useNavigate();
    const onChange = (e) =>{
        setCredential({...credential,[e.target.name]:e.target.value})
        }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email:credential.email,password:credential.password }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        //redirect and save the auth token
        localStorage.setItem('token',json.authtoken);
        // history.push("/home");
        navigate('/home');
        props.showAlert("Logged In Successfully","success");
    }
    else{
      props.showAlert("Credentials are invalid","danger");
    }
  };
  return (
    <>
    <h2>Login to Continue to Inotebook</h2>
      <form className="my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credential.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credential.password}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
