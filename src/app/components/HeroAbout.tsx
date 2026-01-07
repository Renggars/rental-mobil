import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      {/* BACKGROUND */}
      <Image
        src="/bg.png"
        alt="Background Rental Mobil"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/70" />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 sm:py-44">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* TEXT */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-gray-800">RENTAL</span>{" "}
              <span className="text-blue-500">MOBIL</span>
              <br />
              <span className="text-blue-500">TERPERCAYA</span>{" "}
              <span className="text-gray-700">UNTUK ANDA</span>
            </h1>

            <div className="inline-block mt-4 rounded-full border border-blue-500 px-5 py-2 text-xs sm:text-sm tracking-widest text-gray-700">
              BUAT PERJALANAN ANDA LEBIH NYAMAN
            </div>

            <p className="mt-4 max-w-md mx-auto md:mx-0 text-sm sm:text-base text-gray-600">
              Dedikasi kami adalah memberikan pengalaman perjalanan terbaik
              dengan armada prima dan layanan yang tulus.
            </p>

            <a
              href="https://wa.me/6282123435676"
              className="mt-6 inline-block text-xl sm:text-2xl font-bold text-blue-500 hover:underline"
            >
              0821 2343 5676
            </a>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="/images/toyota-fortuner.png"
              alt="Mobil Rental"
              width={520}
              height={360}
              priority
              className="
                w-full
                max-w-65 sm:max-w-[320px] md:max-w-md lg:max-w-lg
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
