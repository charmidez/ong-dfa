
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

interface HeaderProps {
  typeMenu: boolean;
}

export function Header({ typeMenu }: HeaderProps) {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  //const toggleMenu = () => setIsMenuOpen((v) => !v);

  const [hasScrolled, setHasScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  if (typeMenu === true) {
    return (
      <header
        ref={container}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          hasScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {/* Menu Bar */}
        <div className="flex top-0 flex-row justify-center items-center">
          <div className="w-full top-0 flex justify-center lg:px-8 px-4 py-4 z-30 ">
            <div className="w-full">
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
                    <p
                      className={` font-bold lg:text-4xl text-2xl ${
                        isMenuOpen
                          ? "text-white"
                          : hasScrolled
                          ? "text-black"
                          : "text-white"
                      } `}
                    >
                      ONG <span className="text-rouge">DFA</span>
                    </p>
                  </Link>
                </div>

                <button
                  aria-label="Toggle menu"
                  className="menu-toggle cursor-pointer flex flex-row items-center justify-center lg:gap-4 gap-2"
                  onClick={isMenuOpen ? closeMenu : openMenu}
                  disabled={isAnimating}
                  type="button"
                >
                  <span
                    className={`lg:text-4xl text-2xl font-light select-none transition-all duration-300 
                  ${
                    isMenuOpen
                      ? "text-white"
                      : hasScrolled
                      ? "text-black"
                      : "text-white"
                  }
                    `}
                  >
                    {isMenuOpen ? "FERMER" : "MENU"}
                  </span>
                  <Image
                    src={
                      isMenuOpen
                        ? "/icons/close-svgrepo-com.svg"
                        : hasScrolled
                        ? "/icons/menu-svgrepo-com.svg"
                        : "/icons/menu-svgrepo-com-white.svg"
                    }
                    alt="Logo"
                    width={46}
                    height={46}
                    className="w-10 h-10 object-contain lg:w-12 lg:h-12"
                  />
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
            <ul className="menu-links flex flex-col lg:space-y-8 space-y-2 text-start">
              <li className="mb-2 lg:mb-8">
                <Link
                  className="text-black lg:text-2xl text-xl border-2 border-white lg:p-2 p-1 rounded-lg bg-white"
                  href="/actualite"
                >
                  Actualité
                </Link>
              </li>
              {menuLink.map((link, idx) => (
                <li key={idx} className="menu-link-item">
                  <div className="menu-link-item-holder">
                    <Link
                      href={link.path}
                      className="lg:text-4xl text-2xl text-white hover:underline font-extralight"
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

          <div className="flex lg:flex-row flex-col justify-around text-white w-full lg:items-end items-start px-8 gap-4 lg:gap-0">
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

            <div className="menu-link-item-holder">
              Tous droits réservés - ONG DFA
            </div>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        {/* Menu Bar */}
        <div className="flex top-0 flex-row justify-center items-center">
          <div className="w-full top-0 flex justify-center lg:px-8 px-4 py-4 z-30 ">
            <div className="w-full">
              <div className="flex justify-between items-center gap-2 text-white bg-green-dark-transparent">
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
                  <p className="font-bold lg:text-4xl text-2xl">
                    ONG <span className="text-rouge">DFA</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
