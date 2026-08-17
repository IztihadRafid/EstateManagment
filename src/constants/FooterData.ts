import { NavLink, SocialLink } from "@/types/footertypes";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
export const marketplaceLinks: NavLink[] = [
  { label: "Browse Properties", href: "/properties" },
  { label: "Add Your Property", href: "/add-property" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "How It Works", href: "/how-it-works" },
];

export const companyLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "X", href: "#", icon: FaXTwitter },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
];
