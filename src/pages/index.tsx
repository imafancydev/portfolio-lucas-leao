import { LayoutsPageDefault } from "@/layouts/LayoutsPageDefault"
import { AboutMe } from "@/screens/Home/AboutMe";
import { MainSection } from "@/screens/Home/MainSection"
import Head from "next/head";
const Home = () => {
  return (
    <>
      <div className="bg-gray-200">
        <LayoutsPageDefault>
          <MainSection />
          <AboutMe />
        </LayoutsPageDefault>
      </div>
    </>
  );
};

export default Home;