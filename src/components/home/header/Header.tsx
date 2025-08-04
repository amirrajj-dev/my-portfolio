"use client";
import CodeEditor from "./ui/CodeEditor";
import Intro from "./ui/Intro";
import BackgroundParticles from "@/components/shared/BackgroundParticles";

const Header = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-base-300/90 to-base-200/80 backdrop-blur-lg flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
     <BackgroundParticles count={12} speed={10} />

      <div className="flex flex-col p-4 lg:flex-row items-center justify-center w-full max-w-7xl gap-10 lg:gap-16">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          <Intro />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[900px]">
            <CodeEditor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
