"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Link from "next/link";
import Image from "next/image";

const menuLink = [
  {path : "/", label: "Accueil"},
  {path : "/apropos", label: "À propos"},
  {path : "/projets", label: "Projets"},
  {path : "/contact", label: "Contact"},
]

const Menu = () => {
  const container  = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    gsap.set(".menu-links-item-holder", {y:75});
    tl.current = gsap.timeline({paused: true})
    .to(".menu-overlay", {
      duration: 1.25,
      clipPath: "0% 0% 100% 0% 100% 100% 0% 100%",
      ease: "power4.inOut",
      y: 0,
      opacity: 1,
      display: "block",
    })
    .to(".menu-links-item-holder", {
      y:0,
      duration: 1,
      y: 0,
      ease: "power4.inOut",
      stagger: 0.1,
      delay:0.75
    }, "<"  )
    ;
  }, {scope : container})


useEffect(() => {
  if (isMenuOpen) {
    tl.current?.play();
  } else {
    tl.current?.reverse();
  }
}, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href={"/"}><Image src="/logo-no-bg.png" alt="Logo" width={100} height={100} /></Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay bg-amber-600">
        <div className="menu-overlay-bar">
          <div className="menu-logo"><Link href={"/"}><Image src="/logo-no-bg.png" alt="Logo" width={100} height={100} /></Link></div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>CLose</p>
          </div>
        </div>
        <div className="menu-close-icon">
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLink.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="" className="menu-link"> X &#8599;</a>
              <a href="" className="menu-link"> FaceBook &#8599;</a>
              <a href="" className="menu-link"> Twitter &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>Charmidez</p>
              <p>Copyright</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
