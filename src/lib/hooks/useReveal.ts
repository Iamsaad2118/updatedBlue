import React from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

export function useReveal(intersectionOptions?: IntersectionOptions) {
  const [hasRevealed, setHasRevealed] = React.useState(false);

  const { ref, inView } = useInView(intersectionOptions);

  React.useEffect(() => {
    if (inView) {
      setHasRevealed(true);
    }
  }, [inView]);

  return {
    ref,
    hasRevealed,
    setHasRevealed,
  };
}
