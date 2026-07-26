import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import AlternaFormEmbed, {
  AAIMUN_FORM_URL,
} from "@/components/ui/AlternaFormEmbed";

afterEach(cleanup);

describe("AlternaFormEmbed", () => {
  it("uses the AAIMUN custom-domain form as a standard dynamic embed", () => {
    render(<AlternaFormEmbed />);

    const iframe = screen.getByTitle(
      "Start a conversation with the Computing Honour Society",
    );
    const embedUrl = new URL(iframe.getAttribute("data-tally-src") ?? "");

    expect(embedUrl.origin + embedUrl.pathname).toBe(AAIMUN_FORM_URL);
    expect(embedUrl.searchParams.get("alignLeft")).toBe("1");
    expect(embedUrl.searchParams.get("hideTitle")).toBe("1");
    expect(embedUrl.searchParams.get("transparentBackground")).toBe("1");
    expect(embedUrl.searchParams.get("dynamicHeight")).toBe("1");
    expect(embedUrl.searchParams.has("chapter")).toBe(false);
    expect(iframe).toHaveAttribute("height", "1000");
    expect(iframe).toHaveAttribute("scrolling", "no");
  });

  it("provides an accessible direct-form fallback", () => {
    render(<AlternaFormEmbed />);

    expect(
      screen.getByRole("link", { name: "open it in a new tab" }),
    ).toHaveAttribute("href", AAIMUN_FORM_URL);
  });

  it("keeps the form sandboxed", () => {
    render(<AlternaFormEmbed />);

    expect(
      screen.getByTitle(
        "Start a conversation with the Computing Honour Society",
      ),
    ).toHaveAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-popups allow-forms",
    );
  });
});
