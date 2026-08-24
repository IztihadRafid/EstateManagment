import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";
import { FilterButton } from "@/constants/FilterButton";
import { MarketPlace } from "@/components/marketplace/MarketPlace";
import { Suspense } from "react";
import { SkeletonCard } from "@/components/skeletonCard/SkeletonCard";
type MarketPlacePageProp = {
  searchParams: {
    search?: string;
    propertyType?: string;
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    address?: string;
  };
};
const MarketPlacePage = async ({ searchParams }: MarketPlacePageProp) => {
  const params = await searchParams;
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
          <FilterButton></FilterButton>
        </div>

        {/* cards */}
        <Suspense fallback={<SkeletonCard />}>
          <MarketPlace searchParams={params}></MarketPlace>
        </Suspense>
      </div>
    </FrontendLayout>
  );
};

export default MarketPlacePage;
