"use client";
import { useFilterModalStore } from "@/store/useFilterModalStore";
import { Funnel } from "lucide-react";

export const FilterButton = () => {
  const { open } = useFilterModalStore();
  return (
    <button
      onClick={open}
      className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex justify-between gap-2 items-center"
    >
      <Funnel color="white" size={16} /> <span>Filter</span>
    </button>
  );
};
