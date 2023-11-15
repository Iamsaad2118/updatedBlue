"use client"
import { SectionRoadMap } from "./page-sections/road-map/SectionRoadMap";
import { SectionSave } from "./page-sections/save/SectionSave";
import { SectionToken } from "./page-sections/token/SectionToken";
import { SectionHero } from "./page-sections/hero/SectionHero";
import { WagmiConfig } from 'wagmi'
import { config } from "@/constants/WagmiConfig";

export default function Home() {
  return (
    <main className="py-24 bg-neutral-800">
      <WagmiConfig config={config}>
        <SectionHero />
        <SectionSave />
        <SectionToken />
        <SectionRoadMap />
      </WagmiConfig>
    </main>
  );
}
