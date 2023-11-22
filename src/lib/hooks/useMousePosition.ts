import React from "react";

interface UseMousePositionProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

interface MousePosition {
  x: number | null;
  y: number | null;
}

export function useMousePosition({ containerRef }: UseMousePositionProps) {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();

        let offsetX = event.clientX - containerRect.left;
        let offsetY = event.clientY - containerRect.top;

        if (offsetX < 0) {
          offsetX = 0;
        } else if (offsetX > containerRect.width) {
          offsetX = containerRect.width;
        }

        if (offsetY < 0) {
          offsetY = 0;
        } else if (offsetY > containerRect.height) {
          offsetY = containerRect.height;
        }

        setMousePosition({
          x: offsetX,
          y: offsetY,
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
