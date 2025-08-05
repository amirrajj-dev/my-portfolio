"use client";

import { motion, Variants } from "framer-motion";
import { aboutPageSectionVariants } from "@/data/varients";
import JourneyCard from "./ui/JourneyCard";
import BackgroundParticles from "@/components/shared/BackgroundParticles";
import { journeyItems } from "@/data/data";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Journey = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={aboutPageSectionVariants}
      className="relative min-h-[60vh] py-12 backdrop-blur-xl rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.5)] card-pattern overflow-hidden"
      animate={{
        transition: { duration: 3, repeat: Infinity, repeatType: "reverse" },
      }}
    >
      <BackgroundParticles count={100} />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{opacity : 1 , y : 0}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 80,
          }}
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary mb-12 drop-shadow-[0_5px_12px_rgba(0,0,0,0.6)]"
        >
          My Coding Journey
        </motion.h2>
        <div className="relative">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-primary/60 to-accent/60 transform -translate-x-1/2"
          />
          <motion.div className="space-y-12" variants={containerVariants}>
            {journeyItems.map((item, index) => (
              <JourneyCard
                index={index}
                key={index + 1}
                title={item.title}
                description={item.description}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Journey;