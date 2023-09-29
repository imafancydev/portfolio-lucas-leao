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

  return (
    <motion.li
      ref={tilt}
      {...rest}
      whileHover={{ scale: 1.1 }}
      variants={{
        hidden: { rotate: 70, opacity: 0 },
        show: { rotate: 0, opacity: 1 },
      }}
      className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
    ></motion.li>
  );
};
