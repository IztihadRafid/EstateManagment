import Footer from "@/components/Footer/Footer";
import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";

export default function AboutPage() {
  return (
    <FrontendLayout>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-slate-950 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <h1 className="text-4xl mt-10 font-bold text-white md:text-5xl lg:text-6xl">
              About Estatemarket
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Transforming the real estate experience through innovation,
              trust, and exceptional service.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Our Story
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Founded in 2026, Estatemarket emerged from a simple vision:
                  to make finding and buying real estate as seamless as online
                  shopping. We recognized that the traditional real estate
                  process was often confusing, time-consuming, and filled with
                  unnecessary friction.
                </p>
                <p className="mt-4 text-lg text-slate-600">
                  Our team of real estate experts, technology innovators, and
                  customer service professionals came together to build a
                  platform that puts you first. We believe everyone deserves
                  access to quality properties and transparent information when
                  making one of life's biggest decisions.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Mission
                </h3>
                <p className="mt-4 text-lg text-slate-600">
                  To democratize real estate by providing a transparent,
                  efficient, and user-friendly platform that connects people
                  with their dream properties while empowering sellers with
                  tools to reach the right buyers.
                </p>
                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  Our Vision
                </h3>
                <p className="mt-4 text-lg text-slate-600">
                  To become the world's most trusted real estate marketplace,
                  where every property transaction is simple, secure, and
                  satisfying for all parties involved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-slate-900 text-center">
              Our Core Values
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Transparency
                </h3>
                <p className="mt-3 text-slate-600">
                  We believe in complete honesty about properties, pricing,
                  and processes. No hidden fees, no surprises.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Innovation
                </h3>
                <p className="mt-3 text-slate-600">
                  We constantly improve our platform with cutting-edge
                  technology to make your experience better.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Trust
                </h3>
                <p className="mt-3 text-slate-600">
                  Building lasting relationships through reliable service and
                  ethical practices is our foundation.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Excellence
                </h3>
                <p className="mt-3 text-slate-600">
                  We strive for perfection in every interaction, from search to
                  sale and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-slate-900 text-center">
              Why Choose Estatemarket?
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Extensive Property Listings
                </h3>
                <p className="mt-3 text-slate-600">
                  Browse thousands of verified properties with detailed
                  information, photos, and virtual tours.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Verified Listings
                </h3>
                <p className="mt-3 text-slate-600">
                  Every property is verified by our team to ensure accuracy and
                  legitimacy for your peace of mind.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Competitive Pricing
                </h3>
                <p className="mt-3 text-slate-600">
                  Find properties at fair market prices with tools to help you
                  make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-slate-950 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to Find Your Dream Property?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Join thousands of satisfied customers who found their perfect
                  home with Estatemarket.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/properties"
                className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Browse Properties
              </a>
              <a
                href="/contact"
                className="rounded-lg border border-white/20 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </FrontendLayout>
  );
}
