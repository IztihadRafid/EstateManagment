"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import logo from "../../../public/images/estatemarket-logo-light.webp";

interface NavbarProps {
  variant?: "transparent" | "solid";
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Marketplace", href: "/marketplace" },
];

const Navbar = ({ variant = "transparent" }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTransparent = variant === "transparent";
  const textColor = isTransparent
    ? "text-white hover:text-white/70"
    : "text-foreground hover:text-primary";
  const actionClassName =
    "inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-blue-800 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60";

  return (
    <header
      className={`top-0 left-0 z-50 w-full ${
        isTransparent ? "absolute" : "sticky border-b border-black/5 bg-card"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <nav
          className={`relative flex h-20 items-center justify-between ${
            isTransparent
              ? "mt-6 rounded-3xl border border-white/10 bg-white/5 px-6 backdrop-blur-2xl"
              : "px-0"
          }`}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Estatemarket home"
          >
            <Image src={logo} alt="Estatemarket Logo" width={200} priority />
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-sm transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:after:scale-x-100 ${textColor}`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/login" className={actionClassName}>
              Login
            </Link>
            <Link href="/add-property" className={actionClassName}>
              <FaHome aria-hidden="true" />
              Add Property
            </Link>
          </div>

          <div className="relative z-50 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className={`inline-flex size-10 items-center justify-center rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 ${
                isTransparent
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-black/10 text-foreground hover:bg-black/5"
              }`}
            >
              {isMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>

            {isMenuOpen && (
              <div
                id="mobile-navigation"
                className={`absolute right-0 top-full mt-5 w-72 origin-top-right animate-in fade-in zoom-in-95 slide-in-from-top-2 rounded-2xl border p-3 shadow-xl duration-200 ${
                  isTransparent
                    ? "border-white/10  text-white backdrop-blur-xl"
                    : "border-black/10 bg-card text-foreground"
                }`}
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`relative rounded-lg px-3 py-3 text-sm font-medium transition-colors after:absolute after:bottom-1 after:left-3 after:h-px after:w-[calc(100%-1.5rem)] after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                        isTransparent
                          ? "hover:bg-white/10"
                          : "hover:bg-black/5"
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>

                <div
                  className={`mt-3 grid gap-2 border-t pt-3 ${isTransparent ? "border-white/10" : "border-black/10"}`}
                >
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className={actionClassName}
                  >
                    Login
                  </Link>
                  <Link
                    href="/add-property"
                    onClick={() => setIsMenuOpen(false)}
                    className={actionClassName}
                  >
                    <FaHome aria-hidden="true" />
                    Add Property
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 cursor-default"
        />
      )}
    </header>
  );
};

export default Navbar;
