import { LucideBuilding2 } from "lucide-react";
import { FaHome } from "react-icons/fa";
import { FaBuilding, FaStore, FaWarehouse } from "react-icons/fa6";
import { LiaBuilding } from "react-icons/lia";
import { LuHotel, LuHousePlus, LuLandPlot, LuTrees } from "react-icons/lu";

export const PropertyTypes = [
  {
    label: "House",
    icon: FaHome,
    slug: "house",
  },
  {
    label: "Apartment",
    icon: FaBuilding,
    slug: "apartment",
  },
  {
    label: "Villa",
    icon: LuHousePlus,
    slug: "villa",
  },
  {
    label: "Penthouse",
    icon: LucideBuilding2,
    slug: "penthouse",
  },
  {
    label: "Townhouse",
    icon: LuTrees,
    slug: "townhouse",
  },
  {
    label: "Commercial",
    icon: FaStore,
    slug: "commercial",
  },
  {
    label: "Office",
    icon: LiaBuilding,
    slug: "office",
  },
  {
    label: "Hotel",
    icon: LuHotel,
    slug: "hotel",
  },
  {
    label: "Land",
    icon: LuLandPlot,
    slug: "land",
  },
  {
    label: "Warehouse",
    icon: FaWarehouse,
    slug: "warehouse",
  },
];
