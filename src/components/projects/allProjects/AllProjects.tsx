"use client"
import ProjectCard from "@/components/shared/ProjectCard"
import { allProjects } from "@/data/data"
import { motion } from "framer-motion"

const AllProjects = () => {
  return (
     <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 py-10"
        initial="hidden"
        animate="visible"
      >
        {allProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
  )
}

export default AllProjects