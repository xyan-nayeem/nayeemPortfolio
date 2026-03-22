import React from 'react';
import { personalInfo } from '../data';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Tech Stack', href: '#techstack'  },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

const SOCIALS = [
  { icon: 'fab fa-github',   href: personalInfo.github,   label: 'GitHub'   },
  { icon: 'fab fa-linkedin', href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: 'fab fa-facebook', href: personalInfo.facebook, label: 'Facebook' },
  { icon: 'fab fa-twitter',  href: personalInfo.twitter,  label: 'Twitter'  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-dark-800 border-t border-white/[0.06] font-poppins">
      <div className="max-w-container mx-auto px-5 md:px-8 pt-16 pb-6">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1.4fr] gap-10 pb-10 border-b border-white/[0.06]">

          {/* Brand */}
          <div>
            <div className="text-2xl font-black mb-4">
              <span className="text-primary font-light">&lt;</span>
              Nayeem
              <span className="text-primary font-light">/&gt;</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs">
              Building clean, fast &amp; accessible web experiences.<br />
              Based in Bangladesh 🇧🇩
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.href} className="social-btn" target="_blank" rel="noreferrer" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href}
                    className="text-white/40 hover:text-primary text-sm flex items-center gap-2
                      no-underline transition-colors duration-200 group">
                    <i className="fas fa-chevron-right text-[8px] text-primary/50
                      opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0
                      transition-all duration-200" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5 text-sm text-white/40">
                <i className="fas fa-envelope text-primary text-xs mt-1 flex-shrink-0" />
                <a href={`mailto:${personalInfo.email}`}
                  className="text-white/40 hover:text-primary no-underline transition-colors break-all">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/40">
                <i className="fas fa-map-marker-alt text-primary text-xs mt-1 flex-shrink-0" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <span className="w-2 h-2 rounded-full bg-green flex-shrink-0" />
                <span className="text-green font-semibold">{personalInfo.availability}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {year}{' '}
            <span className="text-primary font-semibold">{personalInfo.name}</span>
            {' '}· All rights reserved · Built with{' '}
            <span className="text-pink">♥</span>
            {' '}using React.js &amp; Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-primary hover:bg-primary-dark text-white
              flex items-center justify-center text-xs cursor-pointer border-none
              transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up" />
          </button>
        </div>

      </div>
    </footer>
  );
}
