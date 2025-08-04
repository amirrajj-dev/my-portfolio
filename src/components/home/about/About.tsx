"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundParticles from "@/components/shared/BackgroundParticles";
import { sectionVariants, textVariants } from "@/data/varients";

const About: React.FC = () => (
  <motion.section
    custom={0}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={sectionVariants}
    className="relative min-h-[50vh] py-16 px-6 text-center overflow-hidden"
  >
    <BackgroundParticles count={8} speed={4} />

    <div className="relative z-10 max-w-3xl mx-auto">
      <motion.h2
        id="about-heading"
        custom={1}
        variants={sectionVariants}
        className="mb-6 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(0,0,0,0.4)]"
      >
        {Array.from("About Me").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.p
        custom={2}
        variants={sectionVariants}
        className="mx-auto mb-8 max-w-2xl text-base-content text-lg md:text-xl leading-relaxed"
      >
        I’m Amirhosein Rajaei, a passionate full-stack developer crafting modern, scalable web applications
        with TypeScript, React, and Next.js. My focus is on building seamless user experiences with a touch
        of creativity and a lot of code! From dynamic frontends to robust backends, I love bringing ideas to life.
      </motion.p>
      <motion.div
        custom={3}
        variants={sectionVariants}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
        className="inline-block w-full"
      >
        <Link
          href="/about"
          className="btn btn-accent btn-wide btn-lg font-semibold hover:shadow-[0_0_12px_rgba(255,255,255,0.5)] focus:outline-none focus:ring-4 focus:ring-accent/60 rounded"
        >
          More About Me
        </Link>
      </motion.div>
    </div>
  </motion.section>
);

export default About;
