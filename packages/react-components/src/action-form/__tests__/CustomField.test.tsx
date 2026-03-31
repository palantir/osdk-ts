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

    it("passes value to customRenderer", () => {
      render(
        <CustomField
          value="hello"
          onChange={vi.fn()}
          customRenderer={(props) => (
            <div data-testid="value">{String(props.value)}</div>
          )}
        />,
      );
      expect(screen.getByTestId("value").textContent).toBe("hello");
    });

    it("passes id to customRenderer", () => {
      render(
        <CustomField
          id="my-field"
          value={null}
          onChange={vi.fn()}
          customRenderer={(props) => <div data-testid="id">{props.id}</div>}
        />,
      );
      expect(screen.getByTestId("id").textContent).toBe("my-field");
    });

    it("passes null value to customRenderer", () => {
      render(
        <CustomField
          value={null}
          onChange={vi.fn()}
          customRenderer={(props) => (
            <div data-testid="value">{String(props.value)}</div>
          )}
        />,
      );
      expect(screen.getByTestId("value").textContent).toBe("null");
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
