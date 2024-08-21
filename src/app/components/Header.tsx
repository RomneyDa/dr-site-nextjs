"use client"
import React, { useEffect, useState } from 'react'
import Menu from './Menu';
import Gears from './Gears';
import { ChevronUp, SettingsIcon } from 'lucide-react';
import { Switch } from "./ui/switch"
import { WorldMap } from '../content/images';

interface ScrollData {
    previous: number
    current: number
    diff: number
}

const Header = () => {
    const [showGears, setShowGears] = useState(true);
    const [scrollData, setScrollData] = useState<ScrollData>({
        previous: 0,
        current: 0,
        diff: 0
    });

    useEffect(() => {
        // Throttled - seems unecessary for window
        // let timeoutId: NodeJS.Timeout | null = null;
        // const onScroll = () => {
        //     if (timeoutId) return
        //     setScrollData(sd => {
        //         const change = window.scrollY - sd.current;
        //         const newVal = sd.diff + change;
        //         return {
        //             previous: sd.current,
        //             current: window.scrollY,
        //             diff: newVal > 100 ? 100 : newVal < 0 ? 0 : newVal
        //         }
        //     })
        //     timeoutId = setTimeout(() => {
        //         timeoutId = null;
        //     }, scrollThrottle);
        // }

        const onScroll = () => {
            setScrollData(sd => {
                const change = window.scrollY - sd.current;
                const newVal = sd.diff + change;
                return {
                    previous: sd.current,
                    current: window.scrollY,
                    diff: newVal > 100 ? 100 : newVal < 0 ? 0 : newVal
                }
            })
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            // if (timeoutId) clearTimeout(timeoutId);
        }
    }, [])

    return (
        <>
            <header className={`px-5 py-3 sm:py-4 bg-background fixed left-0 top-0 flex items-center w-full justify-between z-50`}
                style={{
                    transform: `translateY(${scrollData.diff < 0 ? 0 : 0 - scrollData.diff}px)`,
                    opacity: `${scrollData.diff < 0 ? 1 : 1 - scrollData.diff / 100}`
                }}
            >
                <div className="flex flex-row gap-4 items-center cursor-pointer"
                    onClick={() => {
                        console.log("yes")
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }}
                >
                    {/* <Image src="/android-chrome-192x192.png" width={50} height={50} alt="Logo" className="rounded-full" /> */}
                    <h1 className="text-2xl transition-all duration-300 hover:scale-105">Dallin Romney</h1>
                </div>
                <Menu />
            </header>
            <div className="fixed h-screen w-screen z-0 opacity-20">
                {showGears ?
                    <Gears rot={scrollData.current / 1.5} />
                    : <WorldMap className="h-full object-cover" />
                }
            </div>
            <div className="z-50 fixed bottom-6 right-6 h-10 w-10 bg-accent rounded-full flex items-center justify-center opacity-90 cursor-pointer" style={{
                // won't pop up until 200 px scrolled
                transform: `translateY(${100 - scrollData.diff + Math.max(200 - scrollData.diff, 0)}px)`,
            }}
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
            >
                <ChevronUp height={22} width={22} strokeWidth={3} color="hsl(var(--primary))" />
            </div>
            <div className="z-50 fixed bottom-4 left-4 rounded-full bg-black p-1 flex flex-row items-center justify-center gap-2">
                <SettingsIcon size={20} />
                <Switch id="gears-or-background" checked={showGears} onCheckedChange={setShowGears} />
                {/* <Label className="text-xs opacity-70" htmlFor="airplane-mode">Gears</Label> */}
            </div>
        </>
    )
}

export default Header