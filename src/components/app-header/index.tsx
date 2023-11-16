import { AppHeader } from "@/components/app-header/AppHeader";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";

export default function AppHeaderContent() {
  return (
    <AppHeader>
      <div className="flex items-center flex-1 gap-6">
        <Link href="/">
          <Image src="/logo.jpeg" alt="Hamaca logo" width={100} height={100} />
        </Link>
        <AppHeader.Nav className="hidden md:block">
          <AppHeader.Link href="/">Home</AppHeader.Link>
          <AppHeader.Link href="/#save">Save Gary</AppHeader.Link>
          <AppHeader.Link href="/#token">Tokenomics</AppHeader.Link>
          <AppHeader.Link href="/#road">Road Map</AppHeader.Link>
          <AppHeader.Link href="/#">Gary Can Be Serious</AppHeader.Link>
          <AppHeader.Link href="/#">Message Gary</AppHeader.Link>
          <AppHeader.Link href="/#">Join Our Discord</AppHeader.Link>
        </AppHeader.Nav>
      </div>
      <div>
        <ConnectButton accountStatus="address" />
      </div>
    </AppHeader>
  );
}
