
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Home = () => {
  return (
    <main className="">

      <WavyBackground speed="fast" className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Volontariato (Second Page)
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Organize your volunteer trips with ease
        </p>
        <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton/>
      </SignedOut>
      </WavyBackground>
    </main>
  );
}
export default Home;