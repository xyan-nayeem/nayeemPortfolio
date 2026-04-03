

import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  // scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  // active section on scroll
  useEffect(() => {
    const sections = NAV_LINKS.map(link =>
      document.querySelector(link.href)
    );

    const onScroll = () => {
      const scrollY = window.scrollY + 100;

      sections.forEach((section, i) => {
        if (
          section &&
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActive(NAV_LINKS[i].href);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16
      bg-dark-900/80 backdrop-blur-xl border-b border-white/[0.06]
      transition-all duration-300
      ${scrolled ? 'shadow-xl shadow-black/30' : ''}`}
    >
      <div className="max-w-container mx-auto h-full px-4 md:px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-lg md:text-xl font-black text-white no-underline">
          <span className="text-primary">&lt;</span>
          Nayeem
          <span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`px-3 py-1.5 text-sm rounded-lg transition
              ${active === href ? 'text-white' : 'text-white/50 hover:text-white'}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="hidden md:inline-flex btn-primary text-xs px-5 py-2">
          Hire Me
        </a>

        {/* Hamburger */}
       {/* Hamburger (Fixed) */}
<button
  className="md:hidden fixed top-4 right-4 z-[100] flex flex-col gap-1.5 p-2 rounded-md bg-dark-900/80 backdrop-blur-md"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span className={`w-6 h-0.5 transition-all duration-300
    ${menuOpen ? 'rotate-45 translate-y-2 bg-primary' : 'bg-white'}`} 
  />
  <span className={`w-6 h-0.5 transition-all duration-300
    ${menuOpen ? 'opacity-0' : 'bg-white'}`} 
  />
  <span className={`w-6 h-0.5 transition-all duration-300
    ${menuOpen ? '-rotate-45 -translate-y-2 bg-primary' : 'bg-white'}`} 
  />
</button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-16 left-0 right-0 bg-dark-900
        transition-all duration-300
        ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col px-6 py-5 gap-2">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => {
                setActive(href);
                setMenuOpen(false);
              }}
              className="text-white text-base py-3 border-b border-white/10"
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            className="btn-primary mt-4 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
























// import React, { useState, useEffect } from 'react';
// import { personalInfo } from '../data';

// const NAV_LINKS = [
//   { label: 'About',      href: '#about'      },
//   { label: 'Experience', href: '#experience' },
//   { label: 'Skills',     href: '#skills'     },
//   { label: 'Projects',   href: '#projects'   },
//   { label: 'Contact',    href: '#contact'    },
// ];

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [active,   setActive]   = useState('');

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 h-16 font-poppins
//         bg-dark-900/80 backdrop-blur-xl border-b border-white/[0.06]
//         transition-all duration-300
//         ${scrolled ? 'shadow-2xl shadow-black/40' : ''}`}
//     >
//       <div className="max-w-container mx-auto h-full px-6 flex items-center justify-between gap-8">

//         {/* Logo */}
//         <a href="#home" className="text-xl font-black text-white hover:text-primary transition-colors duration-300 no-underline">
//           <span className="text-primary font-light">&lt;</span>
//           Nayeem
//           <span className="text-primary font-light">/&gt;</span>
//         </a>

//         {/* Desktop nav */}
//         <nav className="hidden md:flex items-center gap-1">
//           {NAV_LINKS.map(({ label, href }) => (
//             <a
//               key={href}
//               href={href}
//               onClick={() => setActive(href)}
//               className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 no-underline
//                 group
//                 ${active === href ? 'text-white' : 'text-white/50 hover:text-white'}`}
//             >
//               {label}
//               <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full
//                 transition-all duration-300 origin-left
//                 ${active === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
//               />
//             </a>
//           ))}
//         </nav>

//         {/* CTA */}
//         <a href="#contact" className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5">
//           Hire Me
//         </a>

//         {/* Hamburger */}
//         <button
//           className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300
//             ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
//           <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300
//             ${menuOpen ? 'opacity-0 -translate-x-2' : ''}`} />
//           <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300
//             ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden absolute top-16 left-0 right-0
//         bg-dark-900/98 backdrop-blur-2xl border-b border-white/[0.06]
//         transition-all duration-300 overflow-hidden
//         ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
//       >
//         <nav className="flex flex-col px-6 py-4 gap-1">
//           {NAV_LINKS.map(({ label, href }) => (
//             <a
//               key={href}
//               href={href}
//               onClick={() => { setActive(href); setMenuOpen(false); }}
//               className="text-white/60 hover:text-primary py-2.5 text-sm font-medium
//                 border-b border-white/[0.04] last:border-0 no-underline transition-colors"
//             >
//               {label}
//             </a>
//           ))}
//           <a href="#contact" className="btn-primary mt-3 justify-center" onClick={() => setMenuOpen(false)}>
//             Hire Me
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

