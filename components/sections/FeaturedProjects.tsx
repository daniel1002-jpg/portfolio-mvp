import { featuredProjects } from '../../lib/data';
import ProjectCard from '../ui/ProjectCard';

export default function FeaturedProjects() {
  return (
    <section id='proyectos' className="py-20 border-b border-gray-800 scroll-mt-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Proyectos_Destacados</h2>
        <p className="text-gray-400 font-mono">Soluciones Full-Stack en producción.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}