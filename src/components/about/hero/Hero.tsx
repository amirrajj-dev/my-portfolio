"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  aboutPageLetterVariants,
  aboutPageSectionVariants,
  aboutPageSubtitleVariants,
  aboutPageTextVariants,
} from "@/data/varients";
import { useRouter } from "next/navigation";
import BackgroundParticles from "@/components/shared/BackgroundParticles";
import { FaGithub, FaHandshake, FaRocket } from "react-icons/fa";

const Hero = () => {
  const router = useRouter();
  const goToContactForm = () => {
    router.replace("/#contact", {
      scroll: true,
    });
  };

  return (
    <motion.section
      custom={1}
      initial="hidden"
      animate={"visible"}
      // viewport={{ once: true, amount: 0.3 }}
      variants={aboutPageSectionVariants}
      className="relative min-h-[80vh] bg-gradient-to-br from-base-300/90 to-base-200/80 backdrop-blur-lg flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <BackgroundParticles count={12} speed={3.5} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          custom={2}
          variants={aboutPageSectionVariants}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary mb-4 drop-shadow-[0_5px_12px_rgba(0,0,0,0.6)]"
        >
          {Array.from("About").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              // whileInView="visible"
              // viewport={{ once: true }}
              variants={aboutPageTextVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {"  "}
          {Array.from("Me").map((char, index) => (
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
        <motion.h2
          variants={aboutPageSubtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl md:text-2xl text-base-content mb-6"
        >
          {Array.from("Curious Builder, Coffee Coder").map((char, index) => (
            <motion.span key={index} variants={aboutPageLetterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          custom={3}
          variants={aboutPageSectionVariants}
          className="text-lg md:text-xl text-base-content/50 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Hi, I’m Amirhosein, a full-stack developer from Tabriz, currently
          based in Rasht. I’m passionate about building efficient and scalable
          web applications using the latest technologies. Known for being a fast
          learner and a reliable problem solver, I approach every challenge with
          discipline and a growth mindset. I continuously strive to improve
          myself, even if it’s just by 1% each day. Outside of work, I enjoy
          bodybuilding, watching movies and series, and immersing myself in
          music — all of which help me maintain balance and stay inspired.
        </motion.p>
        <motion.div
          custom={4}
          variants={aboutPageSectionVariants}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          <span className="badge badge-outline badge-primary text-xs">
            ☕ Nescafé-Powered
          </span>
          <span className="badge badge-outline badge-accent text-xs">
            🌙 Late Night Coder
          </span>
          <span className="badge badge-outline badge-secondary text-xs">
            🎧 Music Addict
          </span>
          <span className="badge badge-outline badge-primary text-xs">
            🚀 Always Improving
          </span>
          <span className="badge badge-outline badge-accent text-xs">
            💡 Problem Solver
          </span>
        </motion.div>

        <motion.div
          custom={5}
          variants={aboutPageSectionVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="btn btn-accent btn-lg w-full sm:w-auto text-primary-content font-semibold hover:bg-accent-focus hover:shadow-[0_0_16px_rgba(255,255,255,0.8)] animate-pulse hover:animate-none transition-all duration-300"
          >
            <FaRocket className="mr-2" size={24} />
            Explore My Projects
          </Link>
          <Link
            href="https://github.com/amirrajj-dev"
            className="btn btn-soft btn-accent btn-lg w-full sm:w-auto"
          >
            <FaGithub className="mr-2" size={24} />
            View My GitHub
          </Link>
          <button
            onClick={() => goToContactForm()}
            className="btn btn-outline btn-primary btn-lg w-full sm:w-auto"
          >
            <FaHandshake className="mr-2" size={24} />
            Let’s Connect
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
