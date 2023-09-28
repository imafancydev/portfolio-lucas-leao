import { LayoutsPageDefault } from "@/layouts/LayoutsPageDefault";
import { AboutMe } from "@/screens/Home/AboutMe";
import { MainSection } from "@/screens/Home/MainSection";
import { Projects } from "@/screens/Home/Projects";
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
          <Projects />
        </LayoutsPageDefault>
      </div>
    </>
  );
};

export default Home;
