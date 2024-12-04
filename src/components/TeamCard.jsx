
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const TeamCard = ({ name, role, image, socials }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
      }}
      className="bg-gray-700/30 backdrop-blur-lg rounded-2xl 
      border border-white/10 p-6 text-center relative 
      overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
      />
      
      <div className="relative z-10">
        <motion.img 
          src={image} 
          alt={name}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 mx-auto rounded-full object-cover 
          border-4 border-white/20 mb-4 group-hover:border-cyan-400 transition"
        />
        
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-sm text-gray-400 mb-4">{role}</p>
        
        <div className="flex justify-center space-x-4">
          <motion.a 
            href={socials.linkedin}
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-cyan-400"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a 
            href={socials.github}
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-cyan-400"
          >
            <Github size={24} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;