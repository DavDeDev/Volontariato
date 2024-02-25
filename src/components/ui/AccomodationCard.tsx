// AccommodationCard.js

export default function AccommodationCard({ 
  name, 
  stars, 
  rating, 
  distance, 
  price, 
  amenities, 
  description, 
  image 
}) {
  return (
      <div className="flex flex-col w-96 max-w-sm rounded overflow-hidden shadow-lg bg-white border-2 h-full">
          <div className="w-full h-48 overflow-hidden">
              <img className="w-full h-full object-cover" src={image} alt={`Image of ${name}`} />
          </div>
          <div className="flex-grow flex flex-col justify-between">
              <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700 text-base">
                      {description}
                  </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`${stars} (${stars} stars)`}</span>
                  <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`${rating} (${rating} ratings)`}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{distance}</span>
                  <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}</span>
                  {/* Uncomment and adjust if amenities are to be displayed
                  {amenities.map(amenity => (
                      <span key={amenity} className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          {amenity}
                      </span>
                  ))} */}
              </div>
          </div>
      </div>
  );
}
