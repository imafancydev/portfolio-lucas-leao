import { ContainerCards } from "@/components/ContainerCards";
import { motion } from "framer-motion";
export const Technologies = () => {
  return (
    <section
      id="habilidades"
      className="relative flex flex-col justify-center items-center pt-12 pb-12 min-h-fit px-5"
    >
      <div className="relative flex flex-col justify-center items-center gap-5">
        <h2 className="font-bold text-4xl text-transparent bg-clip-text @apply bg-[#CA4246] bg-[linear-gradient(_45deg,#CA4246_16.666%,#E16541_16.666%,#E16541_33.333%,#F18F43_33.333%,#F18F43_50%,#8B9862_50%,#8B9862_66.666%,#476098_66.666%,#476098_83.333%,#A7489B_83.333%)] bg-[100%] bg-repeat animate-[rainbow-text-simple-animation-rev_0.75s_ease_forwards] hover:animate-[rainbow-text-simple-animation_0.5s_ease-in_forwards] cursor-pointer">
          Tech Stack Front-End
        </h2>
        <ContainerCards />
      </div>
    </section>
  );
};
