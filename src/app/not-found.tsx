import Link from "next/link";
import { ArrowLeft, House, Search } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";

export default function NotFound() {
  return (
    <FrontendLayout>
      <Navbar variant="solid" />

      <main className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-slate-50 py-20">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-12 size-72 rounded-full bg-indigo-200/45 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 right-0 size-80 rounded-full bg-blue-100 blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-indigo-500/25">
              <House className="size-8" aria-hidden="true" />
            </div>

            <p className="mt-8 text-sm font-semibold tracking-[0.28em] text-primary">
              ERROR 404
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              This place is off the market.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              The page you are looking for may have moved, been removed, or
              never existed. Let&apos;s help you find a place worth calling
              home.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-800 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
              >
                <House className="size-4" aria-hidden="true" />
                Back to home
              </Link>
              <Link
                href="/marketplace"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
              >
                <Search className="size-4" aria-hidden="true" />
                Browse properties
              </Link>
            </div>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Return to the homepage
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </FrontendLayout>
  );
}
