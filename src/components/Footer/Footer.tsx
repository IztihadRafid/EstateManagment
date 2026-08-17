import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../../../public/images/estatemarket-logo-light.webp";
import {
  companyLinks,
  marketplaceLinks,
  socialLinks,
} from "@/constants/FooterData";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr]">
          <div>
            <Link
              href="/"
              className="inline-flex"
              aria-label="Estatemarket home"
            >
              <Image src={logo} alt="Estatemarket Logo" width={200} />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Discover exceptional places to live, invest, and build your next
              chapter.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-sm text-white transition-colors hover:border-primary hover:bg-primary"
                >
                  <Icon aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Marketplace
            </h2>
            <ul className="mt-5 space-y-3">
              {marketplaceLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li>
                <Link
                  href="tel:+8801700000000"
                  className="flex gap-3 transition-colors hover:text-white"
                >
                  <Phone
                    className="size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  +880 1700 000 000
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@estatemarket.com"
                  className="flex gap-3 transition-colors hover:text-white"
                >
                  <Mail
                    className="size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  info@estatemarket.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Estatemarket. All rights reserved.</p>
          <p>Find the place you`ll love to call home.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
