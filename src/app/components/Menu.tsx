"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { MenuIcon } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./ui/popover"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="px-4 hidden sm:flex flex-row items-center gap-6">
                <Link href="#portfolio" className="nav-link">Portfolio</Link>
                <Link href="#work-with-me" className="nav-link">Work with Me</Link>
            </div>
            <DropdownMenu open={open} onOpenChange={setOpen} >
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className='sm:hidden'>
                        <MenuIcon className='h-[1.2rem] w-[1.2rem]' strokeWidth={2} />
                        <span className="sr-only">Menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setOpen(false)} >
                        <Link href="#portfolio" className="nav-link">Portfolio</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpen(false)}>
                        <Link href="#work-with-me" className="nav-link">Work with Me</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {/* <Popover open={showMenu} onOpenChange={setShowMenu}>
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
            </Popover> */}
        </nav>
    )
}

export default Menu