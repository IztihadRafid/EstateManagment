"use client";
import { Modal } from "./Modal";
import { useFilterModalStore } from "@/store/useFilterModalStore";
import { Suspense, useState } from "react";
import { PropertyTypeCard } from "../properties/PropertyTypeCard";
import { PropertyTypes } from "@/constants/propertyTypes";
import { useRouter, useSearchParams } from "next/navigation";
const STEPS = {
  TYPE: 0,
  LOCATION: 1,
  PRICE: 2,
};
function FilterModalContent() {
  const searchParams = useSearchParams();
  const { close, isOpen, open } = useFilterModalStore();
  const router = useRouter();
  const [propertyType, setPropertyType] = useState(
    searchParams.get("propertyType") || "",
  );
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [address, setaddress] = useState(searchParams.get("address") || "");
  const [step, setStep] = useState(STEPS.TYPE);
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  const stepTitle = () => {
    switch (step) {
      case STEPS.TYPE:
        return "Select a property type";
      case STEPS.LOCATION:
        return "Select location";
      case STEPS.PRICE:
        return "Set a price range";
      default:
        return "";
    }
  };

  const applyFilter = () => {
    const params = new URLSearchParams();
    if (Location) params.set("location", location);
    if (address) params.set("address", address);
    if (propertyType) params.set("propertyType", propertyType);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    router.replace(`/marketplace?${params.toString()}`);
    setStep(STEPS.TYPE);
    close();
  };
  return (
    <Modal title="Filter Properties" isOpen={isOpen} onClose={close}>
      <div className="mb-6 flex items-center justify-between text-gray-500">
        <span>Step {step + 1} of 6</span>
        <span className="text-gray-700">{stepTitle()}</span>
      </div>

      <div className="min-h-55 rounded-xl text-gray-400 p-6 border border-dashed border-gray-300">
        {step === STEPS.TYPE && (
          <div className="grid grid-cols-2 gap-4 w-full max-h-[50vh] overflow-y-scroll no-scrollbar">
            {PropertyTypes.map((item) => (
              <PropertyTypeCard
                key={item.slug}
                label={item.label}
                icon={item.icon}
                selected={propertyType === item.slug}
                onClick={() => setPropertyType(item.slug)}
              ></PropertyTypeCard>
            ))}
          </div>
        )}
        {/* location */}
        {step === STEPS.LOCATION && (
          <div className="space-y-6 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 placeholder:text-gray-400"
              />
            </div>
          </div>
        )}
        {/* pricing */}
        {step === STEPS.PRICE && (
          <div className="space-y-6 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Min Price
                </label>
                <input
                  type="number"
                  name="min-price"
                  placeholder="00000"
                  value={minPrice}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMinPrice(Number(e.target.value))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Min Price
                </label>
                <input
                  type="number"
                  name="max-price"
                  placeholder="99999"
                  value={maxPrice}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMaxPrice(Number(e.target.value))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* button for next and previous */}
      <div className="mt-8 flex gap-3">
        {step > STEPS.TYPE && (
          <button
            className="px-4 py-2 bg-primary  text-white rounded-2xl hover:bg-primary/80 duration-300 w-full"
            onClick={() => setStep((prev) => prev - 1)}
          >
            Back
          </button>
        )}

        <button
          className="px-4 py-2 bg-primary text-white rounded-2xl hover:bg-primary/80 duration-300 w-full"
          onClick={() =>
            step < STEPS.PRICE ? setStep((prev) => prev + 1) : applyFilter()
          }
        >
          {step === STEPS.PRICE ? "Apply" : "Next"}
        </button>
      </div>
    </Modal>
  );
}

export default function FilterModal() {
  return (
    <Suspense>
      <FilterModalContent></FilterModalContent>
    </Suspense>
  );
}
