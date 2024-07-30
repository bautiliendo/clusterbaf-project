import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Brands } from '../components/Brands'
import { Contact } from '../components/Contact'
import { IngYServ } from '../components/IngYServ'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id='ingYServ'>
        <IngYServ />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Brands />
    </>
  )
}
