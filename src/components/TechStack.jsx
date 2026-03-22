import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useReveal from '../hooks/useReveal';
import { techStack } from '../data';

const sliderSettings = {
  infinite:       true,
  slidesToShow:   4,
  slidesToScroll: 1,
  autoplay:       true,
  autoplaySpeed:  2200,
  speed:          600,
  dots:           true,
  arrows:         false,
  pauseOnHover:   true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 700,  settings: { slidesToShow: 2 } },
    { breakpoint: 480,  settings: { slidesToShow: 1 } },
  ],
};

export default function TechStack() {
  const ref = useReveal();

  return (
    <section id="techstack" className="py-24 px-5 md:px-8 bg-dark-800 overflow-hidden font-poppins">
      <div className="reveal max-w-container mx-auto" ref={ref}>

        {/* Header */}
        <div className="mb-14">
          <span className="section-badge">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Technologies <span className="text-primary">I Use</span>
          </h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm leading-relaxed max-w-lg">
            A snapshot of my favourite tools and frameworks — swipe or watch them scroll.
          </p>
        </div>

        {/* Slider */}
        <div className="pb-10">
          <Slider {...sliderSettings}>
            {techStack.map((tech, i) => (
              <div key={i}>
                <div
                  className="card text-center p-8 cursor-default group relative overflow-hidden
                    transition-all duration-300 hover:-translate-y-2"
                  style={{
                    '--tech': tech.color,
                  }}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.06]
                      transition-opacity duration-300 rounded-2xl"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${tech.color}, transparent 60%)` }}
                  />
                  {/* Border glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${tech.color}50` }}
                  />

                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    {tech.logo}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-white/35">{tech.category}</p>
                  <div
                    className="w-1.5 h-1.5 rounded-full mx-auto mt-3 opacity-50"
                    style={{ background: tech.color }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}
