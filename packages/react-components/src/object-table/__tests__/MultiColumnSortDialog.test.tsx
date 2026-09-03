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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { MultiColumnSortDialog } from "../MultiColumnSortDialog.js";

function getSortToggle(columnName: string): HTMLElement {
  return screen.getByRole("button", {
    name: `Toggle sort direction for ${columnName}`,
  });
}

describe(MultiColumnSortDialog, () => {
  afterEach(() => {
    cleanup();
  });

  describe("sort direction icon", () => {
    it.each([
      ["string", false, "sort-alphabetical"],
      ["string", true, "sort-alphabetical-desc"],
      ["marking", false, "sort-alphabetical"],
      ["double", false, "sort-numerical"],
      ["integer", true, "sort-numerical-desc"],
      ["timestamp", false, "sort-asc"],
      ["datetime", true, "sort-desc"],
      ["boolean", false, "sort-asc"],
      [undefined, false, "sort-asc"],
    ] as const)(
      "renders a %s column sorted desc=%s with the %s icon",
      (dataType, desc, expectedIcon) => {
        render(
          <MultiColumnSortDialog
            isOpen={true}
            onClose={vi.fn()}
            onApply={vi.fn()}
            currentSorting={[{ id: "a", desc }]}
            columnOptions={[
              { id: "a", name: "Col A", canSort: true, dataType },
            ]}
          />,
        );

        expect(
          getSortToggle("Col A").querySelector(
            `svg[data-icon="${expectedIcon}"]`,
          ),
        ).toBeTruthy();
      },
    );

    it("keeps the type's icon family when toggling direction", () => {
      render(
        <MultiColumnSortDialog
          isOpen={true}
          onClose={vi.fn()}
          onApply={vi.fn()}
          currentSorting={[{ id: "a", desc: false }]}
          columnOptions={[
            { id: "a", name: "Col A", canSort: true, dataType: "integer" },
          ]}
        />,
      );

      expect(
        getSortToggle("Col A").querySelector('svg[data-icon="sort-numerical"]'),
      ).toBeTruthy();

      fireEvent.click(getSortToggle("Col A"));

      expect(
        getSortToggle("Col A").querySelector(
          'svg[data-icon="sort-numerical-desc"]',
        ),
      ).toBeTruthy();
    });

    it("gives each column the icon for its own type", () => {
      render(
        <MultiColumnSortDialog
          isOpen={true}
          onClose={vi.fn()}
          onApply={vi.fn()}
          currentSorting={[
            { id: "name", desc: false },
            { id: "age", desc: true },
            { id: "hiredAt", desc: false },
          ]}
          columnOptions={[
            { id: "name", name: "Name", canSort: true, dataType: "string" },
            { id: "age", name: "Age", canSort: true, dataType: "integer" },
            {
              id: "hiredAt",
              name: "Hired At",
              canSort: true,
              dataType: "timestamp",
            },
          ]}
        />,
      );

      expect(
        getSortToggle("Name").querySelector(
          'svg[data-icon="sort-alphabetical"]',
        ),
      ).toBeTruthy();
      expect(
        getSortToggle("Age").querySelector(
          'svg[data-icon="sort-numerical-desc"]',
        ),
      ).toBeTruthy();
      expect(
        getSortToggle("Hired At").querySelector('svg[data-icon="sort-asc"]'),
      ).toBeTruthy();
    });
  });
});
