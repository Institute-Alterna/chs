import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import ApplyCTA from "../ApplyCTA";

afterEach(cleanup);

describe("ApplyCTA", () => {
  it("renders default heading and description", () => {
    render(<ApplyCTA />);
    expect(
      screen.getByText("Ready to make an impact?")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Start a Computing Honour Society chapter/)
    ).toBeInTheDocument();
  });

  it("renders custom heading and description", () => {
    render(
      <ApplyCTA
        heading="Custom heading"
        description="Custom description text"
      />
    );
    expect(screen.getByText("Custom heading")).toBeInTheDocument();
    expect(screen.getByText("Custom description text")).toBeInTheDocument();
  });

  it("contains a link to /start", () => {
    render(<ApplyCTA />);
    const link = screen.getByText("Start a Chapter");
    expect(link).toHaveAttribute("href", "/start");
  });
});
