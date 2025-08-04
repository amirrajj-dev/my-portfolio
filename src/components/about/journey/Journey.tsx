"use client";

import { aboutPageSectionVariants } from "@/data/varients";
import { motion } from "framer-motion";
import JourneyCard from "./ui/JourneyCard";
import BackgroundParticles from "@/components/shared/BackgroundParticles";
import { journeyItems } from "@/data/data";

const Journey = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: .1 }}
      variants={aboutPageSectionVariants}
      className="relative min-h-[60vh] py-12 backdrop-blur-xl rounded-xl"
    >
      <BackgroundParticles count={100} speed={100} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          custom={7}
          variants={aboutPageSectionVariants}
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary mb-12 drop-shadow-[0_5px_12px_rgba(0,0,0,0.6)]"
        >
          My Coding Journey
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-primary/60 to-accent/60 transform -translate-x-1/2" />
          <div className="space-y-10">
            {journeyItems.map((item, index) => (
              <JourneyCard
                index={index}
                key={index + 1}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Journey;