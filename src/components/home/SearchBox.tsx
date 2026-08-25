"use client";
import { useState } from "react";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handlSearch = () => {
    if (!searchQuery.trim()) return;
    router.push(`/marketplace?search=${searchQuery}`);
  };
  return (
    <div className="mt-10 rounded-4xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop:blur-2xl">
      <div className="flex flex-col gap-4 lg:flex-row">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search by City, neighbourhood or address"
          className="px-5 py-4 w-full h-14 flex-1 rounded-2xl border border-white/10 bg-white/5 text-white placeholder:text-white/80 outline-none transition focus:border-primary/40"
        />
        <Button onClick={handlSearch} className="h-14">
          Search Properties
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
