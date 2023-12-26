import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Ready from "./component/Ready";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<Login />} />
        <Route path="/ready" element={<><Navbar/> <Ready />  <Footer/></>} />
      </Routes>
    </>
  );
}

export default App;
