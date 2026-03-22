import React from 'react';
import useReveal from '../hooks/useReveal';
import { personalInfo, aboutPoints } from '../data';
import Image from './Image';
import nayeem from '../components/assets/nayeem.jpg';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 px-5 md:px-8 bg-dark-900 font-poppins">
      <div className="reveal max-w-container mx-auto" ref={ref}>

        {/* Header */}
        <div className="mb-14">
          <span className="section-badge">About Me</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Who I <span className="text-primary">Am</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">

          {/* Left — Avatar */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72">

              {/* Spinning rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 rounded-full border border-primary/15 animate-spinSlow absolute" />
                <div className="w-96 h-96 rounded-full border border-pink/10 animate-spinSlow2 absolute" />
              </div>

              {/* Avatar box */}
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary to-pink
                flex items-center justify-center text-8xl shadow-2xl shadow-primary/30
                relative overflow-hidden">
                <Image src={nayeem}/>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -right-5 bg-dark-700 border border-white/[0.07]
                rounded-2xl px-4 py-3 text-center shadow-xl animate-float">
                <strong className="block text-2xl font-black text-primary">1+</strong>
                <span className="text-xs text-white/40">Year Learning</span>
              </div>
              <div className="absolute -top-4 -left-5 bg-dark-700 border border-white/[0.07]
                rounded-2xl px-4 py-3 text-center shadow-xl animate-float2">
                <strong className="block text-2xl font-black text-primary">🇧🇩</strong>
                <span className="text-xs text-white/40">Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <h3 className="text-xl font-bold mb-4 leading-snug">
              Passionate Frontend Developer &amp; Creative Coder
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            {/* Points */}
            <ul className="space-y-3 mb-8">
              {aboutPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full
                    bg-primary/15 flex items-center justify-center">
                    <i className="fas fa-check text-primary text-[9px]" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 mb-8 p-5 bg-dark-700
              border border-white/[0.06] rounded-2xl">
              {[
                { icon: 'fa-user',           label: 'Name',     value: personalInfo.name },
                { icon: 'fa-map-marker-alt', label: 'Location', value: personalInfo.location },
                { icon: 'fa-envelope',       label: 'Email',    value: personalInfo.email },
                { icon: 'fa-circle',         label: 'Status',   value: personalInfo.availability, green: true },
              ].map((row, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">
                    <i className={`fas ${row.icon} text-primary mr-1`} />
                    {row.label}
                  </span>
                  <strong className={`text-sm font-semibold truncate ${row.green ? 'text-green' : ''}`}>
                    {row.value}
                  </strong>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                <i className="fas fa-handshake text-xs" /> Hire Me
              </a>
              <a href="#" className="btn-outline" download>
                <i className="fas fa-download text-xs" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
