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
  
  return (
    <main className="h-screen flex flex-col justify-center items-center ">
      <h1 className="text-6xl font-bold mt-10">Select Destination</h1>
      <CarouselSize cities={cities} />
    </main>
  );
}
