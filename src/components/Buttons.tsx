"use client";

import Link from "next/link";
import Image from "next/image";

interface ButtonLinkProps {
  texte: string;
  href: string;
  src?: string;
  className?: string;
  onClick?: () => void;
}

interface WhatsAppButtonProps {
  phoneNumber: string; // exemple : "+22890909090"
  message: string;
  buttonText?: string;
  texte: string;
  src?: string;
  className?: string;
  onClick?: () => void;
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

export function MenuItemColorMobile({
  texte,
  href,
  src,
  className,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`hover:underline inline-flex items-center gap-2 px-4 py-2 rounded-lg font-light whitespace-nowrap transition ${className}`}
      onClick={onClick}
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

export function MenuItemLineWhite({
  texte,
  href,
  src,
  className,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex text-titre-sous-titre text-white items-center gap-2 px-4 py-2 rounded-lg font-light whitespace-nowrap transition ${className}`}
      onClick={onClick}
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

export function ButtonLinkProjet({ texte, href, className }: ButtonLinkProps) {
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

export function ButtonLinkWhatsApp({
  texte,
  src,
  message,
  phoneNumber,
  className,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  {/*
    */}

  return (
    <button
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-vert-clair text-white font-medium hover:bg-vert-fonce w-full transition ${className}`}
      onClick={handleClick}
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
    </button>
  );
}


export function MenuItemPartenaires({ texte, href, src }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 font-semibold text-rouge-milieu hover:underline hover:gap-4 underline-offset-4 transition-all"
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






interface EmailProps {
  email: string;
  subject: string;
  body?: string;
  texte ?: string
}


export const EmailLink = ({ email, subject, body, texte} : EmailProps) => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body ?? '');
  const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

  return (
    <>
          <a href={mailtoLink}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-rouge-clair text-white font-medium hover:bg-rouge-fonce w-fit transition`}
    >
      <span>{texte}</span>
      <Image
        src="/icons/up-right-svgrepo-com-white.svg"
        alt=""
        width={20}
        height={20}
        className="object-contain"
      />
    </a>
    </>
  );
};