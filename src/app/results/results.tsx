// pages/trip.js
"use client";
import Head from 'next/head';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import AccommodationCard from './AccomodationCard';
import ItineraryDay from './ItineraryDay'
import { useGlobalContext } from '../../context/GlobalContext';
import useSWR from 'swr';

const trip = {
    city: 'Sharm El Sheikh',
    description: 'Sharm El Sheikh is a perfect destination for your 7-day solo trip in February. This stunning coastal city in Egypt offers a wide range of outdoor activities that will captivate your adventurous spirit. With its pristine beaches, crystal-clear waters, and vibrant coral reefs, Sharm El Sheikh is a paradise for snorkeling and diving enthusiasts. You can also explore the surrounding desert landscapes, go on thrilling quad biking or camel riding excursions, and witness breathtaking sunsets over the mountains. The pleasant weather during this time of the year makes it ideal for outdoor exploration and relaxation. Sharm El Sheikh is the ultimate destination to immerse yourself in nature and create unforgettable memories.',
    days: 4,
    lat: 10.99835602,
    lng: 77.01502627
}

const places = [
  // Add your places to stay here, each with their own properties
  {
    city: 'Maui',
    name: 'Parrotel Lagoon Waterpark Resort',
    stars: 5,
    reviews: 585,
    distance: '2 miles from the center',
    price: '$105 per night',
    amenities: ['Free breakfast', 'Free parking', 'Free High Speed Internet (WiFi)'],
    description: 'Spacious, clean rooms with modern design, some featuring jacuzzis. Welcoming atmosphere and helpful staff. Free wifi, multiple pools, aquapark, and daily activities. Enjoyable evening entertainment.',
    image: 'path-to-image', // You'll need to provide the path to your images
    lat: 11.99835602,
    lng: 77.01502627
  },
  {
    city: 'Maui',
    name: 'Parroteel Lagoon Waterpark Resort',
    stars: 5,
    reviews: 585,
    distance: '2 miles from the center',
    price: '$105 per night',
    amenities: ['Free breakfast', 'Free parking', 'Free High Speed Internet (WiFi)'],
    description: 'Spacious, clean rooms with modern design, some featuring jacuzzis. Welcoming atmosphere and helpful staff. Free wifi, multiple pools, aquapark, and daily activities. Enjoyable evening entertainment.',
    image: 'path-to-image', // You'll need to provide the path to your images
    lat: 10.99835602,
    lng: 74.01502627
  },
  {
    city: 'Somolia',
    name: 'Rarroteez Laroom Waterpark Resort',
    stars: 4,
    reviews: 235,
    distance: '2 miles from the center',
    price: '$121 per night',
    amenities: ['Free breakfast', 'Free parking', 'Free Internet (WiFi)'],
    description: 'Spacious, clean rooms with modern design, some featuring jacuzzis. Welcoming atmosphere and helpful staff. Free wifi, multiple pools, aquapark, and daily activities. Enjoyable evening entertainment.',
    image: 'path-to-image', // You'll need to provide the path to your images
    lat: 10.99833202,
    lng: 77.01502627
  },
  {
    city: 'Somolia',
    name: 'Rarroteaz Laroom Waterpark Resort',
    stars: 4,
    reviews: 235,
    distance: '2 miles from the center',
    price: '$121 per night',
    amenities: ['Free breakfast', 'Free parking', 'Free Internet (WiFi)'],
    description: 'Spacious, clean rooms with modern design, some featuring jacuzzis. Welcoming atmosphere and helpful staff. Free wifi, multiple pools, aquapark, and daily activities. Enjoyable evening entertainment.',
    image: 'path-to-image', // You'll need to provide the path to your images
    lat: 10.49835302,
    lng: 77.0102647
  },
  {
    city: 'Syria',
    name: 'Earzotei Wazom Hotel',
    stars: 2,
    reviews: 225,
    distance: '2 miles from the center',
    price: '$421 per night',
    amenities: ['Free parking', 'Free Internet (WiFi)'],
    description: 'Spacious, clean rooms with modern design, some featuring jacuzzis. Welcoming atmosphere and helpful staff. Free wifi, multiple pools, aquapark, and daily activities. Enjoyable evening entertainment.',
    image: 'path-to-image', // You'll need to provide the path to your images
    lat: 10.49831302,
    lng: 77.0153647
  },
  {
    city: 'Syria',
    name: 'Earzoteai Wazom Hotel',
    stars: 2,
    reviews: 225,
    distance: '2 miles from the center',
    price: '$421 per night',
    amenities: ['Free parking', 'Free Internet (WiFi)'],
    description: 'Spacious, clean rooms with modern design, some featuring jacuzzis. Welcoming atmosphere and helpful staff. Free wifi, multiple pools, aquapark, and daily activities. Enjoyable evening entertainment.',
    image: 'path-to-image', // You'll need to provide the path to your images
    lat: 10.45235302,
    lng: 77.0102347
  },
  // ...other places
];

