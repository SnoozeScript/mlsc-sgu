import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageCircle, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated form submission
    setTimeout(() => {
      alert("Thanks for reaching out!");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl font-bold text-center mb-12 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Contact Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl 
            border border-white/10 space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="text-cyan-400" size={28} />
                <span>Microsoft Student Learn Club, SGU Campus</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-cyan-400" size={28} />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-cyan-400" size={28} />
                <span>contact@mlsc.sgu.edu</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl 
              border border-white/10 space-y-6"
            >
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block mb-2 text-cyan-400 flex items-center"
                >
                  <User className="mr-2" size={20} /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-gray-700 text-white 
                  rounded-lg border border-white/10 focus:border-cyan-400 
                  focus:ring-2 focus:ring-cyan-400/50 transition"
                  required
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block mb-2 text-cyan-400 flex items-center"
                >
                  <Mail className="mr-2" size={20} /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-gray-700 text-white 
                  rounded-lg border border-white/10 focus:border-cyan-400 
                  focus:ring-2 focus:ring-cyan-400/50 transition"
                  required
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block mb-2 text-cyan-400 flex items-center"
                >
                  <MessageCircle className="mr-2" size={20} /> Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 bg-gray-700 text-white 
                  rounded-lg border border-white/10 focus:border-cyan-400 
                  focus:ring-2 focus:ring-cyan-400/50 transition"
                  rows="4"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full p-3 rounded-lg transition duration-300 
                flex items-center justify-center space-x-2 
                ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                }`}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
