"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import { useMousePosition } from "@/lib/hooks/useMousePosition";

type ImageComparisonProps = {
  className?: string;
  normalImageProps: ImageProps;
  blurredImageProps: ImageProps;
};

export function ImageComparison({
  className,
  normalImageProps,
  blurredImageProps,
}: ImageComparisonProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const mousePosistion = useMousePosition({ containerRef });

  const container = {
    width: containerRef.current?.clientWidth || 0,
    height: containerRef.current?.clientHeight || 0,
  };

  let leftPos = mousePosistion.x;

  if (leftPos < 0) {
    leftPos = 0;
  } else if (leftPos > container.width) {
    leftPos = container.width;
  }

  const clipPath = `polygon(
        0px 0px,
        ${leftPos}px 0px,
        ${leftPos}px ${container.height}px ,
        0px ${container.height}px
    )`;

  return (
    <div
      ref={containerRef}
      className={twMerge("w-full h-full relative isolate", className)}
    >
      <Image
        {...blurredImageProps}
        alt={blurredImageProps.alt}
        fill={true}
        sizes="(max-width: 640px) 100vw, 50vw"
        style={{
          objectFit: "cover",
          clipPath,
        }}
        className="z-10"
      />
      <Image
        {...normalImageProps}
        alt={normalImageProps.alt}
        fill={true}
        sizes="(max-width: 640px) 100vw, 50vw"
        style={{ objectFit: "cover" }}
        className="z-0"
      />
      <ComparisonVerticalHandleBar leftPos={leftPos} />
    </div>
  );
}

function ComparisonVerticalHandleBar({ leftPos }: { leftPos: number }) {
  return (
    <div className="relative z-20 w-full h-full">
      <div
        className="absolute w-1 h-1/2 bg-white cursor-pointer"
        style={{ left: `${leftPos}px` }}
      />
      <div
        className="absolute top-1/2 -ml-[19px] w-10 h-10 border-white border-2 rounded-full cursor-pointer"
        style={{ left: `${leftPos}px` }}
      >
        <span
          className="absolute top-1/4 -left-[4px] block w-4 h-4 bg-white"
          style={{ clipPath: "polygon(50% 50%, 100% 0%, 100% 100%)" }}
        />
        <span
          className="absolute top-1/4 left-[calc(50%+6px)] block w-4 h-4 bg-white"
          style={{ clipPath: "polygon(0% 0%, 50% 50%, 0% 100%)" }}
        />
      </div>
      <div
        className="absolute top-[calc(50%+2.5rem)] w-1 h-[calc(50%-2.5rem)] bg-white cursor-pointer"
        style={{ left: `${leftPos}px` }}
      />
    </div>
  );
}
