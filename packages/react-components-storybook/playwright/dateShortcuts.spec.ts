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

import type { Locator, Page } from "@playwright/test";
import { expect, test } from "@playwright/test";

// cspell:disable-next-line
const STORY_ID = "components-filterlist--with-date-shortcuts-verification";
const STORY_URL = `/iframe.html?id=${STORY_ID}&viewMode=story`;

const CLOCK_ISO = "2024-06-15T12:00:00.000Z";

interface ExpectedRange {
  minISO: string;
  maxISO: string;
}

const RANGE_EXPECTED: ReadonlyArray<{
  key: string;
  label: string;
  expected: ExpectedRange;
}> = [
  {
    key: "past-hour",
    label: "Past hour",
    expected: {
      minISO: "2024-06-15T11:00:00.000Z",
      maxISO: "2024-06-15T12:00:00.000Z",
    },
  },
  {
    key: "past-day",
    label: "Past day",
    expected: {
      minISO: "2024-06-14T12:00:00.000Z",
      maxISO: "2024-06-15T12:00:00.000Z",
    },
  },
  {
    key: "past-week",
    label: "Past week",
    expected: {
      minISO: "2024-06-08T12:00:00.000Z",
      maxISO: "2024-06-15T12:00:00.000Z",
    },
  },
  {
    key: "past-month",
    label: "Past month",
    expected: {
      minISO: "2024-05-15T12:00:00.000Z",
      maxISO: "2024-06-15T12:00:00.000Z",
    },
  },
  {
    key: "past-3-months",
    label: "Past 3 months",
    expected: {
      minISO: "2024-03-15T12:00:00.000Z",
      maxISO: "2024-06-15T12:00:00.000Z",
    },
  },
  {
    key: "past-6-months",
    label: "Past 6 months",
    expected: {
      minISO: "2023-12-15T12:00:00.000Z",
      maxISO: "2024-06-15T12:00:00.000Z",
    },
  },
  {
    key: "past-year",
    label: "Past year",
    expected: {
      minISO: "2023-06-15T12:00:00.000Z",
      maxISO: "2024-06-15T12:00:00.000Z",
    },
  },
  {
    key: "past-2-years",
    label: "Past 2 years",
    expected: {
      minISO: "2022-06-15T12:00:00.000Z",
      maxISO: "2024-06-15T12:00:00.000Z",
    },
  },
];

// SingleDateInput strips wall-clock time using local Date components.
// playwright.config.ts pins the browser timezone to UTC so "local
// midnight" lines up with the ISO `YYYY-MM-DDT00:00:00.000Z` we expect
// here, and date-fns subMonths / subYears arithmetic doesn't drift by an
// hour across DST boundaries.
const SINGLE_EXPECTED: ReadonlyArray<{
  key: string;
  label: string;
  // Year, month index (0-based), day of month, all in local time.
  local: { y: number; m: number; d: number };
}> = [
  { key: "past-hour", label: "Past hour", local: { y: 2024, m: 5, d: 15 } },
  { key: "past-day", label: "Past day", local: { y: 2024, m: 5, d: 14 } },
  { key: "past-week", label: "Past week", local: { y: 2024, m: 5, d: 8 } },
  { key: "past-month", label: "Past month", local: { y: 2024, m: 4, d: 15 } },
  {
    key: "past-3-months",
    label: "Past 3 months",
    local: { y: 2024, m: 2, d: 15 },
  },
  {
    key: "past-6-months",
    label: "Past 6 months",
    local: { y: 2023, m: 11, d: 15 },
  },
  { key: "past-year", label: "Past year", local: { y: 2023, m: 5, d: 15 } },
  {
    key: "past-2-years",
    label: "Past 2 years",
    local: { y: 2022, m: 5, d: 15 },
  },
];

async function installClockAt(page: Page, isoTime: string): Promise<void> {
  // setFixedTime pins `Date.now()` / `new Date()` to a specific instant
  // without freezing setTimeout / requestAnimationFrame, which is critical
  // because pausing those breaks storybook + MSW initial bootstrap.
  await page.clock.setFixedTime(new Date(isoTime));
}

