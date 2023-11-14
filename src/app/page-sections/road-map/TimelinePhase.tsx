import { Water } from "@/components/icons";
import { Heading } from "@/components/typography/Heading";
import { twMerge } from "tailwind-merge";

type TimelinePhaseProps = {
  index: number;
  isFinal: boolean;
  title: string;
  content: React.ReactNode;
};

export function TimelinePhase({
  index,
  isFinal,
  title,
  content,
}: TimelinePhaseProps) {
  return (
    <div className="relative pb-16">
      <div
        className={twMerge(
          "relative rounded-md w-[45%] bg-gray-100 p-6",
          "before:absolute before:w-0 before:h-0 before:top-8",
          "before:border-[12px] before:border-neutral-800",
          index % 2 !== 0
            ? "ml-0 before:left-full before:border-l-gray-100"
            : "ml-auto before:right-full before:border-r-gray-100",
        )}
      >
        <Heading tag="h3" className="text-orange-600 mb-8">
          {title}
        </Heading>
        <div className="space-y-8">{content}</div>
        <span
          className={twMerge(
            "absolute top-6 text-white",
            index % 2 === 0
              ? "right-[calc(100%+85px)]"
              : "left-[calc(100%+85px)]",
          )}
        >
          Phase {index}
        </span>
      </div>
      {!isFinal && (
        <div className="absolute top-6 left-1/2 w-1 bg-cyan-500 h-full">
          {/* TODO: implement progress bar height */}
          <div className="w-full bg-orange-600" style={{ height: "0%" }}></div>
        </div>
      )}
      <div
        className={twMerge(
          "absolute top-6 left-1/2 w-10 h-10 ml-[-19px] bg-orange-600 rounded-full",
          "border-4 border-white",
          "flex justify-center items-center",
        )}
      >
        <span className="text-white">
          <Water />
        </span>
      </div>
    </div>
  );
}