import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";
import EmailForm from "@/components/properties/EmailForm";
import { SkeletonCard } from "@/components/skeletonCard/SkeletonCard";
import { getProperty } from "@/server-actions/getProperty";
import { Suspense } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { SiZend } from "react-icons/si";
import { MdOutlineLocalParking } from "react-icons/md";
import Image from "next/image";
import { SkeletonPropertyContent } from "@/components/skeletonCard/SkeletonPropertyContent";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) {
  const propertyId = (await params).propertyId;
  return (
    <FrontendLayout>
      <Navbar variant="solid"></Navbar>
      <Suspense fallback={<SkeletonPropertyContent />}>
        <PropertyContent propertyId={propertyId}></PropertyContent>
      </Suspense>
    </FrontendLayout>
  );
}
async function PropertyContent({ propertyId }: { propertyId: string }) {
  const property = await getProperty(propertyId);
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <div className="absolute top-4 left-4 z-20">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold capitalize">
              {property?.listingType}
            </span>
          </div>
          <Image
            src={property?.image || "placeholder.jpg"}
            alt="property image"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {property?.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <FaLocationDot className="text-primary" />
                <span>
                  {property?.location}, {property?.address}
                </span>
              </div>
              <p className="text-3xl font-bold text-primary mt-4">
                ${property?.price.toLocaleString()}
              </p>
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <IoBedOutline className="text-2xl text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">
                  {property?.bedrooms}
                </p>
                <p className="text-sm text-gray-600">Bedrooms</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <LuBath className="text-2xl text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">
                  {property?.bathrooms}
                </p>
                <p className="text-sm text-gray-600">Bathrooms</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <SiZend className="text-2xl text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">
                  {property?.area}
                </p>
                <p className="text-sm text-gray-600">Sqft</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <span className="text-2xl font-bold text-foreground capitalize">
                  {property?.propertyType}
                </span>
                <p className="text-sm text-gray-600">Type</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {property?.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Features
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <MdOutlineLocalParking className="text-primary" />
                  <span>{property?.parkingSpaces} Parking Space</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Central AC</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Hardwood Floors</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          {property?.ownerId && (
            <div className="lg:col-span-1">
              <EmailForm
                propertyTitle={property.title}
                propertyPrice={property.price}
                email={property.owner.email}
                image={property.owner.image || "/images/profile.jpg"}
                name={property.owner.name}
              ></EmailForm>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
