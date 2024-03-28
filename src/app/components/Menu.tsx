"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { MenuIcon } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./ui/popover"

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const Links = () => <>
        <Link href="#portfolio" className="nav-link">Portfolio</Link>
        <Link href="#work-with-me" className="nav-link">Work with Me</Link>
        {/* <Link onClick={hideMenu} href="#the-product" className="p-2 bg-primary text-primary-foreground px-7 border-border rounded-full flex flex-row gap-2 hover:bg-accent hover:text-accent-foreground transition-all ring-accent hover:ring-[5px]">Comprar</Link> */}
    </>

    return (
        <nav>
            <div className="px-4 hidden lg:flex flex-row items-center gap-6">
                <Links />
            </div>
            <Popover open={showMenu} onOpenChange={setShowMenu}>
                <PopoverTrigger
                    asChild
                    className="lg:hidden cursor-pointer text-foreground"
                    style={{
                        opacity: showMenu ? 0.7 : 1,
                    }}
                >
                    <MenuIcon height={30} width={30} strokeWidth={2} />
                </PopoverTrigger>
                <PopoverContent className="flex flex-col gap-5 p-7 mr-2 items-end w-[175px]" onClick={() => setShowMenu(false)}>
                    <Links />
                </PopoverContent>
            </Popover>
        </nav>
    )
}

export default Menu