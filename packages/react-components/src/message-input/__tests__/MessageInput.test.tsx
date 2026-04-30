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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MessageInput } from "../MessageInput.js";

afterEach(() => {
  cleanup();
});

function submitForm(container: HTMLElement): void {
  const form = container.querySelector("form");
  if (form == null) {
    throw new Error("form not found");
  }
  fireEvent.submit(form);
}

describe("MessageInput", () => {
  it("renders the input with default placeholder", () => {
    render(<MessageInput onSendMessage={vi.fn()} />);
    expect(screen.getByPlaceholderText("Type a message…")).toBeTruthy();
  });

  it("renders the input with a custom placeholder", () => {
    render(<MessageInput onSendMessage={vi.fn()} placeholder="Ask me" />);
    expect(screen.getByPlaceholderText("Ask me")).toBeTruthy();
  });

  it("renders the send button with default label", () => {
    render(<MessageInput onSendMessage={vi.fn()} />);
    expect(
      screen.getByRole("button", { name: /send/i }).textContent,
    ).toContain("Send");
  });

  it("renders a custom send button label", () => {
    render(<MessageInput onSendMessage={vi.fn()} sendLabel="Submit" />);
    expect(
      screen.getByRole("button", { name: /submit/i }).textContent,
    ).toContain("Submit");
  });

  it("disables the send button when text is empty", () => {
    render(<MessageInput onSendMessage={vi.fn()} />);
    const send = screen.getByRole("button", { name: /send/i });
    expect((send as HTMLButtonElement).disabled).toBe(true);
  });

  it("enables the send button when text is non-empty", () => {
    render(<MessageInput onSendMessage={vi.fn()} />);
    const input = screen.getByPlaceholderText("Type a message…");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(
      (screen.getByRole("button", { name: /send/i }) as HTMLButtonElement)
        .disabled,
    ).toBe(false);
  });

  it("disables the send button while text is only whitespace", () => {
    render(<MessageInput onSendMessage={vi.fn()} />);
    const input = screen.getByPlaceholderText("Type a message…");
    fireEvent.change(input, { target: { value: "   " } });
    expect(
      (screen.getByRole("button", { name: /send/i }) as HTMLButtonElement)
        .disabled,
    ).toBe(true);
  });

  it("calls onSendMessage with trimmed text on submit", () => {
    const onSendMessage = vi.fn();
    const { container } = render(
      <MessageInput onSendMessage={onSendMessage} />,
    );
    const input = screen.getByPlaceholderText("Type a message…");
    fireEvent.change(input, { target: { value: "  hello  " } });
    submitForm(container);
    expect(onSendMessage).toHaveBeenCalledWith("hello");
  });

  it("clears the input after sending", () => {
    const { container } = render(<MessageInput onSendMessage={vi.fn()} />);
    const input = screen.getByPlaceholderText(
      "Type a message…",
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hello" } });
    submitForm(container);
    expect(input.value).toBe("");
  });

  it("does not send when disabled", () => {
    const onSendMessage = vi.fn();
    const { container } = render(
      <MessageInput onSendMessage={onSendMessage} disabled={true} />,
    );
    const input = screen.getByPlaceholderText("Type a message…");
    fireEvent.change(input, { target: { value: "hi" } });
    submitForm(container);
    expect(onSendMessage).not.toHaveBeenCalled();
  });

  it("hides the actions row when no slots / handlers are provided", () => {
    const { container } = render(<MessageInput onSendMessage={vi.fn()} />);
    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toBe(1);
  });

  it("renders the attachmentTrigger slot when provided", () => {
    render(
      <MessageInput
        onSendMessage={vi.fn()}
        attachmentTrigger={<button type="button">Attach</button>}
      />,
    );
    expect(screen.getByRole("button", { name: "Attach" })).toBeTruthy();
  });

  it("renders the configure button only when onConfigure is provided", () => {
    const onConfigure = vi.fn();
    render(
      <MessageInput onSendMessage={vi.fn()} onConfigure={onConfigure} />,
    );
    const configure = screen.getByRole("button", { name: /configure/i });
    fireEvent.click(configure);
    expect(onConfigure).toHaveBeenCalledTimes(1);
  });

  it("renders the auto-scroll toggle only when both autoScroll and onAutoScrollChange are provided", () => {
    const onAutoScrollChange = vi.fn();
    render(
      <MessageInput
        onSendMessage={vi.fn()}
        autoScroll={true}
        onAutoScrollChange={onAutoScrollChange}
      />,
    );
    const checkbox = screen.getByRole("checkbox", { name: /auto-scroll/i });
    expect((checkbox as HTMLInputElement).checked).toBe(true);
    fireEvent.click(checkbox);
    expect(onAutoScrollChange).toHaveBeenCalledWith(false);
  });

  it("hides the auto-scroll toggle when only autoScroll is provided", () => {
    render(<MessageInput onSendMessage={vi.fn()} autoScroll={true} />);
    expect(screen.queryByRole("checkbox")).toBeNull();
  });

  it("merges className onto the form root", () => {
    const { container } = render(
      <MessageInput onSendMessage={vi.fn()} className="custom-form" />,
    );
    expect(container.firstElementChild?.classList.contains("custom-form"))
      .toBe(true);
  });
});
