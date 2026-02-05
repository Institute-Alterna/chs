import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import TallyEmbed from "@/components/ui/TallyEmbed";

afterEach(cleanup);

describe("TallyEmbed", () => {
  it("renders an iframe with a valid formId", () => {
    render(<TallyEmbed formId="abc123" />);
    const iframe = screen.getByTitle("Application form");
    expect(iframe).toBeInTheDocument();
    expect(iframe.tagName).toBe("IFRAME");
    expect(iframe).toHaveAttribute(
      "src",
      "https://tally.so/embed/abc123?alignLeft=1&hideTitle=1&transparentBackground=1"
    );
  });

  it("applies sandbox attribute", () => {
    render(<TallyEmbed formId="test-form" />);
    const iframe = screen.getByTitle("Application form");
    expect(iframe).toHaveAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-popups allow-forms"
    );
  });

  it("uses the custom title prop", () => {
    render(<TallyEmbed formId="myform" title="Contact us" />);
    expect(screen.getByTitle("Contact us")).toBeInTheDocument();
  });

  it("accepts formId with hyphens and underscores", () => {
    render(<TallyEmbed formId="my-form_ID-99" />);
    const iframe = screen.getByTitle("Application form");
    expect(iframe).toHaveAttribute(
      "src",
      expect.stringContaining("my-form_ID-99")
    );
  });

  it("renders nothing for formId with spaces", () => {
    const { container } = render(<TallyEmbed formId="bad form" />);
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("renders nothing for formId with angle brackets (XSS attempt)", () => {
    const { container } = render(
      <TallyEmbed formId='<script>alert("xss")</script>' />
    );
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("renders nothing for formId with slashes", () => {
    const { container } = render(<TallyEmbed formId="../../etc/passwd" />);
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("renders nothing for empty formId", () => {
    const { container } = render(<TallyEmbed formId="" />);
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("renders nothing for formId with query string characters", () => {
    const { container } = render(<TallyEmbed formId="form?redirect=evil" />);
    expect(container.querySelector("iframe")).toBeNull();
  });
});
