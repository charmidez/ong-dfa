"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { MenuItemColor, MenuItemLine } from "./Buttons";
import SearchBar from "./SearchBar";

const menuLink = [
  { path: "/", label: "BIENVENUE" },
  { path: "/apropos", label: "À PROPOS" },
  { path: "/projets", label: "PROJETS" },
  { path: "/actualites", label: "ACTUALITE" },
  { path: "/contact", label: "CONTACT" },
];

interface HeaderProps {
  typeMenu: boolean;
}

export function HeaderTop() {
  return <></>;
}

export function Header({ typeMenu }: HeaderProps) {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const handleScroll = () => setHasScrolled(window.scrollY > 10);

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

  const setupGSAP = () => {
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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => setupGSAP(), { scope: container });

  const renderLogo = () => (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="/logos/ico-no-bg.png"
        alt="Logo"
        width={128}
        height={128}
        className={` ${ hasScrolled ? "w-8 h-8 object-contain lg:w-10 lg:h-10" : "w-16 h-16 object-contain lg:w-24 lg:h-24" }`}
      />
      <p
        className={`font-bold text-titre-page ${
          isMenuOpen ? "text-white" : hasScrolled ? "text-vert-fonce" : "text-white"
        }`}
      >
        ONG DFA
      </p>
    </Link>
  );

  const renderMenuLg = () => (
    <nav className="hidden lg:flex items-center space-x-6">
      <MenuItemColor
        texte="PROJET 1"
        href="/"
        src="/logos/ico-no-bg.png"
        className={` ${
          hasScrolled
            ? "text-white bg-vert-fonce "
            : "text-white bg-vert-clair "
        }`}
      />
      <MenuItemColor
        texte="PROJET 2"
        href="/"
        src="/logos/ico-no-bg.png"
        className={`${
          hasScrolled
            ? "text-white bg-vert-fonce"
            : "text-white bg-vert-clair "
        }`}
      />

      {menuLink.map((link) => (
        <MenuItemLine
          key={link.path}
          href={link.path}
          className={`font-light hover:underline ${
            hasScrolled ? "text-vert-fonce" : "text-white"
          }`}
          texte={link.label}
        />
      ))}
      <SearchBar />
    </nav>
  );

  const renderToggleButton = () => (
    <button
      aria-label="Toggle menu"
      className="menu-toggle cursor-pointer flex items-center gap-2"
      onClick={isMenuOpen ? closeMenu : openMenu}
      disabled={isAnimating}
      type="button"
    >
      <span
        className={`text-titre-section font-light select-none transition-all duration-300 ${
          isMenuOpen ? "text-white" : hasScrolled ? "text-black" : "text-white"
        }`}
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
        alt="Toggle Icon"
        width={46}
        height={46}
        className="w-7 h-7 object-contain "
      />
    </button>
  );

  const renderMenuOverlay = () => (
    <nav
      className="menu-overlay fixed top-0 left-0 w-screen h-screen flex-col justify-around z-20 bg-green-dark-transparent "
      aria-hidden={!isMenuOpen}
    >
      <div className="flex flex-row justify-start pl-20 w-full pt-14">
        <ul className="menu-links flex flex-col space-y-4 text-start">
          <li className="mb-4">
            <MenuItemColor
              texte="PROJET 1"
              href="/"
              src="/logos/ico-no-bg.png"
              className={` ${
                hasScrolled
                  ? "text-white bg-vert-fonce "
                  : "text-white bg-vert-clair "
              }`}
            />
          </li>
          <li>
            <MenuItemColor
              texte="PROJET 2"
              href="/"
              src="/logos/ico-no-bg.png"
              className={`${
                hasScrolled
                  ? "text-white bg-vert-fonce"
                  : "text-white bg-vert-clair "
              }`}
            />
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
      </div>

      <div className="flex flex-col justify-around text-white w-full items-start px-8 gap-4">
        <div className="flex flex-col justify-center items-start gap-4 menu-link-item">
          <div className="flex flex-col menu-link-item-holder">
            <a href="">X</a>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">TikTok</a>
          </div>
          <div className="flex flex-col menu-link-item-holder">
            <a href="">contact@ong-dfa.com</a>
            <a href="">ongdfa7@gmail.com</a>
          </div>
          <div className="flex flex-col menu-link-item-holder">
            <a href="">+ 288 76 99 09 09</a>
          </div>
        </div>
        <div className="menu-link-item-holder">
          Tous droits réservés - ONG DFA
        </div>
      </div>
    </nav>
  );

  return (
    <div>
      <header
        ref={container}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          hasScrolled ? "bg-white-transparent shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-center items-center">
          <div className={`w-full flex justify-center lg:px-8 px-4  z-30 ${hasScrolled ? "py-0" : "py-2"}`}>
            <div className="w-full flex justify-between items-center gap-2">
              {renderLogo()}
              {renderMenuLg()}
              {typeMenu && renderToggleButton()}
            </div>
          </div>
        </div>
        {typeMenu && renderMenuOverlay()}
      </header>
    </div>
  );
}
