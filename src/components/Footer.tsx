import { Space_Grotesk } from "next/font/google";

import logo from "public/assets/logo.svg";
import Image from "next/image";

import { Anchor } from "./Anchor";

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
              href="https://sketchfab.com/3d-models/mechanical-keyboard-1facc22c744a403dbb3166a2274f78dd"
              target="_blank"
            >
              Mechanical Keyboard
            </Anchor>{" "}
            criada por{" "}
            <Anchor href="https://sketchfab.com/Urpo" target="_blank">
              Urpo
            </Anchor>{" "}
            e usada com autorização de acordo com a licença{" "}
            <Anchor
              href="http://creativecommons.org/licenses/by-nc/4.0/"
              target="_blank"
            >
              CC-BY-NC-4.0
            </Anchor>
          </p>
        </div>
      </div>
      <a href="#inicio">
        <Image src={logo} alt="" className="w-8 md:w-12" />
      </a>
    </footer>
  );
};
