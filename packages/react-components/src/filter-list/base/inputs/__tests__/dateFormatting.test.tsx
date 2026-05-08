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
import { DateRangeInput } from "../DateRangeInput.js";
import { MultiDateInput } from "../MultiDateInput.js";
import { TimelineInput } from "../TimelineInput.js";

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

  describe("DateRangeInput", () => {
    const buckets = [
      { value: new Date(2024, 0, 1), count: 5 },
      { value: new Date(2024, 5, 30), count: 7 },
    ];

    it(
      "uses formatDate for the histogram bar tooltip when provided",
      () => {
        render(
          <DateRangeInput
            valueCountPairs={buckets}
            isLoading={false}
            minValue={undefined}
            maxValue={undefined}
            onChange={vi.fn()}
            formatDate={slashFormat}
          />,
        );
        // The histogram bar's tooltip is an SVG `<title>` child of each
        // `<rect>`. When formatDate is provided, the dates inside the
        // title text use the slash format.
        const titleEls = document.querySelectorAll("rect > title");
        const titles = Array.from(titleEls).map((t) => t.textContent ?? "");
        expect(titles.length).toBeGreaterThan(0);
        expect(
          titles.some((t) => /\d{2}\/\d{2}\/\d{4}/.test(t)),
        ).toBe(true);
      },
    );

    it(
      "keeps the HTML <input type=\"date\"> value as ISO regardless of formatDate",
      () => {
        const min = new Date(2024, 0, 15);
        render(
          <DateRangeInput
            valueCountPairs={buckets}
            isLoading={false}
            minValue={min}
            maxValue={undefined}
            onChange={vi.fn()}
            formatDate={slashFormat}
          />,
        );
        const input = screen.getByLabelText("From") as HTMLInputElement;
        expect(input.type).toBe("date");
        expect(input.value).toBe("2024-01-15");
      },
    );

    it(
      "uses the default tooltip format when formatDate is omitted",
      () => {
        render(
          <DateRangeInput
            valueCountPairs={buckets}
            isLoading={false}
            minValue={undefined}
            maxValue={undefined}
            onChange={vi.fn()}
          />,
        );
        const titleEls = document.querySelectorAll("rect > title");
        const titles = Array.from(titleEls).map((t) => t.textContent ?? "");
        expect(titles.length).toBeGreaterThan(0);
        // ISO format when formatDate is omitted.
        expect(
          titles.every((t) => /^\d{4}-\d{2}-\d{2}/.test(t)),
        ).toBe(true);
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
      const reformatted = slashFormat(parsed!);
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
