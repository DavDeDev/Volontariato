// pages/trip.js
"use client";
import Head from 'next/head';
import {APIProvider, Map, Marker, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';
import ItineraryDay from './ItineraryDay'
import { useGlobalContext } from '../../context/GlobalContext';
import useSWR from 'swr';
import React, { useEffect } from 'react';
import { CarouselAccomodations } from '../../components/ui/carousel-accomodations';

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
    latitude: 11.99835602,
    longitude: 77.01502627
  },
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
    latitude: 11.99835602,
    longitude: 77.01502627
  },
  // ...other places
];

const itineraryData = [
    {
      day: 1,
      description: "Start your volunteering journey in Sharm El Sheikh with a day dedicated to helping the community.",
      volunteeringPlaces: [
        { name: "Desert Bread Food Bank", icon: 'icon-class-for-food-bank' },
        { name: "Oasis Soup Kitchen", icon: 'icon-class-for-soup-kitchen' },
        { name: "Beachfront Beautification Team", icon: 'icon-class-for-cleanup' },
      ],
    },
    {
      day: 2,
      description: "Continue your efforts by supporting local social work organizations and lending a hand in communal gardens.",
      volunteeringPlaces: [
        { name: "Sunny Sands Social Services", icon: 'icon-class-for-social-work' },
        { name: "Green Haven Community Garden", icon: 'icon-class-for-gardening' },
      ],
    },
    {
      day: 3,
      description: "A day full of activities focusing on environmental stewardship and community aid.",
      volunteeringPlaces: [
        { name: "Blue Sea Garbage Collectors", icon: 'icon-class-for-cleanup' },
        { name: "Harbor Soup Kitchen", icon: 'icon-class-for-soup-kitchen' },
      ],
    },
    {
      day: 4,
      description: "Engage with different facets of volunteering from education to environmental cleanup.",
      volunteeringPlaces: [
        { name: "Desert Bloom Educational Outreach", icon: 'icon-class-for-social-work' },
        { name: "Reef Guardians Cleanup Crew", icon: 'icon-class-for-cleanup' },
        { name: "Sharm El Sheik Orphanage Support", icon: 'icon-class-for-social-work' },
      ],
    },
    // Add more days and opportunities as needed...
  ];
  
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Results() {
    let { destinationName, dateDifference } = useGlobalContext();
    // const { data, error } = useSWR('/api/places', fetcher);

    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';
    
        // Re-enable scrolling when the component unmounts
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, []);

    destinationName = 'Maui';

    // data ? console.log(data.places): console.log('log');

    // let filteredAccomodations = data ? data.places.filter(place => place.city === destinationName) : [];

    let filteredAccomodations = places;

    console.log(filteredAccomodations);

  return (
    <>
      <main className="text-black flex m-12">
        {/* <h1>{destinationName} Itinerary</h1> */}
        <div className="w-1/2 overflow-y-auto" style={{ maxHeight: '100vh' }}>
            <section className="border-b-2 m-4">
                <p className='text-2xl font-bold'>Your trip to {destinationName} for 4 days</p>
                <p className='text-gray-500 py-8'>{trip.description}</p>
            </section>
            <section className="border-b-2 m-4">
            <p className="text-gray-900 text-xl font-semibold">Places to stay</p> 
            {/* TODO: Add X, and give options for if they already have accomodations */}
            <p className='text-gray-500 py-8'>We've also recommended some places to stay during your trip</p>
            <div className="flex flex-row">
                {
                filteredAccomodations ? 
                    <CarouselAccomodations accomodations={filteredAccomodations} />: <></>
                }
            
            </div>
            </section>
            <section className="border-b-2 m-4">
                <div className="container p-0 flex flex-col w-/12">
                    {itineraryData.map((dayInfo, index) => (
                        <ItineraryDay 
                        key={index}
                        day={dayInfo.day} 
                        description={dayInfo.description} 
                        places={dayInfo.volunteeringPlaces} 
                        />
                    ))}
                </div>
            </section>
        </div>
        <div className="w-1/2" style={{ height: '80vh' }}> 
        <APIProvider apiKey={'AIzaSyBs_upstrFEGJdLA0JxYpTwA1CRAveWPsk'}>
            <Map
                defaultCenter={{lat: trip.lat, lng: trip.lng}}
                defaultZoom={12}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId={'123123123'}
            >
                {filteredAccomodations.map((place, index) => (
                    <Marker key={place.latitude} position={{lat: place.latitude, lng: place.longitude}} />
                ))}

                {filteredAccomodations.map((place, index) => (
                    <AdvancedMarker
                        key={place.latitude}
                        position={{lat: place.latitude + 0.002131, lng: place.longitude+0.12313}}>
                        <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                    </AdvancedMarker>
                ))}

            </Map>
        </APIProvider>
        </div>
      </main>
    </>
  );
}
