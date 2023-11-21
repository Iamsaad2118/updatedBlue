import { useEffect, useState } from "react";
import useDebouncedCallback from "./useDebouncedCallback";

export function useScreenWidth() {
  const [width, setWidth] = useState<number>(0);

  const handleWindowSizeChange = useDebouncedCallback(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, 100);

  useEffect(() => {
    handleWindowSizeChange();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, [handleWindowSizeChange]);

  return width;
}
