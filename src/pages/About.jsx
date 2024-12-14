import { motion } from "framer-motion";
import { Network, Lightbulb, Globe, Zap } from "lucide-react";

const About = () => {
  const whyJoinReasons = [
    {
      icon: <Zap className="text-yellow-400" size={40} />,
      title: "Hands-on Learning",
      description:
        "Engage in immersive sessions spanning AI, Cloud Computing, App Development, and cutting-edge technologies that transform theoretical knowledge into practical skills.",
    },
    {
      icon: <Network className="text-green-400" size={40} />,
      title: "Collaborative Environment",
      description:
        "Join forces with passionate colleagues to solve real-world problems, creating impactful solutions that make a meaningful difference in society.",
    },
    {
      icon: <Globe className="text-blue-400" size={40} />,
      title: "Networking Opportunities",
      description:
        "Connect with tech professionals, industry mentors, and experts. Build confidence and expand your professional network through active club participation.",
    },
    {
      icon: <Lightbulb className="text-cyan-400" size={40} />,
      title: "Innovation Playground",
      description:
        "A dynamic space where diverse perspectives converge, ideas are shared, and technological innovations are born from collaborative creativity.",
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
            Microsoft Learn Student&apos;s Club
          </h2>
        </motion.div>

        {/* Club Overview */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            The Microsoft Learn Student&apos;s Club is a student-driven initiative that
            empowers young minds through technology. We are more than just a
            club—we are a community of passionate, enthusiastic students who
            believe in learning, experimenting, and collaborating to build
            impactful technological solutions.
          </p>
          <p className="text-lg text-gray-400 mb-6">
            Our members come from diverse walks of life and different fields of
            work, bringing unique perspectives that fuel innovation and create
            an environment where learning never stops.
          </p>
        </motion.div>

        

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gray-800/30 backdrop-blur-lg rounded-3xl 
          border border-white/10 p-12 text-center mb-24 relative overflow-hidden"
        >
          <div
            className="absolute -top-12 -right-12 
            bg-blue-500/10 w-48 h-48 rounded-full blur-2xl"
          ></div>
          <div
            className="absolute -bottom-12 -left-12 
            bg-cyan-500/10 w-48 h-48 rounded-full blur-2xl"
          ></div>

          <div className="relative z-10">
            <h3
              className="text-4xl font-bold mb-8 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Our Mission
            </h3>
            <ul className="text-lg text-gray-300 space-y-6 max-w-4xl mx-auto text-left">
              <li className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-cyan-500/30 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
                <span>
                  Deliver hands-on workshops and practical projects that bridge
                  the gap between academic learning and industry requirements
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-cyan-500/30 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
                <span>
                  Create a collaborative platform that encourages building and
                  sharing ideas across diverse student backgrounds
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-cyan-500/30 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
                <span>
                  Provide networking opportunities with technology industry
                  leaders and professionals
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-cyan-500/30 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
                <span>
                  Inspire innovation through creativity, critical thinking, and
                  solving real-world technological challenges
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
        {/* Why Join MLSC */}
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
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {whyJoinReasons.map((reason, index) => (
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
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {reason.title}
              </h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3
            className="text-3xl font-bold mb-6 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Join Us and Make a Difference
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s join a community that changes things and creates
            opportunities. Together, we&apos;ll learn, innovate, and lead the
            way in technological advancement.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
