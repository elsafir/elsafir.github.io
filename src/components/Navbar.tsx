// src/components/Navbar.tsx

const Navbar = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-indigo-600">Alful Laila S Portfolio</h1>

        <ul className="flex space-x-6 text-sm text-gray-800 font-medium relative">
          <li>
            <a href="#about" className="hover:text-indigo-600 transition">About</a>
          </li>

          {/* <li
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative cursor-pointer"
          >
            <span className="hover:text-indigo-600 transition">Portfolio ▾</span>
            {dropdownOpen && (
              <ul className="absolute top-6 left-0 w-48 bg-white border rounded shadow-md text-left text-gray-700">
                <li>
                  <a href="#portfolio-dev" className="block px-4 py-2 hover:bg-indigo-100">Software Developer</a>
                </li>
                <li>
                  <a href="#portfolio-pr" className="block px-4 py-2 hover:bg-indigo-100">Public Relation</a>
                </li>
              </ul>
            )}
          </li> */}
        <li>
            <a href="#portfolio-dev" className="hover:text-indigo-600 transition">Portofolio</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
