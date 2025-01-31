import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from "./pages/Home/Home";
import Dados from "./pages/Dados/Dados";
import Pag from "./pages/Pagamento/Pag";
import Sobre from "./pages/Sobre/Sobre";
import Atracoes from "./pages/Atracoes/Atracoes";
function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dados" element={<Dados />} />
            <Route path="/pag" element={<Pag />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/atracoes" element={<Atracoes />} />
       
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
