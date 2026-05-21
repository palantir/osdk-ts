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

import { act, cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DATA_THEME_ATTR, OsdkThemeProvider } from "../OsdkThemeProvider.js";
import type { OsdkThemeMode } from "../types.js";
import { useOsdkTheme } from "../useOsdkTheme.js";

type MediaQueryListener = (event: { matches: boolean }) => void;

interface FakeMediaQueryList {
  matches: boolean;
  addEventListener: (type: "change", listener: MediaQueryListener) => void;
  removeEventListener: (type: "change", listener: MediaQueryListener) => void;
}

function installMatchMediaMock(initialMatches: boolean): {
  setMatches: (matches: boolean) => void;
  cleanup: () => void;
} {
  const listeners = new Set<MediaQueryListener>();
  let matches = initialMatches;

  const mql: FakeMediaQueryList = {
    get matches() {
      return matches;
    },
    addEventListener: (_type, listener) => {
      listeners.add(listener);
    },
    removeEventListener: (_type, listener) => {
      listeners.delete(listener);
    },
  };

  const original = window.matchMedia;
  window.matchMedia = vi.fn(() => mql) as unknown as typeof window.matchMedia;

  return {
    setMatches: (next: boolean) => {
      matches = next;
      for (const listener of listeners) {
        listener({ matches: next });
      }
    },
    cleanup: () => {
      window.matchMedia = original;
    },
  };
}

function ThemeProbe(): React.ReactElement {
  const { theme, resolvedTheme } = useOsdkTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="resolved">{resolvedTheme}</span>
    </div>
  );
}

function ThemeToggle(): React.ReactElement {
  const { setTheme } = useOsdkTheme();
  return (
    <>
      <button
        type="button"
        data-testid="set-light"
        onClick={() => setTheme("light")}
      />
      <button
        type="button"
        data-testid="set-dark"
        onClick={() => setTheme("dark")}
      />
      <button
        type="button"
        data-testid="set-system"
        onClick={() => setTheme("system")}
      />
    </>
  );
}

describe("OsdkThemeProvider", () => {
  let media: ReturnType<typeof installMatchMediaMock>;

  beforeEach(() => {
    media = installMatchMediaMock(false);
  });

  afterEach(() => {
    cleanup();
    document.documentElement.removeAttribute(DATA_THEME_ATTR);
    media.cleanup();
  });

  it("defaults to system mode and resolves against prefers-color-scheme", () => {
    media.setMatches(true);
    render(
      <OsdkThemeProvider>
        <ThemeProbe />
      </OsdkThemeProvider>,
    );

    expect(screen.getByTestId("theme").textContent).toBe("system");
    expect(screen.getByTestId("resolved").textContent).toBe("dark");
    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBe("dark");
  });

  it("light/dark override the OS preference", () => {
    // Set (prefers-color-scheme: dark) to true
    media.setMatches(true);
    render(
      <OsdkThemeProvider defaultTheme="light">
        <ThemeProbe />
      </OsdkThemeProvider>,
    );

    expect(screen.getByTestId("resolved").textContent).toBe("light");
    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBe(
      "light",
    );
  });

  it("reacts when the OS preference changes while in system mode", () => {
    media.setMatches(false);
    render(
      <OsdkThemeProvider>
        <ThemeProbe />
      </OsdkThemeProvider>,
    );

    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBe(
      "light",
    );

    act(() => {
      media.setMatches(true);
    });

    expect(screen.getByTestId("resolved").textContent).toBe("dark");
    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBe("dark");
  });

  it("setTheme updates the active theme in uncontrolled mode", () => {
    media.setMatches(true);
    render(
      <OsdkThemeProvider>
        <ThemeProbe />
        <ThemeToggle />
      </OsdkThemeProvider>,
    );

    expect(screen.getByTestId("resolved").textContent).toBe("dark");

    act(() => {
      // Calls setTheme
      screen.getByTestId("set-light").click();
    });

    expect(screen.getByTestId("theme").textContent).toBe("light");
    expect(screen.getByTestId("resolved").textContent).toBe("light");
    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBe(
      "light",
    );
  });

  it("controlled mode ignores setTheme and fires onThemeChanged", () => {
    const onThemeChanged = vi.fn();
    render(
      <OsdkThemeProvider theme="light" onThemeChanged={onThemeChanged}>
        <ThemeProbe />
        <ThemeToggle />
      </OsdkThemeProvider>,
    );

    expect(screen.getByTestId("resolved").textContent).toBe("light");

    act(() => {
      // Calls setTheme
      screen.getByTestId("set-dark").click();
    });

    expect(onThemeChanged).toHaveBeenCalledWith("dark");
    // controlled mode: still light because parent didn't re-render
    expect(screen.getByTestId("theme").textContent).toBe("light");
    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBe(
      "light",
    );
  });

  it("controlled theme re-renders propagate to the DOM", () => {
    function Harness(): React.ReactElement {
      const [theme, setTheme] = React.useState<OsdkThemeMode>("light");
      return (
        <OsdkThemeProvider theme={theme} onThemeChanged={setTheme}>
          <ThemeProbe />
          <ThemeToggle />
        </OsdkThemeProvider>
      );
    }
    render(<Harness />);

    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBe(
      "light",
    );

    act(() => {
      // Calls setTheme
      screen.getByTestId("set-dark").click();
    });

    expect(screen.getByTestId("theme").textContent).toBe("dark");
    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBe("dark");
  });

  it("restores the previous data theme attribute on unmount", () => {
    document.documentElement.setAttribute(DATA_THEME_ATTR, "light");
    const { unmount } = render(
      <OsdkThemeProvider defaultTheme="dark">
        <ThemeProbe />
      </OsdkThemeProvider>,
    );

    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBe("dark");

    unmount();

    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBe(
      "light",
    );
  });

  it("removes the data theme attribute on unmount when there was none", () => {
    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBeNull();
    const { unmount } = render(
      <OsdkThemeProvider defaultTheme="dark">
        <ThemeProbe />
      </OsdkThemeProvider>,
    );

    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBe("dark");

    unmount();

    expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBeNull();
  });

  it("writes to a custom target element when provided", () => {
    const custom = document.createElement("div");
    document.body.appendChild(custom);
    try {
      render(
        <OsdkThemeProvider defaultTheme="dark" target={custom}>
          <ThemeProbe />
        </OsdkThemeProvider>,
      );

      expect(custom.getAttribute(DATA_THEME_ATTR)).toBe("dark");
      expect(document.documentElement.getAttribute(DATA_THEME_ATTR)).toBeNull();
    } finally {
      document.body.removeChild(custom);
    }
  });
});

describe("useOsdkTheme", () => {
  afterEach(() => {
    cleanup();
  });

  it("throws when used outside of an OsdkThemeProvider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(
      () => {},
    );
    try {
      expect(() => render(<ThemeProbe />)).toThrow(/OsdkThemeProvider/);
    } finally {
      consoleError.mockRestore();
    }
  });
});
