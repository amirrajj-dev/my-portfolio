"use client";

import { cardVariants } from "@/data/varients";
import { motion } from "framer-motion";;

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
      custom={index}
      variants={cardVariants}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotate: index % 2 === 0 ? -5 : 5 }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`bg-base-300/90 p-6 rounded-lg w-full md:w-1/2 ${index % 2 === 0 ? "text-left" : "text-right"} relative ${index % 2 === 0 ? "border-l-2 border-primary/80" : "border-r-2 border-accent/80"} shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_28px_rgba(255,255,255,0.2)] transition-all duration-300`}
      >
        <motion.div
          className={`absolute ${index % 2 === 0 ? "left-[-0.9rem] bg-primary" : "right-[-0.9rem] bg-accent"} top-1/2 w-6 h-6 rounded-full transform -translate-y-1/2`}
          animate={{
            scale: [1, 1.4, 1],
            boxShadow: [
              "0 0 0 rgba(255,255,255,0)",
              "0 0 10px rgba(255,255,255,0.6)",
              "0 0 0 rgba(255,255,255,0)",
            ],
            transition: { duration: 1.8, repeat: Infinity },
          }}
          whileHover={{ boxShadow: "0 0 14px rgba(255,255,255,0.8)" }}
        />
        <h3 className="text-lg font-semibold text-accent mb-3">{title}</h3>
        <p className="text-base-content/80 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default JourneyCard;