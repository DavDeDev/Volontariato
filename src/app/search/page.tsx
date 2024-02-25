"use client";
import DestinationCard from './DestinationCard';
import SearchBar from './SearchBar';
import Head from 'next/head';
import { useGlobalContext } from '../../context/GlobalContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CarouselSize } from '@/components/ui/carousel-size';
import { cities } from '../../data/cities';
export default function Page() {
  const { setDestinationName } = useGlobalContext();

  // Call this function with the new destination name when it is selected
  const handleDestinationClick = (destination : string) => {
    alert(destination);
    setDestinationName(destination);
  };
  return (
    <main className="h-screen flex flex-col justify-center items-center ">
      {/* <h1 className="text-6xl font-bold mt-10">
        Where do you want to go?
      </h1> */}
      <h1 className="text-6xl font-bold mt-10">Select Destination</h1>
      <CarouselSize cities={cities} />
    </main>
  );
}
