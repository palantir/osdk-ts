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
import { MessageList } from "../MessageList.js";
import type {
  Message,
  MessageListRef,
  RenderedContextItem,
} from "../MessageListApi.js";

afterEach(() => {
  cleanup();
});

describe("MessageList", () => {
  it("exposes role=log with aria-live polite", () => {
    render(<MessageList messages={[]} />);
    const log = screen.getByRole("log");
    expect(log.getAttribute("aria-live")).toBe("polite");
  });

  it("renders a user message", () => {
    const messages: Message[] = [
      { id: "u1", role: "user", text: "Hello agent" },
    ];
    render(<MessageList messages={messages} />);
    expect(screen.getByText("Hello agent")).toBeTruthy();
  });

  it("renders an agent message with parts", () => {
    const messages: Message[] = [
      {
        id: "a1",
        role: "agent",
        status: "done",
        parts: [{ type: "text", text: "Hi user" }],
      },
    ];
    render(<MessageList messages={messages} />);
    expect(screen.getByText("Hi user")).toBeTruthy();
  });

  it("renders a typing indicator for streaming agent messages", () => {
    const messages: Message[] = [
      { id: "a1", role: "agent", status: "streaming" },
    ];
    render(<MessageList messages={messages} />);
    expect(screen.getByRole("status")).toBeTruthy();
  });

  it("renders an error label for failed agent messages", () => {
    const messages: Message[] = [
      {
        id: "a1",
        role: "agent",
        status: "failed",
        errorMessage: "Backend timed out",
      },
    ];
    render(<MessageList messages={messages} />);
    expect(screen.getByText("Error:")).toBeTruthy();
    expect(screen.getByText("Backend timed out")).toBeTruthy();
  });

  it("renders a tool call with name, input, and pending status", () => {
    const messages: Message[] = [
      {
        id: "a1",
        role: "agent",
        status: "done",
        parts: [
          {
            type: "toolCall",
            toolCall: {
              id: "tc-1",
              name: "search_employees",
              input: "{ \"query\": \"ada\" }",
              result: { type: "pending" },
            },
          },
        ],
      },
    ];
    render(<MessageList messages={messages} />);
    expect(screen.getByText("search_employees")).toBeTruthy();
    expect(screen.getByText("tc-1")).toBeTruthy();
    expect(screen.getByText("Input:")).toBeTruthy();
    expect(screen.getByText("resolving")).toBeTruthy();
  });

  it("renders the loaded badge for a loaded tool call with no context items", () => {
    const messages: Message[] = [
      {
        id: "a1",
        role: "agent",
        status: "done",
        parts: [
          {
            type: "toolCall",
            toolCall: {
              id: "tc-1",
              name: "ping",
              input: "",
              result: { type: "loaded" },
            },
          },
        ],
      },
    ];
    render(<MessageList messages={messages} />);
    expect(screen.getByText("loaded")).toBeTruthy();
  });

  it("renders Output: with default JSON view for loaded tool call with context items", () => {
    const messages: Message[] = [
      {
        id: "a1",
        role: "agent",
        status: "done",
        parts: [
          {
            type: "toolCall",
            toolCall: {
              id: "tc-1",
              name: "search_employees",
              input: "",
              result: {
                type: "loaded",
                contextItems: [
                  {
                    id: "ctx-1",
                    type: "employee",
                    data: { firstName: "Ada" },
                  },
                ],
              },
            },
          },
        ],
      },
    ];
    render(<MessageList messages={messages} />);
    expect(screen.getByText("Output:")).toBeTruthy();
    expect(screen.getByText("employee")).toBeTruthy();
    expect(screen.getByText(/"firstName": "Ada"/)).toBeTruthy();
  });

  it("renders failed tool call with error message", () => {
    const messages: Message[] = [
      {
        id: "a1",
        role: "agent",
        status: "done",
        parts: [
          {
            type: "toolCall",
            toolCall: {
              id: "tc-1",
              name: "search_employees",
              input: "",
              result: { type: "failed", errorMessage: "permission denied" },
            },
          },
        ],
      },
    ];
    render(<MessageList messages={messages} />);
    expect(screen.getByText("failed")).toBeTruthy();
    expect(screen.getByText("permission denied")).toBeTruthy();
  });

  it("invokes renderContextItem for context items when provided", () => {
    const renderContextItem = vi.fn(
      (item: RenderedContextItem) => <div>custom-{item.type}</div>,
    );
    const messages: Message[] = [
      {
        id: "u1",
        role: "user",
        text: "hi",
        contextItems: [{ id: "ctx-1", type: "employee" }],
      },
    ];
    render(
      <MessageList
        messages={messages}
        renderContextItem={renderContextItem}
      />,
    );
    expect(renderContextItem).toHaveBeenCalledTimes(1);
    expect(screen.getByText("custom-employee")).toBeTruthy();
  });

  it("falls back to default JSON view when renderContextItem returns null", () => {
    const messages: Message[] = [
      {
        id: "u1",
        role: "user",
        text: "hi",
        contextItems: [
          { id: "ctx-1", type: "employee", data: { name: "Ada" } },
        ],
      },
    ];
    render(
      <MessageList messages={messages} renderContextItem={() => null} />,
    );
    expect(screen.getByText("employee")).toBeTruthy();
    expect(screen.getByText(/"name": "Ada"/)).toBeTruthy();
  });

  it("renders inProgressMessage in sending state", () => {
    render(
      <MessageList
        messages={[]}
        inProgressMessage={{ type: "sending", text: "outgoing" }}
      />,
    );
    expect(screen.getByText("outgoing")).toBeTruthy();
  });

  it("renders inProgressMessage in failed state with error", () => {
    render(
      <MessageList
        messages={[]}
        inProgressMessage={{
          type: "failed",
          text: "outgoing",
          error: "send failed",
        }}
      />,
    );
    expect(screen.getByText("outgoing")).toBeTruthy();
    expect(screen.getByText("send failed")).toBeTruthy();
  });

  it("merges className onto the root", () => {
    const { container } = render(
      <MessageList messages={[]} className="custom-list" />,
    );
    expect(container.firstElementChild?.classList.contains("custom-list"))
      .toBe(true);
  });

  it("exposes scrollToBottom and scrollContainer via imperative ref", () => {
    const ref = React.createRef<MessageListRef>();
    const messages: Message[] = [
      { id: "u1", role: "user", text: "one" },
      { id: "u2", role: "user", text: "two" },
    ];
    render(<MessageList ref={ref} messages={messages} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.scrollContainer).not.toBeNull();
    const scrollToSpy = vi.fn();
    if (ref.current?.scrollContainer != null) {
      ref.current.scrollContainer.scrollTo = scrollToSpy;
    }
    ref.current?.scrollToBottom();
    expect(scrollToSpy).toHaveBeenCalledTimes(1);
    expect(scrollToSpy.mock.calls[0]?.[0]).toMatchObject({
      behavior: "smooth",
    });
  });

  it("scrollToBottom respects custom behavior option", () => {
    const ref = React.createRef<MessageListRef>();
    render(<MessageList ref={ref} messages={[]} />);
    const scrollToSpy = vi.fn();
    if (ref.current?.scrollContainer != null) {
      ref.current.scrollContainer.scrollTo = scrollToSpy;
    }
    ref.current?.scrollToBottom({ behavior: "auto" });
    expect(scrollToSpy.mock.calls[0]?.[0]).toMatchObject({
      behavior: "auto",
    });
  });
});
