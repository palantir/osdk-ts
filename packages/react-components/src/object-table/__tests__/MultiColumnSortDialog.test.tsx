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

import { MultiColumnSortDialog } from "../MultiColumnSortDialog.js";

const COLUMN_OPTIONS = [{ id: "a", name: "Col A", canSort: true }];

describe(MultiColumnSortDialog, () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the default strings", () => {
    render(
      <MultiColumnSortDialog
        isOpen={true}
        onClose={vi.fn()}
        onApply={vi.fn()}
        currentSorting={[]}
        columnOptions={COLUMN_OPTIONS}
      />
    );

    expect(screen.getByText("Sort on Multiple Columns")).toBeTruthy();
    expect(screen.getByText("Add Column to Sort")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Apply" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeTruthy();
  });

  it("applies the labels prop and falls back to defaults for unset keys", () => {
    render(
      <MultiColumnSortDialog
        isOpen={true}
        onClose={vi.fn()}
        onApply={vi.fn()}
        currentSorting={[]}
        columnOptions={COLUMN_OPTIONS}
        labels={{
          sortDialogTitle: "Sort by many columns",
          sortDialogAddColumnToSort: "Add another column",
        }}
      />
    );

    expect(screen.getByText("Sort by many columns")).toBeTruthy();
    expect(screen.getByText("Add another column")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Apply" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeTruthy();
  });
});
