import React, { useEffect, useState } from "react";
import  {createBrowserRouter, RouterProvider, Outlet, BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { auth } from "./firebase";

import "./App.css";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from "./Accueil";

import MesTaches from './components/MesTaches';
import './style.scss'

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/mestaches" element={<MesTaches />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
