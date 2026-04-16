import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SOCIALS } from './data';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    firstname: '', lastname: '', email: '', subject: '', message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.firstname || !form.email || !form.message) {
      alert('Name, Email aur Message zaroor bharo!');
      return;
    }

    setStatus('loading');

    emailjs.send(
      'service_307x6iv',     // ← apna Service ID yahan
      'template_wlk3pns',    // ← apna Template ID yahan
      {
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      'aWrTug3ZeRcibrIhO'      // ← apna Public Key yahan
    )
    .then(() => {
      setStatus('success');
      setForm({ firstname: '', lastname: '', email: '', subject: '', message: '' });
    })
    .catch(() => setStatus('error'));
  };

  return (
    <div id="contact" className="sec-full">
      <div className="inner">
        <div className="rv">
          <div className="label">Get In Touch</div>
          <h2 className="sec-title">Let's work<br />together.</h2>
        </div>
        <div className="contact-grid rv">

          <div className="contact-info">
            <h3>Open to opportunities</h3>
            <p>Whether you have a project idea, a job offer, or just want to say hello — my inbox is always open.</p>
            <div className="socials">
              {SOCIALS.map(s => (
                <a key={s.name} href={s.href} className="soc" style={{ background: s.color }}>
                  <span className="soc-icon"><i className={s.icon}></i></span>
                  <span className="soc-name">{s.name}</span>
                  <span className="soc-handle">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="form-box">
            <div className="frow">
              <div className="fg">
                <label>First Name *</label>
                <input type="text" name="firstname" placeholder="John"
                  value={form.firstname} onChange={handleChange} />
              </div>
              <div className="fg">
                <label>Last Name</label>
                <input type="text" name="lastname" placeholder="Doe"
                  value={form.lastname} onChange={handleChange} />
              </div>
            </div>
            <div className="fg">
              <label>Email *</label>
              <input type="email" name="email" placeholder="john@example.com"
                value={form.email} onChange={handleChange} />
            </div>
            <div className="fg">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Project Inquiry"
                value={form.subject} onChange={handleChange} />
            </div>
            <div className="fg">
              <label>Message *</label>
              <textarea name="message" placeholder="Tell me about your project..."
                value={form.message} onChange={handleChange} />
            </div>

            {status === 'success' && (
              <div className="form-msg success">✅ The message has been sent!</div>
            )}
            {status === 'error' && (
              <div className="form-msg error">❌ There was an issue, please try again!</div>
            )}

            <button className="fsub" onClick={handleSubmit} disabled={status === 'loading'}>
              {status === 'loading' ? '⏳ It is being dispatched....' : 'Send Message ✦'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}