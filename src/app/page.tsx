import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <FrontendLayout>
      <Navbar></Navbar>
      <section className="flex min-h-screen items-center overflow-hidden bg-cover bg-center bg-[url('/images/hero.jpg')] pt-32 lg:pt-36 py2">
        {/* overlay */}
        <div className="bg-black/15 absolute inset-0"></div>
        {/* gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/60 via-slate-900/50 to-transparent"></div>
      </section>
    </FrontendLayout>
  );
}
