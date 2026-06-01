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

interface CapturedSelection {
  selectedPrimaryKeys: Array<string | number>;
  isSelectAll: boolean;
  wireObjectSet: unknown;
}

interface WirePrimaryKeyInWhere {
  type: "in";
  field: undefined;
  propertyIdentifier: { type: "primaryKeyProperty" };
  value: Array<string | number>;
}

interface WireFilterObjectSet {
  type: "filter";
  objectSet: { type: "base"; objectType: string };
  where: WirePrimaryKeyInWhere;
}

interface WireBaseObjectSet {
  type: "base";
  objectType: string;
}

const STORY_PARTIAL =
  "components-objecttable-pr3408--employee-partial-selection";
const STORY_SELECT_ALL = "components-objecttable-pr3408--employee-select-all";
const STORY_DESELECT_ALL =
  "components-objecttable-pr3408--employee-deselect-all";
const STORY_INTERFACE_PARTIAL =
  "components-objecttable-pr3408--interface-partial-selection";

function storyUrl(storyId: string): string {
  return `/iframe.html?id=${storyId}&viewMode=story`;
}

async function readCapture(page: Page): Promise<CapturedSelection> {
  return page.evaluate(() => {
    const w = window as Window & { __osdkLastSelection?: CapturedSelection };
    if (!w.__osdkLastSelection) {
      throw new Error("Selection capture was never updated");
    }
    return w.__osdkLastSelection;
  });
}

async function clickRowCheckbox(page: Page, rowIndex: number): Promise<void> {
  // Row checkboxes appear after the header checkbox; skip index 0 (header).
  // Use the accessible role rather than a class selector so the test is
  // robust to base-ui styling.
  const checkboxes = page.getByRole("checkbox");
  await checkboxes.nth(rowIndex + 1).click();
}

async function clickHeaderCheckbox(page: Page): Promise<void> {
  await page.getByRole("checkbox").first().click();
}

test.describe("ObjectTable — row-selection derived ObjectSet (PR #3408)", () => {
  test("Employee partial selection narrows the object set by $primaryKey", async ({ page }) => {
    await page.goto(storyUrl(STORY_PARTIAL));

    // Wait for at least one row to appear so checkboxes are addressable.
    await expect(
      page.locator("[data-testid='capture-employee-partial']"),
    ).toBeVisible();
    await expect(page.getByText("Ahmed Williams").first()).toBeVisible({
      timeout: 30_000,
    });

    await clickRowCheckbox(page, 0);
    await clickRowCheckbox(page, 1);

    const capture = await readCapture(page);

    expect(capture.isSelectAll).toBe(false);
    expect(capture.selectedPrimaryKeys.length).toBe(2);

    const wire = capture.wireObjectSet as WireFilterObjectSet;
    expect(wire.type).toBe("filter");
    expect(wire.objectSet.type).toBe("base");
    expect(wire.objectSet.objectType).toBe("Employee");
    // The PR's `$primaryKey: { $in: [...] }` compiles to the wire shape with
    // `propertyIdentifier.type === "primaryKeyProperty"`. Pre-PR the object
    // table built the where clause keyed by the resolved primary-key property
    // name (e.g. `employeeNumber`), producing `field: "employeeNumber"` and
    // no propertyIdentifier. Asserting on the new shape pins the new path.
    expect(wire.where.type).toBe("in");
    expect(wire.where.propertyIdentifier).toEqual({
      type: "primaryKeyProperty",
    });
    expect(Array.isArray(wire.where.value)).toBe(true);
    expect(wire.where.value.length).toBe(2);

    await page.screenshot({
      path: "playwright-report/employee-partial-selection.png",
    });
  });

  test("Employee select-all returns the full object set", async ({ page }) => {
    await page.goto(storyUrl(STORY_SELECT_ALL));
    await expect(
      page.locator("[data-testid='capture-employee-select-all']"),
    ).toBeVisible();
    await expect(page.getByText("Ahmed Williams").first()).toBeVisible({
      timeout: 30_000,
    });

    await clickHeaderCheckbox(page);
    const capture = await readCapture(page);

    expect(capture.isSelectAll).toBe(true);
    const wire = capture.wireObjectSet as WireBaseObjectSet;
    // Full set: not wrapped in a filter.
    expect(wire.type).toBe("base");
    expect(wire.objectType).toBe("Employee");

    await page.screenshot({
      path: "playwright-report/employee-select-all.png",
    });
  });

  test("Employee deselect-all yields an empty $primaryKey $in narrowing", async ({ page }) => {
    await page.goto(storyUrl(STORY_DESELECT_ALL));
    await expect(
      page.locator("[data-testid='capture-employee-deselect-all']"),
    ).toBeVisible();
    await expect(page.getByText("Ahmed Williams").first()).toBeVisible({
      timeout: 30_000,
    });

    await clickRowCheckbox(page, 0);
    // Now deselect.
    await clickRowCheckbox(page, 0);

    const capture = await readCapture(page);

    expect(capture.isSelectAll).toBe(false);
    expect(capture.selectedPrimaryKeys).toEqual([]);

    const wire = capture.wireObjectSet as WireFilterObjectSet;
    expect(wire.type).toBe("filter");
    expect(wire.where.type).toBe("in");
    expect(wire.where.propertyIdentifier).toEqual({
      type: "primaryKeyProperty",
    });
    expect(wire.where.value).toEqual([]);

    await page.screenshot({
      path: "playwright-report/employee-deselect-all.png",
    });
  });

  test("Interface partial selection derives an object set (previously undefined)", async ({ page }) => {
    await page.goto(storyUrl(STORY_INTERFACE_PARTIAL));
    await expect(
      page.locator("[data-testid='capture-interface-partial']"),
    ).toBeVisible();
    // Interface tables surface the implementing-object data through the
    // interface property mapping — employees' fullName values flow into
    // the `name` column.
    await expect(page.getByText("Ahmed Williams").first()).toBeVisible({
      timeout: 30_000,
    });

    await clickRowCheckbox(page, 0);

    const capture = await readCapture(page);

    expect(capture.isSelectAll).toBe(false);
    expect(capture.selectedPrimaryKeys.length).toBe(1);
    expect(capture.wireObjectSet).not.toBeNull();

    const wire = capture.wireObjectSet as WireFilterObjectSet;
    expect(wire.type).toBe("filter");
    expect(wire.where.type).toBe("in");
    // Crucial assertion: even for an interface-typed table, the where clause
    // uses the generic `primaryKeyProperty` identifier. Pre-PR this branch
    // produced `objectSet: undefined` because there was no resolvable PK
    // property name to key on.
    expect(wire.where.propertyIdentifier).toEqual({
      type: "primaryKeyProperty",
    });
    expect(Array.isArray(wire.where.value)).toBe(true);
    expect(wire.where.value.length).toBe(1);

    await page.screenshot({
      path: "playwright-report/interface-partial-selection.png",
    });
  });
});
