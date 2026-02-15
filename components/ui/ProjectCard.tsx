// import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  repoUrl: string;        
}

export default function ProjectCard({ title, description, techStack, liveUrl, repoUrl }: ProjectCardProps) {
  return (
    <div className="group border border-gray-800 bg-gray-950 p-6 hover:border-gray-500 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{title}</h3>

      <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
        {description}
      </p>

      {/* Stack tecnológico */}
      <div className="flex flex-wrap gap-2 mb-8">
        {techStack.map((tech) => (
          <span key={tech} className="bg-black border border-gray-800 text-gray-400 text-xs font-mono px-2 py-1 select-none">
            {tech}
          </span>
        ))}
      </div>

      {/* Enlaces (Botones) */}
      <div className="flex gap-4 mt-auto pt-4 border-t border-gray-800">
        {liveUrl && (
          <a 
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-white text-black text-center py-2 px-4 font-mono text-sm font-bold border border-white hover:bg-transparent hover:text-white transition-all duration-300"
          >
            VER_DEMO
          </a>
        )}
        {repoUrl && (
          <a 
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 font-mono text-sm text-gray-500 hover:text-white border border-transparent hover:border-gray-700 transition-colors duration-300"
          >
            &lt;code /&gt;
          </a>
        )}
      </div>
    </div>
  );
}