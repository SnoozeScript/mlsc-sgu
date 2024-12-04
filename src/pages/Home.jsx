
import { motion } from 'framer-motion';
import { Star, Rocket, Users, Award } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import TeamCard from '../components/TeamCard';

const Home = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Club President",
      image: "/api/placeholder/400/400",
      socials: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emma Chen",
      role: "Technical Lead",
      image: "/api/placeholder/400/400",
      socials: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Raj Patel",
      role: "Community Manager",
      image: "/api/placeholder/400/400",
      socials: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Events Coordinator",
      image: "/api/placeholder/400/400",
      socials: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />

      {/* Events Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-10 bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-4xl font-bold text-center mb-8 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Upcoming Events
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <EventCard
              title="Workshop on Cloud Computing"
              date="December 15, 2024"
              description="Join us for an in-depth workshop on cloud computing and learn how to deploy applications on the cloud."
              link="https://example.com/event1"
            />
            <EventCard
              title="AI & ML Seminar"
              date="December 20, 2024"
              description="Explore the future of AI and Machine Learning in this informative seminar."
              link="https://example.com/event2"
            />
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-10 bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-4xl font-bold text-center mb-12 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Our Team
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                socials={member.socials}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;