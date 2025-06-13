import { useLayoutEffect } from "react";

export const useBodyScrollLock = (isMenuOpen: boolean = false) => {
  useLayoutEffect(() => {
    // Store original styles
    const originalStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      width: document.body.style.width,
      height: document.body.style.height,
      top: document.body.style.top,
    };
    const scrollY = window.scrollY;

    if (isMenuOpen) {
      // Apply styles to disable scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100vw";
      document.body.style.height = "100vh";
      document.body.style.top = `-${scrollY}px`;
    }

    // Cleanup: Restore original styles
    return () => {
      document.body.style.overflow = originalStyles.overflow || "";
      document.body.style.position = originalStyles.position || "";
      document.body.style.width = originalStyles.width || "";
      document.body.style.height = originalStyles.height || "";
      document.body.style.top = originalStyles.top || "";
    };
  }, [isMenuOpen]);
};
