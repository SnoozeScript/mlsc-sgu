import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Trophy, FileText, ArrowRight, Calendar } from "lucide-react";

const RecapSection = ({ title, children, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl 
    border border-white/10 space-y-4"
  >
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="text-cyan-400" size={28} />
      <h3 className="text-2xl font-bold text-cyan-400">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const EventRecapModal = ({ event, onClose }) => (
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
      className="bg-gray-800 rounded-2xl max-w-4xl w-full p-8 relative my-10"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
      >
        Close
      </button>

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">
            {event.eventName}
          </h2>
          <div className="text-gray-300 space-y-2">
            <p className="text-xl">{event.date}</p>
            <p className="text-xl">{event.location}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Highlights */}
          <RecapSection title="Event Highlights" icon={Trophy}>
            <ul className="space-y-2 text-gray-300">
              {event.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <ArrowRight className="text-cyan-400" size={20} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </RecapSection>

          {/* Key Presenters */}
          <RecapSection title="Key Presenters" icon={Users}>
            <div className="space-y-4">
              {event.keyPresenters.map((presenter, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-1">
                    {presenter.name}
                  </h4>
                  <p className="text-gray-400 mb-2">{presenter.title}</p>
                  <p className="text-gray-300">
                    Expertise: {presenter.expertise}
                  </p>
                </div>
              ))}
            </div>
          </RecapSection>
        </div>

        {/* Media Gallery */}
        <div>
          <h3
            className="text-3xl font-bold text-center mb-8 
          bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Event Media
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            {event.mediaGallery.photos.map((photo, index) => (
              <div key={index}>
                <img
                  src={photo}
                  alt={`Event Photo ${index + 1}`}
                  className="rounded-2xl w-full h-48 object-cover 
                  hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <RecapSection title="Event Documents" icon={FileText}>
          <div className="space-y-4">
            {event.eventDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-1">
                    {doc.title}
                  </h4>
                  <p className="text-gray-400">{doc.type} Document</p>
                </div>
                <a
                  href={doc.downloadLink}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 
                  text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 
                  transition flex items-center"
                >
                  Download <ArrowRight className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </RecapSection>
      </div>
    </motion.div>
  </motion.div>
);

const EventRecapCard = ({ event, onDetailView }) => {
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
          {event.eventName}
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
            View Recap <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const EventRecaps = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeYear, setActiveYear] = useState("2024");

  const eventsData = [
    {
      eventName: "Data Science Summit 2024",
      date: "June 15, 2024",
      location: "Tech Conference Center, Hyderabad",
      description:
        "Comprehensive summit exploring the latest trends in data science, machine learning, and AI technologies.",
      year: "2024",
      highlights: [
        "Over 500 data science professionals attended",
        "15 cutting-edge keynote presentations",
        "Emerging AI and machine learning trends discussed",
        "Networking opportunities with industry leaders",
      ],
      keyPresenters: [
        {
          name: "Dr. Ananya Sharma",
          title: "Chief Data Scientist, Tech Innovations Inc.",
          expertise: "Machine Learning and AI Ethics",
        },
        {
          name: "Rahul Mehra",
          title: "Lead AI Researcher, Global Tech Solutions",
          expertise: "Deep Learning and Neural Networks",
        },
      ],
      mediaGallery: {
        photos: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
        ],
      },
      eventDocuments: [
        {
          title: "Event Proceedings",
          type: "PDF",
          downloadLink: "#",
        },
        {
          title: "Presentation Slides",
          type: "PPTX",
          downloadLink: "#",
        },
      ],
    },
    {
      eventName: "Blockchain Technology Conference",
      date: "May 20, 2024",
      location: "Innovation Center, Delhi",
      description:
        "A comprehensive conference exploring blockchain innovations, cryptocurrency trends, and decentralized technologies.",
      year: "2024",
      highlights: [
        "200+ blockchain enthusiasts and professionals",
        "Startup pitch sessions with venture capitalists",
        "Insights into blockchain applications across industries",
        "Networking with blockchain thought leaders",
      ],
      keyPresenters: [
        {
          name: "Vikram Malhotra",
          title: "Blockchain Strategist, CryptoTech Innovations",
          expertise: "Decentralized Finance (DeFi)",
        },
        {
          name: "Priya Krishnamurthy",
          title: "Senior Blockchain Architect, Global Innovations",
          expertise: "Smart Contracts and Ethereum Ecosystem",
        },
      ],
      mediaGallery: {
        photos: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
        ],
      },
      eventDocuments: [
        {
          title: "Conference Proceedings",
          type: "PDF",
          downloadLink: "#",
        },
        {
          title: "Technology Insights Report",
          type: "DOCX",
          downloadLink: "#",
        },
      ],
    },
    {
      eventName: "AI Ethics Symposium",
      date: "September 10, 2025",
      location: "Global Tech Campus, Bangalore",
      description:
        "An in-depth exploration of ethical considerations in artificial intelligence and machine learning.",
      year: "2025",
      highlights: [
        "International panel of AI ethics experts",
        "Discussions on responsible AI development",
        "Policy recommendations for ethical AI",
        "Interactive workshops on AI bias mitigation",
      ],
      keyPresenters: [
        {
          name: "Dr. Elena Rodriguez",
          title: "Global AI Ethics Director, Ethical Tech Foundation",
          expertise: "AI Governance and Ethical Frameworks",
        },
        {
          name: "Prof. Alex Chen",
          title: "Chair of AI Ethics, Global Technology University",
          expertise: "Machine Learning Bias and Fairness",
        },
      ],
      mediaGallery: {
        photos: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
        ],
      },
      eventDocuments: [
        {
          title: "Symposium White Paper",
          type: "PDF",
          downloadLink: "#",
        },
        {
          title: "Ethical AI Guidelines",
          type: "DOCX",
          downloadLink: "#",
        },
      ],
    },
  ];

  // Get unique years from events
  const years = [...new Set(eventsData.map((event) => event.year))];

  // Filter events by selected year
  const filteredEvents = eventsData.filter(
    (event) => event.year === activeYear
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-5xl font-bold text-center mb-12 
          bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Event Recaps
        </motion.h2>

        {/* Year Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-full p-1 inline-flex space-x-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeYear === year
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {year} Events
              </button>
            ))}
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <EventRecapCard event={event} onDetailView={setSelectedEvent} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center text-gray-400 py-16">
            No events found for {activeYear}
          </div>
        )}

        <AnimatePresence>
          {selectedEvent && (
            <EventRecapModal
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventRecaps;
