import { Container } from "../container/Container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="h-72 bg-orange-600 py-4 border-t-4 border-t-cyan-500">
      <div className="flex flex-col items-center justify-between">
        <div className="flex-1 py-20">
          <Image
            src="/logo.jpeg"
            alt="Hamaca Logo"
            width={150}
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
