import HeroBanner from "./components/HeroBanner/HeroBanner";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Reviews from "./components/Reviews/Reviews";
import Technologies from "./components/Technologies/Technologies";
import { HERO_BANNER, FAQ_DATA, FAQ_SECTION } from "./constants";
import ProfessionalOnline from "./components/ProfessionalOnline/ProfessionalOnline";

export default function Home() {
  return (
    <main className="relative">
      <HeroBanner {...HERO_BANNER} />
      <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION} />
      <Contact />
      <ProfessionalOnline />
      <Technologies />
      <Reviews />
    </main>
  );
}
