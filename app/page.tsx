import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";
//red: #74070E
export default function Home() {
  return (
    <main className="site">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
