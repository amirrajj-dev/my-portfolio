import Hero from "@/components/skills/hero/Hero";
import Skills from "@/components/skills/skills/Skills";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Skills | Amirhosein Rajaei",
  description:
    "From wrangling frontend layouts to debugging backend logic, here's a curated stack of tools Amirhosein Rajaei uses to build clean, fast, and scalable web apps. Explore the technologies behind the work.",
  keywords: [
    "Amirhosein Rajaei skills",
    "developer skills",
    "tech stack",
    "web development skills",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "frontend developer",
    "backend developer",
    "full-stack developer",
  ]
};



const SkillsPage = () => {

  return (
    <main className="min-h-screen bg-base-100 relative overflow-hidden">
      <Hero />
      <Skills/>
    </main>
  );
};

export default SkillsPage;
