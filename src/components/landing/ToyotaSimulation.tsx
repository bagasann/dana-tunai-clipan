
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ToyotaSimulation = () => {
    const benefits = [
        "Angsuran lebih singkat, lunas lebih cepat!",
        "Tanpa biaya tersembunyi (provisi)",
        "Cair tanpa potongan",
        "Include asuransi kendaraan",
        "Bisa takeover dari leasing lain",
    ];

    const waMessageTemplate = `Halo, saya tertarik dengan layanan Dana Tunai. Mohon informasinya lebih lanjut. 
Silahkan isi data diri terlebih dahulu

Nama :
Alamat :
No HP :
Unit Kendaraan :
Tahun :`;

    const banners = [
        {
            image: "/hero-red.jpg",
            alt: "Dana Tunai Banner 1",
        },
        {
            image: "/hero-black.jpg",
            alt: "Dana Tunai Banner 2",
        },
        {
            image: "/alphard.jpg",
            alt: "Dana Tunai Banner Alphard",
        },
    ];

    const WhatsAppIcon = () => (
        <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    )

    return (
        <div id="simulation" className="py-24 bg-blue-950 relative overflow-hidden">
            {/* Background elements for premium feel */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {banners.map((item, index) => (
                        <div key={index} className="group bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-blue-400/30 hover:shadow-[0_0_60px_rgba(30,58,138,0.4)] transition-all duration-500 flex flex-col relative focus-within:ring-2 focus-within:ring-blue-500">
                            {/* Card Content: Image Only - Variable Aspect Ratio */}
                            <div className="relative w-full overflow-hidden bg-black/40">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000 block"
                                />
                            </div>

                            {/* Action Button */}
                            <div className="p-6 pt-6 relative z-20">
                                <Link
                                    href={`https://wa.me/6281214606160?text=${encodeURIComponent(waMessageTemplate)}`}
                                    target="_blank"
                                    className="w-full"
                                >
                                    <Button
                                        variant="cta"
                                        className="w-full py-7 text-lg h-auto bg-blue-600 hover:bg-blue-500 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-3 rounded-2xl"
                                    >
                                        <WhatsAppIcon />
                                        <span>Ajukan Sekarang</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
                    Proses Mudah, Aman, dan Terpercaya. Segera hubungi tim kami untuk konsultasi gratis.
                </div>
            </div>
        </div>
    );
};
