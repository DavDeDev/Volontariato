// pages/index.js
"use client";
import DestinationCard from './DestinationCard';
import SearchBar from './SearchBar';
import Head from 'next/head';
import { useGlobalContext } from '../../context/GlobalContext';

const destinations = [
  { name: 'Maui', image: 'maui.jpg'},
  { name: 'Somalia', image: 'somalia.jpeg' },
  { name: 'Syria', image: 'syria.jpeg' },
  { name: 'South Sudan', image: 'southsudan.webp' },
  { name: 'Haiti', image: 'haiti.jpeg' },
];

export default function Home() {
  const { setDestinationName } = useGlobalContext();
  
  // Call this function with the new destination name when it is selected
  const handleDestinationClick = (destination) => {
    alert(destination);
    console.log(destination);
    setDestinationName(destination);
  };


  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <main className="bg-white flex flex-col items-center w-full flex-1 px-4 pt-100 text-center">
        <h1 className="text-6xl font-bold mt-10">
          Where do you want to go?
        </h1>
        <SearchBar placeholder="Search by city or town" />
        <div className="flex flex-row justify-center items-center ">
          {destinations.map(dest => (
            <div key={dest.name} onClick={() => handleDestinationClick(dest.name)} className="cursor-pointer">
              <DestinationCard 
                key={dest.name} 
                destination={dest.name} 
                image={dest.image}
                href={'/calendar'}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
