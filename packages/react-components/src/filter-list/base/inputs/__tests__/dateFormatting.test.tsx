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
import type { DatePickerProps } from "../../../../shared/calendar/DatePicker.js";
import { MultiDateInput } from "../MultiDateInput.js";
import { SingleDateInput } from "../SingleDateInput.js";
import { TimelineInput } from "../TimelineInput.js";

// Replace the lazy single-date calendar with a synchronous import so the
// popover renders in happy-dom without resolving React.lazy.
vi.mock("../../../../shared/calendar/LazyDateCalendar.js", async () => {
  const { default: DateCalendar } = await vi.importActual<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    typeof import("../../../../shared/calendar/DateCalendar.js")
  >("../../../../shared/calendar/DateCalendar.js");
  return { LazyDateCalendar: DateCalendar };
});

// Wrap DatePicker with a passthrough spy so tests can assert which props
// it received (e.g. that MultiDateInput forwards `formatDate` to it). The
// real component still renders, so other assertions in this file that
// observe the picker's rendered DOM continue to work. Uses vi.hoisted so
// the mock reference is available when vi.mock's factory runs (vi.mock is
// hoisted above ordinary const/let declarations).
const hoisted = vi.hoisted(() => ({
  mockDatePicker: vi.fn<
    (props: DatePickerProps) => React.ReactElement | null
  >(),
}));
vi.mock("../../../../shared/calendar/index.js", async () => {
  const ReactModule = await import("react");
  const actual = await vi.importActual<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    typeof import("../../../../shared/calendar/index.js")
  >("../../../../shared/calendar/index.js");
  hoisted.mockDatePicker.mockImplementation((props) =>
    ReactModule.createElement(actual.DatePicker, props)
  );
  return {
    ...actual,
    DatePicker: hoisted.mockDatePicker,
  };
});

afterEach(cleanup);

