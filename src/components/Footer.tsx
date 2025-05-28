// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-white border-t py-6 text-center text-sm text-gray-600 mt-20">
      <p>© {new Date().getFullYear()} Alful Laila S — All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="https://github.com/elsafir" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/alful-laila-s/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;

