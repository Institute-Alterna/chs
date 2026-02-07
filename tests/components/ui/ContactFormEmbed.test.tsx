import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import ContactFormEmbed from "@/components/ui/ContactFormEmbed";

afterEach(cleanup);

describe("ContactFormEmbed", () => {
  it("renders iframe with valid chapterId and correct src URL", () => {
    render(<ContactFormEmbed chapterId="robinson" />);
    const iframe = screen.getByTitle("Contact form");
    expect(iframe).toBeInTheDocument();
    expect(iframe.tagName).toBe("IFRAME");
    expect(iframe).toHaveAttribute(
      "src",
      "https://tally.so/embed/1A7WKp?alignLeft=1&hideTitle=1&transparentBackground=1&chapter=robinson"
    );
  });

  it("applies sandbox attribute", () => {
    render(<ContactFormEmbed chapterId="robinson" />);
    const iframe = screen.getByTitle("Contact form");
    expect(iframe).toHaveAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-popups allow-forms"
    );
  });

  it("uses custom title prop", () => {
    render(
      <ContactFormEmbed chapterId="robinson" title="Contact CHS Robinson" />
    );
    expect(screen.getByTitle("Contact CHS Robinson")).toBeInTheDocument();
  });

  it("accepts chapterId with hyphens", () => {
    render(<ContactFormEmbed chapterId="my-chapter-99" />);
    const iframe = screen.getByTitle("Contact form");
    expect(iframe).toHaveAttribute(
      "src",
      "https://tally.so/embed/1A7WKp?alignLeft=1&hideTitle=1&transparentBackground=1&chapter=my-chapter-99"
    );
  });

  it("renders nothing for chapterId with spaces", () => {
    const { container } = render(
      <ContactFormEmbed chapterId="bad chapter" />
    );
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("renders nothing for chapterId with angle brackets (XSS attempt)", () => {
    const { container } = render(
      <ContactFormEmbed chapterId='<script>alert("xss")</script>' />
    );
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("renders nothing for chapterId with slashes (path traversal)", () => {
    const { container } = render(
      <ContactFormEmbed chapterId="../../etc/passwd" />
    );
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("renders nothing for empty chapterId", () => {
    const { container } = render(<ContactFormEmbed chapterId="" />);
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("renders nothing for chapterId with uppercase letters", () => {
    const { container } = render(
      <ContactFormEmbed chapterId="Robinson" />
    );
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("renders nothing for chapterId with query string characters", () => {
    const { container } = render(
      <ContactFormEmbed chapterId="chapter?redirect=evil" />
    );
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("does not include origin, destination, or domain params in URL", () => {
    render(<ContactFormEmbed chapterId="lakes" />);
    const iframe = screen.getByTitle("Contact form");
    const src = iframe.getAttribute("src")!;
    const url = new URL(src);
    expect(url.searchParams.has("origin")).toBe(false);
    expect(url.searchParams.has("destination")).toBe(false);
    expect(url.searchParams.has("domain")).toBe(false);
  });

  it("produces a valid URL parseable by the URL API", () => {
    render(<ContactFormEmbed chapterId="lakes" />);
    const iframe = screen.getByTitle("Contact form");
    const src = iframe.getAttribute("src")!;
    const url = new URL(src);
    expect(url.origin).toBe("https://tally.so");
    expect(url.pathname).toBe("/embed/1A7WKp");
    expect(url.searchParams.get("chapter")).toBe("lakes");
  });
});
