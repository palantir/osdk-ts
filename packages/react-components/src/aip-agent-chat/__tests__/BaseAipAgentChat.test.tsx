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

import { getUIMessageText, type UIMessage } from "@osdk/aip-core";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { BaseAipAgentChat } from "../BaseAipAgentChat.js";

function makeMessage(
  role: "user" | "assistant" | "system",
  text: string,
): UIMessage {
  return {
    id: `${role}-${Math.random()}`,
    role,
    parts: [{ type: "text", text }],
  };
}

describe("BaseAipAgentChat", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders the default empty state when there are no messages", () => {
    render(
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        error={undefined}
        onSendMessage={vi.fn()}
        onStop={vi.fn()}
        onClearError={vi.fn()}
      />,
    );

    expect(screen.getByText("Start a conversation")).toBeDefined();
    expect(
      screen.getByText("Type a message below to chat with the assistant."),
    ).toBeDefined();
  });

  it("renders messages passed as props", () => {
    const userMsg = makeMessage("user", "Hello there");
    const assistantMsg = makeMessage("assistant", "Hi back!");

    render(
      <BaseAipAgentChat
        messages={[userMsg, assistantMsg]}
        status="ready"
        error={undefined}
        onSendMessage={vi.fn()}
        onStop={vi.fn()}
        onClearError={vi.fn()}
      />,
    );

    const userGroup = screen.getByLabelText("User message");
    const assistantGroup = screen.getByLabelText("Assistant message");

    expect(userGroup.textContent).toContain(getUIMessageText(userMsg));
    expect(assistantGroup.textContent).toContain(
      getUIMessageText(assistantMsg),
    );
  });

  it("disables the Send button when the textarea is empty", () => {
    render(
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        error={undefined}
        onSendMessage={vi.fn()}
        onStop={vi.fn()}
        onClearError={vi.fn()}
      />,
    );

    const sendButton = screen.getByRole("button", { name: /send/i });
    expect((sendButton as HTMLButtonElement).disabled).toBe(true);
  });

  it("enables Send button when textarea has text", () => {
    render(
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        error={undefined}
        onSendMessage={vi.fn()}
        onStop={vi.fn()}
        onClearError={vi.fn()}
      />,
    );

    const textarea = screen.getByLabelText(
      "Message input",
    ) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "hello" } });

    const sendButton = screen.getByRole("button", { name: /send/i });
    expect((sendButton as HTMLButtonElement).disabled).toBe(false);
  });

  it("calls onSendMessage when Send button is clicked", async () => {
    const onSendMessage = vi.fn(() => Promise.resolve());

    render(
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        error={undefined}
        onSendMessage={onSendMessage}
        onStop={vi.fn()}
        onClearError={vi.fn()}
      />,
    );

    const textarea = screen.getByLabelText(
      "Message input",
    ) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "hello world" } });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    expect(onSendMessage).toHaveBeenCalledWith("hello world");
  });

  it("shows Stop button when status is submitted", () => {
    render(
      <BaseAipAgentChat
        messages={[]}
        status="submitted"
        error={undefined}
        onSendMessage={vi.fn()}
        onStop={vi.fn()}
        onClearError={vi.fn()}
      />,
    );

    expect(screen.queryByRole("button", { name: /send/i })).toBeNull();
    expect(screen.getByRole("button", { name: /stop/i })).toBeDefined();
  });

  it("calls onStop when Stop button is clicked", () => {
    const onStop = vi.fn();

    render(
      <BaseAipAgentChat
        messages={[]}
        status="streaming"
        error={undefined}
        onSendMessage={vi.fn()}
        onStop={onStop}
        onClearError={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /stop/i }));

    expect(onStop).toHaveBeenCalled();
  });

  it("renders error banner when error is present", () => {
    const error = new Error("Something went wrong");

    render(
      <BaseAipAgentChat
        messages={[]}
        status="error"
        error={error}
        onSendMessage={vi.fn()}
        onStop={vi.fn()}
        onClearError={vi.fn()}
      />,
    );

    const banner = screen.getByRole("alert");
    expect(banner.textContent).toContain("Something went wrong");
  });

  it("calls onClearError when Dismiss is clicked", () => {
    const onClearError = vi.fn();

    render(
      <BaseAipAgentChat
        messages={[]}
        status="error"
        error={new Error("Something went wrong")}
        onSendMessage={vi.fn()}
        onStop={vi.fn()}
        onClearError={onClearError}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /dismiss/i }));

    expect(onClearError).toHaveBeenCalled();
  });

  it("renders composerFooter content inside the composer footer", () => {
    render(
      <BaseAipAgentChat
        composerFooter={
          <span data-testid="footer-slot">model-picker-stub</span>
        }
        messages={[]}
        status="ready"
        error={undefined}
        onSendMessage={vi.fn()}
        onStop={vi.fn()}
        onClearError={vi.fn()}
      />,
    );

    const slot = screen.getByTestId("footer-slot");
    expect(slot.textContent).toBe("model-picker-stub");
  });

  it("calls renderEmptyState when there are no messages", () => {
    const renderEmptyState = vi.fn(() => (
      <div data-testid="custom-empty">no messages yet</div>
    ));

    render(
      <BaseAipAgentChat
        renderEmptyState={renderEmptyState}
        messages={[]}
        status="ready"
        error={undefined}
        onSendMessage={vi.fn()}
        onStop={vi.fn()}
        onClearError={vi.fn()}
      />,
    );

    expect(renderEmptyState).toHaveBeenCalled();
    expect(screen.getByTestId("custom-empty")).toBeDefined();
    expect(screen.queryByText("Start a conversation")).toBeNull();
  });

  it("calls renderMessage once per message and renders its return value", () => {
    const renderMessage = vi.fn((message: UIMessage) => (
      <div data-testid={`custom-${message.id}`}>
        {`[${message.role}] ${getUIMessageText(message)}`}
      </div>
    ));

    const userMsg = makeMessage("user", "first");
    const assistantMsg = makeMessage("assistant", "second");

    render(
      <BaseAipAgentChat
        renderMessage={renderMessage}
        messages={[userMsg, assistantMsg]}
        status="ready"
        error={undefined}
        onSendMessage={vi.fn()}
        onStop={vi.fn()}
        onClearError={vi.fn()}
      />,
    );

    expect(renderMessage).toHaveBeenCalledTimes(2);
    expect(screen.getByTestId(`custom-${userMsg.id}`).textContent).toBe(
      "[user] first",
    );
    expect(screen.getByTestId(`custom-${assistantMsg.id}`).textContent).toBe(
      "[assistant] second",
    );
    // The default bubble (with aria-label="User message") must NOT render.
    expect(screen.queryByLabelText("User message")).toBeNull();
    expect(screen.queryByLabelText("Assistant message")).toBeNull();
  });
});
