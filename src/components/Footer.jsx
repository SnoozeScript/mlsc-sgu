const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg">
          © {new Date().getFullYear()} Microsoft Student Learn Club | Sanjay Ghodawat University
        </p>
        <div className="mt-4 space-x-6">
          {/* Social Links or Navigation Links */}
          <a
            href="#"
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Instagram
          </a>
        </div>
        <p className="mt-4 text-sm">
          Powered by Microsoft and built with love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
