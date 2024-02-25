// lib/opportunity.controller.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '@/lib/mongoose';
import { VolunteeringOpportunityModel } from '@/models/volunteering_opportunity.model';
import { NextResponse } from 'next/server';

export async function listOpportunitiesByCity(coordinates: [number, number]) {
  console.log("listOpportunitiesByCity");
  try {
   
    await connectToDB();
    const opportunities = await VolunteeringOpportunityModel.find({
      'location.coordinates': { $near: { $geometry: { type: 'Point', coordinates }, $maxDistance: 10000 } },
    });
    return opportunities
  } catch (error) {
    new Error('Internal Server Error');
  }
}

export async function addOpportunity(req: NextApiRequest, res: NextApiResponse) {
  try {
    const opportunityData = req.body;
    await connectToDB();
    const newOpportunity = await VolunteeringOpportunityModel.create(opportunityData);
    res.status(201).json(newOpportunity);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function listOpportunitiesByOrganizer(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { organizerId } = req.query;
    await connectToDB();
    const opportunities = await VolunteeringOpportunityModel.find({ organizerId });
    res.status(200).json(opportunities);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function modifyOpportunity(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { opportunityId } = req.query;
    await connectToDB();
    const updatedOpportunity = await VolunteeringOpportunityModel.findByIdAndUpdate(
      opportunityId,
      req.body,
      { new: true, runValidators: true }
    );
    if (updatedOpportunity) {
      res.status(200).json(updatedOpportunity);
    } else {
      res.status(404).json({ error: 'Opportunity not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
