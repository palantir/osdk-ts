import React from "react";

export function Button(
  { children, onClick, disabled }: {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
  },
) {
  return (
    <button
      className="
      text-sm
      bg-blue-500 hover:bg-blue-700 
      text-white font-bold 
      py-2 px-4 
      rounded-sm aria-disabled:bg-gray-300 aria-disabled:cursor-default"
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
