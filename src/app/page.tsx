"use server"
import Link from "next/link";
import { CONTACT_LINK, RESUME_LINK } from "./content";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import React from 'react'
import { Button } from "./components/ui/button";
import { FileText, FileTextIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const Home = async () => {
  return (
    <>
      <Header />
      <main className="z-10 flex-1 flex flex-col">
        <IntroSection />
        <section id="portfolio" className="pt-16 flex flex-col gap-8 items-center">
          <h1 className="text-4xl select-none">Example Work</h1>
          <Portfolio />
        </section>
        <section id="work-with-me" className="pt-16 pb-8 px-5 sm:px-12 flex flex-col items-center">
          <h1 className="text-4xl my-8 select-none">Work with me</h1>
          {/* <p className="mt-4 mb-8 font-sans">We make our shit yummy</p> */}
          <div className="flex flex-row gap-4 p-2 bg-background/70">
            <Link
              target="_blank"
              href="https://github.com/RomneyDa"
              className="hover:scale-110 transition-all"
            >
              <Button variant={'outline'} className="h-[3rem] w-[3rem] p-0">
                <GithubIcon className="" />
              </Button>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/romneyda/"
              className="hover:scale-110 transition-all"
            >
              <Button variant={'outline'} className="h-[3rem] w-[3rem] p-0">
                <LinkedinIcon className="p-2 h-12 w-12" />
              </Button>
            </Link>
          </div>
          <a href="mailto:dallinromney@gmail.com" className="w-[160px] justify-center mb-4 select-none font-sans font-black p-2 bg-primary text-primary-foreground border-border rounded-full flex flex-row hover:bg-accent hover:text-accent-foreground transition-all ring-accent hover:ring-[5px]">
            <div className="flex flex-row items-center justify-start w-[100px] gap-1.5">
              <MailIcon />
              Email
            </div>
          </a>
          <Link href={RESUME_LINK} target="_blank" className="w-[160px] justify-center select-none font-sans font-black p-2 bg-primary text-primary-foreground border-border rounded-full flex flex-row hover:bg-accent hover:text-accent-foreground transition-all ring-accent hover:ring-[5px]">
            <div className="flex flex-row items-center justify-start w-[100px] gap-1.5">
              <FileTextIcon />
              Resume
            </div>
          </Link>
        </section>
        <footer className="flex-1 flex flex-row px-6 py-2 w-full justify-center gap-7 items-center">
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default Home