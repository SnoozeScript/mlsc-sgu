import { motion } from "framer-motion";

const MicrosoftLogos = () => {
  const microsoftLogos = [
    { name: "Azure", path: "/azure.svg" },
    { name: "Teams", path: "/teams.svg" },
    { name: "Office", path: "/office.svg" },
    { name: "Visual Studio", path: "/visualstudio.svg" },
    { name: "Power BI", path: "/powerbi.svg" },
    { name: "Edge", path: "/edge.svg" },
    { name: "Onedrive", path: "/onedrive.svg" },
    { name: "Sql", path: "/sql.svg" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {microsoftLogos.map((logo, index) => (
        <motion.div
          key={`${logo.name}-${index}`}
          className="absolute w-16 h-16 opacity-100"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <img
            src={logo.path}
            alt={`${logo.name} Logo`}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MicrosoftLogos;
