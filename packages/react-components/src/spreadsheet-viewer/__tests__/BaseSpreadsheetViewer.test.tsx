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

import { Classes } from "@blueprintjs/core";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { BaseSpreadsheetViewer } from "../BaseSpreadsheetViewer.js";
import type { ParsedSpreadsheet } from "../SpreadsheetViewerApi.js";

afterEach(() => {
  cleanup();
});

const SINGLE_SHEET: ParsedSpreadsheet = {
  sheets: [
    {
      name: "Revenue",
      rows: [
        ["Region", "Total"],
        ["Europe", "42"],
      ],
    },
  ],
};

const TWO_SHEETS: ParsedSpreadsheet = {
  sheets: [
    { name: "Revenue", rows: [["Team"], ["Platform"]] },
    { name: "Costs", rows: [["Line item"], ["Hosting"]] },
  ],
};

describe("BaseSpreadsheetViewer", () => {
  it("should render cells from content", () => {
    render(<BaseSpreadsheetViewer content={SINGLE_SHEET} />);
    expect(screen.getByText("Region")).toBeTruthy();
    expect(screen.getByText("Europe")).toBeTruthy();
    expect(screen.getByText("42")).toBeTruthy();
  });

  it("should render a tab per sheet when there is more than one", () => {
    render(<BaseSpreadsheetViewer content={TWO_SHEETS} />);
    expect(
      screen
        .getByRole("tab", { name: "Revenue" })
        .classList.contains(Classes.TAB),
    ).toBe(true);
    expect(screen.getByRole("tab", { name: "Costs" })).toBeTruthy();
  });

  it("should display the selected Blueprint tab's sheet", () => {
    render(<BaseSpreadsheetViewer content={TWO_SHEETS} />);

    fireEvent.click(screen.getByRole("tab", { name: "Costs" }));

    expect(screen.getByText("Hosting")).toBeTruthy();
    expect(screen.queryByText("Platform")).toBeNull();
  });

  it("should render from the deprecated spreadsheet prop", () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- covers the pre-rename fallback
    render(<BaseSpreadsheetViewer spreadsheet={SINGLE_SHEET} />);
    expect(screen.getByText("Europe")).toBeTruthy();
  });

  it("should prefer content over the deprecated spreadsheet prop", () => {
    render(
      <BaseSpreadsheetViewer
        content={SINGLE_SHEET}
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- covers the pre-rename fallback
        spreadsheet={TWO_SHEETS}
      />,
    );
    expect(screen.getByText("Total")).toBeTruthy();
    expect(screen.queryByRole("tab", { name: "Costs" })).toBeNull();
  });

  it("should render the empty state when neither prop is set", () => {
    render(<BaseSpreadsheetViewer />);
    expect(screen.getByText("No sheets")).toBeTruthy();
  });
});
