import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Star,
  Rocket,
  BookOpen,
  CloudLightning,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const MicrosoftLogos = () => {
  const microsoftLogos = [
    { name: "Azure", path: "/public/azure.svg" },
    { name: "Teams", path: "/public/teams.svg" },
    { name: "Office", path: "/public/office.svg" },
    { name: "Visual Studio", path: "/public/visualstudio.svg" },
    { name: "Power BI", path: "/public/powerbi.svg" },
    
    { name: "Azure", path: "/public/azure.svg" },
    { name: "Teams", path: "/public/teams.svg" },
    { name: "Office", path: "/public/office.svg" },
    { name: "Visual Studio", path: "/public/visualstudio.svg" },
    { name: "Power BI", path: "/public/powerbi.svg" },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none">
      {microsoftLogos.map((logo) => (
        <motion.div
          key={logo.name}
          className="absolute w-16 h-16 opacity-100"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <img
            src={logo.path}
            alt={`${logo.name} Logo`}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 5 + 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [
              `${Math.random() * 200 - 100}px`,
              `${Math.random() * 200 - 100}px`,
            ],
            y: [
              `${Math.random() * 200 - 100}px`,
              `${Math.random() * 200 - 100}px`,
            ],
          }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const highlights = [
    {
      icon: <BookOpen className="text-cyan-400" size={40} />,
      title: "Comprehensive Learning",
      description:
        "Cutting-edge curriculum aligned with Microsoft technologies and industry trends.",
    },
    {
      icon: <CloudLightning className="text-teal-400" size={40} />,
      title: "Innovation Hub",
      description:
        "Transform ideas into reality through hands-on projects and tech challenges.",
    },
    {
      icon: <Target className="text-yellow-400" size={40} />,
      title: "Career Acceleration",
      description:
        "Develop skills that propel you towards tech leadership and global opportunities.",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 
      overflow-hidden"
    >
      <ParticleBackground />
      <MicrosoftLogos />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-6xl px-6 py-12 grid md:grid-cols-2 gap-12"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <Rocket className="text-cyan-400 animate-pulse" size={50} />
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500">
              Microsoft Student
              <span className="block text-white">Learn Club @ SGU</span>
            </h1>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Unleash your potential at the intersection of innovation and
            technology. Join a transformative journey that bridges academic
            excellence with real-world Microsoft-powered experiences.
          </motion.p>
          <div className="flex space-x-4">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/join-us"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
                text-white rounded-lg shadow-lg hover:shadow-xl transition transform flex items-center"
              >
                Join Now <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/events"
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 
                rounded-lg hover:bg-cyan-500/10 transition transform 
                flex items-center"
              >
                Explore Events <Star className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid gap-6">
          <AnimatePresence>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 p-6 rounded-xl border border-white/20 
                backdrop-blur-lg shadow-md hover:shadow-xl flex items-center space-x-4 
                transition duration-300"
              >
                <div>{highlight.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
