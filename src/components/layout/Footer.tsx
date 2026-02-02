import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";

const footerLinks = [
  { href: "/chapters", label: "Directory" },
  { href: "/start", label: "Start a Chapter" },
];

export default function Footer() {
  return (
    <footer className="bg-grey-900 py-12 text-grey-400">
      <Container>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="CHS"
                width={64}
                height={22}
              />
            </Link>
            <Text size="sm" className="max-w-sm text-grey-600">
              Convert obsession into opportunities. 
            </Text>
          </div>

          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
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

        <div className="mt-8 border-t border-grey-800 pt-8">
          <Text size="sm" className="text-grey-600">
            &copy; {new Date().getFullYear()} Institute Alterna.
            Open source in GitHub under the MIT Licence.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
