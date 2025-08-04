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
    techs: ["next", "ts", "tailwind", "prisma", "docker"],
    role: "Full-Stack Developer",
  },
  {
    name: "EchoTune",
    description:
      "A vibrant music streaming app with real-time chat and sleek UI.",
    href: "https://github.com/amirrajj-dev/echoTune",
    image: "/projects/echoTune.png",
    techs: ["react", "ts", "tailwind", "node"],
    role: "FUll-Stack Developer",
  },
  {
    name: "Chat-Application",
    description: "A real-time chat powerhouse built with the MERN stack.",
    href: "https://github.com/amirrajj-dev/mern-chat-app",
    image: "/projects/mern-chat-app.png",
    techs: ["mongodb", "express", "react", "node"],
    role: "Full-Stack Developer",
  },
  {
    name: "TaskFlow",
    description:
      "A slick todo app with seamless task management and modern design.",
    href: "https://github.com/amirrajj-dev/TaskFlow",
    image: "/projects/taskFlow.png",
    techs: ["next", "ts", "prisma", "postgres", "tailwind"],
    role: "Full-Stack Developer",
  },
];

export const journeyItems = [
  {
    title: "2019: Spark Ignited",
    description:
      "At 17 in Tabriz, I discovered SoloLearn and wrote my first C++ code on my phone. It felt like unlocking a superpower, building apps with logic alone. ⚽",
  },
  {
    title: "2020: Web Dev Beginnings",
    description:
      "Got my first laptop and dove into HTML, CSS, and JavaScript. Built my first static websites, fueled by Nescafé and late-night curiosity.",
  },
  {
    title: "2021: Full-Stack Leap",
    description:
      "Moved to Rasht for Software Engineering at Gilan University, diving into React, Node.js, and full-stack dev. My laptop became my best friend.",
  },
  {
    title: "2022: Real-Time Challenges",
    description:
      "Tackled WebSocket and Socket.IO to build real-time apps like a chat application. Debugging connections was tough but taught me the power of persistence.",
  },
  {
    title: "2023: Sabzlearn Triumph",
    description:
      "Built Sabzlearn, a full-stack e-learning platform with course management, admin dashboards, and user engagement features—a proud milestone!",
  },
  {
    title: "2024: DevOps Exploration",
    description:
      "Started mastering Docker and CI/CD pipelines, streamlining workflows for projects like TaskFlow. The terminal became my new playground.",
  },
  {
    title: "2025: Graduation & Beyond",
    description:
      "Graduating this summer, I’m chasing DevOps mastery—Docker, Kubernetes, CI/CD—and ready to build scalable systems in a full-time role. ⚽",
  },
  {
    title: "2026: Leading the Future",
    description:
      "Aiming to lead DevOps projects or launch my own startup, building seamless, scalable systems while still coding at 2 AM with Nescafé in hand.",
  },
];

export const techStack = [
  { category: "Frontend", techs: ["html", "css", "js", "react", "next", "ts", "tailwind", "mui", "redux" , "socket.io"] },
  { category: "Backend", techs: ["node", "express", "mongodb", "postgres", "redis", "prisma", "nest", "graphql"] },
  { category: "Tools & Others", techs: ["git", "github", "docker", "linux", "jest" , "react" , "bun" , "vite"] },
];