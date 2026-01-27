
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
        <div id="simulation" className="py-20 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-blue-950 uppercase tracking-tight">
                        Contoh Simulasi Toyota Avanza
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    <div className="mt-10 flex justify-center group">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                            <img
                                src="/avanza.png"
                                alt="Toyota Avanza"
                                className="relative max-w-full h-[300px] object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {simulations.map((sim, index) => (
                        <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col relative">
                            <div className="bg-emerald-500 py-5 text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-2 -translate-y-2">
                                    <WhatsAppIcon />
                                </div>
                                <h3 className="text-white font-extrabold text-xl tracking-wide uppercase italic">{sim.tenor}</h3>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-8 space-y-6">
                                    <div className="pb-4 border-b border-gray-50">
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Pencairan</p>
                                        <p className="text-3xl font-black text-blue-950">{sim.cair}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Angsuran</p>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                            <p className="text-3xl font-black text-blue-900 leading-none">{sim.angsuran}</p>
                                            <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 self-start">
                                                {sim.x_months}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                                            <div className="bg-emerald-100 rounded-full p-1">
                                                <Check className="h-3 w-3 text-emerald-600 stroke-[4px]" />
                                            </div>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`https://wa.me/628993646841?text=Halo, saya tertarik dengan simulasi Toyota Avanza ${sim.tenor}. Mohon informasinya lebih lanjut.`}
                                    target="_blank"
                                    className="w-full"
                                >
                                    <Button
                                        variant="cta"
                                        className="w-full py-7 text-lg h-auto"
                                    >
                                        <WhatsAppIcon />
                                        Ajukan Sekarang
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Perhitungan kredit ini bersifat estimasi, serta dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
                </div>
            </div>
        </div>
    );
};
