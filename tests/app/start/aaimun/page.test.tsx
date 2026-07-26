import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import AAIMUNStartPage from "@/app/start/aaimun/page";

afterEach(cleanup);

describe("AAIMUNStartPage", () => {
  it("connects the campaign CTA to the form section", () => {
    render(<AAIMUNStartPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "The conference ends. Your next chapter starts here.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Start a conversation" }),
    ).toHaveAttribute("href", "#conversation");
  });

  it("explains all four Strategist roles", () => {
    render(<AAIMUNStartPage />);

    for (const role of [
      "Principal Strategist",
      "Academic Strategist",
      "Competition Strategist",
      "Community Strategist",
    ]) {
      expect(
        screen.getByRole("heading", { level: 3, name: role }),
      ).toBeInTheDocument();
    }
  });

  it("includes all four campaign photographs with descriptive alt text", () => {
    render(<AAIMUNStartPage />);

    expect(
      screen.getByAltText(
        "Computing Honour Society students gathered together on a stairway",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "A Computing Honour Society student leader standing outdoors",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Computing Honour Society students working together at computers",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Computing Honour Society students collaborating around computers",
      ),
    ).toBeInTheDocument();
  });
});
