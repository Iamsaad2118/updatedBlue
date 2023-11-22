import Image from "next/image";
import { Container } from "../container/Container";
import { Discord, XTwitter } from "../icons";

export function Footer() {
  return (
    <footer className="h-72 bg-primary py-4 border-t-4 border-t-accent mt-24">
      <div className="flex flex-col items-center justify-between bg-primary">
        <div className="flex-1 py-10">
          <Image
            src="/logo.jpeg"
            alt="Hamaca Logo"
            width={124}
            height={37}
            priority
            className="w-auto"
          />
        </div>
        <div className="bg-white w-full mb-6">
          <Container className="flex items-center justify-between">
            <p className="text-primary py-2">
              © 2023 hamaca.io all rights reserved.
            </p>
            <div>
              <div className="flex items-center gap-4">
                <a
                  href="https://discord.com/invite/aDXHy4D8vw"
                  target="_blank"
                  className="block text-primary p-2 text-lg"
                  aria-label="Check out our Discord server"
                >
                  <Discord />
                </a>
                <a
                  href="https://twitter.com/hamacaDAO"
                  target="_blank"
                  className="block text-primary p-2 text-lg"
                  aria-label="Follow us on Twitter/X"
                >
                  <XTwitter />
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
