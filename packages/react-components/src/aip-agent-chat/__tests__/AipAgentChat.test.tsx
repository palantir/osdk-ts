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
import type { Client, PlatformClient } from "@osdk/client";
import { useChat } from "@osdk/react/experimental/aip";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
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

let mockClient: Client;

vi.mock("@osdk/react", () => ({
  useOsdkClient: (): Client => mockClient,
}));

vi.mock("@osdk/react/experimental/aip", () => ({
  useChat: vi.fn(),
}));

const mockFoundryModel = vi.mocked(foundryModel);
const mockUseChat = vi.mocked(useChat);

const EMPLOYEE_TYPE = { type: "object" as const, apiName: "Employee" };
const OFFICE_TYPE = { type: "object" as const, apiName: "Office" };

const EMPLOYEE_CONTEXT = {
  type: "objectType" as const,
  objectType: EMPLOYEE_TYPE,
};
const OFFICE_CONTEXT = {
  type: "objectType" as const,
  objectType: OFFICE_TYPE,
};

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

function installMockClient(
  objectsByApiName: Record<string, ReadonlyArray<unknown>> = {}
): { clientFn: ReturnType<typeof vi.fn> } {
  const clientFn = vi.fn((type: { apiName: string }) => {
    const objects = objectsByApiName[type.apiName] ?? [];
    return {
      async *asyncIter() {
        for (const object of objects) {
          yield Promise.resolve(object);
        }
      },
    };
  });
  mockClient = clientFn as unknown as Client;
  return { clientFn };
}

describe("AipAgentChat", () => {
  beforeEach(() => {
    mockFoundryModel.mockClear();
    mockUseChat.mockReset();
    installMockClient();
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

  it("renders the context picker when contextItems is provided", () => {
    mockUseChatDefaults();

    render(
      <AipAgentChat
        client={MOCK_CLIENT}
        model="gpt-4o"
        contextItems={[EMPLOYEE_CONTEXT, OFFICE_CONTEXT]}
      />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger.textContent).toContain("Add context");
  });

  it("does not render the context picker when contextItems is omitted", () => {
    mockUseChatDefaults();

    render(<AipAgentChat client={MOCK_CLIENT} model="gpt-4o" />);

    expect(screen.queryByRole("combobox")).toBeNull();
  });

  it("mounts a context loader per selected object-type item and none for unselected items", () => {
    mockUseChatDefaults();
    const { clientFn } = installMockClient();

    render(
      <AipAgentChat
        client={MOCK_CLIENT}
        model="gpt-4o"
        contextItems={[EMPLOYEE_CONTEXT, OFFICE_CONTEXT]}
        defaultSelectedContextItems={[EMPLOYEE_CONTEXT]}
      />
    );

    // Only the selected type mounts a loader, which invokes the client with
    // that type to build an object set.
    const apiNames = clientFn.mock.calls.map(
      (call) => (call[0] as { apiName: string }).apiName
    );
    expect(apiNames).toContain("Employee");
    expect(apiNames).not.toContain("Office");
  });

  it("appends loaded objects to the system prompt passed to useChat", async () => {
    mockUseChatDefaults();
    installMockClient({
      Employee: [{ $primaryKey: 1, $title: "Alice", name: "Alice" }],
    });

    render(
      <AipAgentChat
        client={MOCK_CLIENT}
        model="gpt-4o"
        system="You are helpful."
        contextItems={[EMPLOYEE_CONTEXT]}
        defaultSelectedContextItems={[EMPLOYEE_CONTEXT]}
      />
    );

    // The loader iterates asynchronously; wait for the effect to drain the
    // fake object set and re-render useChat with the augmented prompt.
    await waitFor(() => {
      const lastCall = mockUseChat.mock.calls.at(-1);
      expect(lastCall?.[0].system).toContain(
        '<objects api-name="Employee" count="1">'
      );
    });

    const lastCall = mockUseChat.mock.calls.at(-1);
    const system = lastCall?.[0].system;
    expect(system).toContain("You are helpful.");
    expect(system).toContain('"$title": "Alice"');
  });

  it("leaves the system prompt untouched when nothing is selected", () => {
    mockUseChatDefaults();
    installMockClient({
      Employee: [{ $primaryKey: 1, $title: "Alice" }],
    });

    render(
      <AipAgentChat
        client={MOCK_CLIENT}
        model="gpt-4o"
        system="You are helpful."
        contextItems={[EMPLOYEE_CONTEXT]}
      />
    );

    const lastCall = mockUseChat.mock.calls.at(-1);
    expect(lastCall?.[0].system).toBe("You are helpful.");
  });
});
