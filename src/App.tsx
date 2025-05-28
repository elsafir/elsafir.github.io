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
      As an Informatics Engineering graduate, I’m passionate about using technology to solve real problems. Skilled in Java, Kotlin, PHP, Dart, Golang, and Python, I have hands-on experience in developing applications through academic and personal projects. I enjoy working in teams, solving problems, and continuously learning to keep up with industry trends. I’m currently seeking opportunities to apply my skills and grow through meaningful, challenging projects. </p>
         </div>
    <img
      src="/IMG_1893.JPG"
      alt="My photo"
      className="w-40 h-40 rounded-full object-cover border-4 border-indigo-300 shadow-lg"
    />
  </div>
</header>

<section id="education-training" className="px-6 py-16 text-center">
  <h2 className="text-3xl font-bold text-indigo-700 mb-10">Education & Training</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-md text-left border border-white/40">
      <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Education</h3>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>Bachelor of Informatics Engineering – Universitas Trunojoyo Madura (2018–2024)</li>
        <li> Jurusan IPA dengan Program Setara Diploma 1 TIK Jurusan Design Grafis – MA Negeri 2 Pamekasan (2015–2018)</li>
      </ul>
    </div>

    {/* Pelatihan */}
    <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-md text-left border border-white/40">
      <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Training</h3>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>Mobile Development Path – Bangkit Academy Led By Google, Tokopedia, Gojek, & Traveloka,2021</li>
        <li>Data And AI Learning Path – MariBelajar By Microsoft Indonesia, 2021</li>
        <li>Scalable Web Service with Golang Learning Path – Fresh Graduate Academy By Hacktiv8 x Digitalent Kominfo, 2024</li>
        <li>Mobile App Development with React Native - Fresh Graduate Academy By Progate x Digitalent Kominfo,2024</li>
      </ul>
    </div>
  </div>
</section>



      <section id="portfolio-dev">
        <PortofolioSection title="Software Developer Projects" filter="dev" />
      </section>
      <section className="text-center py-20 px-6">
  <h3 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6">
    Since This Web is still updating, Know me more and my ongoing mini projects? 
  </h3>

  <div className="flex justify-center gap-6 mt-4 flex-wrap">
    <a
      href="https://drive.google.com/file/d/11JSTaEBphbEryWYH-uNvzD1EmvMvL2NW/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition shadow"
    >
      View CV
    </a>

    <a
      href="https://github.com/elsafir"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition shadow"
    >
      GitHub
    </a>
  </div>
</section>

      {/* <section id="portfolio-pr">
        <PortofolioSection title="Public Relation Projects" filter="pr" />
      </section> */}

      <section id="contact" className="py-20 text-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Contact Me</h2>
        <p className="text-gray-700">Email: alfulsafiraaa08@gmail.com</p>
      </section>

      <Footer />
    </div>
  );
}

export default App;
