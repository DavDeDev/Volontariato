// pages/trip.js
"use client";
import Head from 'next/head';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const places = [
  // Add your places to stay here, each with their own properties
  {
    name: 'Parrotel Lagoon Waterpark Resort',
    stars: 5,
    reviews: 585,
    distance: '2 miles from the center',
    price: '$105 per night',
    amenities: ['Free breakfast', 'Free parking', 'Free High Speed Internet (WiFi)'],
    description: 'Spacious, clean rooms with modern design, some featuring jacuzzis. Welcoming atmosphere and helpful staff. Free wifi, multiple pools, aquapark, and daily activities. Enjoyable evening entertainment.',
    image: 'path-to-image', // You'll need to provide the path to your images
  },
  // ...other places
];

export default function Results() {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>
      <Head>
        <title>Your trip to Sharm El Sheikh for 7 days</title>
      </Head>
      <main>
        <h1>Sharm El Sheikh Itinerary</h1>
        <section>
          <p>Your trip to Sharm El Sheikh for 7 days</p>
          <p>Sharm El Sheikh, Egypt is a captivating destination for your solo trip. With its stunning landscapes...</p>
        </section>
        <section>
          <h2>Places to stay</h2>
          {places.map(place => (
            <div key={place.name}>
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              {/* Add other details */}
            </div>
          ))}
        </section>
        <div style={{ height: '50vh', width: '50%' }}>
        <APIProvider apiKey={'AIzaSyBs_upstrFEGJdLA0JxYpTwA1CRAveWPsk'}>
            <Map
            defaultCenter={{lat: 22.54992, lng: 0}}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            />
        </APIProvider>
    </div>
      </main>
    </>
  );
}
