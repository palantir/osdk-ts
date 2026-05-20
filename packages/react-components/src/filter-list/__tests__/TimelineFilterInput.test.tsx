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
import { TimelineFilterInput } from "../inputs/TimelineFilterInput.js";

afterEach(cleanup);

describe("TimelineFilterInput", () => {
  describe("dateShortcuts", () => {
    it("hides the rail when dateShortcuts is undefined", () => {
      render(
        <TimelineFilterInput
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
        />,
      );
      expect(
        screen.queryByRole("group", { name: "Relative date shortcuts" }),
      ).toBeNull();
    });

    it("renders the rail when dateShortcuts is true", () => {
      render(
        <TimelineFilterInput
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
          dateShortcuts={true}
        />,
      );
      const rail = screen.getByRole("group", {
        name: "Relative date shortcuts",
      });
      expect(rail.querySelectorAll("button").length).toBe(8);
    });

    it("emits a TIMELINE filter state with absolute startDate/endDate on click", () => {
      const onFilterStateChanged = vi.fn();
      render(
        <TimelineFilterInput
          filterState={undefined}
          onFilterStateChanged={onFilterStateChanged}
          dateShortcuts={["past-day"]}
        />,
      );
      fireEvent.click(screen.getByRole("button", { name: "Past day" }));
      expect(onFilterStateChanged).toHaveBeenCalledTimes(1);
      const state = onFilterStateChanged.mock.calls[0][0];
      expect(state.type).toBe("TIMELINE");
      expect(state.startDate).toBeInstanceOf(Date);
      expect(state.endDate).toBeInstanceOf(Date);
      const start = state.startDate as Date;
      const end = state.endDate as Date;
      expect(end.getTime() - start.getTime()).toBe(24 * 60 * 60 * 1000);
    });
  });
});
