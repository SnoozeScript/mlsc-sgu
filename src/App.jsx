import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import ParticleBackground from "./components/ParticleBackground";
import MicrosoftLogos from "./components/MicrosoftLogos";

const App = () => {
  return (
    <Router>
      <div className="relative">
        {/* Global Background and Logos */}
        <ParticleBackground />
        <MicrosoftLogos />
        
        {/* Navbar - Ensures it's above the particle effects and logos */}
        <Navbar />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
