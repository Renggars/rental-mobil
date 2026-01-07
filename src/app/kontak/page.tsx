"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import HeroAbout from "../components/HeroAbout";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan Anda telah terkirim! Tim kami akan segera menghubungi Anda.");
  };

  return (
    <main className="bg-slate-50/50 pb-20">
      <HeroAbout />

      <section className="max-w-360 mx-auto px-6 sm:px-16 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom 1 & 2: Form Kirim Pesan */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
              Kirim Pesan
            </h2>
            <p className="text-slate-500 mb-8">
              Ada pertanyaan atau butuh penawaran khusus? Silakan isi formulir
              di bawah ini.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@contoh.com"
                    className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">
                  Subjek
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Sewa Bulanan Perusahaan"
                  className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">
                  Pesan
                </label>
                <textarea
                  rows={5}
                  placeholder="Tuliskan detail kebutuhan Anda..."
                  className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-max bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-100"
              >
                <Send size={18} />
                Kirim Sekarang
              </button>
            </form>
          </div>

          {/* Kolom 3: Informasi Kontak */}
          <div className="space-y-6">
            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-200/50">
              <h3 className="text-xl font-bold mb-6">Informasi Kontak</h3>

              <div className="space-y-6">
                <ContactItem
                  icon={<Phone size={20} />}
                  title="Telepon / WA"
                  content="+62 812 3456 7890"
                />
                <ContactItem
                  icon={<Mail size={20} />}
                  title="Email"
                  content="info@rentcar.com"
                />
                <ContactItem
                  icon={<Clock size={20} />}
                  title="Jam Operasional"
                  content="Setiap Hari: 24 Jam"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 rounded-xl">
                  <MapPin className="text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Kantor Pusat
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Jl. Raya Surabaya No. 123, <br />
                    Gubeng, Kota Surabaya, <br />
                    Jawa Timur 60281
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16 bg-white p-4 rounded-3xl shadow-sm border border-slate-100 h-112.5 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.209618196!2d112.63028113543662!3d-7.275971714138138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf838184353%3A0x401e8f1fc28c6e0!2sSurabaya%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1715600000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

// Sub-component untuk baris kontak
const ContactItem = ({
  icon,
  title,
  content,
}: {
  icon: any;
  title: string;
  content: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="p-2.5 bg-white/10 rounded-lg">{icon}</div>
    <div>
      <p className="text-blue-100 text-xs font-medium uppercase tracking-wider">
        {title}
      </p>
      <p className="font-bold text-white">{content}</p>
    </div>
  </div>
);

export default ContactPage;
