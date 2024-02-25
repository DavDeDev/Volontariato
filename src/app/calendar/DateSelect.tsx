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
    <div className="flex flex-col justify-center items-center">
      <CalendarProvider>
        <h1 className="text-2xl font-bold text-center my-4">When do you want to go?</h1>
        <div className="flex flex-col justify-center items-center max-w-xl space-y-6">
          
          <SampleCheckin />
          <SampleCheckout />
          
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>

          <div className="flex justify-between mt-12 ">
            <Link href="/search">
              <p className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200 cursor-pointer">Back</p>
            </Link>
            <Link href="/results">
              <p onClick={handleNextClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 cursor-pointer">Next</p>
            </Link>
          </div>

        </div>
      </CalendarProvider>
    </div>
  
  );
}
