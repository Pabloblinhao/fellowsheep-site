import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import Sobre from "../pages/sobre.jsx";
import Campeonatos from "../pages/campeonatos.jsx";
import Membros from "../pages/membros.jsx";
import Canais from "../pages/canais.jsx";
import Contato from "../pages/contato.jsx";

import Navbar from "../components/Navbar.jsx";
function App() {
  return (
   <BrowserRouter>
         <Navbar />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sobre" element={<Sobre/>}/>
    <Route path="/campeonatos" element={<Campeonatos/>}/>
    <Route path="/membros" element={<Membros/>}/>
    <Route path="/canais" element={<Canais/>}/>
    <Route path="/contato" element={<Contato/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;