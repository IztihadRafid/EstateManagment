import React from "react";

export const SkeletonCard = () => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className=" h-106 bg-black/5 animate-pulse rounded-3xl"
        ></div>
      ))}
    </div>
  );
};
