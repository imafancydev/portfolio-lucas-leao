import { Canvas } from "@react-three/fiber";
import {OrbitControls, Stage } from "@react-three/drei";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { Anchor } from "@/components/Anchor";
import { Scene } from "@/components/Scene";

export const MainSection = () => {
  return (
     <section
      className="py-48 px-5 md:p-24 md:px-10 flex items-center bg-gray-200"
      id="inicio"
    >
      <div className="w-full flex flex-col gap-2">
        <p className="text-zinc-900 text-lg">Olá, meu nome é</p>
        <h1 className="font-bold bg-clip-text md:text-6xl">
          Lucas Leão
        </h1>
        <p className="text-zinc-900 text-xl">
          Desenvolvedor{" "}
          <span className="text-transparent bg-clip-text">
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
              <Anchor
                href="https://linkedin.com/in/LucasLeao6"
                target="_blank"
              >
                <AiOutlineLinkedin size={28} />
              </Anchor>
            </li>
          </ul>
        </nav>
      </div>


    <Canvas
        className="visible max-md:hidden"
        style={{ width: "650px", height: "500px" }}
        linear
        flat
      >
        <Stage intensity={1}>
          <Scene />
          <OrbitControls autoRotate enableZoom={false} />
        </Stage>
      </Canvas>
    </section>
  );
};