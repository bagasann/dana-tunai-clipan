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
        <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center">
                    <h2 className="text-sm text-blue-600 font-extrabold tracking-[0.2em] uppercase mb-4">
                        Mitra Kami
                    </h2>
                    <p className="text-3xl md:text-4xl font-black tracking-tight text-blue-950">
                        Mitra Lembaga Keuangan
                    </p>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden group pause-on-hover">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="mx-12 md:mx-20 flex items-center justify-center min-w-[120px]">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-12 md:h-14 w-auto object-contain hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
                    {partners.map((partner, idx) => (
                        <div key={`dup-${idx}`} className="mx-12 md:mx-20 flex items-center justify-center min-w-[120px]">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-12 md:h-14 w-auto object-contain hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
