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

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { DropdownField } from "../fields/DropdownField.js";

const PEOPLE = [
  { id: "alice", name: "Alice" },
  { id: "bob", name: "Bob" },
];

afterEach(cleanup);

describe("DropdownField", () => {
  it("uses Blueprint Select for a single value", async () => {
    const onChange = vi.fn();
    render(
      <DropdownField
        items={PEOPLE}
        itemToKey={(person) => person.id}
        itemToStringLabel={(person) => person.name}
        onChange={onChange}
        value={PEOPLE[0]}
      />,
    );

    expect(screen.getByRole("button", { name: /Alice/u })).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: /Alice/u }));
    fireEvent.click(await screen.findByText("Bob"));

    expect(onChange).toHaveBeenCalledWith(PEOPLE[1]);
  });

  it("renders rich labels while using text labels for search", async () => {
    render(
      <DropdownField
        isSearchable={true}
        items={PEOPLE}
        value={null}
        itemToKey={(person) => person.id}
        itemToStringLabel={(person) => person.name}
        renderItemLabel={(person) => <strong>{person.name}</strong>}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Select…" }));
    const searchInput = await screen.findByRole("combobox");
    fireEvent.change(searchInput, { target: { value: "bob" } });

    expect(await screen.findByText("Bob")).toBeDefined();
    expect(screen.queryByText("Alice")).toBeNull();
  });

  it("uses Blueprint MultiSelect and toggles selected values", async () => {
    const onChange = vi.fn();
    render(
      <DropdownField
        isMultiple={true}
        isSearchable={true}
        items={PEOPLE}
        itemToKey={(person) => person.id}
        itemToStringLabel={(person) => person.name}
        onChange={onChange}
        value={[PEOPLE[0]]}
      />,
    );

    expect(screen.getByText("Alice")).toBeDefined();
    fireEvent.click(screen.getByRole("textbox", { name: "Select…" }));
    fireEvent.click(await screen.findByText("Bob"));

    expect(onChange).toHaveBeenCalledWith([PEOPLE[0], PEOPLE[1]]);
  });

  it("renders the Blueprint popover in the configured portal container", async () => {
    const portalContainer = document.createElement("div");
    document.body.append(portalContainer);
    try {
      render(
        <DropdownField
          items={PEOPLE}
          value={null}
          itemToStringLabel={(person) => person.name}
          portalContainer={portalContainer}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: "Select…" }));
      await waitFor(() => {
        expect(portalContainer.querySelector("[role=listbox]")).not.toBeNull();
      });
    } finally {
      portalContainer.remove();
    }
  });

  it("does not open when disabled", () => {
    render(<DropdownField disabled={true} items={PEOPLE} value={null} />);

    const trigger = screen.getByRole("button", { name: "Select…" });
    expect(trigger.hasAttribute("disabled")).toBe(true);
    fireEvent.click(trigger);
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("marks the field touched when an item is selected", async () => {
    const onBlur = vi.fn();
    render(
      <DropdownField
        items={PEOPLE}
        value={null}
        itemToStringLabel={(person) => person.name}
        onBlur={onBlur}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Select…" }));
    fireEvent.click(await screen.findByText("Alice"));

    expect(onBlur).toHaveBeenCalledOnce();
  });
});
