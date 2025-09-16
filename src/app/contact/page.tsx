"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const params = useSearchParams();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const title = params.get("title");
    const slug = params.get("item");
    if (title || slug) {
      setMessage(
        `I'm interested in: ${title ?? slug}\n\n` +
        "Are you interested in a particular object or do you need a particular work done?"
      );
    }
  }, [params]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
      <p className="mt-2 text-sm text-neutral-400">
        Questions, custom requests, or commissions—send a note below.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 outline-none focus:border-neutral-500"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 outline-none focus:border-neutral-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 outline-none focus:border-neutral-500 min-h-[140px]"
            placeholder="Are you interested in a particular object or do you need a particular work done?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-[#C8A57A] px-5 py-2 text-white hover:opacity-90"
        >
          {status === "sending" ? "Sending..." : "Send Inquiry"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}
