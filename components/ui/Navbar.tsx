export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 md:px-24 py-4 flex justify-between items-center">
        {/* Logo estilo código */}
        <a href="#" className="font-mono text-white font-bold tracking-tighter text-xl hover:text-gray-300 transition-colors">
          &lt;Daniel /&gt;
        </a>
        
        {/* Enlaces de navegación */}
        <div className="flex gap-6 text-sm font-mono text-gray-400 hidden sm:flex">
          <a href="#proyectos" className="hover:text-white transition-colors">
            /proyectos
          </a>
          <a href="#arquitectura" className="hover:text-white transition-colors">
            /api_backend
          </a>
          <a href="#stack" className="hover:text-white transition-colors">
            /stack
          </a>
        </div>

        {/* Botón de Contacto rápido */}
        <a 
          href="mailto:danymamani1002@gmail.com" 
          className="text-xs font-mono border border-gray-700 px-3 py-1 hover:bg-white hover:text-black transition-colors"
        >
          _CONTACTO
        </a>
      </div>
    </nav>
  );
}