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

export const ContainerCards = () => {
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
      <UseTilt>
        <TypeScriptIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-8 bottom-1 md:group-hover:left-7 -translate-y-3 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          TypeScript
        </span>
      </UseTilt>
      <UseTilt>
        <ReactIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-12 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          React
        </span>
      </UseTilt>
      <UseTilt>
        <Tailwind />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-9 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          Tailwind
        </span>
      </UseTilt>
      <UseTilt>
        <NextJsIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-10 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          NextJs
        </span>
      </UseTilt>
      <UseTilt>
        <StyledComponentsIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-9 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          Styled C.
        </span>
      </UseTilt>
      <UseTilt>
        <FigmaIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-10 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          Figma
        </span>
      </UseTilt>
      <UseTilt>
        <JavaScriptIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-7 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          JavaScript
        </span>
      </UseTilt>
      <UseTilt>
        <HtmlIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-11 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          Html5
        </span>
      </UseTilt>
      <UseTilt>
        <CssIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-12 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          Css3
        </span>
      </UseTilt>
      <UseTilt>
        <NodeJsIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:left-10 bottom-4 md:group-hover:left-10 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          NodeJs
        </span>
      </UseTilt>
      <UseTilt>
        <MySqlIcon />
        <span className="text-zinc-500 cursor-pointer transition-all duration-500 absolute md:left-10 bottom-4 md:group-hover:left-11 md:text-base font-bold md:opacity-0 md:group-hover:opacity-100">
          MySql
        </span>
      </UseTilt>
    </motion.ul>
  );
};
