"use client";

import Link from "next/link";
import Image from "next/image";

interface ButtonLinkProps {
  texte: string;
  href: string;
  src?: string;
  className?: string;
}

export function ButtonLink({ texte, href, src, className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-vert-clair text-white font-medium hover:bg-vert-fonce w-full transition ${className}`}
    >
      {src && (
        <Image
          src={src}
          alt=""
          width={30}
          height={30}
          className="object-contain"
        />
      )}
      <span>{texte}</span>
    </Link>
  );
}

/*
interface MenuItemProps {
  texte: string;
  href: string;
  src: string; // Optional, if you want to add an icon
}
*/

export function MenuItem({ texte, href, src }: ButtonLinkProps) {
  return (

      <Link
        href={href}
        className="inline-flex items-center gap-2 font-bold text-black hover:underline underline-offset-4 transition-all"
      >
        <span>{texte}</span>
        {src && (
          <Image
            src={src}
            alt=""
            width={20}
            height={20}
            className="object-contain"
          />
        )}
      </Link>

  );
}
