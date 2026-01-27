
import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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

    return (
        <div className="py-16 bg-blue-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-blue-900">
                        Contoh Simulasi Toyota Avanza
                    </h2>
                    <div className="mt-8 flex justify-center">
                        {/* Placeholder for the car image. User should replace this with actual Toyota Avanza image */}
                        <img
                            src="https://placehold.co/600x300/png?text=Toyota+Avanza+Image"
                            alt="Toyota Avanza"
                            className="max-w-full h-auto drop-shadow-xl"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {simulations.map((sim, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="bg-emerald-500 py-4 text-center">
                                <h3 className="text-white font-bold text-xl">{sim.tenor}</h3>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-6 space-y-4">
                                    <div>
                                        <p className="text-gray-500 text-sm">Total Pencairan</p>
                                        <p className="text-2xl font-bold text-blue-900">{sim.cair}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">Angsuran</p>
                                        <div className="flex items-baseline gap-2">
                                            <p className="text-2xl font-bold text-blue-900">{sim.angsuran}</p>
                                            <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{sim.x_months}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-6 rounded-lg group transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                                >
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Ajukan Sekarang
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center text-sm text-gray-400">
                    Perhitungan kredit ini bersifat estimasi dari ACC, serta dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
                </div>
            </div>
        </div>
    );
};
