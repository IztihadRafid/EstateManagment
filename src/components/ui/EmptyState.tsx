"use client";
import { useRouter } from "next/navigation";
import { HiOutlineHomeModern } from "react-icons/hi2";
interface EmptyStateProps {
  title: string;
  subtitle: string;
  filter?: boolean;
}
export const EmptyState = ({ title, subtitle, filter }: EmptyStateProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/5">
        <HiOutlineHomeModern size={40} className="text-primary" />
      </div>

      <h2 className="mt-6 text-3xl font-bold text-text">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-md text-text/60 leading-relaxed">{subtitle}</p>
      )}

      {filter && (
        <div className="mt-8">
          <button onClick={() => router.replace("/marketplace")}>
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
