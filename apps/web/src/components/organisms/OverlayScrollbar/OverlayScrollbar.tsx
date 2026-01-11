"use client";

import { OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";
import { useEffect } from "react";

export const OverlayScrollbar = () => {
  useEffect(() => {
    // Initialize OverlayScrollbars on the body
    const osInstance = OverlayScrollbars(document.body, {
      scrollbars: {},
    });

    // Cleanup on unmount
    return () => {
      osInstance.destroy();
    };
  }, []);

  return null; // This component doesn't render anything
};
