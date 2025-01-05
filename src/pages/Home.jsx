import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Calendar, Info, Clock, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import HeroSection from "../components/HeroSection";
import About from "../pages/About";
import TeamPage from "./TeamPage";
import Contact from "../pages/Contact";
import FAQ from "./FAQ";

//import ParticleBackground from "../components/ParticleBackground";
import MicrosoftLogos from "../components/MicrosoftLogos";

const EventDetailModal = ({ event, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
  >
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      className="bg-gray-800 rounded-2xl max-w-2xl w-full p-8 relative my-10"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
      >
        Close
      </button>
      <h2 className="text-3xl font-bold mb-4 text-cyan-400">{event.title}</h2>
      <div className="space-y-4 text-gray-300">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Calendar className="text-cyan-400" />
            <span>{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center space-x-3">
              <Clock className="text-cyan-400" />
              <span>{event.time}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center space-x-3">
              <MapPin className="text-cyan-400" />
              <span>{event.location}</span>
            </div>
          )}
          {event.organizer && (
            <div className="flex items-center space-x-3">
              <User className="text-cyan-400" />
              <span>{event.organizer}</span>
            </div>
          )}
        </div>
        <p className="leading-relaxed">{event.description}</p>

        {event.additionalDetails && (
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">
              Additional Details
            </h3>
            <p className="text-gray-300">{event.additionalDetails}</p>
          </div>
        )}

        <div className="flex space-x-4 mt-6">
          {event.link === "#" ? (
            <span className="flex items-center space-x-2 bg-gray-700 text-gray-400 text-sm p-3 rounded-lg border border-gray-500">
              <Info className="text-cyan-400" size={16} />
              <span>Link Not Available</span>
            </span>
          ) : (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
              text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 
              transition flex items-center"
            >
              {event.status === "completed" ? "View Recap" : "Register Now"}
              <ArrowRight className="ml-2" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

EventDetailModal.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string,
    location: PropTypes.string,
    organizer: PropTypes.string,
    description: PropTypes.string.isRequired,
    additionalDetails: PropTypes.string,
    link: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["upcoming", "completed"]),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Preview events for the Home page
  const previewEvents = [
    {
      title: "MLSC Unveil '25: Pathways to success",
      date: "January 17, 2025",
      time: "00:00 AM - 00:00 PM",
      location: "Seminar Hall",
      organizer: "MLSC",
      description:
        "In-depth workshop on cloud computing with hands-on experience on Azure. Learn from industry professionals about the latest cloud technologies and best practices.",
      additionalDetails:
        "Participants will receive hands-on lab access, course materials, and a certificate of completion. Lunch and refreshments will be provided.",
      link: "https://forms.office.com/r/tt8b1j7YpT",
      status: "upcoming",
    },
  ];

  const EventCard = ({ event, onDetailView }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl 
        border border-white/10 transition duration-300 relative overflow-hidden"
      >
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
          />
        )}

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-3 text-cyan-400">
            {event.title}
          </h3>
          <div className="flex items-center text-gray-400 space-x-3 mb-2">
            <Calendar size={20} />
            <span>{event.date}</span>
          </div>
          <p className="text-gray-300 mb-4 line-clamp-3">{event.description}</p>
          <div className="flex justify-between items-center">
            <button
              onClick={() => onDetailView(event)}
              className="text-cyan-400 hover:text-cyan-300 flex items-center"
            >
              View Details <Info className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };
  // Add prop types validation EventCard
  EventCard.propTypes = {
    event: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    onDetailView: PropTypes.func.isRequired,
  };

  return (
    <div className="bg-gray-900 text-white">
      <MicrosoftLogos />
      <HeroSection />
      <About />

      {/* Events Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-10 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-5xl font-bold text-center mb-16
    bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 px-4 sm:px-0 pb-8"
          >
            Upcoming Events
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid md:grid-cols-2 gap-8 mt-8"
          >
            {previewEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <EventCard event={event} onDetailView={setSelectedEvent} />
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-8">
            <Link
              to="/events"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
    text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 
    transition flex items-center"
            >
              See More Events <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedEvent && (
          <EventDetailModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
      <TeamPage />
      <Contact />
      <FAQ />
    </div>
  );
};

export default Home;
