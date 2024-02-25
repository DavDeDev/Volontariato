"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useGlobalContext } from '../../context/GlobalContext';
import {
  Calendar,
  CalendarContainer,
  CalendarProvider,
  useCalendarState,
  useCalendarDispatch,
  ACTION_TYPES,
} from 'react-carousel-calendar';

function SampleCheckin() {
  const { checkin } = useCalendarState();
  const calendarDispatch = useCalendarDispatch();

  const handleClickButton = () => {
    const type = ACTION_TYPES.CHECK_IN_DELETE;
    calendarDispatch({ type });
  };
}

function SampleCheckout() {
  const { checkout } = useCalendarState();
  const calendarDispatch = useCalendarDispatch();

  const handleClickButton = () => {
    const type = ACTION_TYPES.CHECK_OUT_DELETE;
    calendarDispatch({ type });
  };
}

export default function DateSelect() {
  const { calculateAndSetDateDifference } = useGlobalContext();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const { checkin, checkout } = useCalendarState();

  const handleNextClick = () => {
    calculateAndSetDateDifference(startDate, endDate);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <CalendarProvider>
        <p className="text-2xl font-bold text-center my-4">When do you want to go?</p>
        <p className="text-base text-gray-500 font-semibold text-center mb-4">Choose a date range or length of stay, up to 7 days.</p>
        <div className="flex flex-col justify-center items-center max-w-xl space-y-6">
          
          <SampleCheckin />
          <SampleCheckout />
          
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>

          <div className="flex justify-between mt-12 w-full">
            <Link href="/search">
              <p className="px-4 py-2 text-black rounded-full hover:bg-gray-300 transition duration-200 cursor-pointer">Back</p>
            </Link>
            <Link href="/results">
              <p onClick={handleNextClick} className="px-24 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition duration-200 cursor-pointer">Next</p>
            </Link>
          </div>

        </div>
      </CalendarProvider>
    </div>
  
  );
}
