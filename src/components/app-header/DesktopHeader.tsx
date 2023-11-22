import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AppHeader } from "./AppHeader";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function DesktopHeader({ className }: { className?: string }) {
  return (
    <AppHeader
      className={twMerge("text-xs lg:text-md xl:text-base", className)}
    >
      <div className="flex items-center flex-1 gap-2 md:gap-4 lg:gap-6">
        <Link href="/">
          <Image
            src="/logo.jpeg"
            alt="Hamaca logo"
            width={100}
            height={100}
            priority
          />
        </Link>
        <AppHeader.Nav />
      </div>
      <ConnectButton accountStatus="address" />
    </AppHeader>
  );
}
