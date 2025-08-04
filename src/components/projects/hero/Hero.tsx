"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  aboutPageSectionVariants,
  aboutPageTextVariants,
} from "@/data/varients";
import BackgroundParticles from "@/components/shared/BackgroundParticles";
const Hero = () => {
  return (
    <motion.section
      custom={1}
      initial="hidden"
      animate={"visible"}
      variants={aboutPageSectionVariants}
      className="relative min-h-[40vh] bg-gradient-to-br from-base-300/90 to-base-200/80 backdrop-blur-lg flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <BackgroundParticles count={12} speed={3.5} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          custom={2}
          variants={aboutPageSectionVariants}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary mb-4 drop-shadow-[0_5px_12px_rgba(0,0,0,0.6)]"
        >
          {Array.from("My").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={aboutPageTextVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {"  "}
          {Array.from("Projects").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={aboutPageTextVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          custom={3}
          variants={aboutPageSectionVariants}
          className="text-lg md:text-xl text-base-content/50 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          From full-stack apps to side experiments and design-driven builds —
          here’s a showcase of what I’ve crafted (and sometimes debugged at
          3am).
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;