const itineraryData = [
    {
      day: 1,
      description: "Start your volunteering journey in Sharm El Sheikh with a day dedicated to helping the community.",
      places: [
        { name: "Desert Bread Food Bank", icon: 'icon-class-for-food-bank' },
        { name: "Oasis Soup Kitchen", icon: 'icon-class-for-soup-kitchen' },
        { name: "Beachfront Beautification Team", icon: 'icon-class-for-cleanup' },
      ],
    },
    {
      day: 2,
      description: "Continue your efforts by supporting local social work organizations and lending a hand in communal gardens.",
      places: [
        { name: "Sunny Sands Social Services", icon: 'icon-class-for-social-work' },
        { name: "Green Haven Community Garden", icon: 'icon-class-for-gardening' },
      ],
    },
    {
      day: 3,
      description: "A day full of activities focusing on environmental stewardship and community aid.",
      places: [
        { name: "Blue Sea Garbage Collectors", icon: 'icon-class-for-cleanup' },
        { name: "Harbor Soup Kitchen", icon: 'icon-class-for-soup-kitchen' },
      ],
    },
    {
      day: 4,
      description: "Engage with different facets of volunteering from education to environmental cleanup.",
      places: [
        { name: "Desert Bloom Educational Outreach", icon: 'icon-class-for-social-work' },
        { name: "Reef Guardians Cleanup Crew", icon: 'icon-class-for-cleanup' },
        { name: "Sharm El Sheik Orphanage Support", icon: 'icon-class-for-social-work' },
      ],
    },
    // Add more days and opportunities as needed...
  ];
  
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Results() {
    const { destinationName, days } = useGlobalContext();
    const { data, error } = useSWR('/api/places', fetcher);

    console.log(data);

    
    const containerStyle = {
        width: '100%',
        height: '400px',
    };

  return (
    <>
      <main className="text-black">
        <h1>{destinationName} Itinerary</h1>
        <section>
          <p>Your trip to {destinationName} for {trip.days} days</p>
          <p>{trip.description}</p>
        </section>
        <section>
          <h2>Places to stay</h2> 
          {/* TODO: Add X, and give options for if they already have accomodations */}
          <p>We've also recommended some places to stay during your trip</p>
          <div className="flex flex-row">
            {places.map(place => (
                <div className="container mx-auto px-2">
                    <AccommodationCard 
                        name={place.name}
                        stars={place.stars}
                        rating={place.reviews}
                        distance={place.distance}
                        price={place.price}
                        amenities={place.amenities}
                        description={place.description}
                        image={place.image}
                    />
                </div>
            ))}
          </div>
        </section>
        <section>
            <div className="container mx-auto px-4 flex flex-col">
                {itineraryData.map((dayInfo, index) => (
                    <ItineraryDay 
                    key={index}
                    day={dayInfo.day} 
                    description={dayInfo.description} 
                    places={dayInfo.places} 
                    />
                ))}
            </div>
        </section>
        <div style={{ height: '50vh', width: '50%' }}>
        <APIProvider apiKey={'AIzaSyBs_upstrFEGJdLA0JxYpTwA1CRAveWPsk'}>
            <Map
                defaultCenter={{lat: trip.lat, lng: trip.lng}}
                defaultZoom={12}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                {places.map((place, index) => (
                    <Marker position={{lat: place.lat, lng: place.lng}} />
                ))}
            </Map>
        </APIProvider>
    </div>
      </main>
    </>
  );
}
