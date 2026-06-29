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

import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

// Each test re-imports LazyCbacBanner after registering its own mock of the
// underlying CbacBanner module, so the success and load-failure paths can
// diverge within a single file.
afterEach(() => {
  cleanup();
  vi.resetModules();
  vi.restoreAllMocks();
  vi.doUnmock("../../../cbac-picker/CbacBanner.js");
});

describe("LazyCbacBanner", () => {
  it("renders the CbacBanner once its chunk resolves", async () => {
    vi.doMock("../../../cbac-picker/CbacBanner.js", () => ({
      CbacBanner: ({ markingIds }: { markingIds: string[] }) => (
        <div data-testid="cbac-banner">{markingIds.join(",")}</div>
      ),
    }));
    const { LazyCbacBanner } = await import("../LazyCbacBanner.js");

    render(<LazyCbacBanner markingIds={["m-1", "m-2"]} />);

    expect((await screen.findByTestId("cbac-banner")).textContent).toBe(
      "m-1,m-2",
    );
  });

  it("falls back to the raw marking ids (no crash) when the chunk fails to load", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.doMock("../../../cbac-picker/CbacBanner.js", () => ({
      // Accessing the named export throws, so the dynamic import inside
      // LazyCbacBanner rejects and the `.catch` fallback takes over.
      get CbacBanner(): never {
        throw new Error("simulated chunk load failure");
      },
    }));
    const { LazyCbacBanner } = await import("../LazyCbacBanner.js");

    render(
      <div data-testid="host">
        <LazyCbacBanner markingIds={["m-1", "m-2"]} />
      </div>,
    );

    // The fallback renders the raw marking ids rather than crashing or hiding
    // them, and the failure is logged exactly once rather than thrown.
    expect(await screen.findByText("m-1, m-2")).toBeTruthy();
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId("cbac-banner")).toBeNull();
  });
});
