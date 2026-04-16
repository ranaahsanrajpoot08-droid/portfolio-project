import './About.css';

export default function About() {
  return (
    <section id="about" className="sec">
      <div className="about-grid">
        <div className="rv">
          <div className="avatar-wrap">
            <div className="avatar-ring" />
     <div className="avatar">
  <img 
    src="/avatar.png" 
    alt="Your Name" 
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%'
    }} 
  />
</div>
          </div>
          <div className="stats">
            {[['1','Years Exp'],['10','Projects'],['1+','Clients'],['∞','Coffees']].map(([n,l]) => (
              <div key={l} className="stat">
                <div className="stat-n">{n}</div>
                <div className="stat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-body rv">
          <div className="label">About Me</div>
          <h2 className="sec-title">Building the web,<br />one pixel at a time.</h2>
          <p>Hey — I'm <strong>Muhammad Ahsan Noor</strong>, a full-stack developer passionate about crafting performant, accessible web experiences with a sharp eye for design.</p>
          <p>With a background in <strong>Computer Science &amp; Design Systems</strong>, I bridge the gap between engineering and aesthetics — from slick landing pages to complex SaaS platforms.</p>
          <p>When I'm not coding, I'm exploring new trails, reading about emerging tech, or tinkering with generative art.</p>
          <a href="/Resume.pdf" className="resume-link" download>
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1={12} y1={18} x2={12} y2={12}/>
              <line x1={9} y1={15} x2={15} y2={15}/>
            </svg>
            Download Resume
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <polyline points="8 17 12 21 16 17"/>
              <line x1={12} y1={3} x2={12} y2={21}/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
