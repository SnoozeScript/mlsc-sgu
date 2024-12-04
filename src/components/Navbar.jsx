import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Calendar,
  Info,
  UserPlus,
  MessageCircle,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <Home className="mr-2" size={20} />,
    },
    {
      path: "/events",
      label: "Events",
      icon: <Calendar className="mr-2" size={20} />,
    },
    {
      path: "/about",
      label: "About",
      icon: <Info className="mr-2" size={20} />,
    },
    {
      path: "/join-us",
      label: "Join Us",
      icon: <UserPlus className="mr-2" size={20} />,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <MessageCircle className="mr-2" size={20} />,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-white font-bold text-2xl 
              bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 
              hover:from-cyan-300 hover:to-blue-400 transition duration-300"
            >
              MLSC SGU
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:text-cyan-300 
                px-3 py-2 rounded-md text-lg font-medium flex items-center 
                transition duration-300 ease-in-out 
                hover:bg-indigo-700/50 group"
              >
                <span className="group-hover:text-cyan-300 mr-2">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-indigo-700 inline-flex items-center justify-center p-2 
              rounded-md text-white hover:bg-indigo-600 
              focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-offset-indigo-800 focus:ring-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                className="text-white hover:bg-indigo-700 hover:text-cyan-300 
                block px-4 py-2 rounded-md text-xl font-medium flex items-center 
                transition duration-300 ease-in-out"
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