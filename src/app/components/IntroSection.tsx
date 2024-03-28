"use client"
import { useEffect, useState } from "react";
import { Typewriter } from "./TypeWriter";
import { ArrowDown, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const IntroSection = () => {
    // Show subtitle after delay
    const [showSubtitle, setShowSubtitle] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowSubtitle(true);
        }, 2500);
    }, [])

    return (
        <section id="intro" className="pt-24 flex flex-col min-h-screen">
            <div className="h-full -mt-8 px-3 sm:px-12  text-center flex items-center justify-center gap-10 flex-row flex-wrap z-10">
                <div className="text-4xl min-w-[300px] max-w-[375px]">
                    <Typewriter
                        delaySpeed={10}
                        words={["Hi, I'm Dallin"]}
                        typeSpeed={120}
                    />
                    <div className="mt-4 flex flex-col gap-2 items-center" style={{
                        opacity: showSubtitle ? 1 : 0,
                        transition: 'opacity 1s'
                    }}>
                        <p className="text-2xl mt-2" >I help you build software</p>
                        <div className="flex flex-row gap-4 ">
                            <Link
                                target="_blank"
                                href="https://github.com/RomneyDa"
                                className="rounded-2xl text-primary bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all"
                            >
                                <GithubIcon className="p-2 h-12 w-12" />
                            </Link>
                            <Link
                                target="_blank"
                                href="https://www.linkedin.com/in/romneyda/"
                                className="rounded-2xl text-primary bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all"
                            >
                                <LinkedinIcon className="p-2 h-12 w-12" />
                            </Link>
                        </div>
                    </div>

                </div>
                {/* <h3 className="text-4xl min-w-[300px] max-w-[400px]">{DESCRIPTION}</h3> */}
            </div>
            {showSubtitle &&
                <Link className="transition-all z-40 absolute bottom-20 right-1/2 translate-x-1/2 bg-background p-2 rounded-full hover:bg-muted cursor-pointer"
                    href="#portfolio"
                >
                    <ArrowDown />
                </Link>}
        </section>
    )
}

export default IntroSection