import { useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const NeuralNetworkParticles = ({ parentRef }) => {
  const particles = useMemo(() => {
    const nodeCount = 100;
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      connectionProbability: Math.random(),
      layerDepth: Math.floor(Math.random() * 3),
    }));

    return nodes;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Update the particles' positions based on the parent's dimensions if needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: getParticleColor(particle.layerDepth),
            boxShadow: "0 0 10px rgba(0,255,255,0.3)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1.2, 0],
            x: [
              `${Math.random() * 200 - 100}px`,
              `${Math.random() * 200 - 100}px`,
            ],
            y: [
              `${Math.random() * 200 - 100}px`,
              `${Math.random() * 200 - 100}px`,
            ],
          }}
          transition={{
            delay: Math.random() * 3,
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connection Lines */}
      {particles.map((particle, index) =>
        particles
          .slice(index + 1)
          .filter(() => Math.random() < 0.1)
          .map((connectedParticle) => (
            <motion.div
              key={`connection-${particle.id}-${connectedParticle.id}`}
              className="absolute border-t border-cyan-500/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${Math.sqrt(
                  Math.pow(connectedParticle.x - particle.x, 2) +
                    Math.pow(connectedParticle.y - particle.y, 2)
                )}%`,
                transform: `rotate(${Math.atan2(
                  connectedParticle.y - particle.y,
                  connectedParticle.x - particle.x
                )}rad)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                delay: Math.random() * 3,
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          ))
      )}
    </div>
  );

  function getParticleColor(layerDepth) {
    const colors = [
      "rgba(0, 255, 255, 0.5)", // Input layer - cyan
      "rgba(0, 149, 255, 0.5)", // Hidden layer - blue
      "rgba(103, 58, 183, 0.5)", // Output layer - purple
    ];
    return colors[layerDepth] || colors[0];
  }
};

NeuralNetworkParticles.propTypes = {
  parentRef: PropTypes.object.isRequired, 
};

export default NeuralNetworkParticles;
