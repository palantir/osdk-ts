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

import { foundryModel } from "@osdk/aip-core";
import type * as AipCore from "@osdk/aip-core";
import type { PlatformClient } from "@osdk/client";
import { useOsdkObjects } from "@osdk/react";
import { useChat } from "@osdk/react/experimental/aip";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { AipAgentChat } from "../AipAgentChat.js";

vi.mock("@osdk/aip-core", async () => {
  const actual = await vi.importActual<typeof AipCore>("@osdk/aip-core");
  return {
    ...actual,
    foundryModel: vi.fn((opts: { model: string }) => ({
      modelId: `foundry/${opts.model}`,
      provider: "foundry-lms",
    })),
  };
});

vi.mock("@osdk/react", () => ({
  useOsdkObjects: vi.fn(),
}));

vi.mock("@osdk/react/experimental/aip", () => ({
  useChat: vi.fn(),
}));

const mockFoundryModel = vi.mocked(foundryModel);
const mockUseOsdkObjects = vi.mocked(useOsdkObjects);
const mockUseChat = vi.mocked(useChat);

const EMPLOYEE_TYPE = { type: "object" as const, apiName: "Employee" };
const OFFICE_TYPE = { type: "object" as const, apiName: "Office" };

const MOCK_CLIENT = {} as PlatformClient;

interface MockUseChatState {
  sendMessage: ReturnType<typeof vi.fn>;
  stop: ReturnType<typeof vi.fn>;
  clearError: ReturnType<typeof vi.fn>;
}

function mockUseChatDefaults(): MockUseChatState {
  const sendMessage = vi.fn(() => Promise.resolve());
  const stop = vi.fn();
  const clearError = vi.fn();
  mockUseChat.mockReturnValue({
    id: "chat-id",
    messages: [],
    setMessages: vi.fn(),
    status: "ready",
    error: undefined,
    sendMessage,
    regenerate: vi.fn(),
    stop,
    resumeStream: vi.fn(),
    clearError,
  });
  return { sendMessage, stop, clearError };
}

function mockUseOsdkObjectsData(
  data: ReadonlyArray<unknown> | undefined = []
): void {
  mockUseOsdkObjects.mockReturnValue({
    data,
    isLoading: false,
    isOptimistic: false,
    hasMore: false,
    error: undefined,
    fetchMore: undefined,
    refetch: vi.fn(),
    objectSet: undefined,
  } as never);
}

