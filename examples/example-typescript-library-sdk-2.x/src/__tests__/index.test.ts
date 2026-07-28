import { describe, expect, it } from "vitest";

import { greet } from "../index";

describe("greet", () => {
  it("greets the given name", () => {
    expect(greet("world")).toBe("Hello, world!");
  });

  it("preserves arbitrary names", () => {
    expect(greet("Foundry")).toBe("Hello, Foundry!");
  });
});
