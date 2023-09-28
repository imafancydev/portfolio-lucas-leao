import React from "react";
import { useMediaQuery } from "@/hook/UseMedia";

export const FigmaIcon = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isDesktop ? 70 : 30}
      height={isDesktop ? 70 : 30}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        stroke="#F6FBF4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3H9a3 3 0 0 0 0 6m3-6v6m0-6h3a3 3 0 1 1 0 6m-3 0H9m3 0h3m-3 0v6M9 9a3 3 0 1 0 0 6m6-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-3 6H9m3 0v3a3 3 0 1 1-3-3"
      />
    </svg>
  );
};
