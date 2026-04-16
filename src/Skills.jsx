import { SKILLS } from './data.js'
import './Skills.css'

export default function Skills() {
  return (
    <div id="skills" className="sec-full">
      <div className="inner">
        <div className="rv">
          <div className="label">Skill Set</div>
          <h2 className="sec-title">Tools &amp; technologies<br />I work with.</h2>
        </div>
        <div className="skills-grid rv">
          {SKILLS.map(s => (
            <div key={s.name} className="skill-card">
              <span className="s-icon"><i className={s.icon}></i></span>
              <div className="s-name">{s.name}</div>
              <div className="s-lvl">{s.lvl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
