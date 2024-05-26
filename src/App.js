import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./NavBar/Navbar";
import Photos from "./NavBar/Pages/Photos/Photos";
import Videos from "./NavBar/Pages/Videos/Videos";
import MainPage from "./NavBar/Pages/MainPage/MainPage";
import AdminLogin from "./NavBar/Pages/Admin Login/AdminLogin";

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="videos" element={<Videos />} />
          <Route path="photos" element={<Photos />} />
          <Route path="AdminLogin" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
