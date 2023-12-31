import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "public/assets/logo.svg";
import { Button } from "./Button";
import { Anchor } from "./Anchor";
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Header = () => {
  const [isMaximized, setIsMinimized] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsMinimized(window.scrollY > 1);
    });
  }, [isMaximized]);

  return (
    <header
      className={`backdrop-filter backdrop-blur-lg bg-opacity-30 flex justify-center items-center z-50 px-5 py-4 fixed w-full transition-all border-b border-gray-200 duration-500 md:px-8 ${
        isMaximized ? "shadow-2xl" : "bg-transparent"
      } ${space_grotesk.className}`}
    >
      <nav className="w-full max-w-[70rem] flex flex-col items-center md:flex-row bg">
        <div className="max-md:w-full max-md:flex max-md:justify-between max-md:items-center">
          <a href="#inicio">
            <Image
              src={logo}
              alt=""
              className={`${
                isMaximized ? "w-12" : "w-11"
              } transition-all duration-500`}
            />
          </a>
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="text-zinc-400 visible md:hidden"
          >
            {menuIsOpen && <AiOutlineClose size={32} />}
            {!menuIsOpen && <AiOutlineMenu size={32} />}
          </button>
        </div>

        <ul
          className={`${
            menuIsOpen
              ? "backdrop-filter backdrop-blur-3xl bg-opacity-80 -left-0"
              : "left-[-880px]"
          } top-20 px-5 flex flex-col gap-4 w-full absolute py-10 transition-all duration-500 md:static md:bg-transparent md:px-0 md:py-0 md:flex md:flex-row md:justify-end md:items-center md:gap-5 md:visible bg-gray-200`}
        >
          <li>
            <Anchor href="#inicio" onClick={() => setMenuIsOpen(false)}>
              Início
            </Anchor>
          </li>
          <li>
            <Anchor href="#sobre-mim" onClick={() => setMenuIsOpen(false)}>
              Sobre mim
            </Anchor>
          </li>
          <li>
            <Anchor href="#habilidades" onClick={() => setMenuIsOpen(false)}>
              Habilidades
            </Anchor>
          </li>
          <li>
            <a href="#contato" onClick={() => setMenuIsOpen(false)}>
              <Button>Vamos conversar?</Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