async function fastForwardClock(
  page: Page,
  isoTime: string,
): Promise<void> {
  // For "now + 5 minutes" advancement we just move the fixed time forward
  // by re-pinning. The shortcut handler reads `new Date()` at click time,
  // so this is sufficient.
  await page.clock.setFixedTime(new Date(isoTime));
}

async function gotoStory(page: Page): Promise<void> {
  await page.goto(STORY_URL);
  // Wait for the storybook story root to render the captured-state panels.
  // Use `attached` rather than the default `visible` so the empty initial
  // state (before any shortcut is clicked) still satisfies the wait.
  await page.getByTestId("captured-filter-state-range").waitFor({
    state: "attached",
    timeout: 60_000,
  });
  await page.getByTestId("captured-filter-state-single").waitFor({
    state: "attached",
    timeout: 60_000,
  });
}

function fromInput(page: Page): Locator {
  return page.getByRole("combobox", { name: "From" });
}

function toInput(page: Page): Locator {
  return page.getByRole("combobox", { name: "To" });
}

function singleInput(page: Page): Locator {
  return page.getByRole("combobox", { name: "Select date" });
}

function shortcutGroup(page: Page): Locator {
  return page.getByRole("group", { name: "Relative date shortcuts" });
}

async function clickShortcut(page: Page, label: string): Promise<void> {
  await shortcutGroup(page).getByRole("button", { name: label, exact: true })
    .click();
}

async function openFromPicker(page: Page): Promise<void> {
  const input = fromInput(page);
  await input.click();
  await expect(input).toHaveAttribute("aria-expanded", "true");
}

async function openSinglePicker(page: Page): Promise<void> {
  const input = singleInput(page);
  await input.click();
  await expect(input).toHaveAttribute("aria-expanded", "true");
}

interface CapturedRangeState {
  type: string;
  minValue?: string;
  maxValue?: string;
  includeNull?: boolean;
}

interface CapturedSingleState {
  type: string;
  selectedValues: string[];
  isExcluding?: boolean;
}

async function readCapturedRange(page: Page): Promise<CapturedRangeState> {
  const text = await page.getByTestId("captured-filter-state-range")
    .textContent();
  if (text == null || text.length === 0) {
    throw new Error("captured-filter-state-range is empty");
  }
  return JSON.parse(text) as CapturedRangeState;
}

async function readCapturedSingle(page: Page): Promise<CapturedSingleState> {
  const text = await page.getByTestId("captured-filter-state-single")
    .textContent();
  if (text == null || text.length === 0) {
    throw new Error("captured-filter-state-single is empty");
  }
  return JSON.parse(text) as CapturedSingleState;
}

async function localMidnightISO(
  page: Page,
  y: number,
  m: number,
  d: number,
): Promise<string> {
  return await page.evaluate(
    ({ y, m, d }) => new Date(y, m, d).toISOString(),
    { y, m, d },
  );
}

