import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 font-poppins
        bg-dark-900/80 backdrop-blur-xl border-b border-white/[0.06]
        transition-all duration-300
        ${scrolled ? 'shadow-2xl shadow-black/40' : ''}`}
    >
      <div className="max-w-container mx-auto h-full px-6 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#home" className="text-xl font-black text-white hover:text-primary transition-colors duration-300 no-underline">
          <span className="text-primary font-light">&lt;</span>
          Nayeem
          <span className="text-primary font-light">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href)}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 no-underline
                group
                ${active === href ? 'text-white' : 'text-white/50 hover:text-white'}`}
            >
              {label}
              <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full
                transition-all duration-300 origin-left
                ${active === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5">
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300
            ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300
            ${menuOpen ? 'opacity-0 -translate-x-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300
            ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-16 left-0 right-0
        bg-dark-900/98 backdrop-blur-2xl border-b border-white/[0.06]
        transition-all duration-300 overflow-hidden
        ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => { setActive(href); setMenuOpen(false); }}
              className="text-white/60 hover:text-primary py-2.5 text-sm font-medium
                border-b border-white/[0.04] last:border-0 no-underline transition-colors"
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-primary mt-3 justify-center" onClick={() => setMenuOpen(false)}>
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
