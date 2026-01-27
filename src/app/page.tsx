
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { ToyotaSimulation } from "@/components/landing/ToyotaSimulation";
import { Zap, ShieldCheck, BadgePercent } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-blue-100 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-sm text-blue-600 font-extrabold tracking-[0.2em] uppercase mb-4">Keunggulan Kami</h2>
            <p className="text-4xl md:text-5xl leading-tight font-black tracking-tight text-blue-950">
              Mengapa Memilih Solusi Mudah Kredit Mobil?
            </p>
            <div className="w-20 h-1.5 bg-blue-600 lg:mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Proses Tercepat",
                  description: "Dana cair hanya dalam hitungan jam setelah dokumen lengkap dan disetujui tanpa ribet.",
                  icon: <Zap className="h-8 w-8 text-blue-600" />,
                  color: "bg-blue-50"
                },
                {
                  title: "Bunga Terendah",
                  description: "Nikmati suku bunga kompetitif mulai dari 0.8% yang tidak akan memberatkan angsuran bulanan Anda.",
                  icon: <BadgePercent className="h-8 w-8 text-emerald-600" />,
                  color: "bg-emerald-50"
                },
                {
                  title: "Aman & Legal",
                  description: "Seluruh proses transparan dan didukung oleh lembaga pembiayaan terkemuka di Indonesia.",
                  icon: <ShieldCheck className="h-8 w-8 text-indigo-600" />,
                  color: "bg-indigo-50"
                },
              ].map((feature, idx) => (
                <div key={idx} className="relative group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ToyotaSimulation />

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white font-black italic">D</div>
            <span className="text-2xl font-black tracking-tight uppercase">Dana Tunai</span>
          </div>
          <p className="text-blue-200/60 max-w-md mx-auto mb-10 text-sm font-medium">
            Solusi pembiayaan dana tunai terpercaya dengan jaminan BPKB Mobil. Proses mudah, aman, dan transparan.
          </p>
          <div className="w-full h-px bg-blue-900/50 mb-10"></div>
          <p className="text-sm text-blue-200/40 font-bold tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Dana Tunai Support by Solusi Mudah Kredit Mobil. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
