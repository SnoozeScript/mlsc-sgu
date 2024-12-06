import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Calendar, Info, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(""); 
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <Home className="mr-2" size={20} />,
    },
    {
      path: "/about",
      label: "About",
      icon: <Info className="mr-2" size={20} />,
    },
    {
      path: "/events",
      label: "Events",
      icon: <Calendar className="mr-2" size={20} />,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <MessageCircle className="mr-2" size={20} />,
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll event to toggle navbar transparency
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Change state after 50px scroll
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-indigo-800/90 backdrop-blur-lg"
          : "bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700/60 backdrop-blur-md"
      } backdrop-blur transition-all duration-300 sticky top-0 z-50 shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center text-white font-bold text-2xl 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 
            hover:from-cyan-300 hover:to-blue-400 transition duration-300"
          >
            MLSC SGU
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white px-4 py-2 rounded-lg text-lg font-medium flex items-center transition duration-300 ease-in-out 
                  ${
                    activeItem === item.path
                      ? "bg-cyan-500/30 text-cyan-300"
                      : "hover:bg-indigo-700/50 hover:text-cyan-300"
                  }`}
                onClick={() => setActiveItem(item.path)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-indigo-700/70 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800/70 backdrop-blur-lg absolute w-full shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  toggleMenu();
                  setActiveItem(item.path);
                }}
                className={`block px-4 py-2 rounded-lg text-xl font-medium flex items-center transition duration-300 ease-in-out ${
                  activeItem === item.path
                    ? "bg-cyan-500/30 text-cyan-300"
                    : "text-white hover:bg-indigo-700/50 hover:text-cyan-300"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
