"use client";

import { aboutPageSectionVariants } from "@/data/varients";
import { motion } from "framer-motion";

const JourneyCard = ({
  description,
  index,
  title,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      custom={index + 8}
      variants={aboutPageSectionVariants}
      className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <div
        className={`bg-base-300/90 p-5 rounded-lg w-full md:w-1/2 text-${index % 2 === 0 ? "left" : "right"} relative border-${index % 2 === 0 ? "l-2 border-primary/80" : "r-2 border-accent/80"} shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)] transition-all duration-300`}
      >
        <motion.div
          className={`absolute ${index % 2 === 0 ? "left-[-0.9rem] bg-primary" : "right-[-0.9rem] bg-accent"} top-1/2 w-6 h-6 rounded-full transform -translate-y-1/2`}
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              "0 0 0 rgba(255,255,255,0)",
              "0 0 8px rgba(255,255,255,0.5)",
              "0 0 0 rgba(255,255,255,0)",
            ],
            transition: { duration: 2, repeat: Infinity },
          }}
          whileHover={{ boxShadow: "0 0 12px rgba(255,255,255,0.7)" }}
        />
        <h3 className="text-lg font-semibold text-accent mb-2">{title}</h3>
        <p className="text-base-content/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default JourneyCard;