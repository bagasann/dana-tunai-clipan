
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed w-full bg-blue-950/90 backdrop-blur-md z-50 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <img src="/logo.jpg" alt="Dana Tunai Logo" className="h-12 w-auto object-contain" />
                        </Link>
                    </div>
                    <div className="hidden sm:flex sm:space-x-8 items-center">
                        <Link href="/" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-colors">
                            Beranda
                        </Link>
                        <Link href="#features" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-colors">
                            Keunggulan
                        </Link>
                        <Link href="#simulation" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-colors">
                            Simulasi
                        </Link>
                        <div className="flex space-x-2">
                            <Link href="/login">
                                <Button variant="outline" size="sm">Masuk</Button>
                            </Link>
                            <Link href="/register">
                                <Button size="sm">Daftar</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-6 space-y-1 bg-blue-950 border-t border-white/5">
                        <Link href="/" className="block px-4 py-3 text-base font-bold text-white hover:bg-white/5">
                            Beranda
                        </Link>
                        <Link href="#features" className="block px-4 py-3 text-base font-bold text-white hover:bg-white/5">
                            Keunggulan
                        </Link>
                        <Link href="#simulation" className="block px-4 py-3 text-base font-bold text-white hover:bg-white/5">
                            Simulasi
                        </Link>
                        <div className="px-3 py-3 space-y-2">
                            <Link href="/login" className="block">
                                <Button variant="outline" className="w-full justify-center">Masuk</Button>
                            </Link>
                            <Link href="/register" className="block">
                                <Button className="w-full justify-center">Daftar</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
