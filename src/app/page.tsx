import { SectionRoadMap } from "./page-sections/road-map/SectionRoadMap";
import { SectionSave } from "./page-sections/save/SectionSave";
import { SectionToken } from "./page-sections/token/SectionToken";
import { SectionHero } from "./page-sections/hero/SectionHero";

export default function Home() {
  return (
    <main className="py-24 bg-dark">
      <SectionHero />
      <SectionSave />
      <SectionToken />
      <SectionRoadMap />
    </main>
  );
}
