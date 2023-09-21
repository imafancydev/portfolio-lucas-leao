import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

import { Anchor } from "@/components/Anchor";
import { Keyboard } from "@/components/Keyboard";
export const MainSection = () => {
  return (
    <section
      className="py-48 px-5 md:p-24 md:px-10 flex items-center bg-gray-200"
      id="inicio"
    >
      <div className="w-full flex flex-col gap-2">
        <p className="text-zinc-900 text-2xl">Olá, meu nome é</p>
        <h1 className="font-bold text-6xl text-transparent bg-clip-text @apply bg-[#CA4246] bg-[linear-gradient(_45deg,#CA4246_16.666%,#E16541_16.666%,#E16541_33.333%,#F18F43_33.333%,#F18F43_50%,#8B9862_50%,#8B9862_66.666%,#476098_66.666%,#476098_83.333%,#A7489B_83.333%)] bg-[100%] bg-repeat animate-[rainbow-text-simple-animation-rev_0.75s_ease_forwards] hover:animate-[rainbow-text-simple-animation_0.5s_ease-in_forwards] cursor-pointer">
          Lucas Leão
        </h1>
        <p className="text-zinc-900 text-2xl">
          Desenvolvedor{" "}
          <span className="font-bold text-4xl text-transparent bg-clip-text @apply bg-[#CA4246] bg-[linear-gradient(_45deg,#CA4246_16.666%,#E16541_16.666%,#E16541_33.333%,#F18F43_33.333%,#F18F43_50%,#8B9862_50%,#8B9862_66.666%,#476098_66.666%,#476098_83.333%,#A7489B_83.333%)] bg-[100%] bg-repeat animate-[rainbow-text-simple-animation-rev_0.75s_ease_forwards] hover:animate-[rainbow-text-simple-animation_0.5s_ease-in_forwards] cursor-pointer">
            front-end
          </span>
        </p>

        <nav>
          <ul className="flex gap-1">
            <li>
              <Anchor href="https://github.com/imafancydev" target="_blank">
                <AiOutlineGithub size={28} />
              </Anchor>
            </li>
            <li>
              <Anchor href="https://linkedin.com/in/LucasLeao6" target="_blank">
                <AiOutlineLinkedin size={28} />
              </Anchor>
            </li>
          </ul>
        </nav>
      </div>
      <Canvas
        className="visible max-md:hidden"
        style={{ width: "700px", height: "500px" }}
        linear
        flat
      >
        <Stage intensity={3}>
          <Keyboard />
          <OrbitControls autoRotate enableZoom={false} />
        </Stage>
      </Canvas>
    </section>
  );
};
