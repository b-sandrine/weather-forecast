import React, { useState } from "react";
import "./Login.css";
import axios from 'axios'
import { useNavigate } from "react-router";
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleOnChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value })
      }
    
      const handleOnSubmit = () => {
        axios.post("http://localhost:3000/api/login", user)
        .then(res => {
            console.log(res)
            navigate('/welcome')
        })
        .catch(err => {
            console.log(err)
        })
      }
    
  return (
    <div className="login--container">
        <h1>Log into your account</h1>
      <input
        type="email"
        name="email"
        id=""
        placeholder="Enter your email"
        value={user.email}
        onChange={handleOnChange}
      />
      <input
        type="password"
        name="password"
        id=""
        placeholder="Password"
        onChange={handleOnChange}
        value={user.password}
      />
      <input 
        type="submit" 
        name="" 
        id="" 
        value="Login to your account"
        onClick={handleOnSubmit}
        />
    </div>
  );
};

export default Login;
