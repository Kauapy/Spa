import React from "react";
import Inicio from "./paginas/Inicio/index";
import SobreMim from "./paginas/SobreMim/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="/sobremim" element={<SobreMim></SobreMim>}>
          {" "}
        </Route>
        <Route path="*" element={<div>Page not found 404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
