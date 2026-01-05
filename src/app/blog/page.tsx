"use client";

import Image from "next/image";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import HeroAbout from "../components/HeroAbout";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Panduan Lengkap: Cara Pesan Sewa Mobil di Sinar Abadi",
    excerpt:
      "Bingung bagaimana cara booking mobil untuk perjalanan Anda? Simak langkah-langkah mudah mulai dari pilih armada hingga serah terima kunci.",
    image: "/images/blog/booking-guide.jpg", // Pastikan gambar ada di folder public
    date: "15 Mei 2024",
    author: "Admin Sinar Abadi",
    category: "Panduan",
  },
  {
    id: 2,
    title: "5 Alasan Mengapa Anda Harus Memilih Sinar Abadi Rent Car",
    excerpt:
      "Dari kondisi armada yang selalu prima hingga layanan driver profesional, inilah alasan mengapa ribuan pelanggan setia mempercayakan perjalanan mereka pada kami.",
    image: "/images/blog/why-choose-us.jpg",
    date: "10 Mei 2024",
    author: "Layanan Pelanggan",
    category: "Keunggulan",
  },
  {
    id: 3,
    title: "Promo Libur Sekolah: Diskon Sewa Mobil Hingga 20%!",
    excerpt:
      "Rencanakan liburan keluarga Anda dengan lebih hemat. Dapatkan promo khusus untuk penyewaan di atas 3 hari selama musim liburan ini.",
    image: "/images/blog/promo-holiday.jpg",
    date: "05 Mei 2024",
    author: "Marketing Team",
    category: "Promosi",
  },
];

const Page = () => {
  return (
    <main className="bg-slate-50/50 pb-20">
      {/* Hero Section yang Konsisten */}
      <HeroAbout />

      <section className="max-w-360 mx-auto px-6 sm:px-16 -mt-16 relative z-30">
        <div className="text-center mb-12 hidden md:block">
          <div className="inline-block px-6 py-2 bg-white rounded-full shadow-md border border-slate-100">
            <span className="text-blue-600 font-bold">
              Wawasan & Update Terbaru
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Tag size={12} />
                  {post.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 font-bold flex items-center gap-2 group/btn w-fit"
                  >
                    Baca Selengkapnya
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-2 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / Langganan Blog */}
        <div className="mt-20 bg-blue-600 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Dapatkan Info Promo Langsung di Email Anda
            </h2>
            <p className="text-blue-100 mb-8">
              Jadilah yang pertama tahu tentang unit armada baru dan diskon
              eksklusif bulanan kami.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan alamat email"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-100 focus:outline-none focus:bg-white focus:text-slate-900 transition-all"
              />
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors">
                Berlangganan
              </button>
            </form>
          </div>

          {/* Aksen Dekorasi */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </section>
    </main>
  );
};

export default Page;
