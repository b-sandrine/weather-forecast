/* eslint-disable no-unused-vars */
import "./App.css";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import {Routes, Route } from 'react-router'
import Welcome from "./pages/Welcome/welcome";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      
    </div>
  );
}

export default App;
