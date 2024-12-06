import { useState } from "react";
import {
  ArrowLeft,
  Trophy,
  Users,
  Presentation,
  Video,
  FileText,
  MapPin,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const DataScienceSummitRecap = () => {
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);

  const summitHighlights = [
    {
      title: "Keynote: The Future of AI",
      speaker: "Dr. Amara Singh, Chief AI Scientist at TechInnovate",
      description:
        "A groundbreaking presentation exploring the intersection of artificial intelligence, machine learning, and ethical technology development.",
    },
    {
      title: "Panel: Responsible AI Deployment",
      speakers: ["Dr. Elena Rodriguez", "Michael Chen", "Sarah Thompson"],
      description:
        "Leading experts discussed the critical challenges and opportunities in implementing AI technologies across various industries.",
    },
    {
      title: "Workshop: Advanced Machine Learning Techniques",
      speaker: "Prof. James Wu, Stanford University",
      description:
        "An intensive deep-dive into cutting-edge machine learning algorithms and their practical applications in real-world scenarios.",
    },
  ];

  const eventStats = [
    { icon: <Users />, value: "350+", label: "Attendees" },
    { icon: <Presentation />, value: "25", label: "Sessions" },
    { icon: <Trophy />, value: "3", label: "Innovation Awards" },
  ];

  const resourceLinks = [
    {
      icon: <Video />,
      title: "Keynote Recording",
      description: "Full recording of the summit's opening keynote",
      link: "#",
    },
    {
      icon: <FileText />,
      title: "Presentation Slides",
      description: "Downloadable slides from all major presentations",
      link: "#",
    },
  ];

  const galleryImages = [
    {
      src: "/recapimg2.jpg",
      alt: "Keynote Session",
      description: "Dr. Amara Singh delivering the opening keynote",
    },
    {
      src: "/recapimg1.jpg",
      alt: "Panel Discussion",
      description: "Expert panel on AI ethics and deployment",
    },
    {
      src: "/recapimg2.jpg",
      alt: "Networking Session",
      description: "Attendees networking during break",
    },
    {
      src: "/recapimg1.jpg",
      alt: "Workshop",
      description: "Hands-on machine learning workshop",
    },
  ];

  const attendeeTestimonials = [
    {
      name: "Rajesh Kumar",
      role: "Data Scientist, TechGiant Solutions",
      quote:
        "An incredible event that provided deep insights into the latest AI technologies and ethical considerations.",
      rating: 5,
    },
    {
      name: "Sarah Miller",
      role: "AI Research Lead, InnovateAI",
      quote:
        "The workshops were extremely practical, offering real-world applications of advanced machine learning techniques.",
      rating: 5,
    },
  ];

  const handleNextImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setCurrentGalleryImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };
  const navigate = useNavigate();
  const handleBackToEvents = () => {
    navigate("/events"); // Navigate to the '/events' route
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <button
              className="flex items-center text-cyan-400 hover:text-cyan-300 mb-4"
              onClick={handleBackToEvents}
            >
              <ArrowLeft className="mr-2" /> Back to Events
            </button>
            <h1
              className="text-5xl font-bold mb-4 
              bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Data Science Summit 2024
            </h1>
            <p className="text-gray-400 text-xl">
              A landmark event exploring the frontiers of data science and
              artificial intelligence
            </p>
          </div>

          {/* Event Overview */}
          <section className="bg-gray-800 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              Event Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {summitHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition"
                >
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    {highlight.speaker || highlight.speakers?.join(", ")}
                  </p>
                  <p className="text-gray-400">{highlight.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Event Statistics */}
          <section className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {eventStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-2xl p-6 text-center 
                  hover:bg-gray-700 transition flex flex-col items-center"
                >
                  <div className="text-cyan-400 mb-4">{stat.icon}</div>
                  <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section className="mb-12">
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-cyan-400">
                  Event Gallery
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={handlePrevImage}
                    className="text-cyan-400 hover:bg-gray-700 p-2 rounded-full transition"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="text-cyan-400 hover:bg-gray-700 p-2 rounded-full transition"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
              <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                <img
                  src={galleryImages[currentGalleryImage].src}
                  alt={galleryImages[currentGalleryImage].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <p className="text-white text-center">
                    {galleryImages[currentGalleryImage].description}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGalleryImage(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentGalleryImage
                        ? "bg-cyan-400"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Attendee Testimonials */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">
              Attendee Experiences
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {attendeeTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition"
                >
                  <div className="flex items-center mb-4">
                    <Quote className="text-cyan-400 mr-4" />
                    <div>
                      <h3 className="font-semibold text-cyan-400">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Event Location */}
          <section className="bg-gray-800 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              Event Location
            </h2>
            <div className="flex items-center space-x-4 mb-4">
              <MapPin className="text-cyan-400" size={24} />
              <div>
                <h3 className="font-semibold">Tech Conference Center</h3>
                <p className="text-gray-400">Hyderabad, India</p>
              </div>
            </div>
            <div className="bg-gray-700 rounded-xl overflow-hidden">
              <img
                src="/api/placeholder/1200/400"
                alt="Event Venue"
                className="w-full h-64 object-cover"
              />
            </div>
          </section>

          {/* Resources */}
          <section className="bg-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              Event Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resourceLinks.map((resource, index) => (
                <a
                  href={resource.link}
                  key={index}
                  className="bg-gray-700 rounded-xl p-6 
                  hover:bg-gray-600 transition flex items-center space-x-4"
                >
                  <div className="text-cyan-400">{resource.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">
                      {resource.title}
                    </h3>
                    <p className="text-gray-400">{resource.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataScienceSummitRecap;
