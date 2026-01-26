
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <div id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Keunggulan</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mengapa Memilih Kami?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Kami menawarkan solusi pinjaman dana tunai terbaik dengan berbagai keuntungan untuk Anda.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Proses Cepat",
                  description: "Pencairan dana cepat setelah dokumen lengkap dan disetujui.",
                },
                {
                  title: "Bunga Ringan",
                  description: "Nikmati suku bunga kompetitif yang tidak memberatkan angsuran Anda.",
                },
                {
                  title: "Aman & Terpercaya",
                  description: "Didukung oleh CLIPAN FINANCE, lembaga pembiayaan terkemuka di Indonesia.",
                },
              ].map((feature) => (
                <div key={feature.title} className="relative">
                  <dt>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Dana Tunai Support by CLIPAN. All rights reserved.
          </p>
          <div className="mt-4">
            <a href="https://wa.me/628993646841" className="text-gray-400 hover:text-white mx-2">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
