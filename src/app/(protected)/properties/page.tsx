import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { SkeletonCard } from "@/components/skeletonCard/SkeletonCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { getUserProperty } from "@/server-actions/getUserProperty";
import { Suspense } from "react";

const PropertiesPage = () => {
  return (
    <FrontendLayout>
      <Navbar variant="solid"></Navbar>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex items-center justify-between mt-8">
          <h2 className="text-2xl font-semibold text-foreground">Properties</h2>
          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Filter
          </button>
        </div>

        {/* cards */}
        <Suspense fallback={<SkeletonCard />}>
          <PropertiesContent></PropertiesContent>
        </Suspense>
      </div>
    </FrontendLayout>
  );
};
async function PropertiesContent() {
  const properties = await getUserProperty();
  if (properties.length === 0)
    return (
      <EmptyState
        title="No Properties"
        subtitle="You have no properties yet. Check back later after creating new listings"
      ></EmptyState>
    );
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property}></PropertyCard>
      ))}
    </div>
  );
}
export default PropertiesPage;
