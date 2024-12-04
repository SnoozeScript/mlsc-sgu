import React from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';

const Events = () => {
  const events = [
    {
      title: "Workshop on Cloud Computing",
      date: "December 15, 2024",
      description: "Join us for an in-depth workshop on cloud computing and learn how to deploy applications on the cloud.",
      link: "https://example.com/event1"
    },
    {
      title: "AI & ML Seminar",
      date: "December 20, 2024", 
      description: "Explore the future of AI and Machine Learning in this informative seminar.",
      link: "https://example.com/event2"
    },
    {
      title: "Cybersecurity Masterclass",
      date: "January 10, 2025",
      description: "Learn advanced cybersecurity techniques and network protection strategies.",
      link: "https://example.com/event3"
    },
    {
      title: "Blockchain and Cryptocurrency Summit",
      date: "January 25, 2025",
      description: "Dive deep into the world of blockchain technology and cryptocurrency innovations.",
      link: "https://example.com/event4"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-5xl font-bold text-center mb-12 
          bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
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
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1
                }
              }}
            >
              <EventCard
                title={event.title}
                date={event.date}
                description={event.description}
                link={event.link}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-400 mb-6">
            Can't find an event that interests you?
          </p>
          <button 
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
            text-white rounded-lg shadow-lg hover:from-cyan-600 hover:to-blue-700 
            transition transform hover:scale-105"
          >
            Suggest an Event
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Events;