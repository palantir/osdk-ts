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
import * as React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AipAgentChatContextPicker } from "../components/AipAgentChatContextPicker.js";

const OBJECT_TYPES = ["Employee", "Office"];
const NONE: ReadonlyArray<string> = [];

describe("AipAgentChatContextPicker", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders nothing when there are no object types", () => {
    const { container } = render(
      <AipAgentChatContextPicker
        objectTypes={NONE}
        selected={NONE}
        onChange={vi.fn()}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  it("shows a prompt label when nothing is selected", () => {
    render(
      <AipAgentChatContextPicker
        objectTypes={OBJECT_TYPES}
        selected={NONE}
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("Add object context")).toBeDefined();
  });

  it("shows a singular count when one type is selected", () => {
    render(
      <AipAgentChatContextPicker
        objectTypes={OBJECT_TYPES}
        selected={["Employee"]}
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("1 object type")).toBeDefined();
  });

  it("shows a plural count when multiple types are selected", () => {
    render(
      <AipAgentChatContextPicker
        objectTypes={OBJECT_TYPES}
        selected={["Employee", "Office"]}
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("2 object types")).toBeDefined();
  });

  it("disables the trigger when disabled", () => {
    render(
      <AipAgentChatContextPicker
        objectTypes={OBJECT_TYPES}
        selected={NONE}
        onChange={vi.fn()}
        disabled={true}
      />,
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger.matches(":disabled")).toBe(true);
  });
});
