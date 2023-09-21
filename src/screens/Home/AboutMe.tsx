import { useRef } from "react";
export const AboutMe = () => {
  return (
    <section
      className="relative min-h-fit pt-10 pb-12 px-5 flex flex-col justify-start items-start overflow-hidden bg-gray-200"
      id="sobre-mim"
    >
      <div className="z-10 relative flex flex-col max-w-2xl justify-start items-start gap-5">
        <h2 className="text-4xl text-transparent bg-clip-text @apply bg-[#CA4246] bg-[linear-gradient(_45deg,#CA4246_16.666%,#E16541_16.666%,#E16541_33.333%,#F18F43_33.333%,#F18F43_50%,#8B9862_50%,#8B9862_66.666%,#476098_66.666%,#476098_83.333%,#A7489B_83.333%)] bg-[100%] bg-repeat animate-[rainbow-text-simple-animation-rev_0.75s_ease_forwards] hover:animate-[rainbow-text-simple-animation_0.5s_ease-in_forwards] cursor-pointer">
          Sobre mim
        </h2>
        <p className="text-gray-600 text-xl">
          Gosto de fazer ótimas paginas como essa que você está vendo, aprender
          programação e programar são coisas prazerosas para
          mim,TypeScript,React ,Tailwind e para mim as tecnologias mais
          divertidas hoje no mundo tech!, espero que a gente se divirta junto!
        </p>
      </div>
    </section>
  );
};
