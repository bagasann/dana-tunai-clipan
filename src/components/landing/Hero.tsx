
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
    return (
        <div className="relative bg-white overflow-hidden pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center py-12 lg:py-24 gap-12">
                    {/* Text Section */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Solusi Dana Tunai</span>{" "}
                            <span className="block text-blue-700 xl:inline leading-tight">Cepat & Aman</span>
                        </h1>
                        <p className="mt-6 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:text-xl">
                            Ajukan pinjaman dana tunai dengan jaminan BPKB Mobil. Proses mudah, bunga kompetitif, dan terpercaya.
                        </p>
                        <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                            <Link href="#simulation">
                                <Button size="lg" className="w-full sm:w-auto shadow-xl">
                                    Simulasi Pinjaman
                                </Button>
                            </Link>
                            <Link href="https://wa.me/628993646841" target="_blank">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto mt-3 sm:mt-0">
                                    Hubungi Kami
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 w-full flex items-center justify-center">
                        <div className="relative w-full max-w-[600px] aspect-[4/3] group">
                            <div className="absolute -inset-4 bg-blue-100/50 rounded-[2rem] blur-2xl group-hover:bg-blue-200/50 transition-all duration-500"></div>
                            <img
                                src="/hero.png"
                                alt="Solusi Dana Tunai Mobil"
                                className="relative object-contain w-full h-full drop-shadow-2xl transform group-hover:scale-[1.05] transition-transform duration-700 rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
