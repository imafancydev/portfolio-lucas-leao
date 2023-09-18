import { Poppins } from "next/font/google";
import { ReactNode } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface LayoutProps{
  children: ReactNode;
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const LayoutsPageDefault = ({children}: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={`${poppins.className} max-w-[80rem] m-auto`}>
        {children}
      </main>
      <Footer />
    </>
  );
};