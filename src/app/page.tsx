"use client"
import { useEffect, useRef, useState } from "react";
import { Bottles1, Bottles2, Bottles3, Friends, ProductBlack, ProductRed, TechnicalDetails } from "./content/images";
import { Grapes4 } from "./content/videos";
import Menu from "./components/Menu";
import Image from "next/image";
import { Typewriter } from "./components/TypeWriter";
import { BULLSHIT, CALENDLY_LINK, DESCRIPTION, MISSION } from "./content";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import TourCarousel from "./components/TourCarousel";

export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollDiff, setScrollDiff] = useState(0);

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const change = scrollPosition - prevScrollPosition;
    setPrevScrollPosition(scrollPosition);

    const newVal = scrollDiff + change;
    const newScrollDiff = newVal > 100 ? 100 : newVal < 0 ? 0 : newVal;

    if (newScrollDiff === scrollDiff) return;
    setScrollDiff(newScrollDiff);
  }, [scrollPosition])

  return (
    <>
      <header className={`px-5 py-3 sm:py-4 bg-background fixed left-0 top-0 flex items-center w-full justify-between z-50`}
        style={{
          transform: `translateY(${scrollDiff < 0 ? 0 : 0 - scrollDiff}px)`,
          opacity: `${scrollDiff < 0 ? 1 : 1 - scrollDiff / 100}`
        }}
      >
        <div className="flex flex-row gap-4 items-center cursor-pointer"
          onClick={() => mainRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}
        >
          <Image src="/android-chrome-192x192.png" width={50} height={50} alt="Logo" className="rounded-full" />
          <h1 className="font-semibold text-2xl transition-all duration-300 hover:scale-105">PISCO TOROMATA</h1>
        </div>
        <Menu />
      </header>
      <main className="flex-1 flex flex-col overflow-y-scroll no-scrollbar"
        ref={mainRef}
        onScroll={(e) => {
          setScrollPosition(e.currentTarget.scrollTop);
        }}
      >
        <section id="intro" className="pt-24 flex flex-col min-h-screen relative overflow-hidden">
          <Grapes4 className="absolute top-0 left-0 object-center opacity-20 w-full transition-all z-0" />
          <div className="h-full -mt-8 px-3 sm:px-12  text-center flex items-center justify-center gap-10 flex-row flex-wrap z-10">
            {/* <Bottles1 className="w-[300px] rounded-2xl" /> */}
            {/* <Typewriter words={[DESCRIPTION]} typeSpeed={120} /> */}
            <div className="text-4xl min-w-[300px] max-w-[375px] notranslate">
              <Typewriter words={[DESCRIPTION]} typeSpeed={120} />
            </div>
            {/* <h3 className="text-4xl min-w-[300px] max-w-[400px]">{DESCRIPTION}</h3> */}
          </div>
          <Link className="z-50 absolute bottom-4 right-1/2 translate-x-1/2 bg-background p-2 rounded-full hover:bg-muted cursor-pointer"
            href="#the-story"
          >
            <ArrowDown />
          </Link>
        </section>
        <section id="the-story" className="px-8 sm:px-12 flex flex-col gap-12">
          <h1 className="text-2xl py-8">Nuestro Historia</h1>
          <div className="mt-4 flex flex-row gap-x-8 justify-center items-start flex-wrap">
            <Friends className="w-[250px] rounded-2xl" />
            <p className="mt-7 text-lg min-w-[200px] max-w-[600px]">{BULLSHIT}</p>
          </div>
          <div className="mt-4 flex flex-row-reverse gap-x-8 justify-center items-start flex-wrap">
            <Bottles1 className="w-[250px] rounded-2xl" />
            <p className="mt-7 text-lg min-w-[200px] max-w-[600px]">{MISSION}</p>
          </div>
        </section>
        <section id="the-product" className="pt-8 px-5 sm:px-12 flex flex-col gap-8">
          <h1 className="text-4xl py-8 mx-auto">Products</h1>
          <div className="mb-8 flex flex-row justify-center items-center">
            <Link target="_blank" href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"} className="py-2 px-7 font-sans font-black bg-primary text-primary-foreground border-border rounded-full flex flex-row gap-2 hover:bg-accent hover:text-accent-foreground transition-all ring-accent hover:ring-[5px]">Order now</Link>
          </div>
          <ProductBlack className="w-full h-[500px] rounded-xl object-contain" />
          <ProductRed className="w-full h-[500px] rounded-xl object-contain" />
          <TechnicalDetails className="w-full h-[500px] rounded-xl object-contain" />
          {/* <Bottles1 />
          <Bottles2 />
          <Bottles3 /> */}
        </section>
        <section id="the-tours" className="pt-8 px-5 sm:px-12 flex flex-col items-center">
          <h1 className="text-4xl mt-8">Follow Our Process</h1>
          <p className="mt-4 mb-8 font-sans">We make our shit yummy</p>
          <Link target="_blank" href={CALENDLY_LINK} className="mb-8 font-sans font-black p-2 bg-primary text-primary-foreground px-7 border-border rounded-full flex flex-row gap-2 hover:bg-accent hover:text-accent-foreground transition-all ring-accent hover:ring-[5px]">Schedule a tour</Link>

          {/* <Typewriter words={["TOURS"]} typeSpeed={100} /> */}
          {/* <div className="block rounded-2xl"> */}
          <TourCarousel />
          {/* </div> */}
        </section>
        <footer className="flex-1 flex flex-row px-6 py-2 w-full justify-center gap-7 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image className="rounded-full" src={"/android-chrome-192x192.png"} height={30} width={30} alt="Pisco Toromata" />
            <p className="text-muted-foreground font-semibold text-sm">{`© ${(new Date()).getFullYear()} Pisco Toromata, LLC`}</p>
          </div>
          <p className="text-muted-foreground font-semibold text-sm">Lima, Peru</p>
        </footer>
      </main>
    </>
  );
}
