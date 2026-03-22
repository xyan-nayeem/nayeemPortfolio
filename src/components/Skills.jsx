import React, { useEffect, useRef } from 'react';
import { skillCategories } from '../data';

export default function Skills() {
  const sectionRef = useRef(null);
  const animated   = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          if (!animated.current) {
            animated.current = true;
            el.querySelectorAll('[data-level]').forEach((bar) => {
              const target = bar.getAttribute('data-level');
              setTimeout(() => { bar.style.width = target + '%'; }, 200);
            });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-5 md:px-8 bg-dark-900 font-poppins">
      <div className="reveal max-w-container mx-auto" ref={sectionRef}>

        {/* Header */}
        <div className="mb-14">
          <span className="section-badge">Skills</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            My <span className="text-primary">Skill Set</span>
          </h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm leading-relaxed max-w-lg">
            Technologies and tools I have worked with over the past year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <div key={i} className="card card-hover p-7">

              {/* Card header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <span className="text-2xl">{cat.icon}</span>
                <h4 className="font-bold text-base">{cat.category}</h4>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {cat.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-white/60 font-medium">{skill.name}</span>
                      <span className="text-xs font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                      <div
                        data-level={skill.level}
                        style={{ width: 0, transition: 'width 1.4s cubic-bezier(0.4,0,0.2,1)' }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-pink"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
