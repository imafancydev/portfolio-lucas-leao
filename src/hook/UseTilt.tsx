import { useEffect, useRef } from "react";
import VanillaTilt, { TiltOptions } from "vanilla-tilt";

export const UseTilt = <T extends HTMLElement>(
  length: number,
  options?: TiltOptions
) => {
  const elementRefs = useRef<Array<T | null>>(
    Array.from({ length }, () => null)
  );

  useEffect(() => {
    elementRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, options || {});
      }
    });
  }, [elementRefs, options]);

  return elementRefs.current;
};
