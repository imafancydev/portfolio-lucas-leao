import React, { useRef } from "react";
import { motion } from "framer-motion";
import { UseTilt } from "@/hook/UseTilt";
import { Tailwind } from "../../public/assets/TailwindIcon";
import { ReactIcon } from "../../public/assets/ReactIcon";
import { TypeScriptIcon } from "../../public/assets/TypeScriptIcon";
import { NextJsIcon } from "../../public/assets/NextJsIcon";
import { StyledComponentsIcon } from "../../public/assets/StyledComponentsIcon";
import { FigmaIcon } from "../../public/assets/FigmaIcon";
import { JavaScriptIcon } from "../../public/assets/JavaScriptIcon";
import { HtmlIcon } from "../../public/assets/HtmlIcon";
import { CssIcon } from "../../public/assets/CssIcon";
import { NodeJsIcon } from "../../public/assets/NodeJsIcon";
import { MySqlIcon } from "../../public/assets/MySqlIcon";
import { TiltOptions } from "vanilla-tilt";

export const ContainerCards = () => {
  const options: TiltOptions = {
    scale: 1.2,
    speed: 1000,
    max: 46,
    glare: true,
    "max-glare": 1,
    reverse: true,
  };

  const elementRef = UseTilt<HTMLLIElement>(options);

  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={{
        show: {
          transition: {
            staggerChildren: 0.02,
            delayChildren: 0.01,
          },
        },
      }}
      className="
      flex flex-wrap justify-center items-center
      gap-4 md:gap-[1.5625rem]
    "
    >
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={{
          hidden: { rotate: 70, opacity: 0 },
          show: { rotate: 0, opacity: 1 },
        }}
        ref={elementRef}
        className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
      >
        <TypeScriptIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-8 bottom-1 md:group-hover:left-7 -translate-y-3 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          TypeScript
        </span>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={{
          hidden: { rotate: 70, opacity: 0 },
          show: { rotate: 0, opacity: 1 },
        }}
        className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
      >
        <ReactIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-12 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          React
        </span>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={{
          hidden: { rotate: 70, opacity: 0 },
          show: { rotate: 0, opacity: 1 },
        }}
        className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
      >
        <Tailwind />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-9 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          Tailwind
        </span>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={{
          hidden: { rotate: 70, opacity: 0 },
          show: { rotate: 0, opacity: 1 },
        }}
        className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
      >
        <NextJsIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-10 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          NextJs
        </span>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={{
          hidden: { rotate: 70, opacity: 0 },
          show: { rotate: 0, opacity: 1 },
        }}
        className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
      >
        <StyledComponentsIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-9 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          Styled C.
        </span>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={{
          hidden: { rotate: 70, opacity: 0 },
          show: { rotate: 0, opacity: 1 },
        }}
        className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
      >
        <FigmaIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-10 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          Figma
        </span>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={{
          hidden: { rotate: 70, opacity: 0 },
          show: { rotate: 0, opacity: 1 },
        }}
        className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
      >
        <JavaScriptIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-7 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          JavaScript
        </span>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={{
          hidden: { rotate: 70, opacity: 0 },
          show: { rotate: 0, opacity: 1 },
        }}
        className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
      >
        <HtmlIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-11 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          Html5
        </span>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={{
          hidden: { rotate: 70, opacity: 0 },
          show: { rotate: 0, opacity: 1 },
        }}
        className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
      >
        <CssIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-12 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          Css3
        </span>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={{
          hidden: { rotate: 70, opacity: 0 },
          show: { rotate: 0, opacity: 1 },
        }}
        className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
      >
        <NodeJsIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:left-10 bottom-4 md:group-hover:left-10 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          NodeJs
        </span>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={{
          hidden: { rotate: 70, opacity: 0 },
          show: { rotate: 0, opacity: 1 },
        }}
        className="text-center relative bg-gray-200 shadow-md rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 sm:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
      >
        <MySqlIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:left-10 bottom-4 md:group-hover:left-11 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          MySql
        </span>
      </motion.li>
    </motion.ul>
  );
};
