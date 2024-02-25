import { Schema, Document, model } from 'mongoose';
import { GeoJson } from '@/types/GeoJSON';


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
  organizerId?: string;
}

// Mongoose schema for the Volunteering Opportunity
const volunteeringOpportunitySchema = new Schema<VolunteeringOpportunity>({
  name: { type: String },
  description: { type: String },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
    },
  },
  imageUrl: { type: String },
  jobType: {
    type: String,
    enum: Object.values(VolunteeringJobType),
  },
  organization: { type: String },
  organizerId: { type: String },
});

// Index for the GeoJson location field
volunteeringOpportunitySchema.index({ location: '2dsphere' });

// Create and export the Volunteering Opportunity model
export const VolunteeringOpportunityModel = model<VolunteeringOpportunity>('VolunteeringOpportunity', volunteeringOpportunitySchema);
