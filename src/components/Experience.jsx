import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { experiences } from '../data';

export default function Experience() {
  const ref    = useReveal();
  const [open, setOpen] = useState(null);

  return (
    <section id="experience" className="py-24 px-5 md:px-8 bg-dark-800 font-poppins">
      <div className="reveal max-w-container mx-auto" ref={ref}>

        {/* Header */}
        <div className="mb-14">
          <span className="section-badge">Experience</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            My <span className="text-primary">Journey</span>
          </h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm leading-relaxed max-w-lg">
            A timeline of my learning milestones, personal projects,
            and community contributions over the past year.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl pl-10">
          {/* Line */}
          <div className="absolute left-4 top-2 bottom-0 w-px
            bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative mb-8 last:mb-0">

              {/* Dot */}
              <div
                className="absolute -left-[26px] top-5 w-5 h-5 rounded-full
                  border-2 border-dark-800 shadow-lg transition-all duration-300"
                style={{ background: exp.color, boxShadow: `0 0 0 4px ${exp.color}22` }}
              />

              {/* Card */}
              <div
                className={`card cursor-pointer transition-all duration-300
                  ${open === i ? 'border-primary/40 shadow-lg shadow-primary/10' : 'card-hover'}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="p-6 relative">
                  {/* Toggle icon */}
                  <div className="absolute top-5 right-5 text-white/30 text-xs transition-colors duration-300"
                    style={{ color: open === i ? exp.color : undefined }}>
                    <i className={`fas fa-chevron-${open === i ? 'up' : 'down'}`} />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                      style={{ background: `${exp.color}18`, color: exp.color }}
                    >
                      {exp.type}
                    </span>
                    <span className="text-xs text-white/30">
                      <i className="fas fa-calendar-alt mr-1" />{exp.date}
                    </span>
                  </div>

                  <h4 className="font-bold text-base mb-1 pr-6">{exp.title}</h4>
                  <p className="text-sm text-white/40">
                    <i className="fas fa-building text-primary/70 mr-1.5" />
                    {exp.company}
                  </p>

                  {/* Expandable body */}
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{ maxHeight: open === i ? '300px' : '0' }}
                  >
                    <ul className="mt-5 space-y-3 pt-4 border-t border-white/[0.06]">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-white/50">
                          <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                            style={{ background: exp.color }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End marker */}
          <div className="flex items-center gap-3 mt-2 ml-2">
            <div className="w-10 h-10 rounded-full bg-dark-700 border border-white/[0.06]
              flex items-center justify-center text-lg -ml-5 flex-shrink-0">🎯</div>
            <span className="text-xs text-white/25 italic">The journey continues...</span>
          </div>
        </div>

      </div>
    </section>
  );
}
