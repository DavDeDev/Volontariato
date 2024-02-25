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
import { DirectionAwareHover } from "./direction-aware-hover";
import { BackgroundGradient } from "./background-gradient";
import { useGlobalContext } from '@/context/GlobalContext';

import { useRouter } from 'next/navigation'
import AccommodationCard from "./AccomodationCard";

interface CarouselSizeProps {
  accomodations: Accomodations[]
}


export function CarouselAccomodations({ accomodations }: CarouselAccomodationsProps) {
    console.log(accomodations)

  return (
    <div className="h-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {accomodations.map((place, index) => (
            <CarouselItem key={index} className="basis-1/3 h-full">
              {/* <DirectionAwareHover imageUrl={place.imageUri} className="w-full h-full"> */}
                <AccommodationCard 
                    key={place.name}
                    name={place.name}
                    stars={place.stars}
                    rating={place.reviews}
                    distance={place.distance}
                    price={place.price}
                    amenities={place.amenities}
                    description={place.description}
                    image={place.image}
                  />
              {/* </DirectionAwareHover> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
  )
}
