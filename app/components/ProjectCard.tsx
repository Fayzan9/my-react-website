type ProjectCardProps = {
    title: string;
    description: string;
    tech: string[];
    link: string;
  };
  
  export default function ProjectCard({
    title,
    description,
    tech,
    link,
  }: ProjectCardProps) {
    return (
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition duration-300">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
  
        <p className="text-gray-400 mb-4">{description}</p>
  
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-sm bg-zinc-800 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
  
        <a
          href={link}
          className="text-white underline hover:text-gray-300"
        >
          View Project
        </a>
      </div>
    );
  }