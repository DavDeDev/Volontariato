"use client";
import { useGlobalContext } from '../../context/GlobalContext';
import { CarouselSize } from '@/components/ui/carousel-size';
import { cities } from '../../data/cities';

export default function Page() {

  return (
    <main className="h-screen flex flex-col justify-center items-center ">
      <h1 className="text-6xl font-bold mt-10">Select Destination</h1>
      <CarouselSize cities={cities} />
    </main>
  );
}
