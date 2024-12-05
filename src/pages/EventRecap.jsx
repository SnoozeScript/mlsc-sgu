import { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Star,
  Clock,
  BookOpen,
  Medal,
} from "lucide-react";

const EventRecap = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  const eventHighlights = [
    {
      title: "Data Science Summit 2024",
      date: "June 15, 2024",
      totalParticipants: 250,
      keyAchievements: [
        "Hosted 5 industry expert keynote sessions",
        "Conducted 3 hands-on workshops",
        "Launched 10 innovative student projects",
      ],
      topPerformers: [
        {
          name: "Aisha Patel",
          achievement: "Best Machine Learning Project",
          award: "Gold Medal",
        },
        {
          name: "Rohan Sharma",
          achievement: "Most Innovative Data Visualization",
          award: "Silver Medal",
        },
      ],
    },
  ];

  const photoGalleries = [
    {
      title: "Workshop Moments",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
      ],
    },
    {
      title: "Networking Session",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl font-bold mb-4 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Event Recap
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of our recent Data Science Summit 2024,
            highlighting the incredible achievements, insights, and memories
            from our most successful event yet.
          </p>
        </motion.div>

        {/* Event Highlights */}
        {eventHighlights.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl 
            border border-white/10 p-8 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Event Details */}
              <div>
                <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                  {event.title}
                </h2>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-cyan-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-cyan-400" />
                    <span>{event.totalParticipants} Participants</span>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                    Key Achievements
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    {event.keyAchievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Star className="text-yellow-400 shrink-0" size={20} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Top Performers */}
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                  Top Performers
                </h3>
                <div className="space-y-4">
                  {event.topPerformers.map((performer, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-700 rounded-lg p-4 flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-white">
                          {performer.name}
                        </h4>
                        <p className="text-gray-400">{performer.achievement}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Medal
                          className={
                            idx === 0 ? "text-yellow-400" : "text-gray-500"
                          }
                          size={32}
                        />
                        <span className="font-semibold">{performer.award}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h2
            className="text-3xl font-bold text-center mb-8 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Event Gallery
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {photoGalleries.map((gallery, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl 
                border border-white/10 p-6"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  {gallery.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {gallery.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      onClick={() => setSelectedGallery({ gallery, imgIndex })}
                      className="cursor-pointer hover:opacity-80 transition"
                    >
                      <img
                        src={img}
                        alt={`${gallery.title} ${imgIndex + 1}`}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Event Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-2xl 
          border border-white/10 p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">
            Event Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Users className="text-cyan-400 mb-4" size={48} />
              <div className="text-3xl font-bold mb-2">250+</div>
              <div className="text-gray-400">Participants</div>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="text-cyan-400 mb-4" size={48} />
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-gray-400">Learning Sessions</div>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="text-cyan-400 mb-4" size={48} />
              <div className="text-3xl font-bold mb-2">10</div>
              <div className="text-gray-400">Innovative Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventRecap;
