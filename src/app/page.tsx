import Header from "@/components/home/header/Header";
import About from "@/components/home/about/About";
import Projects from "@/components/home/projects/FeaturedProjects";
import Contact from "@/components/home/contact/ui/Contact";
import Footer from "@/components/home/footer/Footer";
import { ToastContainer } from "react-toastify";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-base-100">
      <Header />
      <About />
     <Projects/>
     <Contact/>
     <Footer/>
     <ToastContainer/>
    </main>
  );
}
