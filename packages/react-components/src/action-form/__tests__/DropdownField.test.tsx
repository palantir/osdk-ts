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

    it("renders the popup portal inside the provided container", async () => {
      const portalContainer = document.createElement("div");
      document.body.append(portalContainer);

      try {
        render(
          <DropdownField
            value={null}
            items={STRING_ITEMS}
            portalContainer={portalContainer}
          />,
        );

        fireEvent.click(screen.getByRole("combobox"));

        await vi.waitFor(() => {
          expect(
            portalContainer.contains(screen.getByRole("option", {
              name: "Alice",
            })),
          ).toBe(true);
        });
      } finally {
        portalContainer.remove();
      }
    });

    it("closes when pressing the portal dismiss layer", async () => {
      render(<DropdownField value={null} items={STRING_ITEMS} />);

      fireEvent.click(screen.getByRole("combobox"));

      await vi.waitFor(() => {
        expect(screen.getByRole("option", { name: "Alice" })).toBeDefined();
      });

      const dismissLayer = document.querySelector(
        "[data-osdk-portal-dismiss-layer]",
      );
      if (!(dismissLayer instanceof HTMLElement)) {
        throw new Error("Expected dropdown dismiss layer to be rendered");
      }

      fireEvent.pointerDown(dismissLayer);

      await vi.waitFor(() => {
        expect(screen.queryByRole("option", { name: "Alice" })).toBeNull();
      });
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
    it("renders a trigger button when isSearchable is true", () => {
      render(
        <DropdownField value={null} items={STRING_ITEMS} isSearchable={true} />,
      );

      const trigger = screen.getByRole("combobox");
      expect(trigger).toBeDefined();
    });

    it("displays selected value in the searchable trigger", () => {
      render(
        <DropdownField
          value="Alice"
          items={STRING_ITEMS}
          isSearchable={true}
        />,
      );

      const trigger = screen.getByRole("combobox");
      expect(trigger.textContent).toContain("Alice");
    });

    it("shows placeholder when no value is selected", () => {
      render(
        <DropdownField
          value={null}
          items={STRING_ITEMS}
          isSearchable={true}
          placeholder="Pick one…"
        />,
      );

      expect(screen.getByText("Pick one…")).toBeDefined();
    });

    it("hides placeholder when a value is selected", () => {
      render(
        <DropdownField
          value="Alice"
          items={STRING_ITEMS}
          isSearchable={true}
          placeholder="Pick one…"
        />,
      );

      expect(screen.queryByText("Pick one…")).toBeNull();
    });

    it("renders items after clicking the trigger", async () => {
      render(
        <DropdownField value={null} items={STRING_ITEMS} isSearchable={true} />,
      );

      const trigger = screen.getByRole("combobox");
      fireEvent.click(trigger);

      await vi.waitFor(() => {
        for (const item of STRING_ITEMS) {
          expect(screen.getByRole("option", { name: item })).toBeDefined();
        }
      });
    });

    it("shows search input inside popup after opening", async () => {
      render(
        <DropdownField value={null} items={STRING_ITEMS} isSearchable={true} />,
      );

      const trigger = screen.getByRole("combobox");
      fireEvent.click(trigger);

      await vi.waitFor(() => {
        expect(screen.getByPlaceholderText("Search…")).toBeDefined();
      });
    });

    it("closes searchable popup when pressing the portal dismiss layer", async () => {
      render(
        <DropdownField value={null} items={STRING_ITEMS} isSearchable={true} />,
      );

      fireEvent.click(screen.getByRole("combobox"));

      await vi.waitFor(() => {
        expect(screen.getByRole("option", { name: "Alice" })).toBeDefined();
      });

      const dismissLayer = document.querySelector(
        "[data-osdk-portal-dismiss-layer]",
      );
      if (!(dismissLayer instanceof HTMLElement)) {
        throw new Error("Expected dropdown dismiss layer to be rendered");
      }

      fireEvent.pointerDown(dismissLayer);

      await vi.waitFor(() => {
        expect(screen.queryByRole("option", { name: "Alice" })).toBeNull();
      });
    });

    it("displays selected items in multi-select trigger", () => {
      render(
        <DropdownField<string, true>
          value={["Alice"]}
          items={STRING_ITEMS}
          isSearchable={true}
          isMultiple={true}
        />,
      );

      const trigger = screen.getByRole("combobox");
      expect(trigger.textContent).toContain("Alice");
    });

    it("renders searchable multi-select and selects items", async () => {
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

      const trigger = screen.getByRole("combobox");
      fireEvent.click(trigger);

      await vi.waitFor(() => {
        for (const item of STRING_ITEMS) {
          expect(screen.getByRole("option", { name: item })).toBeDefined();
        }
      });

      fireEvent.click(screen.getByRole("option", { name: "Alice" }));

      await vi.waitFor(() => {
        expect(onChange).toHaveBeenCalledWith(["Alice"], expect.anything());
      });
    });

    it("shows 'No results' when search matches nothing", async () => {
      render(
        <DropdownField value={null} items={STRING_ITEMS} isSearchable={true} />,
      );

      const trigger = screen.getByRole("combobox");
      fireEvent.click(trigger);

      await vi.waitFor(() => {
        expect(screen.getByPlaceholderText("Search…")).toBeDefined();
      });

      const searchInput = screen.getByPlaceholderText("Search…");
      fireEvent.change(searchInput, { target: { value: "zzz" } });

      await vi.waitFor(() => {
        expect(screen.getByText("No results")).toBeDefined();
      });
    });

    it("filters items to matching subset when searching", async () => {
      render(
        <DropdownField value={null} items={STRING_ITEMS} isSearchable={true} />,
      );

      fireEvent.click(screen.getByRole("combobox"));

      await vi.waitFor(() => {
        expect(screen.getByPlaceholderText("Search…")).toBeDefined();
      });

      fireEvent.change(screen.getByPlaceholderText("Search…"), {
        target: { value: "Al" },
      });

      await vi.waitFor(() => {
        expect(screen.getByRole("option", { name: "Alice" })).toBeDefined();
        expect(screen.queryByRole("option", { name: "Bob" })).toBeNull();
        expect(screen.queryByRole("option", { name: "Charlie" })).toBeNull();
      });
    });

    it("filters items when portalContainer is set", async () => {
      const portalContainer = document.createElement("div");
      document.body.append(portalContainer);

      try {
        render(
          <DropdownField
            value={null}
            items={STRING_ITEMS}
            isSearchable={true}
            portalContainer={portalContainer}
          />,
        );

        fireEvent.click(screen.getByRole("combobox"));

        await vi.waitFor(() => {
          expect(screen.getByPlaceholderText("Search…")).toBeDefined();
        });

        fireEvent.change(screen.getByPlaceholderText("Search…"), {
          target: { value: "Al" },
        });

        await vi.waitFor(() => {
          expect(screen.getByRole("option", { name: "Alice" })).toBeDefined();
          expect(screen.queryByRole("option", { name: "Bob" })).toBeNull();
          expect(screen.queryByRole("option", { name: "Charlie" })).toBeNull();
        });
      } finally {
        portalContainer.remove();
      }
    });

    it("marks selected items with aria-selected in multi-select", async () => {
      render(
        <DropdownField<string, true>
          value={["Alice"]}
          items={STRING_ITEMS}
          isSearchable={true}
          isMultiple={true}
        />,
      );

      const trigger = screen.getByRole("combobox");
      fireEvent.click(trigger);

      await vi.waitFor(() => {
        const alice = screen.getByRole("option", { name: /Alice/ });
        expect(alice.getAttribute("aria-selected")).toBe("true");

        const bob = screen.getByRole("option", { name: /Bob/ });
        expect(bob.getAttribute("aria-selected")).toBe("false");
      });
    });
  });

  describe("clear button", () => {
    it("shows clear button in select when a value is selected", () => {
      render(<DropdownField value="Alice" items={STRING_ITEMS} />);

      expect(screen.getByLabelText("Clear")).toBeDefined();
    });

    it("does not show clear button in select when no value is selected", () => {
      render(<DropdownField value={null} items={STRING_ITEMS} />);

      expect(screen.queryByLabelText("Clear")).toBeNull();
    });

    it("calls onChange with null when clear button is clicked in single select", () => {
      const onChange = vi.fn();
      render(
        <DropdownField
          value="Alice"
          items={STRING_ITEMS}
          onChange={onChange}
        />,
      );

      fireEvent.click(screen.getByLabelText("Clear"));

      expect(onChange).toHaveBeenCalledWith(null);
    });

    it("calls onChange with empty array when clear button is clicked in multi select", () => {
      const onChange = vi.fn();
      render(
        <DropdownField<string, true>
          value={["Alice"]}
          items={STRING_ITEMS}
          onChange={onChange}
          isMultiple={true}
        />,
      );

      fireEvent.click(screen.getByLabelText("Clear"));

      expect(onChange).toHaveBeenCalledWith([]);
    });

    it("shows clear button in searchable combobox when a value is selected", () => {
      render(
        <DropdownField
          value="Alice"
          items={STRING_ITEMS}
          isSearchable={true}
        />,
      );

      expect(screen.getByLabelText("Clear")).toBeDefined();
    });

    it("does not show clear button in searchable combobox when no value is selected", () => {
      render(
        <DropdownField value={null} items={STRING_ITEMS} isSearchable={true} />,
      );

      expect(screen.queryByLabelText("Clear")).toBeNull();
    });
  });
});
