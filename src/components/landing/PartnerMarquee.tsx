"use client";

import React from "react";

const partners = [
    { name: "Sinarmas Finance", logo: "/partners/sinarmas.png" },
    { name: "BFI Finance", logo: "/partners/bfi.png" },
    { name: "OTO Finance", logo: "/partners/oto.png" },
    { name: "SMS Finance", logo: "/partners/sms.png" },
    { name: "Clipan Finance", logo: "/partners/clipan.png" },
    { name: "Buana Finance", logo: "/partners/buana.png" },
    { name: "BFI Syariah", logo: "/partners/bfi-syariah.png" },
];

export const PartnerMarquee = () => {
    return (
        <section className="py-12 bg-white overflow-hidden border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h2 className="text-center text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight">
                    Mitra Lembaga Keuangan
                </h2>
                <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="mx-8 md:mx-16 flex items-center justify-center min-w-[150px]">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
                    {partners.map((partner, idx) => (
                        <div key={`dup-${idx}`} className="mx-8 md:mx-16 flex items-center justify-center min-w-[150px]">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
