import ParticleBackground from "./ParticleBackground";
import MicrosoftLogos from "./MicrosoftLogos";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Calendar,
  BookOpen,
  CloudLightning,
  Target,
} from "lucide-react";

const HeroSection = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const inView =
      ref.current?.getBoundingClientRect().top < window.innerHeight;
    if (inView) controls.start("visible");
  }, [controls]);

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
      bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800"
    >
      <ParticleBackground />
      <MicrosoftLogos />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-6xl px-6 py-12 grid md:grid-cols-2 gap-12"
      >
        {/* Left Section: Heading, Description, and Buttons */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <Rocket className="text-cyan-400 animate-pulse" size={50} />
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500">
              Microsoft Learn
              <span className="block text-white">
                Student&apos;s Club @ SGU
              </span>
            </h1>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed"
          >
            A community of tech enthusiasts and innovators passionate about
            learning, building, and leading in the world of technology.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed font-bold"
          >
            Explore. Collaborate. Thrive.
          </motion.p>
          <div className="flex space-x-4">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center items-center"
            >
              <Link
                to="/events"
                className="px-4 py-3 border-2 border-cyan-400 text-cyan-400 
    rounded-lg bg-transparent hover:bg-cyan-500/10 focus:outline-none transition-all duration-300 
    transform flex items-center justify-center space-x-2 hover:scale-105"
              >
                <span className="text-sm font-semibold">Explore Events</span>{" "}
                {/* Reduced font size */}
                <Calendar className="ml-2 text-cyan-400 text-sm" />{" "}
                {/* Reduced icon size */}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section: Highlights */}
        <motion.div variants={itemVariants} className="grid gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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
                <p className="text-gray-300 text-sm">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
