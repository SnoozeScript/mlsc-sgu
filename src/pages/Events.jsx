import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Info, MapPin, Clock, User } from "lucide-react";

// Event Detail Modal Component

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
            <p>{event.additionalDetails}</p>
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
    link: PropTypes.string,
    status: PropTypes.oneOf(["upcoming", "completed"]),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

// Event Card Component
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
        <h3 className="text-2xl font-bold mb-3 text-cyan-400">{event.title}</h3>
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

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onDetailView: PropTypes.func.isRequired,
};
// EVENTS
const EVENTS = [
  {
    "title": "MLSC Unveil '25: Pathways to Success",
    "date": "January 17, 2025",
    "time": "10:00 AM - 4:00 PM",
    "location": "Seminar Hall",
    "organizer": "MLSC",
    "description":
      "Kickstart your journey to success with MLSC Unveil '25! Join us for an inspiring inauguration followed by insightful sessions on placements and internships. Discover the strategies to excel in your career and gain valuable guidance from industry experts.",
    "additionalDetails":
      "Don't miss the chance to grab exciting goodies and giveaways! Make your move towards a brighter future with MLSC.",
    "link": "https://forms.office.com/r/1YpJ8v1415",
    "status": "upcoming"
  },
  
  {
    title: "",
    date: "",
    time: "",
    location: "",
    organizer: "",
    description: "",
    additionalDetails: "",
    link: "#",
    status: "unpublished",
  },
  // Additional events here...
];

// Events Component
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState("upcoming");

  const filteredEvents = useMemo(
    () => EVENTS.filter((event) => event.status === activeTab),
    [activeTab]
  );

  useEffect(() => {
    setSelectedEvent(null);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl font-bold text-center mb-12 
          bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Events
        </motion.h2>
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-lg p-1 inline-flex space-x-4">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform ${
                activeTab === "upcoming"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white scale-105"
                  : "text-gray-400 hover:text-white hover:scale-105"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform ${
                activeTab === "completed"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white scale-105"
                  : "text-gray-400 hover:text-white hover:scale-105"
              }`}
            >
              Completed Events
            </button>
          </div>
        </div>
        {filteredEvents.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <EventCard
                key={index}
                event={event}
                onDetailView={setSelectedEvent}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center text-gray-400 py-16">
            No {activeTab} events found.
          </div>
        )}
      </div>
      <AnimatePresence>
        {selectedEvent && (
          <EventDetailModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
