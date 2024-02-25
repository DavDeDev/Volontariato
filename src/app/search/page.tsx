"use client";
import { useGlobalContext } from '../../context/GlobalContext';
import { CarouselSize } from '@/components/ui/carousel-size';
import { cities } from '../../data/cities';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const { setDestinationName } = useGlobalContext();
  const { data, error } = useSWR('/api/cities', fetcher);

  console.log(data);

  data ? console.log(data.cities): console.log('log');

  // Call this function with the new destination name when it is selected
  const handleDestinationClick = (destination : string) => {
    setDestinationName(destination);
  };
  
  return (
    <main className="h-screen flex flex-col justify-center items-center ">
      <h1 className="text-6xl font-bold mt-10">Select Destination</h1>
      {data ? <CarouselSize cities={cities} />: <></>}
    </main>
  );
}
