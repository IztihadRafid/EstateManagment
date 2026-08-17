import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { dummyProperties } from "@/constants/dummyProperties";

const MarketPlace = () => {
  return (
    <FrontendLayout>
      <Navbar variant="solid"></Navbar>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4 text-primary">
          Marketplace
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Discover a wide range of properties for sale and rent. Find your
          perfect home with our curated listings.
        </p>
        <div className="flex items-center justify-between mt-8">
          <h2 className="text-2xl font-semibold text-foreground">Explore</h2>
          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Filter
          </button>
        </div>

        {/* cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
          {dummyProperties.map((property) => (
            <PropertyCard key={property.id} property={property}></PropertyCard>
          ))}
        </div>
      </div>
    </FrontendLayout>
  );
};

export default MarketPlace;
