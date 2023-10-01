import { useEffect, useRef } from "react";
import VanillaTilt, { TiltOptions } from "vanilla-tilt";

export const UseTilt = <Element extends HTMLElement>(options?: TiltOptions) => {
  const elementRef = useRef<Element>(null);

  useEffect(() => {
    VanillaTilt.init(elementRef.current as HTMLElement, options);
  }, [elementRef, options]);

  return elementRef;
};
