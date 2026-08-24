import { getProperties } from "@/server-actions/getProperties";
import { PropertyCard } from "../properties/PropertyCard";
import { Property } from "@/types/property";
import { EmptyState } from "../ui/EmptyState";
interface MarketPlaceProps {
  searchParams: {
    search?: string;
    propertyType?: string;
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    address?: string;
  };
}
export const MarketPlace = async ({ searchParams }: MarketPlaceProps) => {
  const properties: Property[] = await getProperties({
    search: searchParams.search,
    propertyType: searchParams.propertyType,
    location: searchParams.location,
    minPrice: searchParams.minPrice,
    maxPrice: searchParams.maxPrice,
    address: searchParams.address,
  });

  if (properties.length === 0) {
    return (
      <EmptyState
        title="No Matching Properties"
        subtitle="Try Adjusting your search criteria or clear some filters to see more results"
        filter={true}
      ></EmptyState>
    );
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property}></PropertyCard>
      ))}
    </div>
  );
};
