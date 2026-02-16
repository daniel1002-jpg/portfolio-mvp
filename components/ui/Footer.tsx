import { personalInfo } from "../../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <div className="text-gray-500 font-mono text-xs">
          © {new Date().getFullYear()} {personalInfo.name}. All systems operational.
        </div>

        {/* Links Sociales */}
        <div className="flex gap-6">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-500 hover:text-white transition-colors font-mono text-xs"
          >
            GITHUB
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-500 hover:text-white transition-colors font-mono text-xs"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
}