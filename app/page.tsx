import Hero from "../components/sections/Hero";
import FeaturedProjects from '../components/sections/FeaturedProjects';
import BackendArchitecture from "../components/sections/BackendArchitecture";
import AboutAndSkills from "../components/sections/AboutAndSkills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-24 font-sans selection:bg-white selection:text-black">
      <div className="max-w-5xl mx-auto">
        <Hero />
        <FeaturedProjects />
        <BackendArchitecture />
        <AboutAndSkills />
      </div>
    </main>
  );
}