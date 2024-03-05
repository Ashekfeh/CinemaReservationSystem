import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Checkout from "./Pages/Checkout/Checkout";
import Splash from "./Pages/Splash/Splash";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";

import { Route, Routes, useParams } from 'react-router-dom'

export default function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movie/:movieId" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  )
}
