
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

    const simulations = [
        {
            tenor: "Tenor 4 Tahun",
            cair: "Rp 100.000.000",
            angsuran: "Rp 3.580.000",
            x_months: "x 48 bulan",
        },
        {
            tenor: "Tenor 3 Tahun",
            cair: "Rp 100.000.000",
            angsuran: "Rp 4.290.000",
            x_months: "x 36 bulan",
        },
        {
            tenor: "Tenor 2 Tahun",
            cair: "Rp 100.000.000",
            angsuran: "Rp 5.910.000",
            x_months: "x 24 bulan",
        },
    ];

    const WhatsAppIcon = () => (
        <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 mr-2 fill-current"
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
                <div className="text-center mb-12">
                    <div className="flex justify-center group pointer-events-none">
                        <div className="relative">
                            <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
                            <img
                                src="/alphard.jpg"
                                alt="Dana Tunai Banner"
                                className="relative w-full h-auto max-h-[500px] object-contain drop-shadow-[0_0_50px_rgba(30,144,255,0.2)] transform group-hover:scale-[1.02] transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {simulations.map((sim, index) => (
                        <div key={index} className="group bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-blue-400/30 hover:shadow-[0_0_60px_rgba(30,58,138,0.4)] transition-all duration-500 flex flex-col relative">
                            <div className="bg-blue-600/20 py-5 text-center relative overflow-hidden border-b border-white/5">
                                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-500"></div>
                                <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-2 -translate-y-2 group-hover:opacity-20 transition-opacity">
                                    <WhatsAppIcon />
                                </div>
                                <h3 className="text-white font-extrabold text-xl tracking-wider uppercase italic relative z-10">{sim.tenor}</h3>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-8 space-y-6">
                                    <div>
                                        <p className="text-blue-400/70 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Total Pencairan</p>
                                        <p className="text-4xl font-black text-white">{sim.cair}</p>
                                    </div>
                                    <div className="pt-6 border-t border-white/5">
                                        <p className="text-blue-400/70 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Angsuran Bulanan</p>
                                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-3">
                                            <p className="text-3xl font-black text-blue-400 leading-none">{sim.angsuran}</p>
                                            <span className="text-[10px] font-bold uppercase text-white bg-blue-600/40 px-3 py-1 rounded-md border border-white/10 self-start">
                                                {sim.x_months}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">
                                            <div className="bg-blue-500/20 rounded-full p-1.5 border border-blue-400/20">
                                                <Check className="h-3 w-3 text-blue-400 stroke-[4px]" />
                                            </div>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`https://wa.me/6281214606160?text=Halo, saya tertarik dengan simulasi Dana Tunai ${sim.tenor}. Mohon informasinya lebih lanjut.`}
                                    target="_blank"
                                    className="w-full"
                                >
                                    <Button
                                        variant="cta"
                                        className="w-full py-8 text-xl h-auto bg-blue-600 hover:bg-blue-500 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-3"
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
                    Perhitungan kredit ini bersifat estimasi, serta dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
                </div>
            </div>
        </div>
    );
};
