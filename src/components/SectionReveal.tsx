
"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
}

/*
export function SectionReveal({ children, delay = 0 }: SectionRevealProps) {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // déclenche quand la section entre dans la vue
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return <div ref={sectionRef}>{children}</div>;
}
*/


export function SectionReveal({ children, delay = 0 }: SectionRevealProps) {
  const sectionRef = useRef(null);
  const pathname = usePathname();

  // Animation d'entrée avec scrollTrigger sans reverse automatique
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none none", // uniquement à l'entrée
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [delay]);

  // Animation de sortie déclenchée au changement de route
  useEffect(() => {
    if (!sectionRef.current) return;

    // On fait la sortie (fade out + scale down)
    gsap.to(sectionRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [pathname]); // À chaque changement d’URL

  return <div ref={sectionRef}>{children}</div>;
}