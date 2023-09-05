import { Noto_Sans_Georgian } from "next/font/google";
import Image from "next/image";

const georgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ['400', '700']
});

export const Header = () => {


  return(
    <header className="flex justify-center items-center w-full z-50 px-5 py-5 fixed w-full transition-all duration-500 font-body md:px-8"
    >
      <nav className="">

      </nav>
    </header>
  );

};