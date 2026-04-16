import { useState, useEffect } from 'react'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="logo" onClick={() => go('home')}>YN<em>.</em></div>

        <ul className="nav-links">
          {['home', 'about', 'skills', 'projects', 'contact'].map(s => (
            <li key={s}>
              <button onClick={() => go(s)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <button className="nav-hire" onClick={() => go('contact')}>Hire Me</button>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div className={`mobile-dropdown ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {['home', 'about', 'skills', 'projects', 'contact'].map(s => (
            <button key={s} onClick={() => go(s)}>
              <span className="mob-arrow">→</span>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
          <button className="mob-hire" onClick={() => go('contact')}>
            Hire Me ✦
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  )
}
