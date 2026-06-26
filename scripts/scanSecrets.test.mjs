import { describe, expect, it } from "vitest";
import { scanText } from "./scanSecrets.mjs";

// Public jwt.io sample token — safe to hardcode.
const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

describe("scanText", () => {
  it("detects a JWT and reports its line", () => {
    const text = ["first line", `token=${JWT}`, "third line"].join("\n");
    const findings = scanText(text);
    expect(findings).toHaveLength(1);
    expect(findings[0].kind).toBe("JWT");
    expect(findings[0].line).toBe(2);
  });

  it("ignores text containing no token", () => {
    const text = [
      "The quick brown fox",
      "jumps over the lazy dog.",
      "Nothing secret here.",
    ].join("\n");
    expect(scanText(text)).toEqual([]);
  });

  it("does not flag near-misses that aren't real JWTs", () => {
    const text = [
      "const x = eyJustKidding;",
      "const y = eyJabc.def;",
    ].join("\n");
    expect(scanText(text)).toEqual([]);
  });

  it("detects every JWT independently, one per line", () => {
    const text = [
      `a=${JWT}`,
      `b=${JWT}`,
      `c=${JWT}`,
    ].join("\n");
    const findings = scanText(text);
    expect(findings).toHaveLength(3);
    expect(findings.map((f) => f.line)).toEqual([1, 2, 3]);
  });

  it("surfaces the full token so it can be found and removed", () => {
    const text = `token=${JWT}`;
    const findings = scanText(text);
    expect(findings).toHaveLength(1);
    // the full token is surfaced verbatim so the developer can grep for it and remove it
    expect(findings[0].token).toBe(JWT);
  });
});
