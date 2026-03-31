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
import { TextAreaField } from "../fields/TextAreaField.js";

afterEach(cleanup);

describe("TextAreaField", () => {
  describe("rendering", () => {
    it("renders a textarea with the given value", () => {
      render(<TextAreaField value="hello" onChange={vi.fn()} />);
      const textarea = screen.getByRole("textbox");
      expect(textarea.tagName).toBe("TEXTAREA");
      expect(textarea).toHaveProperty("value", "hello");
    });

    it("renders empty string when value is null", () => {
      render(<TextAreaField value={null} onChange={vi.fn()} />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveProperty("value", "");
    });

    it("renders with placeholder", () => {
      render(
        <TextAreaField
          value={null}
          onChange={vi.fn()}
          placeholder="Enter description"
        />,
      );
      const textarea = screen.getByPlaceholderText("Enter description");
      expect(textarea).toBeDefined();
    });

    it("sets the id attribute", () => {
      render(
        <TextAreaField id="my-textarea" value={null} onChange={vi.fn()} />,
      );
      const textarea = document.getElementById("my-textarea");
      expect(textarea).not.toBeNull();
      expect(textarea?.tagName).toBe("TEXTAREA");
    });
  });

  describe("interaction", () => {
    it("calls onChange when text is entered", () => {
      const onChange = vi.fn();
      render(<TextAreaField value="" onChange={onChange} />);
      const textarea = screen.getByRole("textbox");
      fireEvent.change(textarea, { target: { value: "new text" } });
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith("new text", expect.anything());
    });
  });

  describe("HTML attributes", () => {
    it("passes rows to the textarea", () => {
      render(<TextAreaField value={null} onChange={vi.fn()} rows={5} />);
      const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
      expect(textarea.getAttribute("rows")).toBe("5");
    });

    it("passes minLength and maxLength", () => {
      render(
        <TextAreaField
          value={null}
          onChange={vi.fn()}
          minLength={3}
          maxLength={100}
        />,
      );
      const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
      expect(textarea.minLength).toBe(3);
      expect(textarea.maxLength).toBe(100);
    });
  });
});
