import Image from "next/image";
import { CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react"; // Pastikan install lucide-react
import HeroAbout from "./HeroAbout";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section Tentang Kami */}
      <HeroAbout />

      {/* Main Content: Story & Image */}
      <section className="py-24 bg-white">
        <div className="max-w-360 mx-auto px-6 sm:px-16 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative w-full group">
            <div className="relative z-10 w-full h-87.5 sm:h-112.5">
              <Image
                src="/images/mitsubishi-xpander.png" // Ganti dengan path gambar Xpander Anda
                alt="Rentcar Mitsubishi Xpander"
                fill
                className="object-contain z-20 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Elemen Dekoratif Lingkaran (Mirip Gambar) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-100 sm:h-100 bg-blue-50 rounded-full z-0"></div>
            <div className="absolute top-10 left-10 w-24 h-24 bg-blue-100/50 rounded-full blur-2xl"></div>
          </div>

          <div className="flex-1">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-3">
              Professional Rent Car
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Lebih dari Sekedar Sewa Mobil, Kami Adalah{" "}
              <span className="text-blue-600">Mitra Perjalanan Anda.</span>
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Berdiri sejak lebih dari 10 tahun yang lalu, Rent Car telah tumbuh
              menjadi salah satu penyedia jasa transportasi terkemuka di
              Surabaya. Kami memahami bahwa setiap perjalanan memiliki cerita,
              dan kami ingin menjadi bagian dari cerita indah Anda.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Armada Terbaru dan Terawat",
                "Layanan Jemput Bandara",
                "Driver Profesional dan Ramah",
                "Harga Transparan dan Jujur",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href={"#armada"}
              className="bg-blue-600 text-xl text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
            >
              Booking Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">10+</p>
            <p className="text-slate-500 font-medium">Tahun Pengalaman</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
            <p className="text-slate-500 font-medium">Armada Ready</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">10k+</p>
            <p className="text-slate-500 font-medium">Pelanggan Puas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">24/7</p>
            <p className="text-slate-500 font-medium">Support Layanan</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Nilai Utama Kami
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<ShieldCheck size={40} className="text-blue-600" />}
              title="Keamanan Utama"
              desc="Setiap unit kami melalui inspeksi rutin berkala untuk menjamin keselamatan Anda di jalan."
            />
            <ValueCard
              icon={<Clock size={40} className="text-blue-600" />}
              title="Ketepatan Waktu"
              desc="Kami menghargai waktu Anda. Layanan antar-jemput kami selalu on-time sesuai jadwal."
            />
            <ValueCard
              icon={<Award size={40} className="text-blue-600" />}
              title="Layanan Premium"
              desc="Kualitas kebersihan mobil dan keramahan driver adalah standar wajib bagi kami."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-component untuk kartu nilai
const ValueCard = ({
  icon,
  title,
  desc,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  desc: string;
}) => (
  <div className="p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <div className="mb-6 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-2xl">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-4">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default AboutPage;
