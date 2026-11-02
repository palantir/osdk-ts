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

import { act, cleanup, renderHook } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useWorkshopAuth } from "../hooks/useWorkshopAuth.js";

const moduleUrl =
  "https://foundry.example.com:8443/workspace/module/view/latest/example?embedded=true";
const unauthorized = new Response(null, { status: 401 });
const redirected = new Response(null);
Object.defineProperty(redirected, "type", { value: "opaqueredirect" });

function createPopup() {
  const popup = {
    closed: false,
    close: vi.fn(() => {
      popup.closed = true;
    }),
    focus: vi.fn(),
    opener: window as Window | null,
    location: { href: "about:blank" },
  };
  return popup;
}

async function advanceTime(ms = 0) {
  await act(() => vi.advanceTimersByTimeAsync(ms));
}

beforeEach(() => {
  vi.useFakeTimers({
    toFake: [
      "setTimeout",
      "clearTimeout",
      "setInterval",
      "clearInterval",
      "Date",
    ],
  });
  vi.stubGlobal(
    "fetch",
    vi.fn<typeof fetch>().mockResolvedValue(new Response(null)),
  );
  vi.spyOn(window, "open").mockReturnValue(null);
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

describe("useWorkshopAuth", () => {
  it("waits for a URL, then checks the browser session without opening a popup when available", async () => {
    const { result, rerender } = renderHook(useWorkshopAuth, {
      initialProps: undefined as string | undefined,
    });
    expect(fetch).not.toHaveBeenCalled();
    rerender(moduleUrl);
    expect(result.current.status).toBe("checking");
    await advanceTime();

    expect(fetch).toHaveBeenCalledWith(
      moduleUrl,
      expect.objectContaining({
        method: "HEAD",
        credentials: "include",
        redirect: "manual",
        cache: "no-store",
      }),
    );
    expect(result.current.status).toBe("ready");
    expect(window.open).not.toHaveBeenCalled();
  });

  it.each([redirected, unauthorized])(
    "opens sign-in automatically and loads only after the session is available (%s)",
    async (response) => {
      vi.mocked(fetch).mockResolvedValue(response);
      const popup = createPopup();
      vi.mocked(window.open).mockReturnValue(popup as unknown as Window);
      const { result } = renderHook(() => useWorkshopAuth(moduleUrl));
      await advanceTime();

      expect(window.open).toHaveBeenCalledTimes(1);
      expect(popup.opener).toBeNull();
      expect(popup.location.href).toBe(
        "https://foundry.example.com:8443/workspace/auth-redirect",
      );
      expect(result.current.status).toBe("signingIn");
      await advanceTime(1000);
      expect(result.current.status).toBe("signingIn");

      vi.mocked(fetch).mockResolvedValue(new Response(null));
      await advanceTime(1000);
      expect(result.current.status).toBe("ready");
      expect(popup.close).toHaveBeenCalledTimes(1);
    },
  );

  it("allows a click to retry a blocked popup and focuses an existing popup", async () => {
    vi.mocked(fetch).mockResolvedValue(unauthorized);
    const { result } = renderHook(() => useWorkshopAuth(moduleUrl));
    await advanceTime();
    expect(result.current.status).toBe("required");

    const popup = createPopup();
    vi.mocked(window.open).mockReturnValue(popup as unknown as Window);
    act(() => result.current.signIn());
    expect(result.current.status).toBe("signingIn");
    act(() => result.current.signIn());
    expect(window.open).toHaveBeenCalledTimes(2);
    expect(popup.focus).toHaveBeenCalledOnce();
  });

  it("does not treat closing the popup as success or reopen it automatically", async () => {
    vi.mocked(fetch).mockResolvedValue(unauthorized);
    const popup = createPopup();
    vi.mocked(window.open).mockReturnValue(popup as unknown as Window);
    const { result } = renderHook(() => useWorkshopAuth(moduleUrl));
    await advanceTime();
    popup.closed = true;
    await advanceTime(1000);
    expect(result.current.status).toBe("unavailable");
    await advanceTime(10000);
    expect(window.open).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it.each(["network error", "unsupported HEAD", "timeout"])(
    "falls back to embedding when the session check is inconclusive: %s",
    async (failure) => {
      vi.mocked(fetch).mockImplementation((_input, options) => {
        if (failure === "network error")
          return Promise.reject(new TypeError("Failed to fetch"));
        if (failure === "unsupported HEAD")
          return Promise.resolve(new Response(null, { status: 405 }));
        return new Promise((_resolve, reject) => {
          options?.signal?.addEventListener("abort", () =>
            reject(new DOMException("Aborted", "AbortError")),
          );
        });
      });
      const { result } = renderHook(() => useWorkshopAuth(moduleUrl));
      await advanceTime(5000);
      expect(result.current.status).toBe("ready");
      expect(window.open).not.toHaveBeenCalled();
    },
  );

  it("ignores stale session checks after changing URLs or unmounting", async () => {
    let resolve: (response: Response) => void = () => {};
    vi.mocked(fetch).mockReturnValueOnce(
      new Promise((done) => {
        resolve = done;
      }),
    );
    const { result, rerender, unmount } = renderHook(useWorkshopAuth, {
      initialProps: moduleUrl,
    });
    const firstSignal = vi.mocked(fetch).mock.calls[0][1]?.signal;
    rerender("https://other.example.com/workspace/module/view/latest/example");
    await advanceTime();
    expect(firstSignal?.aborted).toBe(true);
    resolve(unauthorized);
    await advanceTime();
    expect(result.current.status).toBe("ready");
    expect(window.open).not.toHaveBeenCalled();

    vi.mocked(fetch).mockReturnValueOnce(
      new Promise((done) => {
        resolve = done;
      }),
    );
    rerender(moduleUrl);
    unmount();
    resolve(unauthorized);
    await advanceTime();
    expect(window.open).not.toHaveBeenCalled();
  });

  it("shares one popup per origin and keeps it open while another module needs it", async () => {
    vi.mocked(fetch).mockResolvedValue(unauthorized);
    const popup = createPopup();
    vi.mocked(window.open).mockReturnValue(popup as unknown as Window);
    const first = renderHook(() => useWorkshopAuth(moduleUrl));
    const second = renderHook(() =>
      useWorkshopAuth(`${moduleUrl}&themeOverride=DARK_MODE`),
    );
    await advanceTime();
    expect(window.open).toHaveBeenCalledTimes(1);
    first.unmount();
    expect(popup.close).not.toHaveBeenCalled();
    second.unmount();
    expect(popup.close).toHaveBeenCalledOnce();
    const requestCount = vi.mocked(fetch).mock.calls.length;
    await advanceTime(10000);
    expect(fetch).toHaveBeenCalledTimes(requestCount);
  });

  it.each([
    "https://other.example.com/workspace/module/view/latest/example",
    undefined,
  ])("cancels pending polling when the URL changes to %s", async (nextUrl) => {
    let resolvePoll: (response: Response) => void = () => {};
    vi.mocked(fetch)
      .mockResolvedValueOnce(unauthorized)
      .mockReturnValueOnce(
        new Promise((resolve) => {
          resolvePoll = resolve;
        }),
      );
    const popup = createPopup();
    vi.mocked(window.open).mockReturnValue(popup as unknown as Window);
    const { result, rerender } = renderHook(useWorkshopAuth, {
      initialProps: moduleUrl as string | undefined,
    });
    await advanceTime();
    await advanceTime(3000);
    expect(fetch).toHaveBeenCalledTimes(2);
    const pollSignal = vi.mocked(fetch).mock.calls[1][1]?.signal;

    rerender(nextUrl);
    await advanceTime();
    expect(pollSignal?.aborted).toBe(true);
    expect(popup.close).toHaveBeenCalledOnce();
    expect(result.current.status).toBe(
      nextUrl === undefined ? "checking" : "ready",
    );

    resolvePoll(unauthorized);
    await advanceTime(3000);
    expect(result.current.status).toBe(
      nextUrl === undefined ? "checking" : "ready",
    );
    expect(window.open).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledTimes(nextUrl === undefined ? 2 : 3);
  });

  it("opens only one popup in StrictMode", async () => {
    vi.mocked(fetch).mockResolvedValue(unauthorized);
    const popup = createPopup();
    vi.mocked(window.open).mockReturnValue(popup as unknown as Window);
    renderHook(() => useWorkshopAuth(moduleUrl), { wrapper: React.StrictMode });
    await advanceTime();
    expect(window.open).toHaveBeenCalledTimes(1);
    expect(popup.close).not.toHaveBeenCalled();
  });
});
