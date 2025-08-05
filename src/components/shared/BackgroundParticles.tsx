"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

interface BackgroundParticlesProps {
  count?: number;
  speed?: number;
}

const BackgroundParticles: React.FC<BackgroundParticlesProps> = ({
  count = 25,
  speed = 6,
}) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100, // 0% to 100%
        top: Math.random() * 100, // 0% to 100%
        delay: Math.random() * 3, // seconds
        size: Math.random() * 4 + 2, // 2px - 6px
        blur: Math.random() > 0.5, // some are blurrier
      })),
    [count]
  );

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-10, 10],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: "easeInOut",
            delay: p.delay,
          }}
          className={`absolute rounded-full ${
            p.blur ? "blur-sm opacity-50" : ""
          } shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `radial-gradient(circle, rgba(255,184,108,0.6) 0%, rgba(35,37,48,0.2) 100%)`,
          }}
        />
      ))}
    </>
  );
};

export default BackgroundParticles;