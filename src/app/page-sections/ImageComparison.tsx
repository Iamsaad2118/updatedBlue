"use client";

import { useMousePosition } from "@/lib/hooks/useMousePosition";
import Image, { ImageProps } from "next/image";
import React from "react";

type ImageComparisonProps = {
  normalImageProps: ImageProps;
  blurredImageProps: ImageProps;
};

export function ImageComparison({
  normalImageProps,
  blurredImageProps,
}: ImageComparisonProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const mousePosistion = useMousePosition({ containerRef });

  return (
    <div ref={containerRef} className="w-full h-full relative isolate">
      <Image
        {...blurredImageProps}
        alt={blurredImageProps.alt}
        fill={true}
        style={{
          objectFit: "cover",
          clipPath: `polygon(0px 0px, ${mousePosistion.x}px 0px, ${mousePosistion.x}px 550px , 550px 550px)`,
        }}
        className="z-10"
      />
      <Image
        {...normalImageProps}
        alt={normalImageProps.alt}
        fill={true}
        style={{ objectFit: "cover" }}
        className="z-0"
      />
    </div>
  );
}
