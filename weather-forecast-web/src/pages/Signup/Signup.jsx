/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Signup.css";
import axios from 'axios'

const Signup = () => {
  const [user, setUser] = useState({
    names: "",
    email: "",
    phonenumber: "",
    password: "",
    cpassword: "",
  });

  const handleOnChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value })
  }

  const handleOnSubmit = () => {
    axios.post("http://localhost:3000/api/adduser", user)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
  }

  return (
    <div className="signup--container">
      <h1>Create your account</h1>
      <input
        type="text"
        name="names"
        id=""
        placeholder="Enter your full names"
        value={user.names}
        onChange={handleOnChange}
      />
      <input 
        type="email" 
        name="email" 
        id="" 
        placeholder="Enter your email" 
        value={user.email}
        onChange={handleOnChange}
        />
      <input
        type="number"
        name="phonenumber"
        id=""
        placeholder="Enter your phone number"
        value={user.phonenumber}
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
        type="password"
        name="cpassword"
        id=""
        placeholder="Confirm Password"
        value={user.cpassword}
        onChange={handleOnChange}
      />
      <input 
        type="submit" 
        name="" 
        id="" 
        value="Create your account"
        onClick={handleOnSubmit}
        />
    </div>
  );
};

export default Signup;
