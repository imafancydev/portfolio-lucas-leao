import React, { useRef } from "react";
import { motion } from "framer-motion";
import { UseTilt } from "@/hook/UseTilt";
import { Tailwind } from "../../public/assets/TailwindIcon";
import { TiltOptions } from "vanilla-tilt";
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

export const ContainerCards = () => {
  const options: TiltOptions = {
    scale: 1.2,
    speed: 2000,
    max: 50,
    glare: true,
    "max-glare": 1,
    reverse: true,
    transition: true,
  };

  const data = [
    { icon: <TypeScriptIcon />, text: "TypeScript" },
    { icon: <ReactIcon />, text: "React" },
    { icon: <Tailwind />, text: "Tailwind" },
    { icon: <NextJsIcon />, text: "NextJs" },
    { icon: <StyledComponentsIcon />, text: "Style C." },
    { icon: <FigmaIcon />, text: "Figma" },
    { icon: <JavaScriptIcon />, text: "JavaScript" },
    { icon: <HtmlIcon />, text: "Html" },
    { icon: <CssIcon />, text: "Css" },
    { icon: <NodeJsIcon />, text: "NodeJs" },
    { icon: <MySqlIcon />, text: "MySQL" },
  ];

  const elementRefs = UseTilt<HTMLLIElement>(data.length, options);

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
      className="flex flex-wrap justify-center items-center gap-4 md:gap-[1.5625rem]"
    >
      {data.map((item, index) => (
        <motion.li
          key={index}
          ref={(el) => (elementRefs[index] = el)}
          variants={{
            hidden: { rotate: 70, opacity: 0 },
            show: { rotate: 0, opacity: 1 },
          }}
          className="text-center shadow-lg rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 md:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
        >
          {item.icon}
          <span className="text-zinc-400 transition-all duration-300 absolute top-2 md:-top-4 md:group-hover:top-4 text-md md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
            {item.text}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
};
