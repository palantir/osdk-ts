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

import { describe, expect, it, vitest } from "vitest";

import { shouldShowEditableCell } from "../shouldShowEditableCell.js";

interface Row {
  name: string;
}

const row: Row = { name: "John" };
const onCellEdit = vitest.fn();

describe(shouldShowEditableCell, () => {
  it("returns true when editable is true and the table is in edit mode", () => {
    expect(shouldShowEditableCell(true, row, onCellEdit, true)).toBe(true);
  });

  it("returns false when editable is false", () => {
    expect(shouldShowEditableCell(false, row, onCellEdit, true)).toBe(false);
  });

  it("returns false when editable is undefined", () => {
    expect(shouldShowEditableCell(undefined, row, onCellEdit, true)).toBe(
      false,
    );
  });

  it("returns false when the table is not in edit mode", () => {
    expect(shouldShowEditableCell(true, row, onCellEdit, false)).toBe(false);
  });

  it("returns false when there is no onCellEdit handler", () => {
    expect(shouldShowEditableCell(true, row, undefined, true)).toBe(false);
  });

  describe("when editable is a predicate", () => {
    const isJane = (object: Row) => object.name === "Jane";

    it("returns true for a row the predicate accepts", () => {
      expect(
        shouldShowEditableCell(isJane, { name: "Jane" }, onCellEdit, true),
      ).toBe(true);
    });

    it("returns false for a row the predicate rejects", () => {
      expect(
        shouldShowEditableCell(isJane, { name: "John" }, onCellEdit, true),
      ).toBe(false);
    });

    it("passes the row to the predicate", () => {
      const predicate = vitest.fn(() => true);
      shouldShowEditableCell(predicate, row, onCellEdit, true);
      expect(predicate).toHaveBeenCalledWith(row);
    });
  });
});
