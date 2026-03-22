import React, { useState, useEffect } from 'react';
import { personalInfo, typedWords } from '../data';

export default function Banner() {
  const [wordIdx,    setWordIdx]    = useState(0);
  const [displayed,  setDisplayed]  = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typedWords[wordIdx];
    let timer;
    if (!isDeleting && displayed.length < word.length) {
      timer = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === word.length) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setIsDeleting(false);
      setWordIdx((p) => (p + 1) % typedWords.length);
    }
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-5 md:px-8 pt-24 pb-20 font-poppins">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full
          bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[5%] w-96 h-96 rounded-full
          bg-pink/6 blur-[100px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,111,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,111,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-container mx-auto">
      <div className="max-w-2xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-primary/8 border border-primary/20
          text-primary text-xs font-medium px-4 py-2 rounded-full mb-7
          animate-fadeDown">
          <span className="relative flex">
            <span className="w-2 h-2 rounded-full bg-green animate-pulseRing absolute inset-0" />
            <span className="w-2 h-2 rounded-full bg-green relative" />
          </span>
          Available for Opportunities
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.07]
          tracking-tight mb-4 animate-fadeUp"
          style={{ animationDelay: '0.1s' }}
        >
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-primary via-primary-light to-cyan
            bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* Typewriter */}
        <div className="text-xl md:text-2xl font-semibold text-white/50 mb-5 min-h-8
          animate-fadeUp" style={{ animationDelay: '0.15s' }}>
          <span className="text-pink">{displayed}</span>
          <span className="text-primary animate-blink ml-0.5">|</span>
        </div>

        {/* Description */}
        <p className="text-white/50 text-base leading-relaxed mb-8 max-w-xl
          animate-fadeUp" style={{ animationDelay: '0.2s' }}>
          {personalInfo.tagline}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fadeUp" style={{ animationDelay: '0.25s' }}>
          <a href="#projects" className="btn-primary">
            <i className="fas fa-rocket text-xs" /> View My Work
          </a>
          <a href="#contact" className="btn-outline">
            <i className="fas fa-paper-plane text-xs" /> Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/[0.07]
          animate-fadeUp" style={{ animationDelay: '0.3s' }}>
          {personalInfo.stats.map((s, i) => (
            <div key={i} className="flex flex-col">
              <strong className="text-3xl font-black text-primary leading-none">
                {s.value}
              </strong>
              <span className="text-xs text-white/30 mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Floating cards */}
      <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4
        animate-fadeInRight" style={{ animationDelay: '0.4s' }}>

        {[
          { icon: '⚛️', label: 'Main Stack',   value: 'React.js',   delay: 'animate-float'  },
          { icon: '🚀', label: 'Projects',      value: '10+ Done',   delay: 'animate-float2', ml: 'ml-6' },
          { icon: '📍', label: 'Based in',      value: 'Bangladesh', delay: 'animate-float3' },
        ].map((c, i) => (
          <div key={i}
            className={`flex items-center gap-3 bg-dark-700/90 backdrop-blur-xl
              border border-white/[0.06] rounded-xl px-5 py-3.5 min-w-[185px]
              hover:border-primary/40 hover:-translate-x-1 transition-all duration-300
              ${c.delay} ${c.ml || ''}`}
          >
            <span className="text-2xl">{c.icon}</span>
            <div>
              <p className="text-xs text-white/30">{c.label}</p>
              <strong className="text-sm font-bold">{c.value}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <a href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-1.5 text-white/25 text-xs
          uppercase tracking-widest no-underline hover:text-primary
          transition-colors duration-300 animate-fadeUp"
        style={{ animationDelay: '0.8s' }}
      >
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down animate-float text-xs" />
      </a>
    </section>
  );
}
