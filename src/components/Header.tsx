import { Poppins } from "next/font/google";
import { useEffect,useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Header = () =>{
  const [isMaximized, setIsMinimized] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

    useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsMinimized(window.scrollY > 50);
    });
  }, [isMaximized]);

  return(
    <header className={`flex justify-center items-center w-full z-50 px-5`}>

    </header>
  )
}