import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center space-y-6">
          {/* Club Name and Motto */}
          <h2 className="text-2xl font-semibold">Microsoft Student Learn Club</h2>
          <p className="text-lg">
            Sanjay Ghodawat University | Empowering Learners
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mt-4">
            <a
              href="https://github.com" // Replace with actual links
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-white hover:text-cyan-400 transition duration-300"
            >
              <Github className="w-6 h-6" />
              <span className="hidden md:inline-block">Github</span>
            </a>
            <a
              href="https://twitter.com" // Replace with actual links
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-white hover:text-cyan-400 transition duration-300"
            >
              <Twitter className="w-6 h-6" />
              <span className="hidden md:inline-block">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/sgu_mlsc" // Replace with actual links
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-white hover:text-cyan-400 transition duration-300"
            >
              <Instagram className="w-6 h-6" />
              <span className="hidden md:inline-block">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/sgumlsc" // Replace with actual links
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-white hover:text-cyan-400 transition duration-300"
            >
              <Linkedin className="w-6 h-6" />
              <span className="hidden md:inline-block">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/20"></div>

        {/* Bottom Footer Content */}
        <div className="text-center mt-6 text-sm">
          <p>© {new Date().getFullYear()} Microsoft Student Learn Club | Sanjay Ghodawat University</p>
          <p className="mt-2">Powered by Microsoft | Built with ❤️ by the MLSC Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
