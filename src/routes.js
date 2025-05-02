import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./paginas/componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
