"use client";

import React from "react";
import { allProjects } from "@/data/data";
import ProjectCard from "@/components/shared/ProjectCard";
import { motion } from "framer-motion";
import Hero from "@/components/projects/hero/Hero";

const ProjectsPage = () => {
  return (
<div>
  <Hero/>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 py-10"
        initial="hidden"
        animate="visible"
      >
        {allProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
</div>
  );
};

export default ProjectsPage;