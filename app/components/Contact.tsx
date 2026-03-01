"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 max-w-6xl mx-auto px-6 text-center"
    >
      <h2 className="text-4xl font-bold mb-8">Contact</h2>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-lg text-gray-400">
          Thank you, {name}. I'll get back to you.
        </p>
      )}
    </section>
  );
}