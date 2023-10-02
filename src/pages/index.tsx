import { LayoutsPageDefault } from "@/layouts/LayoutsPageDefault";
import { AboutMe } from "@/screens/Home/AboutMe";
import { Contact } from "@/screens/Home/Contact";
import { MainSection } from "@/screens/Home/MainSection";
import { Technologies } from "@/screens/Home/Technologies";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <title>Lucas Leão | Desenvolvedor de software</title>
        <link rel="icon" type="image/x-icon" href="/assets/logo.svg" />
        <meta name="title" content="Lucas Leão" />
        <meta name="language" content="pt-br" />
        <meta
          name="description"
          content="Lucas Leão e um jovem programador Full-Stack que busca fazer o melhor software para suprir a demanda do mercado"
        />
        <meta
          name="keywords"
          content="Lucas Leão dev, Lucas Leão front-end, Lucas Leão, Leão, Lucas, Lucas front-end Leão"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lucasleaodev.vercel.app/" />
        <meta property="og:title" content="Lucas Leão" />
        <meta
          property="og:description"
          content="Lucas Leão e um jovem programador Full-Stack que busca fazer o melhor software para suprir a demanda do mercado."
        />
        <meta
          property="og:image"
          content="https://st5.depositphotos.com/14021298/65051/i/450/depositphotos_650516380-stock-photo-pink-paint-pastel-color-background.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://lucasleaodev.vercel.app/"
        />
        <meta property="twitter:title" content="Lucas Leão" />
        <meta
          property="twitter:description"
          content="Lucas Leão e um jovem programador Full-Stack que busca fazer o melhor software para suprir a demanda do mercado."
        />
        <meta
          property="twitter:image"
          content="https://st5.depositphotos.com/14021298/65051/i/450/depositphotos_650516380-stock-photo-pink-paint-pastel-color-background.jpg"
        />
      </Head>
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
