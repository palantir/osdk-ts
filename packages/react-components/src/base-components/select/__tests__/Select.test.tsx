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

import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Select } from "../Select.js";

interface User {
  id: number;
  name: string;
}

const USERS: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

describe("Select", () => {
  afterEach(cleanup);

  describe("object values with isItemEqualToValue", () => {
    it("selects an item using structural equality via isItemEqualToValue", async () => {
      const onValueChange = vi.fn();
      // Value is structurally equal but referentially different from USERS[0]
      const selectedValue: User = { id: 1, name: "Alice" };

      render(
        <Select.Root<User>
          value={selectedValue}
          onValueChange={onValueChange}
          isItemEqualToValue={(a, b) => a.id === b.id}
          itemToStringLabel={(user) => user.name}
        >
          <Select.Trigger data-testid="trigger" />
          <Select.Portal>
            <Select.Positioner>
              <Select.Popup>
                {USERS.map((user) => (
                  <Select.Item key={user.id} value={user}>
                    {user.name}
                  </Select.Item>
                ))}
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>,
      );

      const trigger = screen.getByTestId("trigger");
      // The trigger should display "Alice" via itemToStringLabel, not [object Object]
      expect(trigger.textContent).toContain("Alice");
    });

    it("renders the correct label for a referentially different but structurally equal value", () => {
      // A different reference with the same structure as USERS[1]
      const differentRef: User = { id: 2, name: "Bob" };

      render(
        <Select.Root<User>
          value={differentRef}
          isItemEqualToValue={(a, b) => a.id === b.id}
          itemToStringLabel={(user) => user.name}
        >
          <Select.Trigger data-testid="trigger" />
          <Select.Portal>
            <Select.Positioner>
              <Select.Popup>
                {USERS.map((user) => (
                  <Select.Item key={user.id} value={user}>
                    {user.name}
                  </Select.Item>
                ))}
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>,
      );

      expect(screen.getByTestId("trigger").textContent).toContain("Bob");
    });
  });

  describe("itemToStringLabel", () => {
    it("renders the label from itemToStringLabel in the trigger", () => {
      render(
        <Select.Root<User>
          value={USERS[0]}
          itemToStringLabel={(user) => user.name}
          isItemEqualToValue={(a, b) => a.id === b.id}
        >
          <Select.Trigger data-testid="trigger" />
          <Select.Portal>
            <Select.Positioner>
              <Select.Popup>
                {USERS.map((user) => (
                  <Select.Item key={user.id} value={user}>
                    {user.name}
                  </Select.Item>
                ))}
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>,
      );

      expect(screen.getByTestId("trigger").textContent).toContain("Alice");
    });

    it("falls back to String() when itemToStringLabel is not provided", () => {
      render(
        <Select.Root<string> value="hello">
          <Select.Trigger data-testid="trigger" />
          <Select.Portal>
            <Select.Positioner>
              <Select.Popup>
                <Select.Item value="hello">Hello</Select.Item>
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>,
      );

      expect(screen.getByTestId("trigger").textContent).toContain("hello");
    });
  });

  describe("multi-select", () => {
    it("renders with multiple selected values", () => {
      render(
        <Select.Root<string, true>
          multiple={true}
          defaultValue={["alice", "bob"]}
        >
          <Select.Trigger data-testid="trigger" />
          <Select.Portal>
            <Select.Positioner>
              <Select.Popup>
                <Select.Item value="alice">Alice</Select.Item>
                <Select.Item value="bob">Bob</Select.Item>
                <Select.Item value="charlie">Charlie</Select.Item>
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>,
      );

      const trigger = screen.getByTestId("trigger");
      expect(trigger.textContent).toContain("alice");
      expect(trigger.textContent).toContain("bob");
    });

    it("renders multi-select with object values", () => {
      render(
        <Select.Root<User, true>
          multiple={true}
          defaultValue={[USERS[0], USERS[1]]}
          isItemEqualToValue={(a, b) => a.id === b.id}
          itemToStringLabel={(user) => user.name}
        >
          <Select.Trigger data-testid="trigger" />
          <Select.Portal>
            <Select.Positioner>
              <Select.Popup>
                {USERS.map((user) => (
                  <Select.Item key={user.id} value={user}>
                    {user.name}
                  </Select.Item>
                ))}
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>,
      );

      const trigger = screen.getByTestId("trigger");
      expect(trigger.textContent).toContain("Alice");
      expect(trigger.textContent).toContain("Bob");
    });
  });
});
