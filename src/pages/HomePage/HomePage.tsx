import HomePageBanner from "../../components/sections/Banner";
import StackSection from "../../components/sections/Stack";

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
