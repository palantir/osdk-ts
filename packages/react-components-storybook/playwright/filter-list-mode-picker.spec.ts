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

// cspell:ignore filterlist
import type { Locator } from "@playwright/test";
import { expect, test } from "@playwright/test";

const STORY_URL =
  "/iframe.html?id=beta-filterlist--mode-picker-states&viewMode=story";

interface TriggerStyles {
  fontWeight: string;
  backgroundColor: string;
  color: string;
  boxShadow: string;
}

async function readTriggerStyles(locator: Locator): Promise<TriggerStyles> {
  return await locator.evaluate((el: Element): TriggerStyles => {
    const style = window.getComputedStyle(el);
    return {
      fontWeight: style.fontWeight,
      backgroundColor: style.backgroundColor,
      color: style.color,
      boxShadow: style.boxShadow,
    };
  });
}

test.describe("FilterList mode picker selected state", () => {
  test("renders selected and unselected triggers with different styles", async ({ page }) => {
    await page.goto(STORY_URL);

    const keepingPanel = page.getByTestId("mode-picker-keeping");
    const excludingPanel = page.getByTestId("mode-picker-excluding");

    const keepingTrigger = keepingPanel.getByRole("button", {
      name: "Keeping",
    });
    const excludingTrigger = excludingPanel.getByRole("button", {
      name: "Excluding",
    });

    await expect(keepingTrigger).toBeVisible();
    await expect(excludingTrigger).toBeVisible();

    await expect(keepingTrigger).not.toHaveAttribute("data-excluding");
    await expect(excludingTrigger).toHaveAttribute("data-excluding", "true");

    const keepingStyles = await readTriggerStyles(keepingTrigger);
    const excludingStyles = await readTriggerStyles(excludingTrigger);

    expect(excludingStyles.fontWeight).not.toBe(keepingStyles.fontWeight);
    expect(excludingStyles.backgroundColor).not.toBe(
      keepingStyles.backgroundColor,
    );
    expect(excludingStyles.boxShadow).not.toBe(keepingStyles.boxShadow);

    const keepingWeight = Number(keepingStyles.fontWeight);
    const excludingWeight = Number(excludingStyles.fontWeight);
    expect(Number.isNaN(keepingWeight)).toBe(false);
    expect(Number.isNaN(excludingWeight)).toBe(false);
    expect(excludingWeight).toBeGreaterThan(keepingWeight);

    await keepingTrigger.screenshot({
      path:
        "playwright/__screenshots__/filter-list-mode-picker.spec.ts/keeping-trigger.png",
    });
    await excludingTrigger.screenshot({
      path:
        "playwright/__screenshots__/filter-list-mode-picker.spec.ts/excluding-trigger.png",
    });
    await page.locator("body").screenshot({
      path:
        "playwright/__screenshots__/filter-list-mode-picker.spec.ts/mode-picker-side-by-side.png",
    });
  });
});
