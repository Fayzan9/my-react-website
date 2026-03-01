import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
  
  export default function Projects() {
    return (
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    );
  }