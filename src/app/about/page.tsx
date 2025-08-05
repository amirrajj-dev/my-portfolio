import Hero from "@/components/about/hero/Hero";
import Journey from "@/components/about/journey/Journey";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Amirhosein Rajaei",
  description:
    "Get to know Amirhosein Rajaei — a full-stack developer passionate about building elegant UIs, efficient backends, and real-time experiences. Learn more about my journey, skills, and what drives my work beyond the code.",
  keywords: [
    "Amirhosein Rajaei",
    "about Amirhosein",
    "full-stack developer bio",
    "developer journey",
    "web development",
    "React developer",
    "Node.js developer",
    "portfolio",
    "coding journey",
  ]
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-base-100">
      <Hero/>
    <Journey/>
    </main>
  );
};

export default AboutPage;