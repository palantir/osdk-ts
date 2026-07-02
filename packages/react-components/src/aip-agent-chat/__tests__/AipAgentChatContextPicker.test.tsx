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
import { afterEach, describe, expect, it, vi } from "vitest";

import { AipAgentChatContextPicker } from "../components/AipAgentChatContextPicker.js";

const CONTEXT_ITEM_IDS = ["Employee", "Office"];
const NONE: ReadonlyArray<string> = [];

describe("AipAgentChatContextPicker", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders nothing when there are no context items", () => {
    const { container } = render(
      <AipAgentChatContextPicker
        contextItemIds={NONE}
        selected={NONE}
        onChange={vi.fn()}
      />
    );

    expect(container.firstChild).toBeNull();
  });

  it("shows the 'Add context' placeholder when nothing is selected", () => {
    render(
      <AipAgentChatContextPicker
        contextItemIds={CONTEXT_ITEM_IDS}
        selected={NONE}
        onChange={vi.fn()}
      />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger.textContent).toContain("Add context");
  });

  it("renders the selected context item ids in the trigger", () => {
    render(
      <AipAgentChatContextPicker
        contextItemIds={CONTEXT_ITEM_IDS}
        selected={["Employee"]}
        onChange={vi.fn()}
      />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger.textContent).toContain("Employee");
  });

  it("renders every selected item when multiple are selected", () => {
    render(
      <AipAgentChatContextPicker
        contextItemIds={CONTEXT_ITEM_IDS}
        selected={["Employee", "Office"]}
        onChange={vi.fn()}
      />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger.textContent).toContain("Employee");
    expect(trigger.textContent).toContain("Office");
  });

  it("disables the trigger when disabled", () => {
    render(
      <AipAgentChatContextPicker
        contextItemIds={CONTEXT_ITEM_IDS}
        selected={NONE}
        onChange={vi.fn()}
        disabled={true}
      />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger.matches(":disabled")).toBe(true);
  });
});
