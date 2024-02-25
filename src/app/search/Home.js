// pages/index.js
import DestinationCard from './DestinationCard';
import SearchBar from './SearchBar';
import Head from 'next/head';
import styles from './Home.modules.css';

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
      <Head>
        <title>Travel Destination Finder</title>
        <meta name="description" content="Find your next travel destination" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Where do you want to go?
        </h1>
        <SearchBar placeholder="Search by city or town" />
        <div className="flex flex-row justify-center items-center">
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
