"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/shared/ProjectCard";
import { featuredProjects } from "@/data/data";
import { sectionVariants } from "@/data/varients";

const FeaturedProjects = () => {
  return (
    <motion.section
      custom={1}
      initial="hidden"
      animate="visible"
      // viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="p-6 py-16 bg-gradient-to-br from-base-300/90 to-base-200/80 relative overflow-hidden"
    >
      <div className="relative z-10">
        <motion.h2
          custom={2}
          variants={sectionVariants}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary text-center mb-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
        >
          Featured Projects
        </motion.h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full items-stretch">
          {featuredProjects.map(
            ({ description, href, image, name, role, techs }, index) => (
              <ProjectCard
                description={description}
                href={href}
                image={image}
                name={name}
                role={role}
                techs={techs}
                key={index + 1}
              />
            )
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;