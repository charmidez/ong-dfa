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

export function MenuItemColor({
  texte,
  href,
  src,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`hover:underline inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${className}`}
    >
      {src && (
        <Image
          src={src}
          alt=""
          width={24}
          height={24}
          className="object-contain"
        />
      )}
      <span>{texte}</span>
    </Link>
  );
}

export function MenuItemLine({ texte, href, src, className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${className}`}
    >
      {src && (
        <Image
          src={src}
          alt=""
          width={24}
          height={24}
          className="object-contain"
        />
      )}
      <span>{texte}</span>
    </Link>
  );
}

export function ButtonLinkRecrutement({
  texte,
  href,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-rouge-clair text-white font-medium hover:bg-rouge-fonce w-fit transition ${className}`}
    >
      <span>{texte}</span>
      <Image
        src="/icons/up-right-svgrepo-com-white.svg"
        alt=""
        width={20}
        height={20}
        className="object-contain"
      />
    </Link>
  );
}




export function ButtonLinkProjet({
  texte,
  href,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3 bg-vert-fonce text-white font-medium hover:bg-vert-fonce w-fit transition ${className}`}
    >
      <span>{texte}</span>
      <Image
        src="/icons/up-right-svgrepo-com-white.svg"
        alt=""
        width={20}
        height={20}
        className="object-contain"
      />
    </Link>
  );
}
