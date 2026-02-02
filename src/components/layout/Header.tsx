"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/chapters", label: "Chapters" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-black/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="CHS"
            width={80}
            height={28}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-grey-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/join" className="text-sm">
            Start a Chapter
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex size-10 items-center justify-center text-white lg:hidden"
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </Container>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 transition-opacity duration-200"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-grey-900 p-6 shadow-xl transition-transform duration-300 ease-out">
            <div className="mb-8 flex justify-end">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex size-10 items-center justify-center text-white"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-grey-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/join"
                className="mt-4 w-full text-center"
              >
                Start a Chapter
              </Button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
