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
    <div className="">
      <section id="hero" className="">
        <Hero />
      </section>
      <section id="about" className="">
        <About />
      </section>
      <section id="ingYServ" className="">
        <IngYServ />
      </section>
      <section id="contact" className="">
        <Contact />
      </section>
      <section className="">
        <Brands />
      </section>
    </div>
  )
}
