// pages/index.js
import DestinationCard from './DestinationCard';
import SearchBar from './SearchBar';
import Head from 'next/head';

export default function Home() {
  const destinations = [
    { name: 'Honolulu', image: 'honolulu.jpg'},
    { name: 'Las Vegas', image: 'lasvegas.jpeg' },
    { name: 'Havana', image: 'havana.jpeg' },
    { name: 'Trinidad', image: 'trinidad.webp' },
    // Add other destinations similarly
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-8">

      <main className="bg-white flex flex-col items-center w-full flex-1 px-4 pt-100 text-center">
        <h1 className="text-6xl font-bold mt-10">
          Where do you want to go?
        </h1>
        <SearchBar placeholder="Search by city or town" />
        <div className="flex flex-row justify-center items-center ">
          {destinations.map(dest => (
            <DestinationCard 
              key={dest.name} 
              destination={dest.name} 
              image={dest.image}
              href={'/calendar'}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
