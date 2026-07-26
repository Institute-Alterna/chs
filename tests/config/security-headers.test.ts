import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";

describe("security headers", () => {
  it("allows only the required external form and embed origins", async () => {
    const rules = await nextConfig.headers?.();
    const contentSecurityPolicy = rules
      ?.flatMap((rule) => rule.headers)
      .find((header) => header.key === "Content-Security-Policy")?.value;

    expect(contentSecurityPolicy).toContain(
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://tally.so",
    );
    expect(contentSecurityPolicy).toContain(
      "frame-src https://tally.so https://forms.alterna.dev",
    );
  });
});
