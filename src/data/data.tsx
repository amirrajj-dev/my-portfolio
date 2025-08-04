import { FaHome, FaUser, FaCode, FaLaptopCode } from "react-icons/fa";

type Theme =
  | "light"
  | "dark"
  | "cupcake"
  | "coffee"
  | "night"
  | "forest"
  | "retro"
  | "halloween"
  | "dracula";

export const themeItems: {
  value: Theme;
}[] = [
  { value: "light" },
  { value: "dark" },
  { value: "coffee" },
  { value: "cupcake" },
  { value: "night" },
  { value: "halloween" },
  { value: "retro" },
  { value: "forest" },
  { value: "dracula" },
];

export const navItems = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "About", href: "/about", icon: <FaUser /> },
  { name: "Projects", href: "/projects", icon: <FaCode /> },
  { name: "Skills", href: "/skills", icon: <FaLaptopCode /> },
];


export const sampleCode = `import { useState, useEffect } from 'react';

const Portfolio = () => {
  const [skills] = useState(['React', 'Next.js', 'TypeScript']);

  useEffect(() => {
    console.log('Portfolio component mounted');
  }, []);

  return (
    <div className=\"bg-base-100 p-6 rounded-xl shadow-xl\">
      <h1 className=\"text-3xl font-extrabold text-primary mb-2\">Hi, I'm Amirhosein!</h1>
      <p className=\"text-secondary text-sm\">Skills: {skills.join(', ')}</p>
      <button className=\"btn btn-accent btn-sm mt-4\">Contact Me</button>
    </div>
  );
};

export default Portfolio;`;

export const featuredProjects = [
  {
    name: "Sabzlearn",
    description:
      "A cutting-edge e-learning platform with dynamic courses and a scalable backend.",
    href: "https://github.com/amirrajj-dev/sabzlearn-refactored",
    image: "/projects/sabzlearn.png",
    techs: ["nextjs", "ts", "tailwind", "prisma", "docker"],
    role: "Full-Stack Developer",
  },
  {
    name: "EchoTune",
    description:
      "A vibrant music streaming app with real-time chat and sleek UI.",
    href: "https://github.com/amirrajj-dev/echoTune",
    image: "/projects/echoTune.png",
    techs: ["react", "ts", "tailwind", "nodejs"],
    role: "FUll-Stack Developer",
  },
  {
    name: "Chat-Application",
    description: "A real-time chat powerhouse built with the MERN stack.",
    href: "https://github.com/amirrajj-dev/mern-chat-app",
    image: "/projects/mern-chat-app.png",
    techs: ["mongodb", "express", "react", "nodejs"],
    role: "Full-Stack Developer",
  },
  {
    name: "TaskFlow",
    description:
      "A slick todo app with seamless task management and modern design.",
    href: "https://github.com/amirrajj-dev/TaskFlow",
    image: "/projects/taskFlow.png",
    techs: ["nextjs", "ts", "prisma", "postgres", "tailwind"],
    role: "Full-Stack Developer",
  },
];