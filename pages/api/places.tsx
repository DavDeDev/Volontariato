import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'

const MONGODB_URI="mongodb+srv://akifmanzoor071:SiJAq2OzYUdoQT9Z@nsbe.z5asnkd.mongodb.net/?retryWrites=true&w=majority&appName=NSBE";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    console.log('calling handler function');
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    const db = client.db('NSBE');
    const places = await db.collection('accomodations').find().toArray();
  
    // console.log(places);
    
    res.status(200).json({ places });
  }