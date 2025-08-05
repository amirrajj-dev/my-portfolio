import Link from "next/link";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { iconVariants, sectionVariants } from "@/data/varients";

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  role: string;
  techs: string[];
  href: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  href,
  image,
  name,
  role,
  techs,
  liveLink
}) => {
  const pathname = usePathname()
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.05}
      transitionSpeed={400}
      className="relative rounded-2xl shadow-none sm:shadow-md cursor-pointer"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="relative bg-base-100 bg-opacity-70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 w-full sm:max-w-md sm:mx-auto shadow-[...]"
      >
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-base-200/50 via-base-300/20 to-accent/20 rounded-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col">
          {/* Image with smooth hover scale & subtle rotation */}
          <motion.div
            whileHover={{ scale: 1.07, rotate: 1.5 }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
            className="relative overflow-hidden rounded-xl mb-5 shadow-md"
          >
            <Image
              src={image}
              alt={`${name} preview`}
              width={400}
              height={220}
              className="w-full h-[220px] object-cover rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-300/60 to-transparent rounded-xl" />
          </motion.div>

          <h3 className="text-2xl font-extrabold text-base-content mb-2 tracking-tight">
            {name}
          </h3>

          <p className="text-base-content text-sm md:text-base mb-4 leading-relaxed line-clamp-3 min-h-[4.5rem]">
            {description}
          </p>

          <p className="text-base-content/50 text-xs mb-5 tracking-wide uppercase font-semibold">
            <span className="text-accent mr-1">Role:</span>
            {role}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {techs.map((tech, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.25,
                  boxShadow: "0 0 12px rgba(255,255,255,0.6)",
                }}
                className="h-10 flex flex-wrap justify-center gap-3 mb-6 overflow-hidden"
              >
                <Image
                  src={`/techs/${tech}.svg`}
                  alt={`${tech} icon`}
                  className="size-8 object-contain"
                  draggable={false}
                  width={32}
                  height={32}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between gap-3">
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent btn-sm font-semibold rounded-lg px-5 py-2.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] focus:outline-none focus:ring-4 focus:ring-accent/60 transition-shadow duration-300"
            >
              View on GitHub
            </Link>
           {pathname !== "/projects" && (
             <Link
              href="/projects"
              className="btn btn-ghost btn-sm text-accent hover:bg-accent/20 hover:text-accent-focus rounded-lg px-5 py-2.5 transition-colors duration-300"
            >
              View All Projects
            </Link>
           )}
          </div>
          
              {liveLink && (
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary absolute top-4 right-4 btn-sm font-semibold rounded-lg px-5 py-2.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] focus:outline-none focus:ring-4 focus:ring-secondary/60 transition-shadow duration-300"
              >
                Live Demo
                <span className="size-2 rounded-full bg-base-200 animate-pulse"></span>
              </Link>
            )}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
