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
import { CustomField } from "../fields/CustomField.js";

afterEach(cleanup);

describe("CustomField", () => {
  describe("rendering", () => {
    it("renders the output of customRenderer", () => {
      render(
        <CustomField
          value="test"
          onChange={vi.fn()}
          customRenderer={() => <div data-testid="custom">Custom content</div>}
        />,
      );
      expect(screen.getByTestId("custom")).toBeDefined();
      expect(screen.getByText("Custom content")).toBeDefined();
    });

    it("passes value and onChange to customRenderer", () => {
      const customRenderer = vi.fn(() => <div>rendered</div>);
      const onChange = vi.fn();

      render(
        <CustomField
          value="hello"
          onChange={onChange}
          customRenderer={customRenderer}
        />,
      );

      expect(customRenderer).toHaveBeenCalledWith(
        expect.objectContaining({ value: "hello", onChange }),
      );
    });

    it("passes id to customRenderer", () => {
      const customRenderer = vi.fn(() => <div>rendered</div>);

      render(
        <CustomField
          id="my-field"
          value={null}
          onChange={vi.fn()}
          customRenderer={customRenderer}
        />,
      );

      expect(customRenderer).toHaveBeenCalledWith(
        expect.objectContaining({ id: "my-field" }),
      );
    });

    it("passes null value to customRenderer", () => {
      const customRenderer = vi.fn(() => <div>rendered</div>);

      render(
        <CustomField
          value={null}
          onChange={vi.fn()}
          customRenderer={customRenderer}
        />,
      );

      expect(customRenderer).toHaveBeenCalledWith(
        expect.objectContaining({ value: null }),
      );
    });
  });

  describe("interaction", () => {
    it("propagates onChange from custom renderer", () => {
      const onChange = vi.fn();

      render(
        <CustomField
          value=""
          onChange={onChange}
          customRenderer={(props) => (
            <input
              data-testid="custom-input"
              value={String(props.value ?? "")}
              onChange={(e) => props.onChange?.(e.target.value)}
            />
          )}
        />,
      );

      fireEvent.change(screen.getByTestId("custom-input"), {
        target: { value: "new value" },
      });
      expect(onChange).toHaveBeenCalledWith("new value");
    });
  });
});
