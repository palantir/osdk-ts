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

// cspell:ignore filterlist domcontentloaded

import { expect, type Page, test } from "@playwright/test";

const EMPTY_INITIAL_STORY_ID =
  "components-filterlist--with-reset-button-empty-initial";
const NON_EMPTY_INITIAL_STORY_ID =
  "components-filterlist--with-reset-button-non-empty-initial";

const SCREENSHOT_DIR = "e2e/__screenshots__";

const RESET_BUTTON_NAME = /reset filters/i;
const DEPT_ROW_NAME = "Engineering";
const MARKETING_ROW_NAME = "Marketing";

async function gotoStory(page: Page, storyId: string) {
  await page.goto(`/iframe.html?id=${storyId}&viewMode=story`);
  await page.waitForLoadState("domcontentloaded");
  await page.getByTestId("filter-state-dump").waitFor();
}

async function readDump(page: Page, testid: string): Promise<unknown> {
  const text = await page.getByTestId(testid).innerText();
  return JSON.parse(text);
}

async function clickListogramRow(page: Page, name: string) {
  // The listogram renders each value as a base-ui <Button> containing the
  // label text. role=button with name=value reliably matches and toggling
  // updates aria-pressed.
  await page.getByRole("button", { name }).first().click();
}

test.describe("FilterList reset gate", () => {
  test("checkpoint 1: empty-initial mounts with reset disabled", async ({ page }) => {
    await gotoStory(page, EMPTY_INITIAL_STORY_ID);
    const resetButton = page.getByRole("button", { name: RESET_BUTTON_NAME });
    // Checkpoint 1 assertion.
    await expect(resetButton).toBeDisabled();
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/01-empty-initial-mount.png`,
      fullPage: true,
    });
  });

  test("checkpoint 2 + 3: empty-initial after change enables reset, then reset restores baseline", async ({ page }) => {
    await gotoStory(page, EMPTY_INITIAL_STORY_ID);
    const resetButton = page.getByRole("button", { name: RESET_BUTTON_NAME });
    const initialDump = await readDump(page, "filter-state-dump");
    const baselineDump = await readDump(page, "filter-state-initial");
    expect(initialDump).toEqual(baselineDump);

    // Wait for listogram data to render so the row exists.
    await page
      .getByRole("button", { name: DEPT_ROW_NAME, exact: false })
      .first()
      .waitFor();

    await clickListogramRow(page, DEPT_ROW_NAME);

    // Checkpoint 2 assertion: reset becomes enabled after change.
    await expect(resetButton).toBeEnabled();
    const changedDump = await readDump(page, "filter-state-dump");
    expect(changedDump).not.toEqual(baselineDump);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/02-empty-initial-changed.png`,
      fullPage: true,
    });

    await resetButton.click();

    // Checkpoint 3 assertion: reset clicks back to baseline + disabled.
    await expect(resetButton).toBeDisabled();
    const afterResetDump = await readDump(page, "filter-state-dump");
    expect(afterResetDump).toEqual(baselineDump);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/03-empty-initial-after-reset.png`,
      fullPage: true,
    });
  });

  test("checkpoint 4: non-empty-initial mounts with reset disabled (regression case)", async ({ page }) => {
    await gotoStory(page, NON_EMPTY_INITIAL_STORY_ID);
    const resetButton = page.getByRole("button", { name: RESET_BUTTON_NAME });
    // Checkpoint 4 assertion: this is the regression — old behavior would
    // enable the button because activeFilterCount > 0. New behavior gates
    // on divergence from the captured snapshot, so it stays disabled.
    await expect(resetButton).toBeDisabled();

    const dump = await readDump(page, "filter-state-dump");
    const baseline = await readDump(page, "filter-state-initial");
    expect(dump).toEqual(baseline);
    // Sanity: baseline is not empty.
    expect(Object.keys(baseline as object).length).toBeGreaterThan(0);

    await page.screenshot({
      path: `${SCREENSHOT_DIR}/04-non-empty-initial-mount.png`,
      fullPage: true,
    });
  });

  test("checkpoint 5 + 6: non-empty-initial change enables reset, reset restores INITIAL snapshot", async ({ page }) => {
    await gotoStory(page, NON_EMPTY_INITIAL_STORY_ID);
    const resetButton = page.getByRole("button", { name: RESET_BUTTON_NAME });
    const baselineDump = await readDump(page, "filter-state-initial");
    const mountDump = await readDump(page, "filter-state-dump");
    expect(mountDump).toEqual(baselineDump);

    // Wait for listogram data to render so the Marketing row exists.
    await page
      .getByRole("button", { name: MARKETING_ROW_NAME, exact: false })
      .first()
      .waitFor();

    // Add "Marketing" to the department selection. This diverges from the
    // initial snapshot which only had ["Engineering"].
    await clickListogramRow(page, MARKETING_ROW_NAME);

    // Checkpoint 5 assertion.
    await expect(resetButton).toBeEnabled();
    const changedDump = await readDump(page, "filter-state-dump");
    expect(changedDump).not.toEqual(baselineDump);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/05-non-empty-initial-changed.png`,
      fullPage: true,
    });

    await resetButton.click();

    // Checkpoint 6 assertion: reset restores the INITIAL snapshot (not empty).
    await expect(resetButton).toBeDisabled();
    const afterResetDump = await readDump(page, "filter-state-dump");
    expect(afterResetDump).toEqual(baselineDump);
    // The critical regression guard: state is non-empty.
    expect(Object.keys(afterResetDump as object).length).toBeGreaterThan(0);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/06-non-empty-initial-after-reset.png`,
      fullPage: true,
    });
  });
});
