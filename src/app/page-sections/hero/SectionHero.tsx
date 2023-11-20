"use client";

import { useInView } from "react-intersection-observer";
import { Container } from "@/components/container/Container";
import { Heading } from "@/components/typography/Heading";
import { AnimatedSnail } from "./AnimatedSnail";
import { DescriptionModal } from "./DescriptionModal";

export function SectionHero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="overflow-hidden relative bg-accent border-b-4 border-b-primary"
    >
      <div className="absolute inset-0 w-screen h-screen video-background">
        <iframe
          tabIndex={-1}
          className="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none"
          allowFullScreen={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Bacalar Cinematic Drone Video in Quintana Roo, Mexico in 4k"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/0JLVIUMjYe8?autoplay=1&amp;mute=1&amp;controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fhamaca.io&amp;widgetid=1"
        ></iframe>
      </div>
      <Container className="relative">
        <div className="pt-24 pb-16 flex flex-col">
          <div className="flex flex-col lg:flex-row items-center gap-2 mt-auto">
            <div className="flex-1">
              <div className="flex flex-col gap-4 text-white">
                <div>
                  <Heading
                    tag="h1"
                    className={
                      inView
                        ? "opacity-1 transition-opacity delay-500 animate-slide-in-from-bottom animation-delay-500"
                        : "opacity-0"
                    }
                  >
                    Gary introduces you the first meme coin with a meaning !
                    What does that meme ?!
                  </Heading>
                </div>
                <div className="flex justify-between">
                  <div>
                    <DescriptionModal />
                  </div>
                  <div className="h-80">
                    <AnimatedSnail
                      className={
                        inView
                          ? "opacity-1 transition-opacity delay-[2s] animate-snail animation-delay-[2s]"
                          : "opacity-0"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* TODO: Uniswap Widget */}
              <div className="w-96 h-[36rem] bg-white"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
