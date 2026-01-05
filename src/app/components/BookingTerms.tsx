import React from "react";
// Import ikon dari React Icons
import {
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineExclamationCircle,
  HiOutlineUserGroup,
  HiOutlineOfficeBuilding,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import {
  MdOutlineFastfood,
  MdOutlineNightlight,
  MdOutlineSearch,
  MdOutlineCancel,
} from "react-icons/md";

const BookingTerms = () => {
  return (
    <section id="syarat-ketentuan" className="py-20 bg-slate-50 mt-10">
      <div className="max-w-360 mx-auto px-6 sm:px-16">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-10 xl:mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Syarat & Ketentuan Booking
          </h2>
          <p className="text-slate-600 text-lg">
            Panduan lengkap layanan Rentcar untuk menjamin keamanan dan
            kenyamanan perjalanan Anda.
          </p>
        </div>

        <div className="space-y-10 xl:space-y-16">
          {/* 1. Sewa Dengan Supir */}
          <div>
            <div className="flex items-center gap-3 mb-5 xl:mb-8">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <HiOutlineDocumentText size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Sewa Dengan Supir
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
              <TermCard
                icon={<HiOutlineDocumentText size={24} />}
                title="Identitas Diri"
                desc="Penyewa tidak diwajibkan untuk menyerahkan dokumen identitas diri asli."
              />
              <TermCard
                icon={<HiOutlineClock size={24} />}
                title="Batas Waktu"
                desc="Terdapat 2 batasan waktu menyewa harian, yaitu: 12 atau 24 jam sesuai kebutuhan."
              />
              <TermCard
                icon={<MdOutlineFastfood size={24} />}
                title="Uang Makan Supir"
                desc="Belum termasuk uang makan supir sebesar Rp 50.000/12 jam atau Rp 100.000/24 jam."
              />
              <TermCard
                icon={<MdOutlineNightlight size={24} />}
                title="Layanan 24 Jam"
                desc="Penjemputan sebelum jam 06:00 pagi atau penggunaan hingga lewat jam 12:00 malam, free."
              />
              <TermCard
                icon={<MdOutlineSearch size={24} />}
                title="Plat Ganjil/Genap"
                desc="Mohon konfirmasi saat reservasi jika memerlukan plat nomor kendaraan tertentu."
              />
              <TermCard
                icon={<HiOutlineShieldCheck size={24} />}
                title="Tanggung Jawab"
                desc="Kerusakan kendaraan karena kelalaian supir kami menjadi tanggung jawab kami sepenuhnya."
              />
            </div>
          </div>

          {/* 2. Sewa Lepas Kunci (Persyaratan Lengkap) */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 rounded-lg text-white">
              <HiOutlineShieldCheck size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Sewa Tanpa Supir (Lepas Kunci)
            </h3>
          </div>
          <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <RequirementGroup
                icon={<HiOutlineOfficeBuilding size={24} />}
                title="Perusahaan"
                items={[
                  "SIUP, NPWP, TDP, Domisili",
                  "KTP Direksi atau perwakilan",
                  "SIM Pengemudi",
                  "Deposit asuransi Rp 2.900.000,-",
                ]}
              />
              <RequirementGroup
                icon={<HiOutlineUserGroup size={24} />}
                title="Individu"
                items={[
                  "Kartu Identitas (KTP)",
                  "Kartu Keluarga (KK)",
                  "SIM A & NPWP",
                  "Deposit asuransi Rp 2.900.000,-",
                ]}
              />
              <RequirementGroup
                icon={<HiOutlineGlobeAlt size={24} />}
                title="Orang Asing"
                items={[
                  "Paspor & KITAS",
                  "SIM Internasional",
                  "Deposit asuransi Rp 2.900.000,-",
                ]}
              />
            </div>
          </div>

          {/* 3. Asuransi & Kebijakan Cancel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h4 className="flex items-center gap-2 text-blue-900 font-bold mb-4 text-xl">
                <HiOutlineShieldCheck className="text-blue-600" size={24} />{" "}
                Asuransi Perjalanan
              </h4>
              <p className="text-blue-800/80 text-sm leading-relaxed">
                Penyewa wajib menyelesaikan asuransi mobil Rp 3.500.000 sebagai
                jaminan premi. Dana kembali utuh 100% tanpa potongan dalam 5-10
                menit setelah verifikasi.
              </p>
            </div>
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
              <h4 className="flex items-center gap-2 text-red-900 font-bold mb-4 text-xl">
                <MdOutlineCancel className="text-red-600" size={24} /> Kebijakan
                Pembatalan
              </h4>
              <p className="text-red-800/80 text-sm leading-relaxed">
                Pembatalan reservasi dikenakan potongan 20% dan dana akan
                dikembalikan pada hari ke-3 setelah pengajuan.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 bg-slate-900 rounded-3xl text-white p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* TEXT AREA */}
            <div className="flex flex-col gap-3">
              {/* ICON + TITLE */}
              <div className="flex items-center gap-3">
                <HiOutlineExclamationCircle
                  size={28}
                  className="text-blue-400 shrink-0"
                />
                <span className="font-bold text-base">Penting</span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm opacity-90 leading-relaxed">
                Rentcar tidak bertanggung jawab atas kehilangan barang setelah
                layanan selesai. Mohon cek kembali barang bawaan Anda.
              </p>
            </div>

            {/* BUTTON */}
            <button
              className="
        w-full md:w-auto
        bg-blue-600 px-8 py-4 rounded-xl
        font-bold whitespace-nowrap
        hover:bg-blue-500 transition-all
      "
            >
              Hubungi Admin WA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TermCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h4 className="font-bold text-slate-900 text-lg mb-2">{title}</h4>
    <p className="text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const RequirementGroup = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => (
  <div>
    <div className="flex items-center gap-2 text-slate-900 font-bold mb-5">
      <span className="text-blue-600">{icon}</span>
      {title}
    </div>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-slate-600">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default BookingTerms;
