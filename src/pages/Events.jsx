import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Info,
  MapPin,
  Clock,
  User,
  X,
} from "lucide-react";

// Event Detail Modal Component
const EventDetailModal = ({ event, onClose }) => {
  const modalVariants = {
    mobile: {
      initial: { y: "100%" },
      animate: { y: 0 },
      exit: { y: "100%" },
    },
    desktop: {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.95, opacity: 0 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        variants={modalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-gray-800 w-full sm:w-[28rem] max-h-[85vh] overflow-y-auto 
        rounded-t-2xl sm:rounded-2xl shadow-2xl sm:m-4"
      >
        <header className="sticky top-0 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700/50 p-4 flex items-start justify-between">
          <h2 className="text-xl font-bold text-cyan-400 leading-tight pr-4">
            {event.title}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-700/50 transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </header>

        <div className="space-y-4 p-4">
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: Calendar, text: event.date },
              { icon: Clock, text: event.time },
              { icon: MapPin, text: event.location },
              { icon: User, text: event.organizer },
            ].map(
              (item, i) =>
                item.text && (
                  <div
                    key={i}
                    className="bg-gray-700/20 rounded-lg p-2.5 flex items-center gap-2"
                  >
                    <item.icon size={16} className="text-cyan-400 shrink-0" />
                    <span className="text-gray-300 text-sm truncate">
                      {item.text}
                    </span>
                  </div>
                )
            )}
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-gray-300 leading-relaxed">{event.description}</p>
            {event.additionalDetails && (
              <div className="bg-gray-700/20 rounded-lg p-3">
                <p className="text-gray-300">{event.additionalDetails}</p>
              </div>
            )}
          </div>
        </div>

        <footer className="sticky bottom-0 bg-gray-800/95 backdrop-blur-sm border-t border-gray-700/50 p-4">
          {event.link === "#" ? (
            <div className="bg-gray-700/20 text-gray-400 text-sm text-center p-3 rounded-lg">
              Registration not open
            </div>
          ) : (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full p-3 
              bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 
              hover:to-blue-700 text-white font-medium rounded-lg transition-all"
            >
              {event.status === "completed" ? "View Recap" : "Register Now"}
              <ArrowRight size={18} />
            </a>
          )}
        </footer>
      </motion.div>
    </motion.div>
  );
};
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
    title: "MLSC Unveil '25: Pathways to Success",
    date: "January 17, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Seminar Hall",
    organizer: "MLSC",
    description:
      "Kickstart your journey to success with MLSC Unveil '25! Join us for an inspiring inauguration followed by insightful sessions on placements and internships. Discover the strategies to excel in your career and gain valuable guidance from industry experts.",
    additionalDetails:
      "Don't miss the chance to grab exciting goodies and giveaways! Make your move towards a brighter future with MLSC.",
    link: "https://forms.office.com/r/tt8b1j7YpT",
    status: "upcoming",
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
