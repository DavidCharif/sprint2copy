import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Estadisticas from "../components/Estadisticas/Estadisticas";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NavBar from "../components/NavBar/NavBar";
import Perfil from "../components/Perfil/Perfil";
import ProtectedRoutes from "./ProtectedRoutes";

const RoutesPerso = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Login />} />
     
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
   
    </BrowserRouter>
  );
};

export default RoutesPerso;
