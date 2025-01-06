import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import MdemoImg from "../assets/Mdemoimg.png";
import FdemoImg from "../assets/Fdemoimg.png";

const teamMembers = {
  Leadership: [
    {
      name: "Aditya Singh",
      role: "President",
      image: MdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/aditya-singh-05204b266",
        github: "https://github.com/Aditya2344s",
      },
    },
    {
      name: "Pruthviraj Patil",
      role: "Vice President",
      image: MdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/pruthviraj-patil-390070252",
        github: "https://github.com/Pruthviraj404",
      },
    },
  ],
  Technical: [
    {
      name: "Aadil Inamdar",
      role: "Technical Team",
      image: MdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/aadilinamdar27",
        github: "https://github.com/SnoozeScript",
      },
    },
    {
      name: "Prathamesh Halale",
      role: "Technical Team",
      image: MdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/prathamesh-halale-a275581b8/",
        github: "https://github.com/472022",
      },
    },
    {
      name: "Nehakousar Kaji",
      role: "Technical Team",
      image: FdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/neha-kaji-786450257/",
        github: "https://github.com/hayat1316",
      },
    },
    {
      name: "Shalu Singh",
      role: "Technical Team",
      image: FdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/shalu-singh-01aa29310",
        github: "#",
      },
    },
  ],
  Events: [
    {
      name: "Priyanka Rodrigues",
      role: "Event Coordinator",
      image: FdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/priyanka-r-6145b52b8/",
        github: "#",
      },
    },
    {
      name: "Dhanashree Latkar",
      role: "Event Coordinator",
      image: FdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/dhanashree-latkar-652157272/",
        github: "https://github.com/ldhanuv",
      },
    },
  ],
  "View All": [
    {
      name: "Rajnandan Jadhav",
      role: "Social Media",
      image: MdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/rajnandan-jadhav-82072625b",
        github: "https://github.com/rajjadhav7348",
      },
    },
    {
      name: "Tushar Jadhav",
      role: "Public Relations Officer",
      image: MdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/tushar-jadhav-800b1221b/",
        github: "https://github.com/Tushar0-02",
      },
    },
    {
      name: "Netra Mishrakoti",
      role: "Volunteer",
      image: FdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/netra-mishrakoti-09841525b",
        github: "https://github.com/Netra1328",
      },
    },
    {
      name: "Aniruddh Kumbhar",
      role: "Volunteer",
      image: MdemoImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/aniruddh-kumbhar-7691b92a5",
        github: "https://github.com/aniruddh47",
      },
    },
  ],
};

const TeamCard = ({ member, index, isHovered }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 overflow-hidden">
    <motion.div
      initial={false}
      animate={{ scale: isHovered ? 1.1 : 1 }}
      transition={{ duration: 0.3 }}
      className="relative z-10"
    >
      <div className="relative w-32 h-32 mx-auto mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full rounded-full object-cover border-4 border-teal-400"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-blue-500/20" />
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-2">
        {member.name}
      </h3>
      <p className="text-gray-400 text-lg mb-4">{member.role}</p>
      <div className="flex justify-center space-x-6">
        {member.socials.linkedin && (
          <motion.a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Linkedin size={24} />
          </motion.a>
        )}
        {member.socials.github && member.socials.github !== "#" && (
          <motion.a
            href={member.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: -5 }}
          >
            <Github size={24} />
          </motion.a>
        )}
        <motion.button
          className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <Mail size={24} />
        </motion.button>
      </div>
    </motion.div>
  </div>
);

TeamCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    socials: PropTypes.shape({
      linkedin: PropTypes.string,
      github: PropTypes.string,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isHovered: PropTypes.bool.isRequired,
};

const TeamPage = () => {
  const [activeTab, setActiveTab] = React.useState("Leadership");
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const currentTeam =
    activeTab === "View All"
      ? Object.values(teamMembers).flat()
      : teamMembers[activeTab] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-10"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-400">
              Meet the talented individuals behind our success
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(teamMembers).map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-lg font-semibold py-3 px-8 rounded-xl transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <TeamCard
                  member={member}
                  index={index}
                  isHovered={hoveredCard === index}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamPage;
