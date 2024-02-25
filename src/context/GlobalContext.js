"use client";
import { createContext, useState, useContext } from 'react';

// Create a context with a default value
const GlobalContext = createContext(null);

// Create a custom hook to use the global context
export const useGlobalContext = () => useContext(GlobalContext);

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [destinationName, setDestinationName] = useState('');
  const [dateDifference, setDateDifference] = useState(0); // New state for storing the date difference

  // Function to calculate and set the date difference
  const calculateAndSetDateDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Difference in days

    setDateDifference(difference); // Update the context state
  };

  // Including the new function and state in the context value
  return (
    <GlobalContext.Provider value={{ destinationName, setDestinationName, dateDifference, calculateAndSetDateDifference }}>
      {children}
    </GlobalContext.Provider>
  );
};