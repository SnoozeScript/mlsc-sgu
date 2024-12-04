import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Code, Users, Trophy, ArrowRight, Star, Rocket, } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Stagger animation controls
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const clubHighlights = [
    {
      icon: <Code className="text-cyan-400" size={40} />,
      title: "Tech Innovations",
      description: "Cutting-edge coding projects and Microsoft technology exploration"
    },
    {
      icon: <Users className="text-teal-400" size={40} />,
      title: "Community Growth",
      description: "Collaborative learning and networking opportunities"
    },
    {
      icon: <Trophy className="text-yellow-400" size={40} />,
      title: "Achievement Focus",
      description: "Empowering students to excel in tech competitions"
    }
  ];

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 
      overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [0.5, 1.2, 1], 
            opacity: [0, 0.2, 0.1],
            rotate: 360 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"
        />
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [0.5, 1.2, 1], 
            opacity: [0, 0.2, 0.1],
            rotate: -360 
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column - Text Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.div 
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <Rocket className="text-cyan-400" size={50} />
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-transparent 
              bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 leading-tight"
            >
              Microsoft Student 
              <span className="block text-white">Learn Club</span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 mb-6 leading-relaxed"
          >
            Empowering the next generation of tech innovators through 
            collaborative learning, cutting-edge technologies, and 
            transformative Microsoft-powered experiences.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex space-x-4"
          >
            <Link 
              to="/join-us"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
              text-white rounded-lg shadow-lg hover:from-cyan-600 hover:to-blue-700 
              transition transform hover:scale-105 flex items-center"
            >
              Join Now <ArrowRight className="ml-2" />
            </Link>
            <Link 
              to="/events"
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 
              rounded-lg hover:bg-cyan-500/10 transition transform hover:scale-105 
              flex items-center"
            >
              Explore Events <Star className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column - Highlights */}
        <motion.div 
          variants={itemVariants}
          className="grid gap-6"
        >
          {clubHighlights.map((highlight, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl 
              border border-white/20 flex items-center space-x-4 
              hover:bg-white/20 transition duration-300 
              transform hover:shadow-lg"
            >
              <div>{highlight.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
                <p className="text-gray-300 text-sm">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;