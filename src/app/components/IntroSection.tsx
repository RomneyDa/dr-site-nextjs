"use client"
import { useEffect, useState } from "react";
import { Typewriter } from "./TypeWriter";
import { ArrowDown, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const IntroSection = () => {
    // Show subtitle after delay
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showSkill1, setShowSkill1] = useState(false);
    const [showSkill2, setShowSkill2] = useState(false);
    const [showSkill3, setShowSkill3] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowSubtitle(true);
        }, 2500)
        setTimeout(() => {
            setShowSkill1(true);
        }, 3200)
        setTimeout(() => {
            setShowSkill2(true);
        }, 3700)
        setTimeout(() => {
            setShowSkill3(true);
        }, 4200)
    }, [])

    return (
        <section id="intro" className="flex flex-col h-screen items-center justify-center">
            {/* <div className="h-full -mt-8 px-3 sm:px-12  text-center flex items-center justify-center gap-10 flex-row flex-wrap z-10"> */}
            <div className="text-4xl mx-auto text-center rounded-lg flex flex-col items-center justify-center">
                <div className="p-2 font-semibold">
                    <Typewriter
                        delaySpeed={10}
                        words={["Hi, I'm Dallin"]}
                        typeSpeed={120}
                    />
                </div>
                <div className="mt-2 flex flex-col gap-2 items-center" style={{
                    opacity: showSubtitle ? 1 : 0,
                    transition: 'opacity 1s',
                }}>
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
                    <p className="text-xl transition-all bg-background/70 p-2" style={{
                        opacity: showSkill1 ? 1 : 0,
                        transition: 'opacity 1s'
                    }}>
                        {`Software Engineer`}
                    </p>
                    <p className="text-sm transition-all bg-background/70 px-8 max-w-[700px]" style={{
                        opacity: showSkill2 ? 1 : 0,
                        transition: 'opacity 1s'
                    }}>
                        {`Specializing in Typescript, Javascript, and Python web and mobile applications from front to back`}
                    </p>
                    <p className="text-sm transition-all bg-background/70 px-2" style={{
                        opacity: showSkill3 ? 1 : 0,
                        transition: 'opacity 1s'
                    }}>
                        {/* {`Typescript`} */}
                    </p>
                    {/* {showSubtitle ? <Typewriter
                        delaySpeed={10}
                        words={["Hi, I'm Dallin"]}
                        typeSpeed={120}
                    /> : null} */}
                </div>

            </div>
            {/* <h3 className="text-4xl min-w-[300px] max-w-[400px]">{DESCRIPTION}</h3> */}
            {/* </div> */}
            <Link className="transition-all z-40 absolute bottom-[10%] right-1/2 translate-x-1/2 bg-background p-2 rounded-full hover:bg-muted cursor-pointer"
                href="#portfolio"
                style={{
                    opacity: showSubtitle ? 1 : 0
                }}
            >
                <ArrowDown />
            </Link>
        </section>
    )
}

export default IntroSection