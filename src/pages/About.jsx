import { motion } from "framer-motion";
import { Code, Cloud, Brain, Trophy, Users, Rocket } from "lucide-react";

const About = () => {
  const clubFeatures = [
    {
      icon: <Code className="text-cyan-400" size={40} />,
      title: "Technology Exploration",
      description:
        "Dive deep into cutting-edge Microsoft technologies and emerging tech trends.",
    },
    {
      icon: <Cloud className="text-blue-400" size={40} />,
      title: "Cloud Computing",
      description:
        "Learn and implement cloud solutions using Microsoft Azure and related platforms.",
    },
    {
      icon: <Brain className="text-purple-400" size={40} />,
      title: "AI & Machine Learning",
      description:
        "Explore artificial intelligence and machine learning through hands-on projects.",
    },
  ];

  const milestones = [
    {
      icon: <Trophy className="text-yellow-400" size={40} />,
      value: "50+",
      label: "Tech Workshops",
    },
    {
      icon: <Users className="text-teal-400" size={40} />,
      value: "200+",
      label: "Active Members",
    },
    {
      icon: <Rocket className="text-cyan-400" size={40} />,
      value: "20+",
      label: "Successful Projects",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl font-bold text-center mb-12 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            About Microsoft Student Learn Club
          </h2>
        </motion.div>

        {/* Club Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            The Microsoft Student Learn Club at Sanjay Ghodawat University is a
            dynamic community dedicated to empowering students with cutting-edge
            technological skills, innovative learning approaches, and
            transformative Microsoft technologies.
          </p>
          <p className="text-lg text-gray-400">
            Our mission is to bridge the gap between academic learning and
            industry requirements, providing students with practical skills,
            networking opportunities, and a platform to explore and excel in
            technology.
          </p>
        </motion.div>

        {/* Club Features */}
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
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {clubFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl 
              border border-white/10 text-center transition duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-2xl 
          border border-white/10 p-12 text-center"
        >
          <h3
            className="text-3xl font-bold mb-8 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Our Club Milestones
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">{milestone.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">
                  {milestone.value}
                </div>
                <div className="text-gray-400">{milestone.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
