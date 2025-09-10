"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function ContactPage() {
  const search = useSearchParams();
  const prefilledItem = useMemo(() => search.get("item") ?? "", [search]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // TODO: change to your friend’s real email
    const to = "hello@example.com";

    const subject = `Inquiry: ${prefilledItem || "General"}`;
    const body = `Name: ${name}
Email: ${email}
Item: ${prefilledItem || "N/A"}

Message:
${message}`;

    const href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  }

  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
      <p className="mt-2 text-neutral-600">
        Questions, custom requests, or commissions—send a note below.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-5">
        {prefilledItem ? (
          <div>
            <label className="block text-sm text-neutral-600">Item</label>
            <input
              value={prefilledItem}
              readOnly
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2"
            />
          </div>
        ) : null}

        <div>
          <label className="block text-sm text-neutral-600">Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-600">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-600">Message</label>
          <textarea
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
            placeholder="Tell us what you have in mind…"
          />
        </div>

        <button
          type="submit"
          className="inline-block rounded-full bg-[#9B6B43] px-5 py-3 text-white transition hover:opacity-90"
        >
          Send Inquiry
        </button>

        <p className="text-xs text-neutral-500">
          By sending, you agree that we may contact you regarding your request.
        </p>
      </form>
    </section>
  );
}
