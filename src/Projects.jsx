import { PROJECTS } from './data.js'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="sec">
      <div className="rv">
        <div className="label">My Work</div>
        <h2 className="sec-title">Projects I've<br />built &amp; shipped.</h2>
      </div>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <div key={p.title} className="proj-card rv">
            <div className="proj-thumb" style={{ background: p.color }}>
              <span className="proj-emoji">{p.emoji}</span>
              <span className="proj-badge">{p.badge}</span>
            </div>
            <div className="proj-body">
              <div className="proj-title">{p.title}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-tags">
                {p.tags.map(t => <span key={t} className="p-tag">{t}</span>)}
              </div>
              <div className="proj-links">
                <a href={p.live} target="_blank" rel="noreferrer">↗ Live Demo</a>
                <a href={p.code} target="_blank" rel="noreferrer">⌥ View Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
