import React from "react";
import { FiBookmark } from "react-icons/fi"; // Example icon (install react-icons)

interface CareerCardProps {
  title: string;
  description: string;
  isSelected?: boolean;
  className?: string;
  width?: string;
  height?: string;
  number?: number | string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CareerCard: React.FC<CareerCardProps> = ({
  title = "Real-World Skill Tracks",
  description = "Learn what the industry actually uses - no fluff, just the skills that matter",
  isSelected = false,
  className = "",
  number = "01", // Default number
  icon = <FiBookmark className="text-lg" />, // Default icon
  onClick,
}) => {
  return (
    <div
      className={`
         ${className}
        rounded-lg p-4 cursor-pointer
        border-2 ${
          isSelected
            ? "border-darkGreen bg-darkGreen"
            : "border-gray-200 bg-white"
        }
        flex flex-col justify-between 
        ${isSelected ? "bg-primary-secondaryGreen" : "bg-white"}
      `}
      onClick={onClick}
    >
      {/* Top number and icon section */}
      <div className="flex items-center justify-between w-full">
        <div>
          {React.isValidElement(icon)
            ? React.cloneElement(icon as React.ReactElement<any>, {
                className: `text-lg w-8 h-8 ${
                  isSelected ? "text-white" : "text-primary-darkGreen"
                }`,
              })
            : icon}
        </div>
        <div
          className={"text-2xl font-sans font-normal text-brand-grayNatural600"}
        >
          {number}
        </div>
      </div>

      {/* Content section */}
      <div>
        <div
          className={`text-xl font-normal font-sans  ${
            isSelected ? "text-white" : "text-primary-darkGreen"
          }`}
        >
          {title}
        </div>
        <div
          className={`text-sm font-normal font-sans ${
            isSelected ? "text-white" : "text-brand-grayNatural500"
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
