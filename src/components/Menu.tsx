"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";

const menuLink = [
  { path: "/", label: "Accueil" },
  { path: "/apropos", label: "À propos" },
  { path: "/projets", label: "Projets" },
  { path: "/contact", label: "Contact" },
];

export default function Menu() {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  //const toggleMenu = () => setIsMenuOpen((v) => !v);

  const openMenu = () => {
    if (!tl.current) return;
    setIsAnimating(true);
    tl.current.play();
  };

  const closeMenu = () => {
    if (!tl.current) return;
    setIsAnimating(true);
    tl.current.reverse();
  };

  /*
  useGSAP(
    () => {
      // Initial position links (off screen)
      gsap.set(".menu-link-item-holder", { y: 75, opacity: 0 });

      tl.current = gsap
        .timeline({ paused: true })
        .fromTo(
          ".menu-overlay",
          { y: "-100%" },
          {
            y: "0%",
            duration: 0.8,
            ease: "power4.inOut",
            display: "flex",
          }
        )
        .to(
          ".menu-link-item-holder",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .pause();
    },
    { scope: container }
  );
  */

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75, opacity: 0 });
      tl.current = gsap
        .timeline({ paused: true })
        .fromTo(
          ".menu-overlay",
          { y: "-100%" },
          {
            y: "0%",
            duration: 0.8,
            ease: "power4.inOut",
            display: "flex",
          }
        )
        .to(
          ".menu-link-item-holder",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .eventCallback("onComplete", () => {
          setIsMenuOpen(true);
          setIsAnimating(false);
        })
        .eventCallback("onReverseComplete", () => {
          setIsMenuOpen(false);
          setIsAnimating(false);
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (!tl.current) return;
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div ref={container}>
      {/* Menu Bar */}
      <div className="flex flex-row justify-center items-center">
        <div className="fixed w-full top-0 flex justify-center z-50 px-8 py-4">
          <div className="w-full rounded-2xl">
            <div className="flex justify-between items-center gap-2 text-white">
              <div className="menu-logo">
                <Link href="/">
                  <Image
                    src="/logo-no-bg.png"
                    alt="Logo"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>

              <button
                aria-label="Toggle menu"
                className="menu-toggle cursor-pointer flex flex-col items-center justify-center space-y-1"
                onClick={isMenuOpen ? closeMenu : openMenu}
                disabled={isAnimating}
                type="button"
              >
                <span
                  className={`text-3xl select-none transition-opacity duration-300 ${
                    isMenuOpen
                      ? "text-black opacity-100"
                      : "text-white opacity-100"
                  }`}
                >
                  {isMenuOpen ? "Fermer" : "Menu"}
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Overlay menu */}
      <nav
        className="menu-overlay fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-[#ff2] z-20 hidden"
        aria-hidden={!isMenuOpen}
      >
        <ul className="menu-links flex flex-col space-y-8 text-center">
          {menuLink.map((link, idx) => (
            <li key={idx} className="menu-link-item">
              <div className="menu-link-item-holder">
                <Link
                  href={link.path}
                  className="text-4xl font-extrabold text-black hover:underline"
                  onClick={isMenuOpen ? closeMenu : openMenu}
                >
                  {link.label}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
