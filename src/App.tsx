import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ScrollToTop } from "./helpers/ScrollToTop";
import { NavBar } from "./common/NavBar";
import { Footer } from "./common/Footer";
import { ButtonWsp } from "./common/ButtonWsp";
import { HomePage } from './common/HomePage';


const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/services" element={<Navigate to="/#services" replace />} />
        <Route path="/brands" element={<Navigate to="/#brands" replace />} /> */}
        {/* <Route path="/contact" element={<Navigate to="/#contact" replace />} /> */}
        {/* Añade más rutas según sea necesario */}
      </Routes>
      <ButtonWsp />
      <Footer />
    </>
  );
};

export default App;