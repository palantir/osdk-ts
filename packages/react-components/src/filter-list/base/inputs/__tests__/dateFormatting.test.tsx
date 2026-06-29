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

import { MultiDateInput } from "../MultiDateInput.js";
import { SingleDateInput } from "../SingleDateInput.js";
import { TimelineInput } from "../TimelineInput.js";

vi.mock("../../../../shared/calendar/LazyDateCalendar.js", async () => {
  const { default: DateCalendar } = await vi.importActual<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    typeof import("../../../../shared/calendar/DateCalendar.js")
  >("../../../../shared/calendar/DateCalendar.js");
  return { LazyDateCalendar: DateCalendar };
});

afterEach(cleanup);

const slashFormat = (d: Date): string =>
  `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(
    2,
    "0"
  )}/${d.getFullYear()}`;

describe("formatDate / parseDate plumbing", () => {
  describe("SingleDateInput", () => {
    it("renders the picker idle text via formatDate when provided", () => {
      const selectedDate = new Date(2024, 0, 15);
      render(
        <SingleDateInput
          selectedDate={selectedDate}
          onChange={vi.fn()}
          formatDate={slashFormat}
        />
      );
      const input = screen.getByLabelText("Select date") as HTMLInputElement;
      expect(input.value).toBe("01/15/2024");
    });

    it("falls back to ISO YYYY-MM-DD when formatDate is omitted", () => {
      const selectedDate = new Date(2024, 0, 15);
      render(
        <SingleDateInput selectedDate={selectedDate} onChange={vi.fn()} />
      );
      const input = screen.getByLabelText("Select date") as HTMLInputElement;
      expect(input.value).toBe("2024-01-15");
    });

    it("renders an empty input when no date is selected", () => {
      render(
        <SingleDateInput
          selectedDate={undefined}
          onChange={vi.fn()}
          formatDate={slashFormat}
        />
      );
      const input = screen.getByLabelText("Select date") as HTMLInputElement;
      expect(input.value).toBe("");
    });
  });

  describe("MultiDateInput", () => {
    it("renders chip text via formatDate when provided", () => {
      const dates = [new Date(2024, 0, 15), new Date(2024, 5, 30)];
      render(
        <MultiDateInput
          selectedDates={dates}
          onChange={vi.fn()}
          formatDate={slashFormat}
        />
      );
      expect(screen.getByText("01/15/2024")).toBeDefined();
      expect(screen.getByText("06/30/2024")).toBeDefined();
    });

    it("uses the default locale-aware display when formatDate is omitted", () => {
      const dates = [new Date(2024, 0, 15)];
      render(<MultiDateInput selectedDates={dates} onChange={vi.fn()} />);
      expect(screen.queryByText("01/15/2024")).toBeNull();
      const node = document.body.textContent ?? "";
      expect(node).toContain("2024");
    });

    it("forwards the formatted text to the chip's aria-label", () => {
      const dates = [new Date(2024, 0, 15)];
      render(
        <MultiDateInput
          selectedDates={dates}
          onChange={vi.fn()}
          formatDate={slashFormat}
        />
      );
      const removeButton = screen.getByLabelText("Remove 01/15/2024");
      expect(removeButton).toBeDefined();
    });
  });

  describe("TimelineInput", () => {
    it("renders the start and end labels via formatDate when provided", () => {
      const start = new Date(2024, 4, 1);
      const end = new Date(2024, 4, 31);
      render(
        <TimelineInput
          startDate={start}
          endDate={end}
          onChange={vi.fn()}
          formatDate={slashFormat}
        />
      );
      expect(screen.getByText("05/01/2024")).toBeDefined();
      expect(screen.getByText("05/31/2024")).toBeDefined();
    });

    it("falls back to the default formatter when formatDate is omitted", () => {
      const start = new Date(2024, 4, 1);
      render(
        <TimelineInput
          startDate={start}
          endDate={undefined}
          onChange={vi.fn()}
        />
      );
      expect(screen.queryByText("05/01/2024")).toBeNull();
      const node = document.body.textContent ?? "";
      expect(node).toContain("2024");
    });

    it('keeps the underlying HTML <input type="date"> value as ISO YYYY-MM-DD', () => {
      const start = new Date(2024, 4, 1);
      render(
        <TimelineInput
          startDate={start}
          endDate={undefined}
          onChange={vi.fn()}
          formatDate={slashFormat}
        />
      );
      const input = screen.getByLabelText("Start date") as HTMLInputElement;
      expect(input.type).toBe("date");
      expect(input.value).toBe("2024-05-01");
    });
  });
});
