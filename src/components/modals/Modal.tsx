"use client";
import { useEffect } from "react";
import { LuX } from "react-icons/lu";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}
export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div
      inert={!isOpen}
      className={`fixed inset-0 z-[100] flex items-center  justify-center px-4 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/30 transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      ></div>

      {/* modal */}
      <div
        className={`relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-2xl transform transition-all duration-500 max-h-[90vh] overflow-y-auto ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {/* header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

          <button
            aria-label="Close Modal"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <LuX size={18}></LuX>
          </button>
        </div>
        {/* content */}
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
};
