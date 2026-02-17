import { backendArchitecture } from "../../lib/data";

export default function BackendArchitecture() {
  return (
    <section id="arquitectura" className="py-20 border-b border-gray-800 scroll-mt-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">/ Arquitectura_Backend</h2>
        <p className="text-gray-400 font-mono">APIs REST, diseño de esquemas y lógica de negocio.</p>
      </div>

      {/* Contenedor estilo Terminal */}
      <div className="bg-gray-950 border border-gray-800 overflow-hidden shadow-2xl">
        
        {/* Barra de título de la terminal */}
        <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
          <span className="ml-2 font-mono text-xs text-gray-500">daniel@server:~/backend-services</span>
        </div>

        <div className="divide-y divide-gray-800/50">
            {backendArchitecture.map((project) => (
            <div key={project.id} className="p-6 hover:bg-gray-900/30 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group">

                {/* Información del proyecto */}
                <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white font-mono group-hover:text-green-400 transition-colors">
                    {project.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-blue-950 text-blue-400 border border-blue-900 font-mono">
                    REST_API
                    </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 max-w-3xl leading-relaxed whitespace-pre-line line-clamp-4 md:line-clamp-none">
                    {project.description.replace(/\*\*/g, '')}
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-500">
                    {project.techStack.map((tech) => (
                    <span key={tech}>#{tech}</span>
                    ))}
                </div>
                </div>

                {/* Botón de acción (Documentación) */}
                <div className="flex-shrink-0 mt-4 md:mt-0">
                <a 
                    href={project.repoUrl} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600 bg-black px-4 py-2 transition-all">
                    <span>Ver_Docs</span>
                    <span className="text-gray-600 group-hover:text-white transition-colors">→</span>
                </a>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}