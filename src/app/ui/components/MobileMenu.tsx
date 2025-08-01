"use client";

import { useState } from "react";
import Link from "next/link";
import { useBodyScrollLock } from "@/app/utilities/hook";
import { linkItemType } from "@/app/utilities/types";
import ResumeButton from "./ResumeButton";
import { HamburgerIconButton, CloseButton, MobileNavMenu } from ".";

const pageLinks: linkItemType[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const MobileMenu = ({ resumeDownloadUrl }: { resumeDownloadUrl: string }) => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleOnClose = () => {
    setIsHamburgerMenuOpen(false);
  };

  const handleOnOpen = () => {
    setIsHamburgerMenuOpen(true);
  };

  useBodyScrollLock(isHamburgerMenuOpen);

  return (
    <>
      <HamburgerIconButton onClick={handleOnOpen} />
      {isHamburgerMenuOpen && (
        <MobileNavMenu>
          <div className="md:hidden flex flex-col gap-6 justify-center items-center fixed top-0 left-0 bg-[rgba(10, 10, 10, 0.8)] transition-colors z-50 w-full h-[100vh] bg-black px-4 pb-4">
            <CloseButton onClick={handleOnClose} />
            {pageLinks.map(({ label, href }: linkItemType) => (
              <Link
                onClick={handleOnClose}
                key={href}
                href={href}
                className="block text-2xl text-gray-300 hover:text-white py-2"
              >
                {label}
              </Link>
            ))}
            <ResumeButton
              downloadUrl={resumeDownloadUrl}
              className="mx-[28px] my-[12px] border border-blue-500/50 text-blue-500 py-3 px-8 rounded text-xl transition-all duration-200 
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500 hover:text-white"
            />
          </div>
        </MobileNavMenu>
      )}
    </>
  );
};

export default MobileMenu;
