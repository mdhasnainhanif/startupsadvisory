import HeroBanner from "./components/HeroBanner/HeroBanner";
import { HERO_BANNER } from "./constants";

export default function Home() {
  return (
    <main className="relative">
      <HeroBanner {...HERO_BANNER} />
    </main>
  );
}
