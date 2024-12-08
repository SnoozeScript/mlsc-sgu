import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

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
  Other: [
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

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState("Leadership");

  // Fallback if the activeTab doesn't match any keys in teamMembers
  const currentTeam = teamMembers[activeTab] || [];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-10"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500"
          >
            Team Members
          </motion.h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(teamMembers).map((tab) => (
              <button
                key={tab}
                className={`text-lg font-semibold py-2 px-6 rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-teal-500 text-white"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-teal-400 text-center">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-center">{member.role}</p>
                  <div className="mt-4 flex justify-center space-x-6">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-500 transition-all duration-300"
                      >
                        <motion.div whileHover={{ scale: 1.2 }}>
                          <Linkedin size={24} />
                        </motion.div>
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-500 transition-all duration-300"
                      >
                        <motion.div whileHover={{ scale: 1.2 }}>
                          <Github size={24} />
                        </motion.div>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamPage;
