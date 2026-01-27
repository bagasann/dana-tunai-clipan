
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed w-full bg-white z-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="group flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-black italic transform group-hover:rotate-12 transition-transform">D</div>
                            <span className="text-xl font-black text-blue-950 tracking-tight uppercase">
                                Dana Tunai
                            </span>
                        </Link>
                    </div>
                    <div className="hidden sm:flex sm:space-x-8 items-center">
                        <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                            Beranda
                        </Link>
                        <Link href="#features" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                            Keunggulan
                        </Link>
                        <Link href="#simulation" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
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
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                            Beranda
                        </Link>
                        <Link href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                            Keunggulan
                        </Link>
                        <Link href="#simulation" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
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
