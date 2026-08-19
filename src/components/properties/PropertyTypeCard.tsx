import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface PropertyCardProps {
  label: string;
  icon: IconType | LucideIcon;
  selected?: boolean;
  onClick?: () => void;
}
export const PropertyTypeCard = ({
  label,
  icon: Icon,
  selected,
  onClick,
}: PropertyCardProps) => {
  return (
    <button
      className={` flex flex-col gap-3 p-4 border rounded-xl text-left transition text-gray-700 hover:border-black ${selected ? "border-black" : "border-gray-200"}`}
      type="button"
      onClick={onClick}
    >
      <Icon size={28} />
      <span>{label}</span>
    </button>
  );
};
