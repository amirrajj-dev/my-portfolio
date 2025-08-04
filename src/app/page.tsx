"use client"

import Header from "@/components/home/header/Header";
import About from "@/components/home/about/About";
import Projects from "@/components/home/projects/FeaturedProjects";
import Contact from "@/components/home/contact/ui/Contact";
import Footer from "@/components/home/footer/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-base-100">
      <Header />
      <About />
     <Projects/>
     <Contact/>
     <Footer/>
    </main>
  );
}
