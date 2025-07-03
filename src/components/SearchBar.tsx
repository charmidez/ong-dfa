"use client";

import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Search, X } from "lucide-react";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Animation GSAP d'ouverture et fermeture
  useGSAP(() => {
    if (!inputRef.current) return;

    if (isOpen) {
      gsap.to(inputRef.current, {
        width: 200,
        opacity: 1,
        paddingLeft: 8,
        duration: 0.4,
        ease: "power2.out",
      });
      inputRef.current.focus();
    } else {
      gsap.to(inputRef.current, {
        width: 0,
        opacity: 0,
        paddingLeft: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  // Fermer si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Gérer entrée clavier
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = inputRef.current?.value.trim();
      if (value) {
        console.log("Recherche :", value);
        // Tu peux rediriger ici ou déclencher une recherche
        setIsOpen(false);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center gap-2 overflow-hidden border border-gray-300 rounded-lg px-2 py-1 bg-white"
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-1 text-gray-600 hover:text-black transition"
        aria-label="Ouvrir la recherche"
      >
        {isOpen ? <X size={20} /> : <Search size={20} />}
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder="Rechercher..."
        className="bg-transparent outline-none text-sm text-gray-800 w-0 opacity-0"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
