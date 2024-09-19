import HomePageBanner from "../../components/sections/Banner/HomePageBanner";
import StackSection from "../../components/sections/Stack/StackSection";

export default function HomePage() {
  return (
    <div>
      <div className="container mx-auto mt-5">
        <HomePageBanner />
      </div>
      <StackSection />
    </div>
  );
}
