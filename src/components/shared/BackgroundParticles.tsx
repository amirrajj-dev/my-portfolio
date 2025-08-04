"use client";
import { motion } from "framer-motion";

interface BackgroundParticlesProps {
  count?: number;
  speed?: number;
}

const BackgroundParticles: React.FC<BackgroundParticlesProps> = ({
  count = 8,
  speed = 4,
}) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-10, 10],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute bg-gradient-to-r from-primary/30 to-accent/30 size-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </>
  );
};

export default BackgroundParticles;