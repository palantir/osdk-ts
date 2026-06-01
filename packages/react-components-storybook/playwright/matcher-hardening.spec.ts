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

// cspell:ignore actionform objecttable
import { expect, test } from "@playwright/test";

const STORY =
  "components-objecttable-pr3408--matcher-hardening-null-title-starts-with";

function storyUrl(storyId: string): string {
  return `/iframe.html?id=${storyId}&viewMode=story`;
}

test.describe("Observable matcher — $startsWith null-safety (PR #3408)", () => {
  test(
    "no TypeError when the matcher evaluates $title.$startsWith against a null-title row",
    async ({ page }) => {
      const pageErrors: string[] = [];
      page.on("pageerror", (err) => pageErrors.push(err.message));

      const consoleErrors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") {
          consoleErrors.push(msg.text());
        }
      });

      await page.goto(storyUrl(STORY));

      await expect(
        page.locator("[data-testid='matcher-hardening-root']"),
      ).toBeVisible();
      await expect(
        page.locator("[data-testid='matcher-filtered-label']"),
      ).toBeVisible();
      await expect(
        page.locator("[data-testid='matcher-unfiltered-label']"),
      ).toBeVisible();

      // The unfiltered table loads every employee — including the null-title
      // row — into the observable cache. As each object enters the cache the
      // filtered subscription's matcher checks `$title.$startsWith: "Liam"`
      // against it. Pre-PR the null-title row crashed the matcher with a
      // TypeError; post-PR it returns false safely.
      //
      // (Faux foundry does not yet recognize `$title` propertyIdentifiers
      // server-side, so the filtered list itself surfaces a server error.
      // That does NOT short-circuit the observable matcher, which runs
      // independently when objects flow through the cache.)
      await expect(page.getByText("Ahmed Williams").first()).toBeVisible({
        timeout: 30_000,
      });

      // Give the cache time to settle so the observable matcher has a chance
      // to evaluate every cached object.
      await page.waitForTimeout(1500);

      // Pre-PR the matcher would throw:
      //   TypeError: Cannot read properties of null (reading 'startsWith')
      const startsWithErrors = [
        ...pageErrors,
        ...consoleErrors,
      ].filter((m) =>
        /startsWith/i.test(m)
        && /Cannot read|null|undefined|properties/i.test(m)
      );
      expect(startsWithErrors).toEqual([]);

      await page.screenshot({
        path: "playwright-report/matcher-hardening.png",
      });
    },
  );
});
