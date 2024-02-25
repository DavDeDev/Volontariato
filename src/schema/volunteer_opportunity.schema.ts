import { Schema, Document, model } from 'mongoose';

// Define the GeoJson interface for location
interface GeoJson {
  type: string;
  coordinates: [number, number];
}

// Enum for the type of job
enum VolunteeringJobType {
  FoodBank = 'Food bank',
  SoupKitchen = 'Soup Kitchen',
  GarbageCleanup = 'Garbage/Litter Cleanup',
  SocialWork = 'Social Work',
  Gardeners = 'Gardeners',
}

// Interface for the Volunteering Opportunity document
interface VolunteeringOpportunity extends Document {
  name: string;
  description: string;
  location: GeoJson;
  imageUrl: string;
  jobType: VolunteeringJobType;
  organization?: string;
}

// Mongoose schema for the Volunteering Opportunity
const volunteeringOpportunitySchema = new Schema<VolunteeringOpportunity>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  imageUrl: { type: String, required: true },
  jobType: {
    type: String,
    enum: Object.values(VolunteeringJobType),
    required: true,
  },
  organization: { type: String },
});

// Index for the GeoJson location field
volunteeringOpportunitySchema.index({ location: '2dsphere' });

// Create and export the Volunteering Opportunity model
export const VolunteeringOpportunityModel = model<VolunteeringOpportunity>('VolunteeringOpportunity', volunteeringOpportunitySchema);
