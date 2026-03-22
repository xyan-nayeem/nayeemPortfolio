import React from 'react';
import Header     from './components/Header';
import Banner     from './components/Banner';
import About      from './components/About';
import Experience from './components/Experience';
import Skills     from './components/Skills';
import TechStack  from './components/TechStack';
import Projects   from './components/Projects';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Banner    />
        <About     />
        <Experience />
        <Skills    />
        <TechStack />
        <Projects  />
        <Contact   />
      </main>
      <Footer />
    </>
  );
}
