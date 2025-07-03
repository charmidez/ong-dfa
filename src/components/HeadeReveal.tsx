"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

interface HeaderRevealProps {
  children: ReactNode;
}

export default function HeaderReveal({ children }: HeaderRevealProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          y: -40,
          scale: 0.95,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    }
  }, []);

  return (
    <div ref={headerRef}>
      {children}
    </div>
  );
}
