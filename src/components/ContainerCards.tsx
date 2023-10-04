import React from "react";
import { motion } from "framer-motion";
import { UseTilt } from "@/hook/UseTilt";
import { TiltOptions } from "vanilla-tilt";
import { TypeScriptIcon } from "@/icons/TypeScriptIcon";
import { ReactIcon } from "@/icons/ReactIcon";
import { Tailwind } from "@/icons/TailwindIcon";
import { NextJsIcon } from "@/icons/NextJsIcon";
import { StyledComponentsIcon } from "@/icons/StyledComponentsIcon";
import { FigmaIcon } from "@/icons/FigmaIcon";
import { JavaScriptIcon } from "@/icons/JavaScriptIcon";
import { HtmlIcon } from "@/icons/HtmlIcon";
import { CssIcon } from "@/icons/CssIcon";
import { NodeJsIcon } from "@/icons/NodeJsIcon";
import { MySqlIcon } from "@/icons/MySqlIcon";

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
    { icon: <HtmlIcon />, text: "HTML" },
    { icon: <CssIcon />, text: "CSS" },
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
          className="text-center shadow-lg rounded-3xl flex justify-center items-center group overflow-hidden z-10 w-24 md:w-[9.300rem] aspect-[1/1.1] cursor-pointer"
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
