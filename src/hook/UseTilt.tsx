import { motion, HTMLMotionProps } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt, { TiltOptions } from "vanilla-tilt";

interface UseTiltProps extends HTMLMotionProps<"li"> {
  options?: TiltOptions;
}

const optionsDefault: TiltOptions = {
  scale: 1.2,
  speed: 1000,
  max: 46,
  glare: true,
  "max-glare": 1,
  reverse: true,
};
export const UseTilt = (props: UseTiltProps) => {
  const tilt = useRef<HTMLLIElement | null>(null);
  const { options, ...rest } = props;

  useEffect(() => {
    VanillaTilt.init(
      tilt.current as HTMLLIElement,
      options ? { ...optionsDefault, ...options } : optionsDefault
    );
  }, [options]);

  return tilt;
};
