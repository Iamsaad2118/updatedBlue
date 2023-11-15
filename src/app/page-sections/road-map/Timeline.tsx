import { TimelinePhase } from "./TimelinePhase";

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

export function Timeline() {
  return (
    <div>
      {timelinePhases.map((timelinePhase, i) => (
        <TimelinePhase
          key={i}
          index={i + 1}
          isLastPhase={i === timelinePhases.length - 1}
          title={timelinePhase.title}
          content={timelinePhase.paragraphs.map((line, lineIndex) => (
            <p key={lineIndex}>{line}</p>
          ))}
        />
      ))}
    </div>
  );
}
