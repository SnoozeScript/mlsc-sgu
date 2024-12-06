import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Info, MapPin, Clock, User } from "lucide-react";

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

        {event.link && (
          <div className="flex space-x-4 mt-6">
            <a
              href={event.link}
              
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
              text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 
              transition flex items-center"
            >
              {event.status === 'completed' ? 'View Recap' : 'Register Now'} 
              <ArrowRight className="ml-2" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  </motion.div>
);

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

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = [
    {
      title: "Workshop on Cloud Computing",
      date: "December 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Innovation Center, Mumbai",
      organizer: "Cloud Experts Community",
      description:
        "In-depth workshop on cloud computing with hands-on experience on Azure. Learn from industry professionals about the latest cloud technologies and best practices.",
      additionalDetails:
        "Participants will receive hands-on lab access, course materials, and a certificate of completion. Lunch and refreshments will be provided.",
      link: "https://example.com/event1",
      status: 'upcoming'
    },
    {
      title: "AI & ML Hackathon",
      date: "January 10, 2025",
      time: "9:00 AM - 10:00 PM",
      location: "Online Event",
      organizer: "AI Innovators League",
      description:
        "Compete in a 24-hour hackathon focused on AI and ML innovation. Bring your ideas and transform them into cutting-edge solutions.",
      additionalDetails:
        "Prizes for top 3 teams. Mentorship from industry experts throughout the event. Networking opportunities with tech leaders.",
      link: "https://example.com/event2",
      status: 'upcoming'
    },
    {
      title: "Cybersecurity Bootcamp",
      date: "January 25, 2025",
      time: "9:30 AM - 5:30 PM",
      location: "Cyber Defense Academy, Bangalore",
      organizer: "Network Security Alliance",
      description:
        "Learn about the latest in cybersecurity in a full-day bootcamp. Comprehensive training on threat detection, prevention, and mitigation.",
      additionalDetails:
        "Includes practical sessions, real-world case studies, and certification exam preparation. Limited seats available.",
      link: "https://example.com/event3",
      status: 'upcoming'
    },
    {
      title: "UI/UX Design Workshop",
      date: "February 5, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Design Innovation Hub, Pune",
      organizer: "Design Thinking Institute",
      description:
        "Enhance your design skills with expert-led UI/UX sessions. Learn the latest design trends, tools, and user-centric design principles.",
      additionalDetails:
        "Hands-on design challenges, portfolio review, and networking with design professionals. Software and design tools will be provided.",
      link: "https://example.com/event4",
      status: 'upcoming'
    },
    {
      title: "Data Science Summit 2024",
      date: "June 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Tech Conference Center, Hyderabad",
      organizer: "Data Insights Global",
      description:
        "Comprehensive summit exploring the latest trends in data science, machine learning, and AI technologies.",
      additionalDetails:
        "Keynote speeches, panel discussions, and networking opportunities with leading data scientists.",
      link: "/dataSciencesummitrecap",
      status: 'completed'
    },
    {
      title: "Blockchain Technology Conference",
      date: "May 20, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "Innovation Center, Delhi",
      organizer: "Blockchain Technology Forum",
      description:
        "A comprehensive conference exploring blockchain innovations, cryptocurrency trends, and decentralized technologies.",
      additionalDetails:
        "Startup pitch sessions, expert panels, and insights into blockchain applications across various industries.",
      link: "https://example.com/event-recap",
      status: 'completed'
    }
  ];

  const filteredEvents = events.filter(event => event.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-5xl font-bold text-center mb-12 
          bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Events
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-full p-1 inline-flex space-x-2">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'upcoming' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'completed' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Completed Events
            </button>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
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
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {filteredEvents.map((event, index) => (
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
        ) : (
          <div className="text-center text-gray-400 py-16">
            No {activeTab} events at the moment.
          </div>
        )}

        <AnimatePresence>
          {selectedEvent && (
            <EventDetailModal
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Events;