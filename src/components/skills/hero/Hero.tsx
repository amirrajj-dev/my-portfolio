"use client";
import React from "react";
import { motion } from "framer-motion";
import { aboutPageSectionVariants } from "@/data/varients";
import Link from "next/link";
import { FaHandshake, FaRocket } from "react-icons/fa";
import BackgroundParticles from "@/components/shared/BackgroundParticles";
import { useRouter } from "next/navigation";

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
      variants={aboutPageSectionVariants}
      className="p-6 bg-gradient-to-br from-base-300/90 to-base-200/80 backdrop-blur-xl py-10 rounded-xl overflow-hidden"
    >
      <BackgroundParticles count={14} speed={2.8} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          custom={2}
          variants={aboutPageSectionVariants}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary mb-6"
        >
          My Tech Stack
        </motion.h1>
        <motion.p
          custom={3}
          variants={aboutPageSectionVariants}
          className="text-lg md:text-xl text-base-content/80 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Whether it’s wrestling flexbox or untangling backend logic, these are
          the tools I use to keep my apps fast, clean, and kinda cool. The techs
          I break, fix, and brag about.
        </motion.p>
        <motion.div
          custom={4}
          variants={aboutPageSectionVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="btn btn-accent btn-lg w-full sm:w-auto font-semibold hover:shadow-[0_0_16px_rgba(255,255,255,0.8)] animate-pulse hover:animate-none transition-all duration-300"
          >
            <FaRocket className="mr-2" size={24} />
            Explore My Projects
          </Link>
          <button onClick={()=>goToContactForm()} className="btn w-full sm:w-auto btn-soft btn-primary btn-lg">
            <FaHandshake className="mr-2" size={24} />
            Let’s Connect
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
