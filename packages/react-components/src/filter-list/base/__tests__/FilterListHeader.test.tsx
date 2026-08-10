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
import { afterEach, describe, expect, it } from "vitest";

import { FilterListHeader } from "../FilterListHeader.js";

afterEach(cleanup);

function getResetButton(): HTMLButtonElement {
  return screen.getByRole("button", {
    name: /Reset filters/u,
  }) as HTMLButtonElement;
}

describe("FilterListHeader", () => {
  describe("reset button enabled state", () => {
    it("is enabled when canReset is true, even with no active filters", () => {
      render(
        <FilterListHeader
          showResetButton={true}
          canReset={true}
          activeFilterCount={0}
        />,
      );
      expect(getResetButton().disabled).toBe(false);
    });

    it("is disabled when canReset is false, even with active filters", () => {
      render(
        <FilterListHeader
          showResetButton={true}
          canReset={false}
          activeFilterCount={3}
        />,
      );
      expect(getResetButton().disabled).toBe(true);
    });

    it("falls back to activeFilterCount when canReset is omitted", () => {
      const { rerender } = render(
        <FilterListHeader showResetButton={true} activeFilterCount={0} />,
      );
      expect(getResetButton().disabled).toBe(true);

      rerender(
        <FilterListHeader showResetButton={true} activeFilterCount={2} />,
      );
      expect(getResetButton().disabled).toBe(false);
    });

    it("is disabled when neither canReset nor activeFilterCount is supplied", () => {
      render(<FilterListHeader showResetButton={true} />);
      expect(getResetButton().disabled).toBe(true);
    });
  });
});
