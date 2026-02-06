import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";

const navigateLinks = [
  { href: "/", label: "Home" },
  { href: "/chapters", label: "Directory" },
  { href: "/start", label: "Start a Chapter" },
];

const chapterLinks = [
  { href: "/chapters/robinson", label: "CHS Robinson" },
  { href: "/chapters/lakes", label: "CHS Lakes" },
];

const connectLinks = [
  { href: "/contact", label: "Send us a memo" },
  { href: "https://github.com/institute-alterna/chs", label: "Open Source" },
];

export default function Footer() {
  return (
    <footer className="bg-grey-950 py-16 text-grey-400">
      <Container>
        <div className="flex flex-wrap justify-between gap-y-12">
          {/* Logo and tagline */}
          <div>
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="CHS"
                width={64}
                height={22}
              />
            </Link>
            <Text size="sm" className="mt-4 max-w-xs text-grey-500">
              Convert obsession into opportunities.
            </Text>
          </div>

          {/* Nav columns — grouped right */}
          <div className="flex flex-wrap gap-x-16 gap-y-12">
            {/* Navigate */}
            <div>
              <span className="font-mono-label text-grey-500">Navigate</span>
              <nav className="mt-4 flex flex-col gap-3">
                {navigateLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-grey-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Chapters */}
            <div>
              <span className="font-mono-label text-grey-500">Chapters</span>
              <nav className="mt-4 flex flex-col gap-3">
                {chapterLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-grey-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <span className="font-mono-label text-grey-500">Connect</span>
              <nav className="mt-4 flex flex-col gap-3">
                {connectLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-grey-400 transition-colors hover:text-white"
                    {...(link.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-grey-800 pt-8">
          <Text size="sm" className="text-grey-600">
            &copy; {new Date().getFullYear()} <a href="https://alterna.dev" target="_blank" rel="noopener noreferrer">Institute Alterna</a>. Open source on GitHub under the MIT Licence.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
