"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  return (
    <Suspense fallback={<SectionShell loading />} >
      <ContactInner />
    </Suspense>
  );
}

function ContactInner() {
  const params = useSearchParams();
  const [message, setMessage] = useState("");

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

  return (
    <SectionShell>
      {/* If you switched to Formspree, keep your current <form> markup here */}
      {/* Example basic form action (change to your Formspree endpoint): */}
      <form
        action="https://formspree.io/f/xandzrdw"
        method="POST"
        className="mt-8 max-w-2xl space-y-4"
      >
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
          Send Inquiry
        </button>
      </form>
    </SectionShell>
  );
}

function SectionShell({
  children,
  loading,
}: {
  children?: React.ReactNode;
  loading?: boolean;
}) {
  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
      <p className="mt-2 text-sm text-neutral-400">
        Questions, custom requests, or commissions—send a note below.
      </p>
      {loading ? <div className="mt-8 h-32 w-full animate-pulse bg-neutral-200/20 rounded-xl" /> : children}
    </section>
  );
}
