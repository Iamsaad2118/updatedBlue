"use client";

import { Water } from "@/components/icons";
import React from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

type TimelinePhaseProgressIndicatorProps = {
  hasProgressBar: boolean;
  className?: string;
};

export function TimelinePhaseProgressIndicator({
  hasProgressBar,
  className,
}: TimelinePhaseProgressIndicatorProps) {
  const [progressIndicatorHeight, setProgressIndicatorHeight] =
    React.useState(0);

  const progressIndicatorContainerRef = React.useRef<HTMLDivElement>(null);

  const { ref: targetRef, entry } = useInView({
    threshold: (() => {
      const thresholds = [];

      for (let i = 0; i <= 1.0; i += 0.01) {
        thresholds.push(i);
      }

      return thresholds;
    })(),
  });

  const isIntersecting = !!entry?.isIntersecting;

  React.useEffect(() => {
    const handleScroll = () => {
      if (entry && progressIndicatorContainerRef.current) {
        const height = progressIndicatorContainerRef.current.clientHeight;

        if (entry.boundingClientRect.top < 0) {
          setProgressIndicatorHeight(height);
        } else {
          setProgressIndicatorHeight(entry.intersectionRatio * height);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [entry]);

  return (
    <div className={className}>
      <div
        ref={targetRef}
        className="absolute top-[300px] invisible w-1 h-full"
        aria-hidden
      />
      {hasProgressBar && (
        <div
          ref={progressIndicatorContainerRef}
          className="absolute top-2 left-1/2 w-1 h-full bg-accent"
        >
          <div
            role="progressbar"
            aria-label="Timeline phase progress"
            className="w-full bg-primary"
            style={{
              height: `${progressIndicatorHeight}px`,
            }}
          />
        </div>
      )}
      <div
        className={twMerge(
          "absolute top-0 w-10 h-10 ml-[-19px] rounded-full",
          "border-4 border-white",
          "flex justify-center items-center",
          "transition-colors duration-500",
          isIntersecting ? "bg-primary" : "bg-white",
        )}
      >
        <span className={isIntersecting ? "text-white" : "text-primary"}>
          <Water />
        </span>
      </div>
    </div>
  );
}
