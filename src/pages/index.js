import Acomplishments from "../components/Acomplishments/Acomplishments";
import Head from "next/head";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import BringTop from "../components/BringTop";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import GitCalender from "../components/GitCalenders/GitCalender";

const Home = () => {
  return (
    <Layout>
      <Head>
        <link
          rel="apple-touch-icon"
          href="https://i.ibb.co/6r1vGnG/arfat-xyz-tab-logo.jpg"
        />
        <title>
          Arfatur Rahman || Frontend Developer || Mern Stack Developer
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I'm a professional React front-end developer. I have experience working on HTML,CSS,JavaScript and ReactJS, NodeJS. I've also experience on creating WordPress website."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/stc2Ppn/arfat-xyz.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://i.ibb.co/stc2Ppn/arfat-xyz.jpg"
        />

        <meta name="author" content="Arfatur Rahman" />
        <meta
          name="keywords"
          content="developer, Mern, ReactJS,react,next,nextjs,node,HTML, CSS, Display, personal portfolio, react,ReactJs,MERN, arafat,araftur rahman, arfat rahman, Metadata"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
        <meta
          name="keywords"
          content="arfat-xyz, arfat.xyz,arfat rahman, arfatur rahman"
        />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <GitCalender />
      <Timeline />
      <Acomplishments />
      <BringTop />
    </Layout>
  );
};

export default Home;
