import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Microsoft Learn Student Club (MLSC)?",
      answer:
        "MLSC is a student-driven initiative aimed at fostering a community of tech enthusiasts, innovators, and learners passionate about technology and collaboration.",
    },
    {
      question: "Who can join the MLSC?",
      answer:
        "Anyone with a passion for learning and exploring technology can join, regardless of their skill level or academic background.",
    },
    {
      question: "What activities does MLSC organize?",
      answer:
        "We host workshops, hackathons, networking events, and hands-on sessions covering topics like AI, Cloud Computing, App Development, and more.",
    },
    {
      question: "Is MLSC suitable for beginners?",
      answer:
        "Absolutely! We cater to all skill levels, from beginners to advanced learners. Our goal is to create an inclusive environment where everyone can thrive.",
    },
    {
      question: "Can I collaborate with MLSC members on personal projects?",
      answer:
        "Yes! MLSC is a collaborative platform, and we encourage members to work together on personal or innovative projects.",
    },
    {
      question: "Are there any membership fees?",
      answer:
        "No, joining MLSC is completely free. We believe in creating an inclusive community accessible to everyone.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-5xl font-bold mb-4 
            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Have questions about MLSC? We’ve got you covered. Explore our FAQs
            to learn more about the club and how you can be part of this vibrant
            community.
          </p>
        </motion.div>

        {/* FAQ List */}
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
          className="max-w-4xl mx-auto space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                <ChevronDown
                  className={`transition-transform duration-300 text-cyan-400 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  size={24}
                />
              </div>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-gray-300 text-lg leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
