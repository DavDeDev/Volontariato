// "use client"
// import { useSearchParams } from 'next/navigation'
import { listOpportunitiesByCity } from '@/actions/volunteer_opportunity.actions';

export default async function Page({ params }: { params: { city: string } }) {
  // const searchParams = useSearchParams()

  // const coordinates: [number, number] = [parseFloat(searchParams!.get('lon')), searchParams!.get('lat')]
  "use server"
  const listOfOpportunities = await listOpportunitiesByCity([40.7128, -74.006]).then(res => {
    return res;
  });

  console.log(listOfOpportunities);

  return <div>My Post: {listOfOpportunities}</div>
}