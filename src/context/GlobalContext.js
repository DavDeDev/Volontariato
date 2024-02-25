"use client";
import { createContext, useState, useContext } from 'react';

// Create a context with a default value
const GlobalContext = createContext(null);

// Create a custom hook to use the global context
export const useGlobalContext = () => useContext(GlobalContext);

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [destinationName, setDestinationName] = useState('');

  // You can add more state variables and functions here as needed

  // The value prop of the provider will be our context data
  // This will be available to any child component that calls useGlobalContext
  return (
    <GlobalContext.Provider value={{ destinationName, setDestinationName }}>
      {children}
    </GlobalContext.Provider>
  );
};