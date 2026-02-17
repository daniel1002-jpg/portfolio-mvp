"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 md:px-24 py-4 flex justify-between items-center relative">
        
        {/* Logo estilo código */}
        <a href="#" className="font-mono text-white font-bold tracking-tighter text-xl hover:text-gray-300 transition-colors">
          &lt;Daniel /&gt;
        </a>
        
        {/* Enlaces de navegación */}
        <div className="hidden md:flex gap-6 text-sm font-mono text-gray-400">
          <a href="#proyectos" className="hover:text-white transition-colors">/proyectos</a>
          <a href="#arquitectura" className="hover:text-white transition-colors">/api_backend</a>
          <a href="#stack" className="hover:text-white transition-colors">/stack</a>
        </div>

        {/* Botón de Contacto rápido */}
        <a 
          href="mailto:danymamani1002@gmail.com" 
          className="hidden md:block text-xs font-mono border border-gray-700 px-3 py-1 hover:bg-white hover:text-black transition-colors"
        >
          _CONTACTO
        </a>

        {/* Botón menú móvil */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2 active:text-gray-300 active:bg-gray-800 rounded transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Menú Desplegable Móvil */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-gray-800 py-4 px-6 flex flex-col gap-4 shadow-xl">
              <a onClick={() => setIsOpen(false)} href="#proyectos" className="text-gray-300 hover:text-white font-mono text-sm block py-2 border-b border-gray-900">/proyectos</a>
              <a onClick={() => setIsOpen(false)} href="#arquitectura" className="text-gray-300 hover:text-white font-mono text-sm block py-2 border-b border-gray-900">/api_backend</a>
              <a onClick={() => setIsOpen(false)} href="#stack" className="text-gray-300 hover:text-white font-mono text-sm block py-2 border-b border-gray-900">/stack</a>
              <a 
                onClick={() => setIsOpen(false)}
                href="mailto:danymamani1002@gmail.com" 
                className="text-center font-mono text-xs border border-gray-700 bg-gray-900 px-3 py-3 hover:bg-white hover:text-black transition-colors mt-2"
              >
                _CONTACTO
              </a>
            </div>
          )}
      </div>
    </nav>
  );
}