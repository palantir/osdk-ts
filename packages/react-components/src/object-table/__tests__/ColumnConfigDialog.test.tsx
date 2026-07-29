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

import { ColumnConfigDialog } from "../ColumnConfigDialog.js";

describe(ColumnConfigDialog, () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the default strings", () => {
    render(
      <ColumnConfigDialog
        isOpen={true}
        onClose={vi.fn()}
        columnOptions={[{ id: "a", name: "Col A" }]}
        currentVisibility={{ a: true }}
        onApply={vi.fn()}
      />
    );

    expect(screen.getByText("Configure Table Columns")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Apply" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeTruthy();
    expect(screen.getByText("Add or Remove Columns")).toBeTruthy();
  });

  it("applies the labels prop and falls back to defaults for unset keys", () => {
    render(
      <ColumnConfigDialog
        isOpen={true}
        onClose={vi.fn()}
        columnOptions={[{ id: "a", name: "Col A" }]}
        currentVisibility={{ a: true }}
        onApply={vi.fn()}
        labels={{
          columnConfigTitle: "Set up the columns",
          columnConfigApply: "Save",
        }}
      />
    );

    expect(screen.getByText("Set up the columns")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Save" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeTruthy();
  });
});
