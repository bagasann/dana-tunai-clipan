
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ImageWithFallback = ({ src, alt, fallbackSrc = "/hero.png", className }: { src: string; alt: string; fallbackSrc?: string; className?: string }) => {
    const [imgSrc, setImgSrc] = useState(src)
    const [hasError, setHasError] = useState(false)

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={() => {
                if (!hasError) {
                    setImgSrc(fallbackSrc)
                    setHasError(true)
                }
            }}
        />
    )
}

export function Hero() {
    const images = [
        "/hero.png",
        "/hero2.png",
        "/hero3.png",
        "/hero4.png",
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, [images.length])

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [nextSlide])

    return (
        <div className="relative bg-white overflow-hidden pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center py-12 lg:py-24 gap-12">
                    {/* Text Section */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="mb-4">
                            <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-black tracking-widest uppercase">
                                Bandung & Sekitarnya
                            </span>
                        </div>
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
                            <span className="block xl:inline">DANA TUNAI DAN</span>{" "}
                            <span className="block text-blue-700 xl:inline leading-tight">KREDIT MOBIL BEKAS</span>
                        </h1>
                        <p className="mt-6 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:text-xl leading-relaxed">
                            Ajukan pinjaman dana tunai dengan jaminan bpkb mobil min tahun 2006 untuk segala kebutuhan anda, serta layanan pembiayan mobil bekas baik mobil penumpang ataupun komersil.
                        </p>

                        <div className="mt-10 mb-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                <span className="text-sm font-black text-gray-800 uppercase tracking-wider">Proses Mudah</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                <span className="text-sm font-black text-gray-800 uppercase tracking-wider">Cair 90 % Up</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                <span className="text-sm font-black text-gray-800 uppercase tracking-wider">Aman & Terpercaya</span>
                            </div>
                        </div>

                        <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4 items-center">
                            <Link href="#simulation">
                                <Button size="lg" className="w-full sm:w-auto shadow-xl h-14 px-10 text-lg rounded-2xl">
                                    Simulasi Pinjaman
                                </Button>
                            </Link>
                            <Link href="https://wa.me/6281214606160" target="_blank">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto mt-3 sm:mt-0 h-14 px-10 text-lg rounded-2xl border-2">
                                    Hubungi Kami
                                </Button>
                            </Link>
                        </div>

                        <p className="mt-8 text-xs font-black text-gray-400 uppercase tracking-[0.3em] font-mono">
                            Support all leasing
                        </p>
                    </div>

                    {/* Image Section (Carousel) */}
                    <div className="flex-1 w-full flex items-center justify-center">
                        <div className="relative w-full max-w-[600px] aspect-[4/3] group overflow-hidden rounded-2xl">
                            <div className="absolute -inset-4 bg-blue-100/50 rounded-[2rem] blur-2xl group-hover:bg-blue-200/50 transition-all duration-500"></div>

                            {/* Slides */}
                            <div
                                className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {images.map((img, idx) => (
                                    <div key={idx} className="w-full h-full flex-shrink-0">
                                        <ImageWithFallback
                                            src={img}
                                            alt={`Slide ${idx + 1}`}
                                            className="w-full h-full object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-blue-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-blue-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? "bg-blue-700 w-4" : "bg-blue-200"
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
