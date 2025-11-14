import HeroBanner from "./components/HeroBanner/HeroBanner";
import ProfessionalOnline from "./components/ProfessionalOnline/ProfessionalOnline";
import { HERO_BANNER } from "./constants";

export default function Home() {
  return (
    <main className="relative">
      <HeroBanner {...HERO_BANNER} />
      <ProfessionalOnline />
    </main>
  );
}
