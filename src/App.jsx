import useReveal from './useReveal.js'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import './App.css'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        <span className="footer-text">
          © 2025 <span className="footer-accent">Your Name</span> · Built with ♥ in React + Vite
        </span>
      </footer>
    </>
  )
}
