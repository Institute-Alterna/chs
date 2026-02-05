import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "@/components/ui/Button";

afterEach(cleanup);

describe("Button", () => {
  it("renders as an anchor when href is provided", () => {
    render(<Button href="/start">Go</Button>);
    const el = screen.getByText("Go");
    expect(el.tagName).toBe("A");
    expect(el).toHaveAttribute("href", "/start");
  });

  it("renders as a button when onClick is provided", () => {
    render(<Button onClick={() => {}}>Click</Button>);
    const el = screen.getByText("Click");
    expect(el.tagName).toBe("BUTTON");
    expect(el).toHaveAttribute("type", "button");
  });

  it("renders as a button with no props", () => {
    render(<Button>Plain</Button>);
    expect(screen.getByText("Plain").tagName).toBe("BUTTON");
  });

  it("applies primary variant classes by default", () => {
    render(<Button>Primary</Button>);
    const el = screen.getByText("Primary");
    expect(el.className).toContain("border-blue-600");
    expect(el.className).toContain("text-blue-600");
  });

  it("applies secondary variant classes", () => {
    render(<Button variant="secondary">Sec</Button>);
    const el = screen.getByText("Sec");
    expect(el.className).toContain("border-grey-300");
    expect(el.className).toContain("text-grey-600");
  });

  it("applies filled variant classes", () => {
    render(<Button variant="filled">Filled</Button>);
    const el = screen.getByText("Filled");
    expect(el.className).toContain("bg-blue-600");
    expect(el.className).toContain("text-white");
  });

  it("applies ghost variant classes", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const el = screen.getByText("Ghost");
    expect(el.className).toContain("hover:opacity-70");
  });

  it("calls onClick handler when clicked", async () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Click me</Button>);
    await userEvent.click(screen.getByText("Click me"));
    expect(handler).toHaveBeenCalledOnce();
  });

  it("merges custom className", () => {
    render(<Button className="mt-4">Styled</Button>);
    expect(screen.getByText("Styled").className).toContain("mt-4");
  });
});
