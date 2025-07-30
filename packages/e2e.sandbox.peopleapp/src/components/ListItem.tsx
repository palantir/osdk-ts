import type { ReactNode } from "react";

interface ListItemProps {
  /**
   * Whether this item is selected
   */
  isSelected: boolean;

  /**
   * Click handler for this item
   */
  onClick: () => void;

  /**
   * Primary content displayed in bold/medium font weight
   */
  primaryContent: ReactNode;

  /**
   * Secondary content displayed in smaller gray text
   */
  secondaryContent: ReactNode;

  /**
   * Additional class names to apply to the list item
   */
  className?: string;
}

export function ListItem({
  isSelected,
  onClick,
  primaryContent,
  secondaryContent,
  className = "",
}: ListItemProps) {
  return (
    <li
      className={`py-2 px-3 mb-1 rounded cursor-pointer hover:bg-gray-100 ${
        isSelected ? "bg-blue-100 hover:bg-blue-100" : ""
      } ${className}`}
      onClick={onClick}
    >
      <div className="font-medium">
        {primaryContent}
      </div>
      <div className="text-sm text-gray-600">
        {secondaryContent}
      </div>
    </li>
  );
}