const isoFormat = (d: Date): string =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${
    String(d.getDate()).padStart(2, "0")
  }`;

const slashFormat = (d: Date): string =>
  `${String(d.getMonth() + 1).padStart(2, "0")}/${
    String(d.getDate()).padStart(2, "0")
  }/${d.getFullYear()}`;

const slashParse = (text: string): Date | undefined => {
  const match = text.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return undefined;
  return new Date(
    Number(match[3]),
    Number(match[1]) - 1,
    Number(match[2]),
  );
};

describe("formatDate / parseDate plumbing", () => {
  describe("SingleDateInput", () => {
    it("renders the picker idle text via formatDate when provided", () => {
      const selectedDate = new Date(2024, 0, 15);
      render(
        <SingleDateInput
          selectedDate={selectedDate}
          onChange={vi.fn()}
          formatDate={slashFormat}
        />,
      );
      const input = screen.getByLabelText("Select date") as HTMLInputElement;
      expect(input.value).toBe("01/15/2024");
    });

    it(
      "falls back to ISO YYYY-MM-DD when formatDate is omitted",
      () => {
        const selectedDate = new Date(2024, 0, 15);
        render(
          <SingleDateInput
            selectedDate={selectedDate}
            onChange={vi.fn()}
          />,
        );
        const input = screen.getByLabelText("Select date") as HTMLInputElement;
        expect(input.value).toBe("2024-01-15");
      },
    );

    it("renders an empty input when no date is selected", () => {
      render(
        <SingleDateInput
          selectedDate={undefined}
          onChange={vi.fn()}
          formatDate={slashFormat}
        />,
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
        />,
      );
      expect(screen.getByText("01/15/2024")).toBeDefined();
      expect(screen.getByText("06/30/2024")).toBeDefined();
    });

    it(
      "uses the default locale-aware display when formatDate is omitted",
      () => {
        const dates = [new Date(2024, 0, 15)];
        render(
          <MultiDateInput
            selectedDates={dates}
            onChange={vi.fn()}
          />,
        );
        // Default formatDateForDisplay uses toLocaleDateString with month: "short"
        // — the rendered string should NOT match the slash format.
        expect(screen.queryByText("01/15/2024")).toBeNull();
        // It should mention the year so we know the date rendered
        const node = document.body.textContent ?? "";
        expect(node).toContain("2024");
      },
    );

    it("forwards the formatted text to the chip's aria-label", () => {
      const dates = [new Date(2024, 0, 15)];
      render(
        <MultiDateInput
          selectedDates={dates}
          onChange={vi.fn()}
          formatDate={slashFormat}
        />,
      );
      const removeButton = screen.getByLabelText("Remove 01/15/2024");
      expect(removeButton).toBeDefined();
    });

    it(
      "forwards formatDate to the embedded DatePicker so its idle text matches the chips",
      () => {
        hoisted.mockDatePicker.mockClear();
        render(
          <MultiDateInput
            selectedDates={[new Date(2024, 0, 15)]}
            onChange={vi.fn()}
            formatDate={slashFormat}
          />,
        );
        // The "Add date" picker is the only DatePicker rendered by
        // MultiDateInput. Assert the mocked picker received the same
        // formatDate function used by the chips.
        expect(hoisted.mockDatePicker).toHaveBeenCalled();
        const calls = hoisted.mockDatePicker.mock.calls;
        const lastCallProps = calls[calls.length - 1][0];
        expect(lastCallProps.formatDate).toBe(slashFormat);
        expect(lastCallProps.ariaLabel).toBe("Add date");
      },
    );
  });

  describe("TimelineInput", () => {
    it(
      "renders the start and end labels via formatDate when provided",
      () => {
        const start = new Date(2024, 4, 1);
        const end = new Date(2024, 4, 31);
        render(
          <TimelineInput
            startDate={start}
            endDate={end}
            onChange={vi.fn()}
            formatDate={slashFormat}
          />,
        );
        expect(screen.getByText("05/01/2024")).toBeDefined();
        expect(screen.getByText("05/31/2024")).toBeDefined();
      },
    );

    it("falls back to the default formatter when formatDate is omitted", () => {
      const start = new Date(2024, 4, 1);
      render(
        <TimelineInput
          startDate={start}
          endDate={undefined}
          onChange={vi.fn()}
        />,
      );
      // Default uses month: "short" — so "May" appears, not "05/01/2024".
      expect(screen.queryByText("05/01/2024")).toBeNull();
      const node = document.body.textContent ?? "";
      expect(node).toContain("2024");
    });

    it(
      "keeps the underlying HTML <input type=\"date\"> value as ISO YYYY-MM-DD",
      () => {
        const start = new Date(2024, 4, 1);
        render(
          <TimelineInput
            startDate={start}
            endDate={undefined}
            onChange={vi.fn()}
            formatDate={slashFormat}
          />,
        );
        const input = screen.getByLabelText(
          "Start date",
        ) as HTMLInputElement;
        expect(input.type).toBe("date");
        expect(input.value).toBe("2024-05-01");
      },
    );
  });

  describe("parseDate roundtrip", () => {
    it("recovers the original date from a formatDate output", () => {
      const original = new Date(2024, 5, 30);
      const text = slashFormat(original);
      const parsed = slashParse(text);
      expect(parsed).toBeDefined();
      expect(parsed?.getFullYear()).toBe(2024);
      expect(parsed?.getMonth()).toBe(5);
      expect(parsed?.getDate()).toBe(30);
    });

    it("returns undefined when the input does not match the format", () => {
      expect(slashParse("not a date")).toBeUndefined();
      expect(slashParse("")).toBeUndefined();
      // Wrong separator
      expect(slashParse("06-30-2024")).toBeUndefined();
    });

    it("reproduces the formatted string after parse → format", () => {
      const text = "06/30/2024";
      const parsed = slashParse(text);
      expect(parsed).toBeDefined();
      if (parsed === undefined) {
        return;
      }
      const reformatted = slashFormat(parsed);
      expect(reformatted).toBe(text);
    });
  });

  describe("ISO format helper sanity", () => {
    it("produces ISO format identical to what HTML date inputs accept", () => {
      const date = new Date(2024, 0, 15);
      expect(isoFormat(date)).toBe("2024-01-15");
    });
  });
});
