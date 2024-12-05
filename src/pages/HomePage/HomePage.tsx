import HomePageBanner from "../../components/sections/Banner";
import StackSection from "../../components/sections/Stack";
import Projects from "../../components/sections/Projects";
import AboutMe from "../../components/sections/AboutMe";

export default function HomePage() {
  return (
    <div>
      <div className="container mx-auto mt-5">
        <HomePageBanner />
        <Projects />
        <AboutMe />
      </div>
      <StackSection />
    </div>
  );
}
