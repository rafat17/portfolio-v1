import { createPortal } from "react-dom";
import { IMobileNavMenu, IButton } from "@/app/utilities/interfaces";

export const HamburgerIconButton = ({ onClick }: IButton) => (
  <div className="md:hidden">
    <button
      onClick={onClick}
      id="menu-button"
      className="text-gray-300 hover:text-white transition-colors focus:outline-none"
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
);

export const CloseButton = ({ onClick }: IButton) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 p-2 text-gray-300 hover:text-white"
    aria-label="Close menu"
  >
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
);

export const MobileNavMenu = ({ children }: IMobileNavMenu) => (
  <>{createPortal(<>{children}</>, document.body)}</>
);
