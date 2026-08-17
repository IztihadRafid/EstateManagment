import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";
import EmailForm from "@/components/properties/EmailForm";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { SiZend } from "react-icons/si";

export default function PropertyPage() {
  return (
    <FrontendLayout>
      <Navbar variant="solid"></Navbar>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Hero Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="absolute top-4 left-4 z-20">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                For Sale
              </span>
            </div>
            <div className="w-full h-full bg-gray-200" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Modern Luxury Apartment
                </h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaLocationDot className="text-primary" />
                  <span>Downtown, New York, NY</span>
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <IoBedOutline className="text-2xl text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <LuBath className="text-2xl text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">2</p>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <SiZend className="text-2xl text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">4100</p>
                  <p className="text-sm text-gray-600">Sqft</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <span className="text-2xl font-bold text-foreground">
                    Apartment
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
                  Experience luxury living in this stunning modern apartment
                  featuring floor-to-ceiling windows, premium finishes, and
                  breathtaking city views. The open-concept design seamlessly
                  connects the living, dining, and kitchen areas, perfect for
                  entertaining. The master suite includes a spa-like bathroom
                  and walk-in closet. Building amenities include a rooftop
                  terrace, fitness center, and 24/7 concierge.
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Features
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Central AC",
                    "Hardwood Floors",
                    "Parking",
                    "Gym",
                    "Pool",
                    "Security",
                    "Balcony",
                    "Storage",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <EmailForm></EmailForm>
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}
