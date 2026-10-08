import Hero from "../components/HeroSec";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <div className="bg-[#fdfcf9] text-black min-h-screen">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default Home;