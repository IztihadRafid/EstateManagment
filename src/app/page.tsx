import { RecentProperties } from "@/components/home/RecentProperties";
import SearchBox from "@/components/home/SearchBox";
import Footer from "@/components/Footer/Footer";
import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <FrontendLayout>
      <Navbar></Navbar>
      <section className="flex min-h-screen items-center overflow-hidden bg-cover bg-center bg-[url('/images/image3.webp')] pt-32 lg:pt-36 py2">
        {/* overlay */}
        <div className="bg-black/15 absolute inset-0"></div>
        {/* gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/60 via-slate-900/50 to-transparent"></div>

        {/* content */}
        <div className="w-full z-10 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="max-w-3xl">
              {/* badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="  tracking-wide text-white">
                  Premium Real Estate Marketplace
                </span>
              </div>

              <div>
                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-white">
                  Discover where you truly belong starting today.
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-white/80">
                  Find extraordinary living spaces, sleek urban apartments, and
                  prime estates crafted for your ultimate lifestyle.
                </p>
              </div>

              {/* SearchBox */}
              <SearchBox></SearchBox>
            </div>
          </div>
        </div>
      </section>
      <RecentProperties></RecentProperties>
      <Footer />
    </FrontendLayout>
  );
}