test.describe("filter-list date shortcuts", () => {
  test.beforeEach(async ({ page }) => {
    await installClockAt(page, CLOCK_ISO);
    await gotoStory(page);
  });

  for (const { key, label, expected } of RANGE_EXPECTED) {
    test(`DATE_RANGE shortcut: ${key}`, async ({ page }, testInfo) => {
      await openFromPicker(page);
      await clickShortcut(page, label);
      await expect(fromInput(page)).toHaveAttribute(
        "aria-expanded",
        "false",
      );
      const captured = await readCapturedRange(page);
      expect(captured.type).toBe("DATE_RANGE");
      expect(captured.minValue).toBe(expected.minISO);
      expect(captured.maxValue).toBe(expected.maxISO);
      await testInfo.attach(`date-range-${key}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });
  }

  for (const { key, label, local } of SINGLE_EXPECTED) {
    test(`SINGLE_DATE shortcut: ${key}`, async ({ page }, testInfo) => {
      await openSinglePicker(page);
      await clickShortcut(page, label);
      await expect(singleInput(page)).toHaveAttribute(
        "aria-expanded",
        "false",
      );
      const captured = await readCapturedSingle(page);
      const expectedISO = await localMidnightISO(
        page,
        local.y,
        local.m,
        local.d,
      );
      expect(captured.type).toBe("SELECT");
      expect(captured.selectedValues).toHaveLength(1);
      expect(captured.selectedValues[0]).toBe(expectedISO);
      await testInfo.attach(`single-date-${key}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });
  }

  test("edge: same shortcut clicked twice advances with the clock", async ({ page }) => {
    await openFromPicker(page);
    await clickShortcut(page, "Past hour");
    const first = await readCapturedRange(page);
    expect(first.minValue).toBe("2024-06-15T11:00:00.000Z");
    expect(first.maxValue).toBe("2024-06-15T12:00:00.000Z");

    await fastForwardClock(page, "2024-06-15T12:05:00.000Z");
    await openFromPicker(page);
    await clickShortcut(page, "Past hour");
    const second = await readCapturedRange(page);
    // Both bounds shift forward by exactly 5 minutes.
    expect(second.minValue).toBe("2024-06-15T11:05:00.000Z");
    expect(second.maxValue).toBe("2024-06-15T12:05:00.000Z");
  });

  test("edge: switching shortcuts overwrites previous range", async ({ page }) => {
    await openFromPicker(page);
    await clickShortcut(page, "Past hour");
    await openFromPicker(page);
    await clickShortcut(page, "Past week");
    const captured = await readCapturedRange(page);
    expect(captured.minValue).toBe("2024-06-08T12:00:00.000Z");
    expect(captured.maxValue).toBe("2024-06-15T12:00:00.000Z");
  });

  test("edge: manual edit after shortcut replaces the value", async ({ page }) => {
    await openFromPicker(page);
    await clickShortcut(page, "Past week");
    const afterShortcut = await readCapturedRange(page);
    expect(afterShortcut.minValue).toBe("2024-06-08T12:00:00.000Z");

    // The DatePicker renders an ISO YYYY-MM-DD combobox. Focus the input,
    // select-all, type a new value, and commit with Enter. There is no
    // "selected shortcut" UI affordance to deselect — observed by reading
    // ShortcutBar.tsx and DatePicker.tsx, neither of which tracks "active
    // shortcut" state. The picker just emits a fresh range each click.
    const input = fromInput(page);
    await input.click();
    await input.press("ControlOrMeta+a");
    await input.pressSequentially("2024-01-02");
    await input.press("Enter");
    const captured = await readCapturedRange(page);
    expect(captured.minValue).toBe(
      await page.evaluate(() => new Date(2024, 0, 2).toISOString()),
    );
    // The To bound (max) is preserved as the previously-anchored "now".
    expect(captured.maxValue).toBe("2024-06-15T12:00:00.000Z");
  });

  test("edge: past-month from Mar 31 lands on Feb 29 (leap year)", async ({ page }) => {
    // Re-install the clock for this case and reload so the story sees it.
    await installClockAt(page, "2024-03-31T12:00:00.000Z");
    await gotoStory(page);
    await openFromPicker(page);
    await clickShortcut(page, "Past month");
    const captured = await readCapturedRange(page);
    expect(captured.minValue).toBe("2024-02-29T12:00:00.000Z");
    expect(captured.maxValue).toBe("2024-03-31T12:00:00.000Z");
  });

  test("edge: past-year from Feb 29 lands on Feb 28", async ({ page }) => {
    await installClockAt(page, "2024-02-29T12:00:00.000Z");
    await gotoStory(page);
    await openFromPicker(page);
    await clickShortcut(page, "Past year");
    const captured = await readCapturedRange(page);
    expect(captured.minValue).toBe("2023-02-28T12:00:00.000Z");
    expect(captured.maxValue).toBe("2024-02-29T12:00:00.000Z");
  });

  test("expose the To input is also wired with shortcuts", async ({ page }) => {
    // Sanity: clicking a shortcut from the To popover still resolves the
    // full range (DateRangeHistogramInput passes the same leftRail to both
    // bounds). Not part of the required matrix but cheap to lock in.
    await toInput(page).click();
    await clickShortcut(page, "Past day");
    const captured = await readCapturedRange(page);
    expect(captured.minValue).toBe("2024-06-14T12:00:00.000Z");
    expect(captured.maxValue).toBe("2024-06-15T12:00:00.000Z");
  });
});
