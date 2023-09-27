import { Space_Grotesk } from "next/font/google";
import logo from "public/assets/logo.svg";
import Image from "next/image";
import { Anchor } from "./Anchor";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Footer = () => {
  return (
    <footer
      className={`w-full max-w-[80rem] m-auto p-5 md:p-10 flex flex-col justify-between items-left gap-10 border-t-[1px] bg-gray-200 border-zinc-400 md:items-center md:flex-row ${space_grotesk.className}`}
    >
      <div>
        <div>
          <p className="text-sm font-body text-zinc-900">
            &copy; Todos os direitos reservados - Lucas Leão
          </p>
          <p className="text-sm font-body text-zinc-900">
            Arte 3D{" "}
            <Anchor
              className="text-sm font-bold"
              href="https://sketchfab.com/3d-models/mechanical-keyboard-1facc22c744a403dbb3166a2274f78dd"
              target="_blank"
            >
              Mechanical Keyboard
            </Anchor>{" "}
            criada por{" "}
            <Anchor
              className="text-sm font-bold"
              href="https://sketchfab.com/Urpo"
              target="_blank"
            >
              Urpo.
            </Anchor>{" "}
          </p>
          <p className="text-sm font-body text-zinc-900">
            <Anchor className="text-sm ">Licença</Anchor>{" "}
            <Anchor
              className="text-sm font-bold"
              href="http://creativecommons.org/licenses/by-nc/4.0/"
              target="_blank"
            >
              CC-BY-NC-4.0
            </Anchor>
          </p>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <a href="https://github.com/imafancydev" target="_blank">
            <AiOutlineGithub size={30}></AiOutlineGithub>
          </a>
          <a href="https://www.linkedin.com/in/LucasLeao6/" target="_blank">
            <AiOutlineLinkedin size={30}></AiOutlineLinkedin>
          </a>
        </div>
      </div>
      <a href="#inicio">
        <Image src={logo} alt="" className="w-8 md:w-12" />
      </a>
    </footer>
  );
};
