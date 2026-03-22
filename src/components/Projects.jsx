import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { projects, FILTERS, personalInfo } from '../data';

export default function Projects() {
  const ref             = useReveal();
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p =>
        p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase()))
      );

  return (
    <section id="projects" className="py-24 px-5 md:px-8 bg-dark-900 font-poppins">
      <div className="reveal max-w-container mx-auto" ref={ref}>

        {/* Header */}
        <div className="mb-14">
          <span className="section-badge">Projects</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            My <span className="text-primary">Work</span>
          </h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm leading-relaxed max-w-lg">
            A selection of projects I've built while learning Frontend Development.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border
                transition-all duration-300 font-poppins cursor-pointer
                ${filter === f
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-transparent border-white/10 text-white/50 hover:border-primary/40 hover:text-primary'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <div
              key={i}
              className={`card group flex flex-col overflow-hidden transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40
                ${project.featured ? 'border-primary/25' : 'card-hover'}`}
            >
              {/* Thumbnail */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient}
                flex items-center justify-center overflow-hidden`}>

                <span className="text-6xl transition-transform duration-400
                  group-hover:scale-110 group-hover:-rotate-6 z-10">
                  {project.emoji}
                </span>

                {project.featured && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5
                    bg-yellow-400/15 border border-yellow-400/40 text-yellow-300
                    text-[10px] font-bold px-2.5 py-1 rounded-full">
                    <i className="fas fa-star text-[8px]" /> Featured
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm
                  flex items-center justify-center gap-3
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer"
                    className="btn-primary text-xs px-4 py-2">
                    <i className="fas fa-external-link-alt" /> Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer"
                    className="btn-outline text-xs px-4 py-2">
                    <i className="fab fa-github" /> Code
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="skill-tag">{tag}</span>
                  ))}
                </div>
                <h4 className="font-bold text-base leading-snug">{project.title}</h4>
                <p className="text-sm text-white/45 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex gap-4 pt-3 border-t border-white/[0.06] mt-auto">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white/35
                      hover:text-primary transition-colors no-underline font-semibold">
                    <i className="fas fa-external-link-alt" /> Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white/35
                      hover:text-primary transition-colors no-underline font-semibold">
                    <i className="fab fa-github" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center gap-3 py-20 text-center">
            <span className="text-5xl">🔍</span>
            <p className="text-white/40 text-sm">No projects found for "<strong className="text-white">{filter}</strong>"</p>
            <button className="btn-outline mt-1" onClick={() => setFilter('All')}>Show All</button>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4
          mt-16 pt-10 border-t border-white/[0.06]">
          <p className="text-white/40 text-sm">Want to see more of my work?</p>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-outline">
            <i className="fab fa-github" /> View All on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
