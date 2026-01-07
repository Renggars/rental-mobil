export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "cara-pesan-sewa-mobil-sinar-abadi",
    title: "Panduan Lengkap: Cara Pesan Sewa Mobil di Sinar Abadi",
    excerpt:
      "Bingung bagaimana cara booking mobil untuk perjalanan Anda? Simak langkah-langkah mudah mulai dari pilih armada hingga serah terima kunci.",
    image: "/cara-pesan.png",
    date: "15 Mei 2024",
    author: "Admin Sinar Abadi",
    category: "Panduan",
    content: `
      <p>Menyewa mobil di Sinar Abadi kini jauh lebih mudah dan transparan.</p>

      <h3>1. Pilih Armada Melalui Website</h3>
      <p>Kunjungi halaman armada kami dan pilih mobil sesuai kebutuhan Anda.</p>

      <h3>2. Hubungi Admin via WhatsApp</h3>
      <p>Klik tombol booking dan Anda akan diarahkan ke admin kami.</p>

      <h3>3. Kirim Persyaratan</h3>
      <p>Siapkan foto KTP dan SIM A yang masih berlaku.</p>

      <h3>4. Konfirmasi & Pembayaran</h3>
      <p>Lakukan pembayaran DP untuk mengunci unit pilihan Anda.</p>
    `,
  },
  {
    id: 2,
    slug: "alasan-memilih-sinar-abadi-rent-car",
    title: "5 Alasan Mengapa Anda Harus Memilih Sinar Abadi Rent Car",
    excerpt:
      "Dari armada prima hingga layanan profesional, inilah alasan pelanggan mempercayai kami.",
    image: "/alasan-memilih.png",
    date: "10 Mei 2024",
    author: "Layanan Pelanggan",
    category: "Keunggulan",
    content: `
      <p>Sinar Abadi Rent Car hadir dengan komitmen kualitas layanan terbaik.</p>

      <h3>1. Armada Terawat</h3>
      <p>Seluruh unit rutin diservis dan dicek kebersihannya.</p>

      <h3>2. Harga Transparan</h3>
      <p>Tidak ada biaya tersembunyi.</p>
    `,
  },
  {
    id: 3,
    slug: "promo-libur-sekolah-sewa-mobil",
    title: "Promo Libur Sekolah: Diskon Sewa Mobil Hingga 20%",
    excerpt:
      "Nikmati liburan keluarga lebih hemat dengan promo spesial musim liburan.",
    image: "/promo.png",
    date: "05 Mei 2024",
    author: "Marketing Team",
    category: "Promosi",
    content: `
      <p>Dapatkan promo spesial sewa mobil selama libur sekolah.</p>
    `,
  },
];
