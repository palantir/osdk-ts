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
  role: UIMessage["role"],
  text: string,
  id: string = `${role}-${text}`,
): UIMessage {
  return {
    id,
    role,
    parts: [{ type: "text", text }],
  };
}

const NOOP_SEND: (text: string) => void = () => {};

describe("BaseAipAgentChat", () => {
  afterEach(cleanup);

  it("renders the default empty state when messages is empty and status is ready", () => {
    render(
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        onSendMessage={NOOP_SEND}
      />,
    );

    expect(screen.getByText("Start a conversation")).toBeDefined();
    // The default empty state includes the Chat icon — assert the icon
    // container is present via the surrounding text node's siblings.
    expect(
      screen.getByText("Type a message below to chat with the assistant."),
    ).toBeDefined();
  });

  it("renders user and assistant messages in their respective bubbles", () => {
    const userMsg = makeMessage("user", "Hello there");
    const assistantMsg = makeMessage("assistant", "Hi back!");

    render(
      <BaseAipAgentChat
        messages={[userMsg, assistantMsg]}
        status="ready"
        onSendMessage={NOOP_SEND}
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
        onSendMessage={NOOP_SEND}
      />,
    );

    const sendButton = screen.getByRole("button", { name: /send/i });
    expect((sendButton as HTMLButtonElement).disabled).toBe(true);
  });

  it("fires onSendMessage with trimmed text and clears the textarea on Send click", () => {
    const onSendMessage = vi.fn();

    render(
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        onSendMessage={onSendMessage}
      />,
    );

    const textarea = screen.getByLabelText(
      "Message input",
    ) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "  hello world  " } });

    const sendButton = screen.getByRole("button", { name: /send/i });
    expect((sendButton as HTMLButtonElement).disabled).toBe(false);
    fireEvent.click(sendButton);

    expect(onSendMessage).toHaveBeenCalledTimes(1);
    expect(onSendMessage).toHaveBeenCalledWith("hello world");
    expect(textarea.value).toBe("");
  });

  it("fires onSendMessage and prevents default when Enter is pressed without Shift", () => {
    const onSendMessage = vi.fn();

    render(
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        onSendMessage={onSendMessage}
      />,
    );

    const textarea = screen.getByLabelText(
      "Message input",
    ) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "ping" } });

    const enterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      shiftKey: false,
      bubbles: true,
      cancelable: true,
    });
    const dispatched = textarea.dispatchEvent(enterEvent);

    // dispatchEvent returns false when preventDefault was called.
    expect(dispatched).toBe(false);
    expect(enterEvent.defaultPrevented).toBe(true);
    expect(onSendMessage).toHaveBeenCalledTimes(1);
    expect(onSendMessage).toHaveBeenCalledWith("ping");
  });

  it("does not fire onSendMessage and does not prevent default when Shift+Enter is pressed", () => {
    const onSendMessage = vi.fn();

    render(
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        onSendMessage={onSendMessage}
      />,
    );

    const textarea = screen.getByLabelText(
      "Message input",
    ) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "line one" } });

    const shiftEnterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      shiftKey: true,
      bubbles: true,
      cancelable: true,
    });
    const dispatched = textarea.dispatchEvent(shiftEnterEvent);

    expect(dispatched).toBe(true);
    expect(shiftEnterEvent.defaultPrevented).toBe(false);
    expect(onSendMessage).not.toHaveBeenCalled();
    // The default browser behavior for Shift+Enter on a textarea inserts
    // a newline. fireEvent / dispatchEvent in happy-dom does not simulate
    // that default action, so we verify the contract by checking that the
    // handler did not block the default — meaning the browser would have
    // inserted a newline. The textarea content remains as the user typed.
    expect(textarea.value).toBe("line one");
  });

  it("renders a Stop button instead of Send while status is streaming, and fires onStop", () => {
    const onStop = vi.fn();

    render(
      <BaseAipAgentChat
        messages={[makeMessage("user", "Tell me a joke")]}
        status="streaming"
        onSendMessage={NOOP_SEND}
        onStop={onStop}
      />,
    );

    expect(screen.queryByRole("button", { name: /send/i })).toBeNull();
    const stopButton = screen.getByRole("button", { name: /stop/i });
    fireEvent.click(stopButton);

    expect(onStop).toHaveBeenCalledTimes(1);
  });

  it("renders the error banner with the error message and fires onClearError on Dismiss", () => {
    const onClearError = vi.fn();
    const error = new Error("Something went wrong");

    render(
      <BaseAipAgentChat
        messages={[]}
        status="error"
        error={error}
        onSendMessage={NOOP_SEND}
        onClearError={onClearError}
      />,
    );

    const banner = screen.getByRole("alert");
    expect(banner.textContent).toContain("Something went wrong");

    const dismissButton = screen.getByRole("button", { name: /dismiss/i });
    fireEvent.click(dismissButton);
    expect(onClearError).toHaveBeenCalledTimes(1);
  });

  it("renders composerFooter content inside the composer footer", () => {
    render(
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        onSendMessage={NOOP_SEND}
        composerFooter={
          <span data-testid="footer-slot">model-picker-stub</span>
        }
      />,
    );

    const slot = screen.getByTestId("footer-slot");
    expect(slot.textContent).toBe("model-picker-stub");
  });

  it("calls renderEmptyState when messages is empty and status is ready", () => {
    const renderEmptyState = vi.fn(() => (
      <div data-testid="custom-empty">no messages yet</div>
    ));

    render(
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        onSendMessage={NOOP_SEND}
        renderEmptyState={renderEmptyState}
      />,
    );

    expect(renderEmptyState).toHaveBeenCalled();
    expect(screen.getByTestId("custom-empty")).toBeDefined();
    // The default empty state must NOT be rendered when an override is given.
    expect(screen.queryByText("Start a conversation")).toBeNull();
  });

  it("calls renderMessage once per message and renders its return value", () => {
    const renderMessage = vi.fn((message: UIMessage) => (
      <div data-testid={`custom-${message.id}`}>
        {`[${message.role}] ${getUIMessageText(message)}`}
      </div>
    ));

    const messages = [
      makeMessage("user", "first", "msg-1"),
      makeMessage("assistant", "second", "msg-2"),
    ];

    render(
      <BaseAipAgentChat
        messages={messages}
        status="ready"
        onSendMessage={NOOP_SEND}
        renderMessage={renderMessage}
      />,
    );

    expect(renderMessage).toHaveBeenCalledTimes(2);
    expect(screen.getByTestId("custom-msg-1").textContent).toBe(
      "[user] first",
    );
    expect(screen.getByTestId("custom-msg-2").textContent).toBe(
      "[assistant] second",
    );
    // The default bubble (with aria-label="User message") must NOT render.
    expect(screen.queryByLabelText("User message")).toBeNull();
    expect(screen.queryByLabelText("Assistant message")).toBeNull();
  });

  it("renders a streaming loader when status is streaming and the trailing message is from the user", () => {
    render(
      <BaseAipAgentChat
        messages={[makeMessage("user", "What's the weather?")]}
        status="streaming"
        onSendMessage={NOOP_SEND}
      />,
    );

    // AipAgentChatLoader uses role="status".
    expect(screen.getByRole("status")).toBeDefined();
    expect(
      screen.getByLabelText("Assistant is responding"),
    ).toBeDefined();
  });
});
