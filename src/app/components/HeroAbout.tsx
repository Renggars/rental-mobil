import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="relative w-full aspect-1440/524 overflow-hidden">
      {/* BACKGROUND */}
      <Image
        src="/bg.png"
        alt="Background Rental Mobil"
        fill
        priority
        className="object-cover"
      />

      {/* CONTENT */}
      <div className="absolute inset-0">
        <div className="container mx-auto h-full px-6 md:px-12">
          <div className="grid h-full grid-cols-1 md:grid-cols-2 items-center">
            {/* LEFT CONTENT */}
            <div className="z-10 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                <span className="text-gray-800">RENTAL</span>{" "}
                <span className="text-blue-500">MOBIL</span>
                <br />
                <span className="text-blue-500">TERPERCAYA</span>{" "}
                <span className="text-gray-700">UNTUK ANDA</span>
              </h1>

              <div className="inline-block mt-4 rounded-full border border-blue-500 px-5 py-2 text-sm tracking-widest text-gray-700">
                BUAT PERJALANAN ANDA LEBIH NYAMAN
              </div>

              <p className="mt-4 max-w-md text-gray-600">
                Dedikasi kami adalah memberikan pengalaman perjalanan terbaik di
                dengan armada prima dan layanan yang tulus.
              </p>

              <a
                href="https://wa.me/6282123435676"
                className="mt-6 inline-block text-2xl font-bold text-blue-500"
              >
                0821 2343 5676
              </a>
            </div>

            {/* RIGHT IMAGE (MOBIL) */}
            <div className="relative hidden md:flex justify-end items-center">
              <Image
                src="/images/toyota-fortuner.png"
                alt="Mobil Rental"
                width={600}
                height={400}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
