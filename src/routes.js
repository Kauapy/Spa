import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./paginas/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Rodape from "paginas/Rodape/Rodape";
import PaginaPadrao from "paginas/PaginaPadrao/PaginaPadrao";
import Post from "./paginas/Post/Post";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao></PaginaPadrao>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
      <Rodape></Rodape>
    </BrowserRouter>
  );
}

export default AppRoutes;
