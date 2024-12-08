import Link from "next/link";
import Image from "next/image";
import RightImage from "../public/RightImage.png";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 min-h-[600px] p-4 md:p-8 lg:p-16">
      {/* Left Column */}
      <div className="md:col-span-2 bg-[#2A2644] text-white p-12 md:p-16 flex flex-col justify-between gap-8">
        <div className="max-w-lg">
          <h1 className="text-xl md:text-5xl lg:text-3xl font-light leading-tight">
            The furniture brand for the future, with timeless designs
          </h1>
          <Link
            href="/collection"
            className="inline-flex mt-6 items-center justify-center w-fit px-8 py-3 text-sm text-white transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-sm"
          >
            View collection
          </Link>
        </div>
        <p className="text-white/80 text-lg max-w-xl">
          A new era in eco friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors and a beautiful way to
          display things digitally using modern web technologies.
        </p>
      </div>

      {/* Right Column */}
      <div className="relative min-h-[400px] md:min-h-full">
        <Image
          src={RightImage}
          alt="Modern black chair with wooden legs"
          fill
          //   className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
