"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";

const TransitionContext = createContext<{ isTransitioning: boolean }>({ isTransitioning: false });

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayedPath, setDisplayedPath] = useState(pathname);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Animate out on route change
  useEffect(() => {
    if (pathname !== displayedPath && !isAnimating.current) {
      isAnimating.current = true;
      setIsTransitioning(true);

      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setDisplayedPath(pathname);
          isAnimating.current = false;
        },
      });
    }
  }, [pathname, displayedPath]);

  // Animate in after route is updated
  useEffect(() => {
    if (!isAnimating.current && containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            setIsTransitioning(false);
          },
        }
      );
    }
  }, [displayedPath]);

  return (
    <TransitionContext.Provider value={{ isTransitioning }}>
      <div ref={containerRef}>{children}</div>
    </TransitionContext.Provider>
  );
}
