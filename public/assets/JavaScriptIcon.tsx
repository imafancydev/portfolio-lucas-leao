import React from "react";
import { useMediaQuery } from "@/hook/UseMedia";

export const JavaScriptIcon = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isDesktop ? 70 : 35}
      height={isDesktop ? 70 : 35}
      viewBox="0 0 20 20"
    >
      <g fill="#0000" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#F7E018" transform="translate(-420 -7479)">
          <g transform="translate(56 160)">
            <path d="M379.328 7337.432c-1.745 0-2.873-.832-3.423-1.92l1.53-.886c.403.658.926 1.141 1.853 1.141.778 0 1.275-.389 1.275-.926 0-.808-1.078-1.124-1.839-1.45-1.356-.577-2.256-1.302-2.256-2.833 0-1.409 1.074-2.483 2.753-2.483 1.194 0 2.054.416 2.671 1.503l-1.463.94c-.322-.577-.671-.805-1.208-.805-.551 0-.9.349-.9.805 0 .564.349.792 1.155 1.141 1.689.724 2.967 1.293 2.967 3.155 0 1.692-1.329 2.618-3.115 2.618zm-4.328-2.833c0 1.947-1.199 2.976-2.864 2.976-1.504 0-2.405-.575-2.848-1.575h-.026l1.529-1.069c.295.523.561.894 1.205.894.618 0 1.004-.313 1.004-1.252V7328h2v6.599zM364 7339h20v-20h-20v20z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
