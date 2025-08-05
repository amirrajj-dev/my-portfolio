"use client";

import React, { useState } from "react";
import { techStack } from "@/data/data";
import { FaReact, FaServer, FaTools } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { aboutPageSectionVariants, buttonVariants } from "@/data/varients";
import Image from "next/image";
import BackgroundParticles from "@/components/shared/BackgroundParticles";

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 180,
      damping: 14,
    },
  }),
};

const categoryIcons = {
  Frontend: FaReact,
  Backend: FaServer,
  "Tools & Others": FaTools,
};

const Skills = () => {
  const [currentCategory, setCurrentCategory] = useState<
    "Frontend" | "Backend" | "Tools & Others"
  >("Frontend");

  return (
    <motion.section
      custom={0}
      initial="hidden"
      animate="visible"
      variants={aboutPageSectionVariants}
      className="px-6 md:px-12 py-16 relative"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Category Buttons */}
        <motion.div
          className="w-full md:w-1/4 flex flex-col gap-4"
          variants={aboutPageSectionVariants}
          custom={1}
        >
          {techStack.map(({ category }, index) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            const isActive = currentCategory === category;

            return (
              <motion.button
                key={category}
                custom={index}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                onClick={() =>
                  setCurrentCategory(category as typeof currentCategory)
                }
                className={`btn h-16 w-full text-base font-medium justify-start transition-all duration-300 rounded-xl shadow-md ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-accent text-base-content"
                    : "bg-base-300 text-base-content hover:bg-base-200"
                }`}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                <Icon className="text-xl mr-3" />
                {category}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={currentCategory}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-3/4 bg-gradient-to-br from-base-300/90 to-base-200/80 backdrop-blur-lg border border-base-content/10 rounded-2xl shadow-xl p-6 md:p-10"
        >
          <BackgroundParticles count={100}/>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {techStack
              .find((stack) => stack.category === currentCategory)
              ?.techs.map((tech, index) => (
                <motion.div
                  key={tech}
                  custom={index}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.25 }}
                  className="tooltip tooltip-accent transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                  data-tip={tech.toUpperCase()}
                >
                  <Image
                    src={`/techs/${tech}.svg`}
                    alt={`${tech} icon`}
                    width={80}
                    height={80}
                    className="size-30 object-contain"
                    draggable={false}
                  />
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
