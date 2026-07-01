/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  buildCopyAllPrompt,
  buildCopyPrompt,
} from "../recommendations/copyPrompt.js";
import type { Recommendation } from "../utils/PerformanceRecommendationEngine.js";

const { CopyPromptButton } = await import("./CopyPromptButton.js");

function makeRec(overrides: Partial<Recommendation> = {}): Recommendation {
  return {
    id: "rec-1",
    level: "high",
    category: "Bandwidth",
    title: "EmployeeCard fetches unused data",
    description: "This component fetches 12 properties but only uses 3",
    impact: "Save 4.2KB bandwidth per load",
    effort: "Low",
    suggestion: "Use $select to only fetch used properties",
    dismissible: true,
    ...overrides,
  };
}

const writeText = vi.fn<(text: string) => Promise<void>>();

beforeEach(() => {
  writeText.mockReset();
  writeText.mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
    writable: true,
  });
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

async function flushMicrotasks(): Promise<void> {
  await act(async () => {
    await Promise.resolve();
  });
}

describe("CopyPromptButton", () => {
  it("copies the single-recommendation prompt and flips the icon to tick", async () => {
    const rec = makeRec({ filePath: "src/A.tsx", lineNumber: 7 });

    const { container } = render(<CopyPromptButton recommendation={rec} />);

    expect(container.querySelector('[data-icon="clipboard"]')).not.toBeNull();

    fireEvent.click(screen.getByRole("button"));
    await flushMicrotasks();

    expect(writeText).toHaveBeenCalledTimes(1);
    expect(writeText).toHaveBeenCalledWith(buildCopyPrompt(rec));
    expect(container.querySelector('[data-icon="tick"]')).not.toBeNull();
    expect(container.querySelector('[data-icon="clipboard"]')).toBeNull();
  });

  it("copies the combined prompt for multiple recommendations", async () => {
    const recs = [makeRec({ id: "rec-1" }), makeRec({ id: "rec-2" })];

    render(<CopyPromptButton recommendations={recs} />);

    fireEvent.click(screen.getByRole("button"));
    await flushMicrotasks();

    expect(writeText).toHaveBeenCalledWith(buildCopyAllPrompt(recs));
  });

  it("resets the icon back to clipboard after the timeout elapses", async () => {
    vi.useFakeTimers();
    const rec = makeRec();

    const { container } = render(<CopyPromptButton recommendation={rec} />);

    fireEvent.click(screen.getByRole("button"));
    await flushMicrotasks();

    expect(container.querySelector('[data-icon="tick"]')).not.toBeNull();

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(container.querySelector('[data-icon="tick"]')).toBeNull();
    expect(container.querySelector('[data-icon="clipboard"]')).not.toBeNull();
  });

  it("defaults to the single label and respects an override", () => {
    const { rerender } = render(
      <CopyPromptButton recommendation={makeRec()} />
    );

    expect(screen.getByText("Copy prompt")).not.toBeNull();

    rerender(
      <CopyPromptButton recommendation={makeRec()} label="Fix it for me" />
    );

    expect(screen.getByText("Fix it for me")).not.toBeNull();
  });

  it("defaults to the copy-all label for multiple recommendations", () => {
    render(<CopyPromptButton recommendations={[makeRec()]} />);

    expect(screen.getByText("Copy all")).not.toBeNull();
  });
});
