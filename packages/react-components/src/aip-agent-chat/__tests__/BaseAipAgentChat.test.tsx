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
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
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

function defer<T>(): {
  promise: Promise<T>;
  resolve: (v: T) => void;
  reject: (e: Error) => void;
} {
  let resolve!: (v: T) => void;
  let reject!: (e: Error) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

const NOOP_SEND: (text: string) => Promise<UIMessage> = async (text) =>
  makeMessage("assistant", `echo: ${text}`);

describe("BaseAipAgentChat", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders the default empty state when there are no messages and no in-flight send", () => {
    render(<BaseAipAgentChat onSendMessage={NOOP_SEND} />);

    expect(screen.getByText("Start a conversation")).toBeDefined();
    expect(
      screen.getByText("Type a message below to chat with the assistant."),
    ).toBeDefined();
  });

  it("renders initialMessages immediately on mount", () => {
    const userMsg = makeMessage("user", "Hello there");
    const assistantMsg = makeMessage("assistant", "Hi back!");

    render(
      <BaseAipAgentChat
        initialMessages={[userMsg, assistantMsg]}
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
    render(<BaseAipAgentChat onSendMessage={NOOP_SEND} />);

    const sendButton = screen.getByRole("button", { name: /send/i });
    expect((sendButton as HTMLButtonElement).disabled).toBe(true);
  });

  it("appends a user bubble, fires onMessageSent, and clears the textarea on Send click", async () => {
    const deferred = defer<UIMessage>();
    const onSendMessage = vi.fn(async (_text: string) => deferred.promise);
    const onMessageSent = vi.fn();

    render(
      <BaseAipAgentChat
        onMessageSent={onMessageSent}
        onSendMessage={onSendMessage}
      />,
    );

    const textarea = screen.getByLabelText(
      "Message input",
    ) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "hello world" } });

    const sendButton = screen.getByRole("button", { name: /send/i });
    expect((sendButton as HTMLButtonElement).disabled).toBe(false);

    fireEvent.click(sendButton);

    expect(onSendMessage).toHaveBeenCalledTimes(1);
    expect(onSendMessage.mock.calls[0]![0]).toBe("hello world");
    expect(textarea.value).toBe("");

    const userGroup = screen.getByLabelText("User message");
    expect(userGroup.textContent).toContain("hello world");

    expect(onMessageSent).toHaveBeenCalledTimes(1);
    const sentMessage = onMessageSent.mock.calls[0]![0] as UIMessage;
    expect(sentMessage.role).toBe("user");
    expect(getUIMessageText(sentMessage)).toBe("hello world");

    // Resolve to settle the deferred and avoid open promise leaks.
    await act(async () => {
      deferred.resolve(makeMessage("assistant", "ok"));
      await deferred.promise;
    });
  });

  it("fires the same flow when Enter is pressed without Shift", async () => {
    const deferred = defer<UIMessage>();
    const onSendMessage = vi.fn(async (_text: string) => deferred.promise);
    const onMessageSent = vi.fn();

    render(
      <BaseAipAgentChat
        onMessageSent={onMessageSent}
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
    let dispatched = true;
    await act(async () => {
      dispatched = textarea.dispatchEvent(enterEvent);
    });

    // dispatchEvent returns false when preventDefault was called.
    expect(dispatched).toBe(false);
    expect(enterEvent.defaultPrevented).toBe(true);
    expect(onSendMessage).toHaveBeenCalledTimes(1);
    expect(onSendMessage.mock.calls[0]![0]).toBe("ping");
    expect(textarea.value).toBe("");

    expect(onMessageSent).toHaveBeenCalledTimes(1);
    expect(getUIMessageText(onMessageSent.mock.calls[0]![0] as UIMessage))
      .toBe("ping");

    await act(async () => {
      deferred.resolve(makeMessage("assistant", "pong"));
      await deferred.promise;
    });
  });

  it("does not fire onSendMessage and does not prevent default on Shift+Enter", () => {
    const onSendMessage = vi.fn(async (_text: string) =>
      makeMessage("assistant", "x")
    );

    render(<BaseAipAgentChat onSendMessage={onSendMessage} />);

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
    // The default browser behavior for Shift+Enter on a textarea inserts a
    // newline. dispatchEvent in jsdom does not simulate that default action,
    // so we verify the contract by checking the handler did not block the
    // default — meaning the browser would have inserted a newline.
    expect(textarea.value).toBe("line one");
  });

  it("swaps Send for Stop while the send is in flight; clicking Stop aborts and returns to ready", async () => {
    const deferred = defer<UIMessage>();
    let capturedSignal: AbortSignal | undefined;
    const onSendMessage = vi.fn(async (_text: string, ctx) => {
      capturedSignal = ctx.signal;
      return deferred.promise;
    });

    render(<BaseAipAgentChat onSendMessage={onSendMessage} />);

    const textarea = screen.getByLabelText(
      "Message input",
    ) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "hi" } });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    // While in-flight, Send is replaced by Stop.
    expect(screen.queryByRole("button", { name: /send/i })).toBeNull();
    const stopButton = screen.getByRole("button", { name: /stop/i });

    fireEvent.click(stopButton);

    expect(capturedSignal).toBeDefined();
    expect(capturedSignal!.aborted).toBe(true);

    // Resolve the deferred via rejection (the signal is aborted, so the
    // component treats the rejection as a clean cancel and returns to ready).
    await act(async () => {
      deferred.reject(new Error("aborted"));
      // Allow the awaited rejection to be processed by the component.
      await Promise.resolve();
      await Promise.resolve();
    });

    // Stop is gone; Send is back; no error banner.
    expect(screen.queryByRole("alert")).toBeNull();
    expect(screen.queryByRole("button", { name: /stop/i })).toBeNull();
    expect(screen.getByRole("button", { name: /send/i })).toBeDefined();
  });

  it("renders the resolved assistant message and fires onResponseReceived once", async () => {
    const deferred = defer<UIMessage>();
    const onSendMessage = vi.fn(async (_text: string) => deferred.promise);
    const onResponseReceived = vi.fn();

    render(
      <BaseAipAgentChat
        onResponseReceived={onResponseReceived}
        onSendMessage={onSendMessage}
      />,
    );

    fireEvent.change(screen.getByLabelText("Message input"), {
      target: { value: "what's up" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    const finalAssistant = makeMessage("assistant", "all good");
    await act(async () => {
      deferred.resolve(finalAssistant);
      await deferred.promise;
    });

    const assistantBubbles = screen.getAllByLabelText("Assistant message");
    const lastBubble = assistantBubbles[assistantBubbles.length - 1]!;
    expect(lastBubble.textContent).toContain(getUIMessageText(finalAssistant));

    expect(onResponseReceived).toHaveBeenCalledTimes(1);
    expect(onResponseReceived.mock.calls[0]![0]).toBe(finalAssistant);
  });

  it("renders a transient assistant bubble while setStreamingText is called", async () => {
    const deferred = defer<UIMessage>();
    let captureSet: ((text: string) => void) | undefined;
    const onSendMessage = vi.fn(async (_text: string, ctx) => {
      captureSet = ctx.setStreamingText;
      return deferred.promise;
    });

    render(<BaseAipAgentChat onSendMessage={onSendMessage} />);

    fireEvent.change(screen.getByLabelText("Message input"), {
      target: { value: "stream me" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    expect(captureSet).toBeDefined();
    await act(async () => {
      captureSet!("partial");
    });

    const assistantBubbles = screen.getAllByLabelText("Assistant message");
    const lastBubble = assistantBubbles[assistantBubbles.length - 1]!;
    expect(lastBubble.textContent).toContain("partial");

    // Settle the deferred so we leave a clean state.
    await act(async () => {
      deferred.resolve(makeMessage("assistant", "final"));
      await deferred.promise;
    });
  });

  it("renders the error banner and fires onError when onSendMessage rejects", async () => {
    const deferred = defer<UIMessage>();
    const onSendMessage = vi.fn(async (_text: string) => deferred.promise);
    const onError = vi.fn();

    render(
      <BaseAipAgentChat
        onError={onError}
        onSendMessage={onSendMessage}
      />,
    );

    fireEvent.change(screen.getByLabelText("Message input"), {
      target: { value: "boom" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    const failure = new Error("Something went wrong");
    await act(async () => {
      deferred.reject(failure);
      await Promise.resolve();
      await Promise.resolve();
    });

    const banner = screen.getByRole("alert");
    expect(banner.textContent).toContain("Something went wrong");

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0]![0]).toBe(failure);
  });

  it("clears the error banner and returns to ready when Dismiss is clicked", async () => {
    const deferred = defer<UIMessage>();
    const onSendMessage = vi.fn(async (_text: string) => deferred.promise);

    render(<BaseAipAgentChat onSendMessage={onSendMessage} />);

    fireEvent.change(screen.getByLabelText("Message input"), {
      target: { value: "boom" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    await act(async () => {
      deferred.reject(new Error("Something went wrong"));
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(screen.getByRole("alert")).toBeDefined();

    fireEvent.click(screen.getByRole("button", { name: /dismiss/i }));

    expect(screen.queryByRole("alert")).toBeNull();
    expect(screen.getByRole("button", { name: /send/i })).toBeDefined();
  });

  it("renders composerFooter content inside the composer footer", () => {
    render(
      <BaseAipAgentChat
        composerFooter={
          <span data-testid="footer-slot">model-picker-stub</span>
        }
        onSendMessage={NOOP_SEND}
      />,
    );

    const slot = screen.getByTestId("footer-slot");
    expect(slot.textContent).toBe("model-picker-stub");
  });

  it("calls renderEmptyState when there are no messages and no in-flight state", () => {
    const renderEmptyState = vi.fn(() => (
      <div data-testid="custom-empty">no messages yet</div>
    ));

    render(
      <BaseAipAgentChat
        onSendMessage={NOOP_SEND}
        renderEmptyState={renderEmptyState}
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
        initialMessages={[userMsg, assistantMsg]}
        onSendMessage={NOOP_SEND}
        renderMessage={renderMessage}
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
