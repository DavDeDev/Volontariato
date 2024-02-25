
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import { FloatingNav } from "@/components/ui/floating-navbar";

const Home = () => {
  return (
    <main>
      <FloatingNav navItems={
        [
          {
            name: "Home",
            link: "/",
          },
          {
            name: "About",
            link: "/about",
          },
          {
            name: "Contact",
            link: "/contact",

          },
        ]} />


      <WavyBackground speed="fast" className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Volontariato (Second Page)
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Organize your volunteer trips with ease
        </p>

      </WavyBackground>
    </main>
  );
}
export default Home;