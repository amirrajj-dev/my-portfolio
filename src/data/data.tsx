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
  {
    category: "Frontend",
    techs: [
      "html",
      "css",
      "js",
      "react",
      "next",
      "ts",
      "tailwind",
      "mui",
      "redux",
      "socket.io",
      "bootstrap"
    ],
  },
  {
    category: "Backend",
    techs: [
      "node",
      "express",
      "mongodb",
      "postgres",
      "redis",
      "prisma",
      "nest",
      "graphql",
    ],
  },
  {
    category: "Tools & Others",
    techs: [
      "git",
      "github",
      "docker",
      "linux",
      "jest",
      "react",
      "bun",
      "vite",
      "expo",
      "framer-motion"
    ],
  },
];

export const allProjects = [
  {
    name: "Sabzlearn",
    description:
      "A cutting-edge e-learning platform with dynamic courses and a scalable backend.",
    href: "https://github.com/amirrajj-dev/sabzlearn-refactored",
    image: "/projects/sabzlearn.png",
    techs: ["next", "ts", "tailwind", "prisma", "docker"],
    role: "Full-Stack Developer",
    liveLink: "https://sabzlearn.onrender.com",
  },
  {
    name: "EchoTune",
    description:
      "A vibrant music streaming app with real-time chat and sleek UI.",
    href: "https://github.com/amirrajj-dev/echoTune",
    image: "/projects/echoTune.png",
    techs: ["react", "ts", "tailwind", "framer-motion"],
    role: "FUll-Stack Developer",
    liveLink: "https://echotune-i7jx.onrender.com",
  },
  {
    name: "Chat-Application",
    description: "A real-time chat powerhouse built with the MERN stack.",
    href: "https://github.com/amirrajj-dev/mern-chat-app",
    image: "/projects/mern-chat-app.png",
    techs: ["mongodb", "express", "react", "node"],
    role: "Full-Stack Developer",
    liveLink: "https://mern-chat-app-pvv3.onrender.com",
  },
  {
    name: "TaskFlow",
    description:
      "A slick todo app with seamless task management and modern design.",
    href: "https://github.com/amirrajj-dev/TaskFlow",
    image: "/projects/taskFlow.png",
    techs: ["next", "ts", "prisma", "postgres", "framer-motion"],
    role: "Full-Stack Developer",
    liveLink: "https://task-flow-tau-eight.vercel.app/",
  },
  {
    name: "Rn-Todo-App",
    description:
      "full-stack mobile app for task and notification management, built with React Native, Expo, and TypeScript.",
    href: "https://github.com/amirrajj-dev/rn-todo-app",
    image: "/projects/rn-todo-app.jpg",
    techs: ["react", "expo", "ts", "mongodb"],
    role: "Full-Stack Developer",
    liveLink: "https://task-flow-tau-eight.vercel.app/",
  },
  {
    name: "Admin-Dashboard",
    description:
      "A professional and feature-rich admin dashboard built with React, TypeScript, Tailwind CSS, and several other powerful libraries., and TypeScript.",
    href: "https://github.com/amirrajj-dev/rn-todo-app",
    image: "/projects/admin-dashboard.png",
    techs: ["react", "ts", "framer-motion"],
    role: "Full-Stack Developer",
    liveLink: "https://super-professional-admin-dashboard.vercel.app",
  },
    {
    name: "Next-Social",
    description:
      "A professional and feature-rich admin dashboard built with React, TypeScript, Tailwind CSS, and several other powerful libraries., and TypeScript.",
    href: "https://github.com/amirrajj-dev/next-social",
    image: "/projects/next-social.png",
    techs: ["react", "next", "mongodb", "node"],
    role: "Full-Stack Developer",
    liveLink: "",
  },
   {
    name: "My-Portfolio",
    description:
      "My personal portfolio website, showcasing my skills, projects, and journey. Built with modern technologies and designed for a smooth, responsive user experience.",
    href: "https://github.com/amirrajj-dev/my-portfolio",
    image: "/projects/portfolio.png",
    techs: ["ts", "next", "framer-motion", "daisyui"],
    role: "Full-Stack Developer",
    liveLink: "https://my-portfolio-ten-vert-87.vercel.app",
  }
];