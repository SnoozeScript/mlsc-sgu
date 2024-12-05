import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import ParticleBackground from "./components/ParticleBackground"; // Import the particle background

const App = () => {
  return (
    <Router>
      {/* ParticleBackground applied globally */}
      <ParticleBackground />

      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
