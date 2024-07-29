
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Brands } from '../components/Brands'
import { Contact } from '../components/Contact'

export const HomePage = () => {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Brands />
    </>
  )
}
