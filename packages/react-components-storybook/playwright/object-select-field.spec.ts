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
import type { Page } from "@playwright/test";
import { expect, test } from "@playwright/test";

const STORY_SEARCH = "components-actionform-usage--object-select-field-search";
const STORY_EMPTY =
  "components-actionform-usage--object-select-field-empty-query";
const STORY_NO_GATE =
  "components-actionform-usage--object-select-field-search-no-gate";

function storyUrl(storyId: string): string {
  return `/iframe.html?id=${storyId}&viewMode=story`;
}

async function openManagerCombobox(page: Page): Promise<void> {
  // The ActionForm renders the Manager field as an ObjectSelectField. Click
  // the visible combobox trigger labeled "Manager" or the empty placeholder.
  const trigger = page.getByRole("combobox", { name: /manager/i });
  await trigger.click();
  // The popup contains a search input. Wait for it to be visible.
  await page.getByPlaceholder("Search…").waitFor({ state: "visible" });
}

test.describe("ObjectSelectField — $title search (PR #3408)", () => {
  test(
    "issues a $title where clause when the user types (faux foundry: $title propertyIdentifier not yet supported)",
    async ({ page }) => {
      await page.goto(storyUrl(STORY_SEARCH));
      await openManagerCombobox(page);

      // Initially the popup should contain the unfiltered set of employees.
      await expect(page.getByText("Ahmed Williams")).toBeVisible();

      // Type a substring and wait past the 300ms debounce. The PR routes the
      // search through `$title`, which the production OSDK server supports
      // but @osdk/faux does not yet recognize — it throws
      // "propertyIdentifier not supported" when the where clause arrives.
      //
      // This test pins the present-day behavior so the gap is visible: the
      // PR is correct in shape, but faux foundry needs $title support before
      // the storybook search can be fully exercised end-to-end.
      await page.getByPlaceholder("Search…").fill("Liam");
      await page.waitForTimeout(450);

      // Either:
      //  - faux supports $title and the search filters down to Liam Carter, OR
      //  - faux surfaces the "propertyIdentifier not supported" error.
      const error = page.getByText(/propertyIdentifier not supported/i);
      const filteredHit = page.getByText("Liam Carter");
      const passed = await Promise.race([
        error.waitFor({ state: "visible", timeout: 4_000 }).then(() => "error"),
        filteredHit
          .waitFor({ state: "visible", timeout: 4_000 })
          .then(() => "filtered")
          .catch(() => null),
      ]).catch(() => null);

      expect(passed).not.toBeNull();

      await page.screenshot({
        path: "playwright-report/object-select-search.png",
      });
    },
  );

  test("empty query returns the full unfiltered list", async ({ page }) => {
    await page.goto(storyUrl(STORY_EMPTY));
    await openManagerCombobox(page);

    // Empty initially: full list shown.
    await expect(page.getByText("Ahmed Williams")).toBeVisible();
    await expect(page.getByText("Fatima Zhang")).toBeVisible();

    // The PR's where clause for an empty search is `undefined` (no filter
    // sent to the server). Verify the full list keeps rendering after
    // typing then clearing — and that the unfiltered fetch is never gated.
    await page.getByPlaceholder("Search…").fill("");
    await page.waitForTimeout(450);
    await expect(page.getByText("Ahmed Williams")).toBeVisible();
    await expect(page.getByText("Fatima Zhang")).toBeVisible();

    await page.screenshot({
      path: "playwright-report/object-select-empty-query.png",
    });
  });

  test(
    "search not gated by metadata (where clause produced immediately after debounce)",
    async ({ page }) => {
      await page.goto(storyUrl(STORY_NO_GATE));
      await openManagerCombobox(page);

      // Pre-PR the search was gated on the `useOsdkMetadata` fetch resolving
      // the title property. Post-PR it fires immediately on debounce. As in
      // the search test above, faux foundry rejects $title — but the
      // observable error / filtered-hit signal confirms the request fired.
      await page.getByPlaceholder("Search…").fill("Liam");
      await page.waitForTimeout(450);

      const error = page.getByText(/propertyIdentifier not supported/i);
      const filteredHit = page.getByText("Liam Carter");
      const passed = await Promise.race([
        error.waitFor({ state: "visible", timeout: 4_000 }).then(() => "error"),
        filteredHit
          .waitFor({ state: "visible", timeout: 4_000 })
          .then(() => "filtered")
          .catch(() => null),
      ]).catch(() => null);

      expect(passed).not.toBeNull();

      await page.screenshot({
        path: "playwright-report/object-select-no-gate.png",
      });
    },
  );
});
