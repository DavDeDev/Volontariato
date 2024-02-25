"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { City } from '@/data/cities';
import { DirectionAwareHover } from "./direction-aware-hover";
import { BackgroundGradient } from "./background-gradient";
import { useGlobalContext } from '@/context/GlobalContext';

import { useRouter } from 'next/navigation'

interface CarouselSizeProps {
  cities: City[]
}


export function CarouselSize({ cities }: CarouselSizeProps) {

  const { setDestinationName } = useGlobalContext();
  const router = useRouter();
  // Call this function with the new destination name when it is selected
  const handleDestinationClick = (destination: string) => {
    alert(destination);
    setDestinationName(destination);
    router.push(destination.toLowerCase());

  };
  return (
    <div className=" p-20">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {cities.map((city, index) => (
            <CarouselItem key={index} className="basis-1/3 " onClick={() => handleDestinationClick(city.name)}>

              <DirectionAwareHover imageUrl={city.imageUri} className="border-destructive    border-4">
                <h1 className="">{city.name}</h1>
                <p className="text-gray">{city.country}</p>
              </DirectionAwareHover>

            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel></div>
  )
}
