import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminBoard from "../components/adminBoard/AdminBoard";
import Estadisticas from "../components/Estadisticas/Estadisticas";
import Home from "../components/Home/Home";
import CreateAccount from "../components/Login/CreateAccount";
import Login from "../components/Login/Login";

import Perfil from "../components/Perfil/Perfil";
import EstadisticasGame from "../components/quiz/EstadisticasGame";
import Quiz from "../components/quiz/Quiz";
import ProtectedRoutes, { ProtectedAdmin } from "./ProtectedRoutes";

const RoutesPerso = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sprint2copy/" element={<Login />} />
        <Route path="/*" element={<Navigate to="/sprint2copy/" />} />
        <Route path="/sprint2copy/signin" element={<CreateAccount />} />

        <Route
          path="/sprint2copy/*"
          element={<Navigate to="/sprint2copy/" />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route path="/sprint2copy/home" element={<Home />} />
          <Route path="/sprint2copy/estadisticas" element={<Estadisticas />} />
          <Route path="/sprint2copy/perfil" element={<Perfil />} />
          <Route path="/sprint2copy/quiz" element={<Quiz />} />
          <Route path="/sprint2copy/quiz/resultados" element={<EstadisticasGame />} />
        </Route>
        <Route element={<ProtectedAdmin />}>
          <Route path="/sprint2copy/admin" element={<AdminBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPerso;
