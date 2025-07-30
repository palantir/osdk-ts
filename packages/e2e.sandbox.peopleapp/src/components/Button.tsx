import React from "react";

export function Button(
  {
    children,
    onClick,
    disabled,
    active = false,
    variant = "primary",
    type = "button",
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    active?: boolean;
    variant?: "primary" | "secondary" | "tab";
    type?: "button" | "submit" | "reset";
  },
) {
  return (
    <button
      className={`
        text-sm font-bold py-2 px-4 rounded-sm
        ${variant === "tab" ? "" : "text-white"}
        ${disabled ? "bg-gray-300 cursor-default" : ""}
        ${
        !disabled && variant === "primary" && !active
          ? "bg-blue-500 hover:bg-blue-700"
          : ""
      }
        ${
        !disabled && variant === "secondary" && !active
          ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
          : ""
      }
        ${
        !disabled && variant === "tab" && !active
          ? "bg-gray-200 hover:bg-gray-300"
          : ""
      }
        ${active && variant === "tab" ? "bg-blue-500 text-white" : ""}
        ${active && variant !== "tab" ? "bg-blue-700" : ""}
      `}
      aria-disabled={disabled}
      disabled={disabled}
      aria-pressed={active}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
