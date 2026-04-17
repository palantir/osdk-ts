/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import { DropdownField } from "../fields/DropdownField.js";

const STRING_ITEMS = ["Alice", "Bob", "Charlie"];

describe("DropdownField", () => {
  afterEach(cleanup);

  describe("routing", () => {
    it("renders a select trigger when isSearchable is false (default)", () => {
      render(<DropdownField value={null} items={STRING_ITEMS} />);

      expect(screen.getByRole("combobox")).toBeDefined();
    });

    it("renders a combobox input when isSearchable is true", () => {
      render(
        <DropdownField value={null} items={STRING_ITEMS} isSearchable={true} />,
      );

      expect(screen.getByRole("combobox")).toBeDefined();
    });
  });

  describe("single select (Select variant)", () => {
    it("renders items from the items prop", async () => {
      render(<DropdownField value={null} items={STRING_ITEMS} />);

      const trigger = screen.getByRole("combobox");
      fireEvent.click(trigger);

      await vi.waitFor(() => {
        for (const item of STRING_ITEMS) {
          expect(screen.getByRole("option", { name: item })).toBeDefined();
        }
      });
    });

    it("displays the selected value in the trigger", () => {
      render(<DropdownField value="Alice" items={STRING_ITEMS} />);

      expect(screen.getByRole("combobox").textContent).toContain("Alice");
    });

    it("uses itemToStringLabel for display", () => {
      interface User {
        id: number;
        name: string;
      }
      const users: User[] = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ];

      render(
        <DropdownField<User>
          value={users[0]}
          items={users}
          itemToStringLabel={(u) => u.name}
          isItemEqual={(a, b) => a.id === b.id}
        />,
      );

      expect(screen.getByRole("combobox").textContent).toContain("Alice");
    });
  });

  describe("multi select (Select variant)", () => {
    it("renders multi-select and displays selected value", () => {
      render(
        <DropdownField<string, true>
          value={["Alice"]}
          items={STRING_ITEMS}
          isMultiple={true}
        />,
      );

      expect(screen.getByRole("combobox")).toBeDefined();
      expect(screen.getByRole("combobox").textContent).toContain("Alice");
    });
  });

  describe("searchable (Combobox variant)", () => {
    it("renders combobox with search input", async () => {
      render(
        <DropdownField value={null} items={STRING_ITEMS} isSearchable={true} />,
      );

      const input = screen.getByRole("combobox");
      expect(input).toBeDefined();

      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });

      await vi.waitFor(() => {
        for (const item of STRING_ITEMS) {
          expect(screen.getByRole("option", { name: item })).toBeDefined();
        }
      });
    });

    it("shows selected items in multi-select mode", () => {
      render(
        <DropdownField<string, true>
          value={["Alice"]}
          items={STRING_ITEMS}
          isSearchable={true}
          isMultiple={true}
        />,
      );

      expect(screen.getByText("Alice")).toBeDefined();
    });

    it("renders searchable multi-select", async () => {
      const onChange = vi.fn();
      render(
        <DropdownField<string, true>
          value={[]}
          items={STRING_ITEMS}
          onChange={onChange}
          isSearchable={true}
          isMultiple={true}
        />,
      );

      const input = screen.getByRole("combobox");

      // Open popup and verify all items render
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });

      await vi.waitFor(() => {
        for (const item of STRING_ITEMS) {
          expect(screen.getByRole("option", { name: item })).toBeDefined();
        }
      });

      // Select an item and verify onChange fires
      fireEvent.click(screen.getByRole("option", { name: "Alice" }));

      await vi.waitFor(() => {
        expect(onChange).toHaveBeenCalledWith(["Alice"], expect.anything());
      });
    });

    it("shows 'No results' when search matches nothing", async () => {
      render(
        <DropdownField value={null} items={STRING_ITEMS} isSearchable={true} />,
      );

      const input = screen.getByRole("combobox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "zzz" } });

      await vi.waitFor(() => {
        expect(screen.getByText("No results")).toBeDefined();
      });
    });
  });

  describe("placeholder", () => {
    it("falls back to 'Search…' in combobox multi-select when no placeholder is provided", () => {
      render(
        <DropdownField<string, true>
          value={[]}
          items={STRING_ITEMS}
          isSearchable={true}
          isMultiple={true}
        />,
      );

      const input = screen.getByRole("combobox");
      expect(input.getAttribute("placeholder")).toBe("Search…");
    });

    it("hides placeholder in combobox multi-select when items are selected", () => {
      render(
        <DropdownField<string, true>
          value={["Alice"]}
          items={STRING_ITEMS}
          isSearchable={true}
          isMultiple={true}
          placeholder="Pick names"
        />,
      );

      const input = screen.getByRole("combobox");
      expect(input.getAttribute("placeholder")).toBe("");
    });
  });
});
