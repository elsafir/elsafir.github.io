// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import PortofolioSection from './components/PortofolioSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 min-h-screen">
      <Navbar />

      <header className="pt-32 pb-16 text-center" id="about">
        <h1 className="text-5xl font-extrabold text-indigo-700">Hi, I'm ZC 👋</h1>
        <p className="text-xl mt-4 text-gray-700 max-w-2xl mx-auto">
          I'm a multidisciplinary creator with skills in IT, Design, Education, Music & more.
        </p>
      </header>

      <section id="portfolio-dev">
        <PortofolioSection title="Software Developer Projects" filter="dev" />
      </section>

      <section id="portfolio-pr">
        <PortofolioSection title="Public Relation Projects" filter="pr" />
      </section>

      <section id="contact" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Contact Me</h2>
        <p className="text-gray-700">Email: you@example.com</p>
      </section>

      <Footer />
    </div>
  );
}

export default App;
