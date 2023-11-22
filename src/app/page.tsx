"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { SectionRoadMap } from "./page-sections/road-map/SectionRoadMap";
import { SectionSave } from "./page-sections/save/SectionSave";
import { SectionToken } from "./page-sections/token/SectionToken";
import { SectionHero } from "./page-sections/hero/SectionHero";
import { WagmiConfig } from "wagmi";
import { chains, config } from "@/constants/WagmiConfig";
import { Footer } from "@/components/footer/Footer";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { DesktopHeader } from "@/components/app-header/DesktopHeader";
import { MobileHeader } from "@/components/app-header/MobileHeader";

export default function Home() {
  return (
    <main className="bg-dark">
      <WagmiConfig config={config}>
        <RainbowKitProvider
          theme={darkTheme({ accentColor: "#55AECC" })}
          chains={chains}
        >
          <DesktopHeader className="hidden lg:block" />
          <MobileHeader className="block lg:hidden" />
          <SectionHero />
          <SectionSave />
          <SectionToken />
          <SectionRoadMap />
          <Footer />
        </RainbowKitProvider>
      </WagmiConfig>
    </main>
  );
}
