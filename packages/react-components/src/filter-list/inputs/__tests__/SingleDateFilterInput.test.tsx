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
import { SingleDateFilterInput } from "../SingleDateFilterInput.js";

// Replace the lazy single-date calendar with a synchronous import so the
// popover renders in happy-dom without resolving React.lazy.
vi.mock("../../../shared/calendar/LazyDateCalendar.js", async () => {
  const { default: DateCalendar } = await vi.importActual<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    typeof import("../../../shared/calendar/DateCalendar.js")
  >("../../../shared/calendar/DateCalendar.js");
  return { LazyDateCalendar: DateCalendar };
});

afterEach(cleanup);

const slashFormat = (d: Date): string =>
  `${String(d.getMonth() + 1).padStart(2, "0")}/${
    String(d.getDate()).padStart(2, "0")
  }/${d.getFullYear()}`;

describe("SingleDateFilterInput", () => {
  it("forwards formatDate to the underlying SingleDateInput / DatePicker", () => {
    const selectedDate = new Date(2024, 0, 15);
    render(
      <SingleDateFilterInput
        filterState={{
          type: "SELECT",
          selectedValues: [selectedDate],
          isExcluding: false,
        }}
        onFilterStateChanged={vi.fn()}
        formatDate={slashFormat}
      />,
    );
    const input = screen.getByLabelText("Select date") as HTMLInputElement;
    expect(input.value).toBe("01/15/2024");
  });

  it("falls back to ISO YYYY-MM-DD when formatDate is omitted", () => {
    const selectedDate = new Date(2024, 0, 15);
    render(
      <SingleDateFilterInput
        filterState={{
          type: "SELECT",
          selectedValues: [selectedDate],
          isExcluding: false,
        }}
        onFilterStateChanged={vi.fn()}
      />,
    );
    const input = screen.getByLabelText("Select date") as HTMLInputElement;
    expect(input.value).toBe("2024-01-15");
  });

  it("renders an empty input when no date is selected", () => {
    render(
      <SingleDateFilterInput
        filterState={undefined}
        onFilterStateChanged={vi.fn()}
        formatDate={slashFormat}
      />,
    );
    const input = screen.getByLabelText("Select date") as HTMLInputElement;
    expect(input.value).toBe("");
  });
});
