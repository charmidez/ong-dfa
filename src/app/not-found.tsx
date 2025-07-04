"use client";
import Link from "next/link";

const message = `Désolé, la page que vous cherchez n'existe pas.`
const btn = `Retour à l'accueil`;

// app/not-found.tsx
export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white text-black p-8 text-center bg-[url('/images/img-6.webp')] bg-cover bg-center">
      <div className="bg-white-transparent p-8 rounded-lg ">
        <h1 className="text-4xl font-bold mb-4">404 - Page introuvable</h1>
        <p className="text-lg mb-6">
          {message}
        </p>
        <Link href="/" className="text-white hover:underline bg-vert-clair rounded-lg shadow-2xl p-4">
          {btn}
        </Link>
      </div>
    </main>
  );
}
