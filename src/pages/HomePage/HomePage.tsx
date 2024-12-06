import HomePageBanner from "../../components/sections/Banner";
import StackSection from "../../components/sections/Stack";
import Projects from "../../components/sections/Projects";
import AboutMe from "../../components/sections/AboutMe";
import ScrollToHash from "../../components/common/ScrollToHash";

export default function HomePage() {
  return (
    <>
      <ScrollToHash />
      <div className="container mx-auto mt-5">
        <HomePageBanner />
        <Projects />
        <AboutMe />
      </div>
      <StackSection />
    </>
  );
}
