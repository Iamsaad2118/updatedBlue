import { Container } from "../container/Container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="h-72 bg-orange-600 py-4 border-t-4 border-t-cyan-500">
      <div className="flex flex-col items-center justify-between">
        <div className="flex-1 py-20">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className="bg-white w-full">
          <Container>
            <p className="text-orange-600 py-2">
              © 2023 hamaca.io all rights reserved.
            </p>
          </Container>
        </div>
      </div>
    </footer>
  );
}
