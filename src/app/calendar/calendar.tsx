// pages/itinerary.js or pages/[destination].js if you use dynamic routes
"use client";
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Itinerary Planner</title>
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center my-4">When do you want to go?</h1>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-4">
            <label htmlFor="start-date" className="text-gray-700">Start Date</label>
            <input
              type="date"
              id="start-date"
              className="p-2 border rounded"
              value={startDate.toISOString().split('T')[0]}
              onChange={e => setStartDate(new Date(e.target.value))}
            />

            <label htmlFor="end-date" className="text-gray-700">End Date</label>
            <input
              type="date"
              id="end-date"
              className="p-2 border rounded"
              value={endDate.toISOString().split('T')[0]}
              onChange={e => setEndDate(new Date(e.target.value))}
            />

            <div className="flex justify-between mt-8">
              <Link href="/search">
                <div className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200">Back</div>
              </Link>
                <Link href="/results">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">Next</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
