import Image from "next/image";

const About = () => {
  return (
    <section
      id="tentang-kami"
      className="pt-10 pb-16 xl:pt-36 bg-white overflow-hidden"
    >
      <div className="max-w-360 mx-auto px-6 sm:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Bagian Kiri: Visual/Image dengan Dekorasi */}
        <div className="flex-1 relative w-full group">
          <div className="relative z-10 w-full h-65 sm:h-85 lg:h-105 xl:h-125">
            <Image
              src="/images/mitsubishi-xpander.png"
              alt="Rentcar Mitsubishi Xpander"
              fill
              className="object-contain z-20 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Elemen Dekoratif Lingkaran (Mirip Gambar) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-100 xl:w-125 sm:h-100 xl:h-125 bg-blue-50 rounded-full z-0"></div>
          <div className="absolute top-10 left-10 w-24 h-24 bg-blue-100/50 rounded-full blur-2xl"></div>
        </div>

        {/* Bagian Kanan*/}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-blue-600 text-sm font-bold tracking-wider uppercase">
              Rental Mobil No. 1 di Surabaya
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl xl:text-5xl font-extrabold text-slate-900 leading-[1.2] lg:leading-[1.3] mb-6">
            Rentcar: Solusi Transportasi <br className="hidden sm:block" />
            <span className="text-blue-600">Andal & Terpercaya</span>
          </h2>

          <p className="text-slate-600 mb-2 text-lg text-justify">
            Rentcar adalah penyedia layanan jasa persewaan mobil profesional
            yang berfokus pada kenyamanan dan keamanan pelanggan. Kami
            berkomitmen untuk memberikan pelayanan terbaik melalui berbagai
            pilihan kendaraan yang siap menemani mobilitas Anda — baik untuk
            keperluan harian, perjalanan dinas, hingga liburan keluarga.
          </p>

          <p className="hidden sm:block text-slate-600 text-lg mb-8 text-justify">
            Dengan armada yang selalu terawat, sopir profesional (opsional),
            serta harga yang kompetitif, kami hadir sebagai solusi transportasi
            yang fleksibel dan transparan tanpa biaya tersembunyi.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                title: "Tarif Terjangkau",
                desc: "Harga kompetitif & transparan",
              },
              {
                title: "Berpengalaman",
                desc: "Lebih dari 10 tahun layanan",
              },
              {
                title: "Terpercaya",
                desc: "Booking aman & mudah",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
              >
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
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
  );
};

export default About;
