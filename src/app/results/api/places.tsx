import { MongoClient } from 'mongodb';

export default async function handler(req, res) {

  console.log('calling handler function');
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('sample_mflix');
  const places = await db.collection('comments').find().toArray();

  console.log(places);
  
  return res.status(200).json({ places });
}