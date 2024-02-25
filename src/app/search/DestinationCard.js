// components/DestinationCard.js
import Link from 'next/link';

export default function DestinationCard({ destination, image, href }) {
  return (
    <Link href={href}>
      <div className="h-full">
        <img
          src={image}
          alt={`${destination} view`}
          className="object-fill"
        />
        <div className="">
          {destination}
        </div>
      </div>
    </Link>
  );
}

// components/DestinationCard.js
// export default function DestinationCard({ destination, image }) {
//   return (
//     <div className="relative w-72 h-44"> {/* Adjust the width and height as needed */}
//       <img
//         src={image}
//         alt={`${destination} view`}
//         className="absolute inset-0 w-full h-full object-contain rounded-lg"
//       />
//       <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full text-white text-xl p-2 rounded-b-lg">
//         {destination}
//       </div>
//     </div>
//   );
// }
