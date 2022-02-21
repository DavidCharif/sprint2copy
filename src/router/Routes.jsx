import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Estadisticas from "../components/Estadisticas/Estadisticas";
import Home from "../components/Home/Home";
import CreateAccount from "../components/Login/CreateAccount";
import Login from "../components/Login/Login";

import Perfil from "../components/Perfil/Perfil";
import ProtectedRoutes from "./ProtectedRoutes";

const RoutesPerso = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/sprint2copy/" element={<Login />} />
      <Route path="/sprint2copy/signin" element={<CreateAccount />} />
     
      <Route path="/sprint2copy/*" element={<Navigate to="/sprint2copy/"/>}/>
      <Route element={<ProtectedRoutes />}>
        <Route path="/sprint2copy/home" element={<Home />} />
        <Route path="/sprint2copy/estadisticas" element={<Estadisticas />} />
        <Route path="/sprint2copy/perfil" element={<Perfil />} />
        
      </Route>
    </Routes>
   
    </BrowserRouter>
  );
};

export default RoutesPerso;
