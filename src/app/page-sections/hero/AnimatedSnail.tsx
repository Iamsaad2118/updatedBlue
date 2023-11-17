import * as animationData from "@/assets/gary_animation.json";
import Lottie from "lottie-react";
import { twMerge } from "tailwind-merge";

export function AnimatedSnail({ className }: { className?: string }) {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className={twMerge("w-[300px] transform scale-x-[-1]", className)}
    />
  );
}
