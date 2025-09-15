// src/app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-300 bg-[#EFE7DC] text-[#2B241E]">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Studio</h3>
          <p className="text-sm mt-2 text-[#2B241E]/80">
            Handcrafted wood objects, frames, and mirrors.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Links</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li><Link className="hover:underline" href="/impressum">Impressum</Link></li>
            <li><Link className="hover:underline" href="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Follow</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li><a className="hover:underline" href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a className="hover:underline" href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a className="hover:underline" href="mailto:hello@example.com">hello@example.com</a></li>
          </ul>
        </div>
      </div>

      <div className="text-xs text-neutral-700 text-center py-4">
        © {new Date().getFullYear()} Bottega Marchi
      </div>
    </footer>
  );
}
