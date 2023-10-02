import { LayoutsPageDefault } from "@/layouts/LayoutsPageDefault";
import { AboutMe } from "@/screens/Home/AboutMe";
import { Contact } from "@/screens/Home/Contact";
import { MainSection } from "@/screens/Home/MainSection";
import { Technologies } from "@/screens/Home/Technologies";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <div className="bg-gray-200">
        <LayoutsPageDefault>
          <MainSection />
          <AboutMe />
          <Technologies />
          <Contact />
        </LayoutsPageDefault>
      </div>
    </>
  );
};

export default Home;
