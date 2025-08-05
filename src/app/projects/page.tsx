import Hero from "@/components/projects/hero/Hero";
import { Metadata } from "next";
import AllProjects from "@/components/projects/allProjects/AllProjects";

export const metadata: Metadata = {
  title: "Projects | Amirhosein Rajaei",
  description:
    "Explore a collection of projects built by Amirhosein Rajaei — from real-time apps to sleek UIs. Each project reflects a passion for clean code, modern stacks, and solving real-world problems with tech.",
  keywords: [
    "Amirhosein Rajaei projects",
    "developer portfolio",
    "web development projects",
    "React projects",
    "Next.js projects",
    "Node.js apps",
    "real-time apps",
    "full-stack portfolio",
    "modern UI",
  ]
};

const ProjectsPage = () => {
  return (
    <div>
      <Hero />
      <AllProjects />
    </div>
  );
};

export default ProjectsPage;
