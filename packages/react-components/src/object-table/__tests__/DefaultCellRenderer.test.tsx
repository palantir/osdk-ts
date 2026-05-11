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

import type { CellContext } from "@tanstack/react-table";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { renderDefaultCell } from "../DefaultCellRenderer.js";

function createCellContext(
  value: unknown,
): CellContext<unknown, unknown> {
  return {
    getValue: () => value,
    table: { options: { meta: undefined } },
    column: { columnDef: { meta: undefined } },
    row: { original: {}, id: "row-0" },
  } as unknown as CellContext<unknown, unknown>;
}

describe("renderDefaultCell", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render boolean true as 'true'", () => {
    const result = renderDefaultCell(createCellContext(true));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("true");
  });

  it("should render boolean false as 'false'", () => {
    const result = renderDefaultCell(createCellContext(false));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("false");
  });

  it("should render string values", () => {
    const result = renderDefaultCell(createCellContext("hello"));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("hello");
  });

  it("should render number values", () => {
    const result = renderDefaultCell(createCellContext(42));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("42");
  });

  it("should render null as empty", () => {
    const result = renderDefaultCell(createCellContext(null));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("");
  });

  it("should render undefined as empty", () => {
    const result = renderDefaultCell(createCellContext(undefined));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("");
  });
});
