"use client";

import { useRouter } from "next/navigation";

export const ClearFilterbutton = () => {
  const router = useRouter();
  return (
    <div className="px-6 py-2 bg-primary  rounded-xl  text-white">
      <button onClick={() => router.replace("/marketplace")}>
        Clear Filters
      </button>
    </div>
  );
};
