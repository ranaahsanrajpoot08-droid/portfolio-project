import Spider from './Spider.jsx'
import './Hero.css'

export default function Hero() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div id="home" className="hero">
      <Spider />
      <div className="hero-inner">
        <div className="badge">
          <span className="badge-dot" />
          Available for Work
        </div>
         <h1 className="h1">
          I build digital{" "}
          <span className="outline">experiences</span>
          <br />
          <span className="green">that leave a mark.</span>
        </h1>
        <p className="sub">
          Full-stack developer &amp; creative coder. I turn complex problems into
          elegant, fast, user-friendly products.
        </p>
        <div className="btns">
          <button className="btn-p" onClick={() => go('projects')}>View My Work</button>
          <button className="btn-o" onClick={() => go('about')}>About Me</button>
        </div>
      </div>
    </div>
  )
}
