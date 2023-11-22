import React from "react";

const useDebouncedCallback = (
  callback: (...args: unknown[]) => void,
  delay = 500,
  dependencies = [],
) => {
  const timeout = React.useRef<NodeJS.Timeout>();
  // Avoid error about spreading non-iterable (undefined)
  const comboDeps = React.useMemo(
    () =>
      dependencies ? [callback, delay, ...dependencies] : [callback, delay],
    [callback, delay, dependencies],
  );

  return React.useCallback((...args: unknown[]) => {
    if (timeout.current != null) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      callback(...args);
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, comboDeps);
};

export default useDebouncedCallback;
