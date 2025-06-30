
"use client";

import { useState, FormEvent, use } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Form(){
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Ici tu peux ajouter une logique d'envoi avec emailjs, formspree, API, etc.
    const serviceID = 'service_zexn64l';
    const templateID = 'template_bwf0mrd';
    const publicKey = 'ypCpLXQ3-MBB3UpET';

    const templateParams = {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  };

  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      console.log('Email envoyé !', response.status, response.text);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error('Erreur lors de l’envoi du mail:', error);
    });

    console.log("Formulaire soumis:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="shadow-2xl p-8 rounded-3xl">

      {submitted && (
        <div className="mb-4 text-green-600 font-semibold">
          Merci pour votre message !
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <button
          type="submit"
          className="bg-violet-600 text-white px-6 py-2 rounded-xl hover:bg-violet-700 transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}