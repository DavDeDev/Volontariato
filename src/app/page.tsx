
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <WavyBackground speed="fast" className="max-w-4xl mx-auto ">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center flex justify-center ali">
          Volontariato
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Organize your volunteer trips with ease
        </p>
        <div className="w-full flex justify-center mt-5">
          <Link href="/search"><Button>Start Now!</Button></Link></div>

      </WavyBackground>
    </main>
  );
}
