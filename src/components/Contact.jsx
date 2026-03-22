import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { personalInfo } from '../data';

const SOCIALS = [
  { icon: 'fab fa-github',   href: personalInfo.github,   label: 'GitHub'   },
  { icon: 'fab fa-linkedin', href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: 'fab fa-facebook', href: personalInfo.facebook, label: 'Facebook' },
  { icon: 'fab fa-twitter',  href: personalInfo.twitter,  label: 'Twitter'  },
];

const CONTACT_INFO = [
  { icon: 'fa-envelope',       label: 'Email Address', value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
  { icon: 'fa-map-marker-alt', label: 'Location',      value: personalInfo.location, href: null },
  { icon: 'fa-clock',          label: 'Availability',  value: 'Open to Work — Full-time / Freelance', href: null },
];

const INIT = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const ref             = useReveal();
  const [form, setForm] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [sent, setSent]     = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required.';
    if (!form.email.trim())   e.email   = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSent(true);
    setForm(INIT);
  };

  return (
    <section id="contact" className="py-24 px-5 md:px-8 bg-dark-800 font-poppins">
      <div className="reveal max-w-container mx-auto" ref={ref}>

        {/* Header */}
        <div className="mb-14">
          <span className="section-badge">Contact</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm leading-relaxed max-w-lg">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">

          {/* Left — Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              I'm currently available for freelance work and open to full-time opportunities.
              Whether you have a project, a collaboration idea, or just want to connect — I'd love to hear from you.
            </p>

            <div className="space-y-4 mb-8">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 flex-shrink-0 rounded-lg bg-primary/8 border border-white/[0.06]
                    flex items-center justify-center text-primary transition-all duration-300
                    group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    <i className={`fas ${item.icon} text-sm`} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-white/30 uppercase tracking-widest">{item.label}</span>
                    {item.href
                      ? <a href={item.href} className="text-sm font-semibold text-white/80 hover:text-primary no-underline transition-colors">{item.value}</a>
                      : <strong className="text-sm font-semibold text-white/80">{item.value}</strong>
                    }
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-white/25 uppercase tracking-widest mb-3">Find me on</p>
            <div className="flex gap-2.5">
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.href} className="social-btn" target="_blank" rel="noreferrer" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="card p-7">
            {sent ? (
              <div className="flex flex-col items-center text-center gap-4 py-12">
                <div className="text-5xl">✅</div>
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button className="btn-primary mt-2" onClick={() => setSent(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Your Name</label>
                    <input name="name" type="text" placeholder="John Doe"
                      value={form.name} onChange={handleChange}
                      className={`form-input ${errors.name ? 'border-red-500/60' : ''}`} />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="form-label">Your Email</label>
                    <input name="email" type="email" placeholder="john@example.com"
                      value={form.email} onChange={handleChange}
                      className={`form-input ${errors.email ? 'border-red-500/60' : ''}`} />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="form-label">Subject</label>
                  <input name="subject" type="text" placeholder="Project Inquiry / Collaboration..."
                    value={form.subject} onChange={handleChange}
                    className={`form-input ${errors.subject ? 'border-red-500/60' : ''}`} />
                  {errors.subject && <p className="form-error">{errors.subject}</p>}
                </div>

                <div>
                  <label className="form-label">Message</label>
                  <textarea name="message" rows={6} placeholder="Tell me about your project..."
                    value={form.message} onChange={handleChange}
                    className={`form-input ${errors.message ? 'border-red-500/60' : ''}`} />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  <i className="fas fa-paper-plane text-xs" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
