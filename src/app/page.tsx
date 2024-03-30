"use server"
import Link from "next/link";
import { CONTACT_LINK } from "./content";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Footer from "./components/Footer";
import Portoflio from "./components/Portoflio";

const Home = async () => {
  return (
    <>
      <Header />
      <main className="z-10 flex-1 flex flex-col">
        <IntroSection />
        {/* <section id="the-story" className="px-8 sm:px-12 flex flex-col gap-12">
          <h1 className="text-2xl py-8">Nuestro Historia</h1>
          <div className="mt-4 flex flex-row gap-x-8 justify-center items-start flex-wrap">
            <Friends className="w-[250px] rounded-2xl" />
            <p className="mt-7 text-lg min-w-[200px] max-w-[600px]">{BULLSHIT}</p>
          </div>
          <div className="mt-4 flex flex-row-reverse gap-x-8 justify-center items-start flex-wrap">
            <Bottles1 className="w-[250px] rounded-2xl" />
            <p className="mt-7 text-lg min-w-[200px] max-w-[600px]">{MISSION}</p>
          </div>
        </section> */}
        <section id="portfolio" className="pt-16 flex flex-col gap-8 items-center">
          <h1 className="text-4xl select-none">Examples</h1>
          <Portoflio />
          {/* <ProductBlack className="w-full h-[500px] rounded-xl object-contain" />
          <ProductRed className="w-full h-[500px] rounded-xl object-contain" />
          <TechnicalDetails className="w-full h-[500px] rounded-xl object-contain" /> */}
          {/* <Bottles1 />
          <Bottles2 />
          <Bottles3 /> */}
        </section>
        <section id="work-with-me" className="pt-16 px-5 sm:px-12 flex flex-col items-center">
          <h1 className="text-4xl my-8 select-none">Work with me</h1>
          {/* <p className="mt-4 mb-8 font-sans">We make our shit yummy</p> */}
          <Link target="_blank" href={CONTACT_LINK} className="select-none mb-8 font-sans font-black p-2 bg-primary text-primary-foreground px-7 border-border rounded-full flex flex-row gap-2 hover:bg-accent hover:text-accent-foreground transition-all ring-accent hover:ring-[5px]">Contact</Link>

          {/* <Typewriter words={["TOURS"]} typeSpeed={100} /> */}
          {/* <div className="block rounded-2xl"> */}
          {/* </div> */}
        </section>
        <footer className="flex-1 flex flex-row px-6 py-2 w-full justify-center gap-7 items-center">
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default Home