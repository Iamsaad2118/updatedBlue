import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AppHeader } from "./AppHeader";
import { Button } from "../button/Button";
import { Discord } from "../icons";

export function DesktopHeader({ className }: { className?: string }) {
  return (
    <AppHeader
      className={twMerge("text-xs lg:text-md xl:text-base", className)}
    >
      <div className="flex items-center flex-1 gap-2 xl:gap-6">
        <Link href="/">
          <Image src="/logo.jpeg" alt="Hamaca logo" width={100} height={100} />
        </Link>
        <AppHeader.Nav />
      </div>
      <a href="https://discord.com/invite/aDXHy4D8vw" target="_blank">
        <Button variant="secondary" className="flex items-center gap-2">
          <span>Join Our Discord</span>
          <Discord />
        </Button>
      </a>
    </AppHeader>
  );
}
