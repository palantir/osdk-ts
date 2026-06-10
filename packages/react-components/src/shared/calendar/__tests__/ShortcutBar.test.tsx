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
import { ShortcutBar } from "../ShortcutBar.js";

afterEach(cleanup);

describe("ShortcutBar", () => {
  it("renders one button per shortcut in the given order", () => {
    render(
      <ShortcutBar
        shortcuts={[
          { label: "Past day", onSelect: vi.fn() },
          { label: "Past week", onSelect: vi.fn() },
        ]}
      />,
    );
    const labels = screen.getAllByRole("button").map((b) => b.textContent);
    expect(labels).toEqual(["Past day", "Past week"]);
  });

  it("invokes the shortcut's onSelect on click", () => {
    const onSelect = vi.fn();
    render(<ShortcutBar shortcuts={[{ label: "Past week", onSelect }]} />);
    fireEvent.click(screen.getByRole("button", { name: "Past week" }));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("renders nothing visible when no shortcuts supplied", () => {
    render(<ShortcutBar shortcuts={[]} />);
    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });
});
