import HeroBanner from "./components/HeroBanner/HeroBanner";
import { HERO_BANNER, GROWTH_GUIDES } from "./constants";
import GrowthSlider from "./components/GrowthSlider/GrowthSlider";

export default function Home() {
  return (
    <main className="relative">
      <HeroBanner {...HERO_BANNER} />
      <GrowthSlider items={GROWTH_GUIDES} />
    </main>
  );
}
