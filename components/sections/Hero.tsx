import { personalInfo } from "../../lib/data";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[80vh] border-b border-gray-800 pb-12 pt-20">
      <div className="space-y-8">
        {/* Etiqueta de sistema */}
        <div className="inline-block border border-gray-700 bg-gray-900 px-3 py-1 text-xs font-mono text-gray-400">
          STATUS: ONLINE // READY FOR WORK
        </div>

        {/* Títulos */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            {personalInfo.name}.
          </h1>
          <h2 className="text-2xl md:text-3xl font-mono text-gray-400">
            &gt; {personalInfo.role}
          </h2>
        </div>

        {/* Biografía con estilo de "cita" técnica */}
        <p className="max-w-2xl text-lg text-gray-400 leading-relaxed border-l-2 border-white pl-6">
          {personalInfo.bio}
        </p>

        {/* Botones de acción (Call to Action) */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href="#proyectos" 
            className="bg-white text-black px-8 py-4 font-mono font-bold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            [ EJECUTAR_PROYECTOS ]
          </a>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer" 
            className="border border-gray-600 text-white px-8 py-4 font-mono text-sm hover:border-white transition-colors flex items-center justify-center"
          >
            VER_GITHUB_
          </a>
        </div>
      </div>
    </section>
  );
}