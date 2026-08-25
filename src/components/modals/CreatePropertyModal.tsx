"use client";
import { useCreatePropertyModalStore } from "@/store/useCreatePropertyModalStore";
import { Modal } from "./Modal";
import { useState } from "react";
import { PropertyTypes } from "@/constants/propertyTypes";
import { PropertyTypeCard } from "../properties/PropertyTypeCard";
import { Counter } from "../properties/Counter";
import ImageUpload from "../properties/ImageUpload";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export const CreatePropertyModal = () => {
  const STEPS = {
    TYPE: 0,
    LOCATION: 1,
    DETAILS: 2,
    FEATURE: 3,
    IMAGE: 4,
    PRICING: 5,
  };

  const { close, isOpen } = useCreatePropertyModalStore();
  const router = useRouter();
  const [step, setStep] = useState(STEPS.TYPE);
  const [loading, setLoading] = useState(false);
  const [properType, setProperType] = useState("");
  const [location, setLocation] = useState("");
  const [address, setaddress] = useState("");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [parkingSpaces, setParkingSpaces] = useState(1);
  const [area, setArea] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<null | File>(null);
  const [preview, setPreview] = useState<null | string>(null);
  const [listingType, setListingType] = useState<"sale" | "rent">("sale");
  const [price, setPrice] = useState("");
  const stepTitle = () => {
    switch (step) {
      case STEPS.TYPE:
        return "Select a property type";
      case STEPS.LOCATION:
        return "Provide a location";
      case STEPS.DETAILS:
        return "Fill in the details";
      case STEPS.FEATURE:
        return "Add features";
      case STEPS.IMAGE:
        return "Add images";
      case STEPS.PRICING:
        return "Set a price";
    }
  };

  const handleImageChange = (file: File) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };
  const resetForm = () => {
    setStep(STEPS.TYPE);
    setProperType("");
    setLocation("");
    setaddress("");
    setBedrooms(1);
    setBathrooms(1);
    setParkingSpaces(1);
    setArea("");
    setTitle("");
    setDescription("");
    setImage(null);
    setPreview(null);
    setListingType("sale");
    setPrice("");
    close();
  };
  const createListing = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("location", location);
      formData.append("address", address);
      formData.append("area", area);
      formData.append("propertyType", properType);
      formData.append("listingType", listingType);
      formData.append("bedrooms", bedrooms.toString());
      formData.append("bathrooms", bathrooms.toString());
      formData.append("parkingSpaces", parkingSpaces.toString());
      formData.append("price", price.toString());

      if (image) {
        formData.append("image", image);
      }

      await axios.post("/api/properties", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Property created successfully");
      router.replace("/properties");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data.error ||
            "Something went wrong. Please try again.",
        );
        return;
      }
    } finally {
      setLoading(false);
    }
    resetForm();
  };
  return (
    <Modal title="Create a new listing" onClose={close} isOpen={isOpen}>
      <div className="mb-6 flex items-center justify-between text-gray-500">
        <span>Step {step + 1} of 6</span>
        <span className="text-gray-700">{stepTitle()}</span>
      </div>
      {/* property type */}
      <div className="min-h-55 rounded-xl text-gray-400 p-6 border border-dashed border-gray-300">
        {step === STEPS.TYPE && (
          <div className="grid grid-cols-2 gap-4 w-full max-h-[50vh] overflow-y-scroll no-scrollbar">
            {PropertyTypes.map((item) => (
              <PropertyTypeCard
                key={item.slug}
                label={item.label}
                icon={item.icon}
                selected={properType === item.slug}
                onClick={() => setProperType(item.slug)}
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

        {/* details */}
        {step === STEPS.DETAILS && (
          <div className="space-y-6 w-full">
            <Counter
              title="Bedrooms"
              subTitle="How many Bedrooms"
              value={bedrooms}
              onChange={setBedrooms}
            ></Counter>
            <Counter
              title="Bathrooms"
              subTitle="How many Bathrooms"
              value={bathrooms}
              onChange={setBathrooms}
            ></Counter>
            <Counter
              title="Parking Spaces"
              subTitle="How many Parking Spaces"
              value={parkingSpaces}
              onChange={setParkingSpaces}
            ></Counter>
            {/* area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Area
              </label>
              <input
                type="text"
                placeholder="Enter Area (sqft)"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 placeholder:text-gray-400"
              />
            </div>
          </div>
        )}

        {/* feature */}
        {step === STEPS.FEATURE && (
          <div className="space-y-6 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
              />
            </div>
          </div>
        )}

        {/* image */}
        {step === STEPS.IMAGE && (
          <div className="space-y-6 w-full">
            <ImageUpload
              preview={preview}
              onChange={handleImageChange}
            ></ImageUpload>
          </div>
        )}
        {/* pricing */}
        {step === STEPS.PRICING && (
          <div className="space-y-6 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Listing Type
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-white"
                value={listingType}
                onChange={(e) =>
                  setListingType(e.target.value as "sale" | "rent")
                }
              >
                <option value="rent">For Rent</option>
                <option value="sale">For Sale</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="text"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 placeholder:text-gray-400"
              />
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
            step < STEPS.PRICING ? setStep((prev) => prev + 1) : createListing()
          }
        >
          {step === STEPS.PRICING ? "Create Listing" : "Next"}
        </button>
      </div>
    </Modal>
  );
};
