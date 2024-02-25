import { useState } from 'react';

export default function ItineraryDay({ day, description, places }) {
  const [openItems, setOpenItems] = useState({});

  // Function to handle toggling the dropdown for each item
  const toggleItem = (index) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [index]: !prevOpenItems[index]
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4">
      <h2 className="text-2xl font-bold mb-4">Day {day}</h2>
      <p className="text-gray-700 mb-6">{description}</p>
      <div className="space-y-4">
        {places.map((place, index) => (
          <div key={index} className="border-b last:border-none">
            <button 
              onClick={() => toggleItem(index)}
              className="w-full text-left flex items-center justify-between py-3"
              aria-expanded={openItems[index]}
            >
              <div className="flex items-center">
                <span className="text-lg font-semibold">{index + 1}</span>
                <span className="ml-3">{place.name}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {openItems[index] ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                )}
              </svg>
            </button>
            {openItems[index] && (
              <div className="text-gray-500 mt-2 px-3 py-2">
                {/* Render additional details for the place here */}
                Details about {place.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
