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
import { TextInputField } from "../fields/TextInputField.js";

describe("TextInputField", () => {
  afterEach(cleanup);

  describe("multi-value input", () => {
    it("adds the typed value as a chip when Enter is pressed", () => {
      const onChange = vi.fn();

      render(
        <TextInputField
          value={["existing"]}
          onChange={onChange}
          isMultiple={true}
        />,
      );

      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "new tag" } });
      fireEvent.keyDown(input, { key: "Enter" });

      expect(screen.getByText("existing")).toBeDefined();
      expect(onChange).toHaveBeenCalledWith(["existing", "new tag"]);
      expect(input).toHaveProperty("value", "");
    });

    it("removes an existing chip when its remove button is clicked", () => {
      const onChange = vi.fn();

      render(
        <TextInputField
          value={["first", "second"]}
          onChange={onChange}
          isMultiple={true}
        />,
      );

      fireEvent.click(screen.getByLabelText("Remove first"));

      expect(onChange).toHaveBeenCalledWith(["second"]);
    });

    it("commits typed text on blur so in-progress values are not lost", () => {
      const onChange = vi.fn();

      render(
        <TextInputField value={[]} onChange={onChange} isMultiple={true} />,
      );

      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "pending" } });
      fireEvent.blur(input);

      expect(onChange).toHaveBeenCalledWith(["pending"]);
    });
  });
});
