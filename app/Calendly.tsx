"use client";

import { useEffect } from "react";

export default function CalendlyBadge() {
  useEffect(() => {
    const loadCalendly = () => {
      (window as any).Calendly?.initBadgeWidget({
        url: "https://calendly.com/devix-info/book-1-1-with-devix-ai",
        text: "Schedule a 1:1",
        color: "#0069ff",
        textColor: "#ffffff",
      });
    };

    // Load Calendly styles
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = loadCalendly;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible JSX needed
}
