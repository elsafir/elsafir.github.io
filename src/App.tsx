// src/App.tsx
import Navbar from './components/Navbar';
import PortofolioSection from './components/PortofolioSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 min-h-screen">
      <Navbar />

<header className="pt-32 pb-16 text-center" id="about">
  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
    <div>
      <h1 className="text-5xl font-extrabold text-indigo-700">
        Hi, I'm Alful Laila S 👋
      </h1>
      <p className="text-xl mt-4 text-gray-700 max-w-xl">
       I’m a passionate Informatics Engineering graduate with experience in developing applications using Java, Kotlin, PHP, Dart, Golang, and Python. I enjoy solving problems through code and working in collaborative teams.

Besides tech, I also work freelance in public relations and communication. I’ve been involved as an event organizer, MC, moderator, PR officer, and content creator. This blend of technical and communication skills helps me adapt in both tech-driven and people-oriented environments.

      </p>
    </div>
    <img
      src="/IMG_1893.JPG"
      alt="My photo"
      className="w-40 h-40 rounded-full object-cover border-4 border-indigo-300 shadow-lg"
    />
  </div>
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
