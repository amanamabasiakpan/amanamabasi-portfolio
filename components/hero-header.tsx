'use client'

import Link from 'next/link'
import { Logo } from './logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useEffect, useRef, useState } from 'react'
import { ModeToggle } from './mode-toggle'

const menuItems = [
    { name: 'My Projects', href: '#projects' },
    { name: 'About Me', href: '#about' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const toggleRef = useRef<HTMLButtonElement>(null)

    // Close menu when clicking outside or clicking the toggle button
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target as Node) && 
                toggleRef.current && !toggleRef.current.contains(event.target as Node)
            ) {
                setMenuState(false)
            }
        }

        if (menuState) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [menuState])

    return (
        <header id="home">
            <nav
                data-state={menuState && 'active'}
                className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-6 lg:w-auto">
                            <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <div className="flex items-center gap-4 lg:hidden">
                                <ModeToggle />
                                <button
                                    ref={toggleRef}
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5">
                                    {menuState ? <X className="size-6" /> : <Menu className="size-6" />}
                                </button>
                            </div>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Mobile menu */}
                        <div
                            ref={menuRef}
                            className={`bg-card ${
                                menuState ? 'block' : 'hidden'
                            } lg:flex mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent text-center`}
                        >
                            <div className="lg:hidden">
                                <ul className="space-y-6 justify-center text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                onClick={() => setMenuState(false)} // Close menu on link click
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit justify-center">
                                <Button asChild size="sm">
                                    <Link href="#contact" onClick={() => setMenuState(false)}>
                                        <span>Contact Me</span>
                                    </Link>
                                </Button>
                                <div className="hidden lg:block">
                                    <ModeToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
