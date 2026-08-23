import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  property: Property;
}
export const PropertyCard = ({ property }: PropertyCardProps) => {
  console.log(property);
  return (
    <Link href={`/property/${property.id}`} className="block h-125">
      <div className="relative  rounded-lg shadow-md overflow-hidden hover:shadow-lg h-full transition-all duration-300 hover:scale-105">
        <Image
          src={property?.image}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover"
          width={400}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black/30 backdrop-blur-md">
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-md rounded-full text-xs font-medium uppercase">
              {property?.listingType}
            </span>
            <span className="px-3 py-1 bg-green-500/80 backdrop-blur-md rounded-full text-xs font-medium uppercase">
              {property?.propertyType}
            </span>
          </div>
          <h3 className="text-xl font-bold">{property.title}</h3>
          <p className="text-gray-200 text-sm">{property.location}, {property.address}</p>
          <p className="text-gray-300 text-xs mt-1 line-clamp-2">{property.description}</p>
          <p className="text-2xl font-bold mt-2">
            ${property?.price.toLocaleString()}
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
              {property?.bedrooms} beds
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
              {property?.bathrooms} baths
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
              {property?.parkingSpaces} parking
            </span>
            {property.area ? (
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
                {property.area} sqft
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};
