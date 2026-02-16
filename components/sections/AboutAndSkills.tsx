import { aboutMe, techStack } from "../../lib/data";

export default function AboutAndSkills() {
  return (
    <section id="stack" className="py-20 border-b border-gray-800 scroll-mt-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">/ Sobre_Mí</h2>
            <div className="h-1 w-20 bg-white"></div>
          </div>

          <div className="font-mono text-gray-400 space-y-6 leading-relaxed border-l border-gray-800 pl-6 mb-8 flex-grow">
            {aboutMe.paragraphs.map((p, index) => (
              <p key={index}>
                <span className="text-gray-600 select-none mr-2">{`0${index + 1} `}</span>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-auto border border-gray-800 bg-gray-950 w-full overflow-hidden">
            <div className="bg-gray-900 border-b border-gray-800 px-3 py-1 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
              </div>
              <span className="text-[10px] font-mono text-gray-500">education_process.sh</span>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="block text-white font-bold text-sm tracking-wide">INGENIERÍA EN INFORMÁTICA</span>
                  <span className="text-xs text-gray-500 font-mono">Universidad de Buenos Aires (UBA)</span>
                </div>
                <span className="px-2 py-0.5 bg-green-900/20 text-[10px] font-mono border border-green-900/50 rounded">
                  IN_PROGRESS
                </span>
              </div>

              <div className="w-full bg-gray-900 h-1.5 mt-4 mb-2 overflow-hidden">
                <div className="bg-white h-full w-3/5 relative"></div>
              </div>

              <div className="flex justify-between text-[10px] font-mono text-gray-600 uppercase">
                <span>Nivel: 3er Año</span>
                <span>Status: Compilando conocimientos...</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">/ Tech_Stack</h2>
            <div className="h-1 w-20 bg-gray-600"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techStack.map((area) => (
              <div key={area.category} className="border border-gray-800 bg-black p-4 hover:border-gray-500 transition-colors group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl group-hover:scale-110 transition-transform">{area.icon}</span>
                  <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">{area.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-400 border border-gray-800 px-2 py-1 bg-gray-900/30 font-mono hover:text-white hover:border-gray-500 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </section>
  );
}