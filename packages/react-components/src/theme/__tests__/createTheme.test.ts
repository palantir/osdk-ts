/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { describe, expect, it } from "vitest";
import { createTheme } from "../createTheme.js";

describe("createTheme", () => {
  it("maps semantic theme overrides to OSDK and Blueprint CSS variables", () => {
    const theme = createTheme({
      colors: {
        background: "#ffffff",
        primary: "#7c3aed",
        textMuted: "#5f6b7c",
      },
      typography: {
        bodySmall: 12,
        fontFamily: "Inter, system-ui, sans-serif",
        fontWeightBold: 600,
      },
      radius: 6,
      transitionDuration: 150,
    });

    expect(theme.cssVariables.get("--osdk-background-primary")).toBe(
      "#ffffff",
    );
    expect(theme.cssVariables.get("--osdk-intent-primary-rest")).toBe(
      "#7c3aed",
    );
    expect(theme.cssVariables.get("--bp-intent-primary-rest")).toBe(
      "#7c3aed",
    );
    expect(theme.cssVariables.get("--osdk-typography-color-muted")).toBe(
      "#5f6b7c",
    );
    expect(theme.cssVariables.get("--osdk-typography-size-body-small")).toBe(
      "12px",
    );
    expect(theme.cssVariables.get("--osdk-typography-family-default")).toBe(
      "Inter, system-ui, sans-serif",
    );
    expect(theme.cssVariables.get("--osdk-typography-weight-bold")).toBe(
      "600",
    );
    expect(theme.cssVariables.get("--osdk-surface-border-radius")).toBe("6px");
    expect(theme.cssVariables.get("--osdk-emphasis-transition-duration")).toBe(
      "150ms",
    );
  });

  it("ignores empty resets and lets raw CSS variables override semantic values", () => {
    const theme = createTheme({
      colors: {
        primary: "initial",
        border: "",
      },
      spacing: 4,
      cssVariables: {
        "--osdk-surface-spacing": "0.5rem",
        "--osdk-custom-token": "oklch(0.5 0.1 250)",
        "--osdk-empty-token": "",
      },
    });

    expect(theme.cssVariables.get("--osdk-intent-primary-rest")).toBe(
      undefined,
    );
    expect(theme.cssVariables.get("--osdk-surface-border-color-default")).toBe(
      undefined,
    );
    expect(theme.cssVariables.get("--osdk-surface-spacing")).toBe("0.5rem");
    expect(theme.cssVariables.get("--osdk-custom-token")).toBe(
      "oklch(0.5 0.1 250)",
    );
    expect(theme.cssVariables.has("--osdk-empty-token")).toBe(false);
  });
});
