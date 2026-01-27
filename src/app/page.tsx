
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
      <section id="features" className="py-24 bg-blue-950 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: 'url("/features-bg.jpg")' }}
        ></div>

        {/* Gradient Overlay for better readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-950 via-transparent to-blue-950"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:text-center mb-16">
            <h2 className="text-sm text-blue-400 font-extrabold tracking-[0.2em] uppercase mb-4 text-shadow-sm">Keunggulan Kami</h2>
            <p className="text-4xl md:text-5xl leading-tight font-black tracking-tight text-white">
              Mengapa Memilih Solusi Mudah Kredit Mobil?
            </p>
            <div className="w-20 h-1.5 bg-blue-600 lg:mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Proses Tercepat",
                  description: "Dana cair hanya dalam hitungan jam setelah dokumen lengkap dan disetujui tanpa ribet.",
                  icon: <Zap className="h-8 w-8 text-blue-400" />,
                  color: "bg-blue-500/10"
                },
                {
                  title: "Bunga Terendah",
                  description: "Nikmati suku bunga kompetitif mulai dari 0.8% yang tidak akan memberatkan angsuran bulanan Anda.",
                  icon: <BadgePercent className="h-8 w-8 text-emerald-400" />,
                  color: "bg-emerald-500/10"
                },
                {
                  title: "Aman & Legal",
                  description: "Seluruh proses transparan dan didukung oleh lembaga pembiayaan terkemuka di Indonesia.",
                  icon: <ShieldCheck className="h-8 w-8 text-indigo-400" />,
                  color: "bg-indigo-500/10"
                },
              ].map((feature, idx) => (
                <div key={idx} className="relative group p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-lg text-white/70 leading-relaxed font-medium">{feature.description}</p>
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
