"use client";

import { useState } from "react";
import Link from "next/link";
import { HamburgerIconButton, CloseButton } from "./components";
import { MobileNavMenu } from "./components";
import { useBodyScrollLock } from "../utilities/hook";
import { linkItemType } from "../utilities/types";

const pageLinks: linkItemType[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleOnClose = () => {
    setIsHamburgerMenuOpen(false);
  };

  const handleOnOpen = () => {
    setIsHamburgerMenuOpen(true);
  };

  useBodyScrollLock(isHamburgerMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-2xl font-bold text-white">
            <span>rafatul</span>
            <span className="text-blue-500">.alam</span>
          </a>
          <div className="hidden sm:flex items-center space-x-8">
            {pageLinks.map(({ label, href }: linkItemType) => (
              <Link
                key={href}
                href={href}
                className="text-gray-300 font-bold hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
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
              </div>
            </MobileNavMenu>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
