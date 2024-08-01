import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ScrollToTop } from "./helpers/ScrollToTop";
import { NavBar } from "./common/NavBar";
import { Footer } from "./common/Footer";
import { ButtonWsp } from "./common/ButtonWsp";
import { HomePage } from './common/HomePage';
import { IngenieriaGestion } from './components/IngenieriaGestion';
import { IngenieriaProcesos } from './components/IngenieriaProcesos';
import { Industrializacion } from './components/Industrializacion';
import { Mantenimiento } from './components/Mantenimiento';
import { Outsourcing } from './components/Outsourcing';
import { Capacitaciones } from './components/Capacitaciones';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { IngYServ } from './components/IngYServ';


const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ingYServ" element={<IngYServ />} />
        <Route path="/ingenieriaGestion" element={<IngenieriaGestion />} />
        <Route path="/ingenieriaProcesos" element={<IngenieriaProcesos />} />
        <Route path="/industrializacion" element={<Industrializacion />} />
        <Route path="/mantenimiento" element={<Mantenimiento />} />
        <Route path="/outsourcing" element={<Outsourcing />} />
        <Route path="/capacitaciones" element={<Capacitaciones />} />
      </Routes>
      <ButtonWsp />
      <Footer />
    </>
  );
};

export default App;