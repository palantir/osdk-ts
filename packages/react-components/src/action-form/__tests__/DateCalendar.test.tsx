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
import { afterEach, describe, expect, it, vi } from "vitest";
import DateCalendar from "../fields/DateCalendar.js";

afterEach(cleanup);

describe("DateCalendar", () => {
  it("renders the Today action without Clear when onClear is omitted", () => {
    render(
      <DateCalendar
        dateSelected={undefined}
        onSelect={vi.fn()}
      />,
    );

    expect(screen.getByRole("button", { name: "Today" })).toBeDefined();
    expect(screen.queryByRole("button", { name: "Clear" })).toBeNull();
  });

  it("renders and invokes the Clear action when onClear is provided", () => {
    const onClear = vi.fn();
    render(
      <DateCalendar
        dateSelected={new Date(2024, 0, 15)}
        onSelect={vi.fn()}
        onClear={onClear}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Clear" }));

    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
