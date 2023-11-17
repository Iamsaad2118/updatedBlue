"use client";

import { twMerge } from "tailwind-merge";
import { Heading } from "@/components/typography/Heading";
import { Container } from "@/components/container/Container";
import { ImageComparison } from "../ImageComparison";
import { useReveal } from "@/lib/hooks/useReveal";

export function SectionToken() {
  const { ref, hasRevealed } = useReveal();

  return (
    <section ref={ref} id="token" className="py-16">
      <Container>
        <div className="flex flex-col md:flex-row gap-4">
          <div
            className={twMerge(
              "flex-1 max-h-[550px]",
              hasRevealed ? "motion-safe:animate-slide-in-from-left" : "",
            )}
          >
            <ImageComparison
              className="h-[550px]"
              normalImageProps={{
                src: "/token.jpeg",
                alt: "Token",
              }}
              blurredImageProps={{
                src: "/token-blurred.png",
                alt: "Token blurred",
              }}
            />
          </div>
          <div
            className={twMerge(
              "flex-1 max-h-[550px] overflow-y-scroll text-white",
              hasRevealed ? "motion-safe:animate-slide-in-from-right" : "",
            )}
          >
            <Heading tag="h2" className="sticky top-0 bg-dark pb-6">
              Gary{"'"}s Meme-tacular Tokenomics Reveal! 🐌🪙💡
            </Heading>
            <div className="space-y-4 p-2">
              <p>
                Alright, you savvy future snail-coin billionaires, brace your
                antennae because here comes the lowdown on Gary’s tokenomics.
                You know, the stuff that makes sense to people who understand
                how to set the time on a microwave.
              </p>
              <p>
                First off, we got a whopping 21 billion tokens in supply. Why 21
                billion? Well, Gary tried to count higher, but after 21… he got
                distracted by lettuce. 🥬
              </p>
              <p>
                Now, to the founders! And because Gary’s got two beautifully
                bulbous eyes, he thought, “Hey, let’s keep the math simple.” So
                each founder gets 5%. One for each Gary-eye! 👁👁 Makes sense,
                right? But here’s the twist: founders won’t be selling more than
                10% of their allocation each year. Why? Well, Gary figured that
                acquiring his dream mansion and setting up all the physical and
                techy infrastructures is kind of like him running a marathon.
                It’ll take about 10 years, give or take a few snail naps.
              </p>
              <p>
                Then there’s 5% set aside for Gary’s Marketing and Fan Club.
                Why? Because every snail needs a good PR team to stop being
                mistaken for a sluggish garden pest and start being seen as the
                blockchain mogul he truly is!
              </p>
              <p>
                Now, for the tech team, another 5% is sliced off the lettuce.
                These guys have to write fancy stuff like smart contracts,
                develop a Twin-based Metaverse on spatial.io (which, between you
                and me, Gary thinks is a fancy sandwich), and a bunch of other
                technobabble. Not to forget getting Gary up to speed with
                Starlink’s internet. Because how else is Gary going to stream
                his favorite soap operas in ultra-slow-mo HD?
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
