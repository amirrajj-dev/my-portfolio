import { Metadata } from "next";
import Header from "@/components/home/header/Header";
import About from "@/components/home/about/About";
import Projects from "@/components/home/projects/FeaturedProjects";
import Contact from "@/components/home/contact/ui/Contact";
import Footer from "@/components/home/footer/Footer";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Amirhosein Rajaei",
  description:
    "Hi, I'm Amirhosein Rajaei — a full-stack developer from Tabriz building modern, high-performance web apps with React, Node.js, and Next.js. From real-time projects like Sabzlearn to pixel-perfect UIs, this is where code meets creativity (and coffee).",

  keywords: [
    "Amirhosein Rajaei",
    "full-stack developer",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "DevOps",
    "portfolio",
    "web development",
  ]
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-base-100">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </main>
  );
}
