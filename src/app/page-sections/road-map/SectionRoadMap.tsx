import { Heading } from "@/components/typography/Heading";
import { TimelinePhase } from "./TimelinePhase";
import { Container } from "@/components/container/Container";

type TimelinePhaseItem = {
  title: string;
  paragraphs: string[];
};

const timelinePhases: TimelinePhaseItem[] = [
  {
    title: "The Shallow End 🌊",
    paragraphs: [
      "Tokens splashing in: 4.2 billion HAMA tokens",
      "Gary's chosen price: 0.0025001 USDT per HAMA",
      "Dive Range: 10% below and 10% above, because sometimes even snails like to belly flop.",
    ],
  },
  {
    title: "Mid-Pool Marvel 🌊🌊",
    paragraphs: [
      "Tokens diving deep: 4.2 billion HAMA tokens",
      "Gary's ideal price: 0.0028572 USDT per HAMA",
      "Dive Range: Again, a swing of 10% below and above, just in case Gary decides to do the backstroke.",
    ],
  },
  {
    title: "The Deep Dive 🌊🌊🌊",
    paragraphs: [
      "Tokens submerged: 4.2 billion HAMA tokens",
      "Gary's dream price: 0.0032144 USDT per HAMA",
      "Dive Range: Yet again, it's 10% this way or that. Why? Consistency is key when you're a snail with a plan.",
    ],
  },
  {
    title: "The Abyss of Abundance 🌊🌊🌊🌊",
    paragraphs: [
      "Tokens taking the plunge: 4.2 billion HAMA tokens",
      "Gary's grand price: 0.0035715 USDT per HAMA",
      "The Range: You guessed it, the good ol' 10% swing. Gary’s going for the gold!",
    ],
  },
];

export function SectionRoadMap() {
  return (
    <section id="road">
      <Container>
        <div className="flex flex-col gap-8 items-center">
          <Heading tag="h2" className="text-white">
            Gary’s Meme-tacular Liquidity Pool Party 🐌🌊💰
          </Heading>
          <div className="space-y-4 text-white text-center">
            <p>
              Alright, folks, gather around because Gary’s got another grand
              announcement! His vision? Think of it as a diving competition, but
              instead of Olympic swimmers, we’ve got Liquidity Pools. And
              instead of water, there’s… well, a lot of tokens.
            </p>
            <p>
              Drumroll …Introducing, Gary’s 4-Step “Pool-tastic” Liquidity Leap!
            </p>
          </div>
          <div>
            {timelinePhases.map((timelinePhase, index) => (
              <TimelinePhase
                key={index}
                index={index + 1}
                isFinal={index === timelinePhases.length - 1}
                title={timelinePhase.title}
                content={timelinePhase.paragraphs.map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}
              />
            ))}
          </div>
          <div className="space-y-4 text-white text-center">
            <p>
              And now, the plot twist: As soon as our hero Gary raises a cool 51
              million USDT, he’s going to shut down that last pool. That’s
              right! Party’s over, no more diving! And any remaining tokens?
              They’re getting burned. But don’t fret, Gary’s being super
              careful. He’s making sure not to toast his precious lettuce stash
              while at it. 🥬🔥
            </p>
            <p>
              Join Gary on this splashing adventure and let’s help him make
              waves in the world of crypto! 🐌💦🎉
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
