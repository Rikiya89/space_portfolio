// Projects.tsx
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/iphone14_clonewebsite.webp"
          title="iPhone 14 Clone 3D Website"
          description="Explore my 3D React portfolio—a symphony of code and design. Every click is a journey, with GSAP animations bringing the experience to life. It’s where my developer story unfolds, one interaction at a time."
          url="https://apple-iphone3d-website.netlify.app/"  // Example project URL
        />
        <ProjectCard
          src="/iphone14_clonewebsite.webp"
          title="iPhone 14 Clone 3D Website"
          description="Explore my 3D React portfolio—a symphony of code and design. Every click is a journey, with GSAP animations bringing the experience to life. It’s where my developer story unfolds, one interaction at a time."
          url="https://apple-iphone3d-website.netlify.app/"  // Example project URL
        />
        <ProjectCard
          src="/iphone14_clonewebsite.webp"
          title="iPhone 14 Clone 3D Website"
          description="Explore my 3D React portfolio—a symphony of code and design. Every click is a journey, with GSAP animations bringing the experience to life. It’s where my developer story unfolds, one interaction at a time."
          url="https://apple-iphone3d-website.netlify.app/"  // Example project URL
        />
        {/* Add other ProjectCards with their respective URLs */}
      </div>
    </div>
  );
};

export default Projects;
