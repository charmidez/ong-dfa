"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";

const menuLink = [
  { path: "/", label: "BIENVENUE" },
  { path: "/apropos", label: "À PROPOS" },
  { path: "/projets", label: "PROJETS" },
  { path: "/contact", label: "CONTACT" },
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
        <div className="fixed w-full top-0 flex justify-center lg:px-8 px-4 py-4 z-30 ">
          <div className="w-full rounded-2xl">
            <div className="flex justify-between items-center gap-2 text-white">
              <div className="menu-logo">
                <Link
                  href="/"
                  className="flex flex-row items-center gap-2 lg:gap-4 "
                >
                  <Image
                    src="/logos/ico-no-bg.png"
                    alt="Logo"
                    width={128}
                    height={128}
                    className="w-16 h-16 object-contain lg:w-20 lg:h-20"
                  />
                  <p className="font-bold text-white lg:text-4xl text-2xl">
                    DFA <span className="text-rouge">ONG</span>
                  </p>
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
                  className={`lg:text-4xl text-2xl font-light select-none transition-all duration-300 ${
                    isMenuOpen
                      ? "text-white opacity-100"
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
        className="menu-overlay fixed top-0 left-0 w-screen h-screen flex-col justify-around z-20 bg-green-dark-transparent   lg:py-16"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-row justify-around w-full lg:pt-0 pt-24">
          <ul className="menu-links flex flex-col space-y-8 text-start">
            {menuLink.map((link, idx) => (
              <li key={idx} className="menu-link-item">
                <div className="menu-link-item-holder">
                  <Link
                    href={link.path}
                    className="text-4xl  text-white hover:underline font-extralight"
                    onClick={isMenuOpen ? closeMenu : openMenu}
                  >
                    {link.label}
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          <h1 className="text-3xl font-extrabold"></h1>
        </div>

        <div className="flex lg:flex-row flex-col justify-around  w-full lg:items-end items-start px-8 gap-4 lg:gap-0">
          <div className="flex lg:flex-row flex-col justify-center lg:items-end items-start lg:gap-24 gap-4 menu-link-item">
            <div className="flex flex-col menu-link-item-holder">
              <a href="">X</a>
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">TikTok</a>
              <a href="">TikTok</a>
            </div>

            <div className="flex flex-col menu-link-item-holder">
              <a href="">contact@ong-dfa.com</a>
              <a href="">ongdfa7@gmail.com</a>
            </div>

            <div className="flex flex-col menu-link-item-holder">
              <a href="">contact@ong-dfa.com</a>
              <a href="">ongdfa7@gmail.com</a>
              <a href="">+ 288 76 99 09 09</a>
            </div>
          </div>

          <div className="menu-link-item-holder">Tous droits réservés - ONG DFA</div>
        </div>
      </nav>
    </div>
  );
}
