import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const EventCard = ({ title, date, description, link }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
      }}
      className="bg-gray-700/30 backdrop-blur-lg rounded-2xl 
      border border-white/10 p-6 relative overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
      />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4 space-x-3">
          <Calendar className="text-cyan-400" size={28} />
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        
        <div className="flex items-center text-gray-300 mb-4">
          <MapPin className="mr-2 text-cyan-400" size={20} />
          <span>{date}</span>
        </div>
        
        <p className="text-gray-400 mb-6">{description}</p>
        
        <motion.a 
          href={link}
          whileHover={{ x: 5 }}
          className="flex items-center text-cyan-400 hover:text-cyan-300 
          font-semibold transition group"
        >
          Learn More 
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default EventCard;