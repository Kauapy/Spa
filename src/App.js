import React from 'react';
import Inicio from './paginas/Inicio/index';
import SobreMim from './paginas/SobreMim/index';

console.log(window.location);

function App() {
  const pagina = window.location.pathname === "/" ? <Inicio /> : <SobreMim />;
  return pagina;
}

export default App;