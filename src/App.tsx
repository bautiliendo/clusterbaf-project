import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./helpers/ScrollToTop";
import { NavBar } from "./common/NavBar";
import { Footer } from "./common/Footer";
import { ButtonWsp } from "./common/ButtonWsp";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <ButtonWsp />
      <Footer />
    </>
  )
}
