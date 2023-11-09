import React from "react";

interface UseMousePositionProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition({ containerRef }: UseMousePositionProps) {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - containerRect.left,
          y: event.clientY - containerRect.top,
        });
      }
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener("mousemove", handleMouseMove);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [containerRef]);

  return mousePosition;
}
