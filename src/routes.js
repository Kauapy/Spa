import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./paginas/componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Rodape from "paginas/Rodape/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>

      <Rodape></Rodape>
    </BrowserRouter>
  );
}

export default AppRoutes;
