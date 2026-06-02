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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DEFAULT_RELATIVE_DATE_PERIODS } from "../../../../shared/dateUtils.js";
import { resolveDateShortcuts, ShortcutBar } from "../ShortcutBar.js";

afterEach(cleanup);

describe("ShortcutBar", () => {
  it("renders one button per period in the given order", () => {
    render(
      <ShortcutBar
        periods={["past-day", "past-week", "past-month"]}
        onSelect={vi.fn()}
        closePopover={vi.fn()}
      />,
    );
    const labels = screen.getAllByRole("button").map((b) => b.textContent);
    expect(labels).toEqual(["Past day", "Past week", "Past month"]);
  });

  it("emits an absolute { min, max } range on click", () => {
    const onSelect = vi.fn();
    render(
      <ShortcutBar
        periods={["past-hour"]}
        onSelect={onSelect}
        closePopover={vi.fn()}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Past hour" }));
    expect(onSelect).toHaveBeenCalledTimes(1);
    const call = onSelect.mock.calls[0][0];
    expect(call.max).toBeInstanceOf(Date);
    expect(call.min).toBeInstanceOf(Date);
    expect(call.max.getTime() - call.min.getTime()).toBe(60 * 60 * 1000);
  });

  it("forwards closePopover to onSelect on click", () => {
    const onSelect = vi.fn();
    const closePopover = vi.fn();
    render(
      <ShortcutBar
        periods={["past-hour"]}
        onSelect={onSelect}
        closePopover={closePopover}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Past hour" }));
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect.mock.calls[0][1]).toBe(closePopover);
  });

  it("renders nothing visible when no periods supplied", () => {
    render(
      <ShortcutBar periods={[]} onSelect={vi.fn()} closePopover={vi.fn()} />,
    );
    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });
});

describe("resolveDateShortcuts", () => {
  it("returns undefined for undefined or false", () => {
    expect(resolveDateShortcuts(undefined)).toBeUndefined();
    expect(resolveDateShortcuts(false)).toBeUndefined();
  });

  it("returns the default list for true", () => {
    expect(resolveDateShortcuts(true)).toBe(DEFAULT_RELATIVE_DATE_PERIODS);
  });

  it("returns the array verbatim for a non-empty array", () => {
    const periods = ["past-day", "past-month"] as const;
    expect(resolveDateShortcuts([...periods])).toEqual(periods);
  });

  it("treats an empty array as no shortcuts", () => {
    expect(resolveDateShortcuts([])).toBeUndefined();
  });
});
