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

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import path from "path";

interface CarouselSizeProps {
  cities: City[]
}


export function CarouselSize({ cities }: CarouselSizeProps) {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const { setDestinationName } = useGlobalContext();


  const createQueryString = React.useCallback(
    (value: [number, number]) => {
      const params = new URLSearchParams(searchParams!.toString())
      params.set("lon", value[0].toString())
      params.set("lat", value[1].toString())

      return params.toString()
    },
    [searchParams]
  )
  // Call this function with the new destination name when it is selected
  const handleDestinationClick = (destination: string, coordinates: [number, number]) => {
    alert(destination);
    setDestinationName(destination);
    router.push("/calendar");

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
            <CarouselItem key={index} className="basis-1/3 " onClick={() => handleDestinationClick(city.name.toLowerCase(), city.location.coordinates)}>

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
