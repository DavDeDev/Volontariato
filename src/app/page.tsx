import { Spotlight } from "@/components/ui/Spotlight";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">

      <WavyBackground speed="slow" className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Volontariato
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Organize your volunteer trips with ease
        </p>
      </WavyBackground>
    </main>
  );
}
