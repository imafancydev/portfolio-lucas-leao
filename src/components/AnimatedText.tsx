import React, { useEffect } from "react";
import { Variants, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AnimatedText = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const characterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const text = "lucasleaocontact@gmail.com";

  return (
    <motion.span
      ref={ref}
      aria-hidden="true"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {text.split(" ").map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={containerVariants}
          custom={wordIndex}
        >
          {word.split("").map((character, charIndex) => (
            <motion.a
              href="mailto:lucasleaocontact@gmail.com"
              className="text-2xl p-0 font-bold text-transparent bg-clip-text @apply bg-[#CA4246] bg-[linear-gradient(_45deg,#CA4246_16.666%,#E16541_16.666%,#E16541_33.333%,#F18F43_33.333%,#F18F43_50%,#8B9862_50%,#8B9862_66.666%,#476098_66.666%,#476098_83.333%,#A7489B_83.333%)] bg-[100%] hover:animate-[rainbow-text-simple-animation_0.5s_ease-in_forwards] animate-[rainbow-text-simple-animation-rev_0.75s_ease_forwards] bg-repeat cursor-pointer transition-all duration-500 hover:opacity-75 md:text-6xl "
              key={charIndex}
              variants={characterVariants}
            >
              {character}
            </motion.a>
          ))}
        </motion.span>
      ))}
    </motion.span>
  );
};
