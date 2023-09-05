import { Noto_Sans_Georgian } from "next/font/google";
import { ReactNode } from "react";

import { Header } from "@/components/Header";

interface LayoutProps{
  children: ReactNode;
};

const georgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ['400', '700']
});

export const LayoutsPageDefault = ({children} : LayoutProps) => {
  return (
    <>
    <Header/>
    <main className={`${georgian.className} max-w-[80rem] m-auto`}>
    {children}
    </main>
    </>
  );
};