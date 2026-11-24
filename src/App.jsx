import useReveal from './hooks/useReveal.js'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Marquee from './components/Marquee.jsx'
import Stack from './components/Stack.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import { MARQUEE_1, MARQUEE_2 } from './data/content.js'

export default function App() {
  useReveal()
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Marquee items={MARQUEE_1} repeat={4} />
      <Stack />
      <Projects />
      <Marquee items={MARQUEE_2} repeat={5} outline />
      <Experience />
      <Contact />
    </>
  )
}
