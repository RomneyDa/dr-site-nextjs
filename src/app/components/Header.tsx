"use client"
import React, { useEffect, useState } from 'react'
import Menu from './Menu';
import Gears from './Gears';
import { ChevronLeftIcon, ChevronUp, GaugeIcon, SettingsIcon } from 'lucide-react';
import { Switch } from "./ui/switch"
import { WorldMap } from '../content/images';
import { Slider } from './ui/slider';
import { ModeToggle } from './DarkLightToggle';
import { Label } from './ui/label';
import { useTheme } from 'next-themes';

interface ScrollData {
    previous: number
    current: number
    diff: number
}

interface GearSettingsProps {
    speed: number
    setSpeed: (val: number) => void
    showGears: boolean
    setShowGears: (val: boolean) => void
}
const GearSettings = ({ speed, setSpeed, showGears, setShowGears }: GearSettingsProps) => {
    return (
        <div className="rounded-md flex-col justify-center flex">
            <Label className='text-xs mb-1'>Gears</Label>
            <div className='flex flex-row items-center gap-2'>
                <SettingsIcon size={15} />
                <Switch id="gears-or-background" checked={showGears} onCheckedChange={setShowGears} />
            </div>
            <div className='flex flex-row items-center gap-2 transition-all overflow-hidden' style={{
                height: showGears ? 20 : 0,
                marginTop: showGears ? '0.25rem' : 0
            }}>
                <GaugeIcon size={15} />
                <Slider defaultValue={[speed]} value={[speed]} onValueChange={(vals) => setSpeed(vals[0])} step={0.02} min={0.1} max={1} className="w-[60px]" />
            </div>
        </div>
    )
}

const Header = () => {
    const [showGears, setShowGears] = useState(true);
    const [showGearSettings, setShowGearSettings] = useState(true)
    const { theme } = useTheme()

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

    const [speed, setSpeed] = useState(0.2)

    return (
        <>
            <header className={`px-5 py-2 bg-background fixed left-0 top-0 flex items-center w-full justify-between z-50 border-b`}
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
                <div className='flex flex-row items-center gap-2'>
                    <Menu />
                    <ModeToggle />
                </div>
            </header>
            <div className="fixed h-screen w-screen z-0" style={{
                opacity: 0.3
            }}>
                {showGears ?
                    <Gears rot={scrollData.current} sensitivity={speed} />
                    : null // <WorldMap className="h-full object-cover object rotate-180" />
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
            <div className="z-50 fixed bottom-4 left-4 rounded-md border bg-background px-2 py-2 flex-col justify-center hidden lg:flex">
                <GearSettings setShowGears={setShowGears} showGears={showGears} speed={speed} setSpeed={setSpeed} />
            </div >
            <div className='z-50 fixed left-0 flex flex-row lg:hidden transition-all' style={{
                width: 100,
                left: showGearSettings ? 0 : -101, // hide border as well
                bottom: 60,
            }}>
                <div className="z-50 fixed rounded-tr-md rounded-br-md border bg-background px-2 py-2 flex-col justify-center relative">
                    <GearSettings setShowGears={setShowGears} showGears={showGears} speed={speed} setSpeed={setSpeed} />
                    <div className='h-[40px] w-[24px] absolute right-0 top-1/2 translate-x-full -translate-y-1/2 bg-background border flex flex-col items-center justify-center rounded-tr-md rounded-br-md cursor-pointer' onClick={() => setShowGearSettings(v => !v)} >
                        <ChevronLeftIcon size={20} className={` ${showGearSettings ? '' : 'rotate-180'} transition-all hover:scale-110`} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header