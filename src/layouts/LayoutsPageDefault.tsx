import { Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const LayoutsPageDefault = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={`${space_grotesk.className} max-w-[80rem] m-auto`}>
        {children}
      </main>
      <Footer />
    </>
  );
};
