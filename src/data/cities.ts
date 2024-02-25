import { GeoJson } from "@/types/GeoJSON";
export interface City {
  name: string;
  country: string;
  urgency: 'low' | 'medium' | 'high';
  imageUri: string;
  location: GeoJson;
}

export const cities: City[] = [
  {
    name: 'Haiti',
    country: 'Haiti',
    urgency: 'high',
    imageUri: 'https://images.unsplash.com/photo-1532009324734-20a7a5813719',
    location: { type: 'Point', coordinates: [48.8566, 2.3522] }, // Example coordinates for Paris
  },
  {
    name: 'Maui',
    country: 'Maui',
    urgency: 'medium',
    imageUri: 'https://images.unsplash.com/photo-1532009324734-20a7a5813719',
    location: { type: 'Point', coordinates: [35.6895, 139.6917] }, // Example coordinates for Tokyo
  },
  {
    name: 'New York',
    country: 'USA',
    urgency: 'low',
    imageUri: 'https://images.unsplash.com/photo-1532009324734-20a7a5813719',
    location: { type: 'Point', coordinates: [40.7128, -74.0060] }, // Example coordinates for New York
  },{
    name: 'Paris',
    country: 'France',
    urgency: 'high',
    imageUri: 'https://images.unsplash.com/photo-1532009324734-20a7a5813719',
    location: { type: 'Point', coordinates: [48.8566, 2.3522] }, // Example coordinates for Paris
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    urgency: 'medium',
    imageUri: 'https://images.unsplash.com/photo-1532009324734-20a7a5813719',
    location: { type: 'Point', coordinates: [35.6895, 139.6917] }, // Example coordinates for Tokyo
  },
  {
    name: 'New York',
    country: 'USA',
    urgency: 'low',
    imageUri: 'https://images.unsplash.com/photo-1532009324734-20a7a5813719',
    location: { type: 'Point', coordinates: [40.7128, -74.0060] }, // Example coordinates for New York
  },
];