describe("AipAgentChat", () => {
  beforeEach(() => {
    mockFoundryModel.mockClear();
    mockUseOsdkObjects.mockReset();
    mockUseChat.mockReset();
    mockUseOsdkObjectsData([]);
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("calls useChat with the configured model", () => {
    mockUseChatDefaults();

    render(<AipAgentChat client={MOCK_CLIENT} model="claude-sonnet-4" />);

    expect(mockFoundryModel).toHaveBeenCalledWith({
      client: MOCK_CLIENT,
      model: "claude-sonnet-4",
    });
    expect(mockUseChat).toHaveBeenCalled();
    const lastCall = mockUseChat.mock.calls.at(-1);
    expect(lastCall?.[0].model).toEqual(
      expect.objectContaining({ modelId: "foundry/claude-sonnet-4" })
    );
  });

  it("falls back to gpt-4o when no model is provided", () => {
    mockUseChatDefaults();

    render(<AipAgentChat client={MOCK_CLIENT} />);

    expect(mockFoundryModel).toHaveBeenCalledWith({
      client: MOCK_CLIENT,
      model: "gpt-4o",
    });
  });

  it("wires sendMessage from useChat into BaseAipAgentChat", () => {
    const { sendMessage } = mockUseChatDefaults();

    render(<AipAgentChat client={MOCK_CLIENT} model="gpt-4o" />);

    const textarea = screen.getByLabelText("Message input");
    fireEvent.change(textarea, { target: { value: "hello from wrapper" } });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    expect(sendMessage).toHaveBeenCalledWith({ text: "hello from wrapper" });
  });

  it("switches the active model when the picker changes", () => {
    mockUseChatDefaults();
    const onModelChange = vi.fn();

    render(
      <AipAgentChat
        client={MOCK_CLIENT}
        defaultModel="gpt-4o"
        availableModels={["gpt-4o", "claude-sonnet-4"]}
        onModelChange={onModelChange}
      />
    );

    const select = screen.getByLabelText("Active model") as HTMLSelectElement;
    expect(select.value).toBe("gpt-4o");
    const optionValues = Array.from(select.options).map((o) => o.value);
    expect(optionValues).toEqual(["gpt-4o", "claude-sonnet-4"]);

    fireEvent.change(select, { target: { value: "claude-sonnet-4" } });

    expect(onModelChange).toHaveBeenCalledWith("claude-sonnet-4");
    // Latest call to useChat should reflect the new model.
    const lastCall = mockUseChat.mock.calls.at(-1);
    expect(lastCall?.[0].model).toEqual(
      expect.objectContaining({ modelId: "foundry/claude-sonnet-4" })
    );
  });

  it("renders the object-type context picker when objectTypes is provided", () => {
    mockUseChatDefaults();

    render(
      <AipAgentChat
        client={MOCK_CLIENT}
        model="gpt-4o"
        objectTypes={[EMPLOYEE_TYPE, OFFICE_TYPE]}
      />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger.textContent).toContain("Add context");
  });

  it("does not render the context picker when objectTypes is omitted", () => {
    mockUseChatDefaults();

    render(<AipAgentChat client={MOCK_CLIENT} model="gpt-4o" />);

    expect(screen.queryByRole("combobox")).toBeNull();
  });

  it("mounts a context loader per selected object type and none for unselected types", () => {
    mockUseChatDefaults();
    mockUseOsdkObjectsData([]);

    render(
      <AipAgentChat
        client={MOCK_CLIENT}
        model="gpt-4o"
        objectTypes={[EMPLOYEE_TYPE, OFFICE_TYPE]}
        defaultSelectedObjectTypes={["Employee"]}
      />
    );

    // Only the selected type mounts a loader.
    const calls = mockUseOsdkObjects.mock.calls;
    const apiNames = calls.map((call) => call[0]?.apiName);
    expect(apiNames).toContain("Employee");
    expect(apiNames).not.toContain("Office");
  });

  it("appends loaded objects to the system prompt passed to useChat", () => {
    mockUseChatDefaults();
    mockUseOsdkObjectsData([
      { $primaryKey: 1, $title: "Alice", name: "Alice" },
    ]);

    render(
      <AipAgentChat
        client={MOCK_CLIENT}
        model="gpt-4o"
        system="You are helpful."
        objectTypes={[EMPLOYEE_TYPE]}
        defaultSelectedObjectTypes={["Employee"]}
      />
    );

    // The last useChat call after the loader effect fires must include the
    // serialized Employee snapshot appended to the base system prompt.
    const lastCall = mockUseChat.mock.calls.at(-1);
    const system = lastCall?.[0].system;
    expect(system).toContain("You are helpful.");
    expect(system).toContain("## Employee (1 object)");
    expect(system).toContain('"$title": "Alice"');
  });

  it("leaves the system prompt untouched when nothing is selected", () => {
    mockUseChatDefaults();
    mockUseOsdkObjectsData([{ $primaryKey: 1, $title: "Alice" }]);

    render(
      <AipAgentChat
        client={MOCK_CLIENT}
        model="gpt-4o"
        system="You are helpful."
        objectTypes={[EMPLOYEE_TYPE]}
      />
    );

    const lastCall = mockUseChat.mock.calls.at(-1);
    expect(lastCall?.[0].system).toBe("You are helpful.");
  });
});
