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

import type { UIMessage } from "ai";
import { describe, expect, it } from "vitest";
import { uiMessagesToModelMessages } from "./uiMessageBridge.js";

function uiMsg(
  role: UIMessage["role"],
  text: string,
  id: string = `m-${role}-${text.slice(0, 6)}`,
): UIMessage {
  return {
    id,
    role,
    parts: [{ type: "text", text }],
  };
}

describe("uiMessagesToModelMessages", () => {
  it("returns just the system message when only `system` is provided", () => {
    expect(uiMessagesToModelMessages([], "be concise")).toEqual([
      { role: "system", content: "be concise" },
    ]);
  });

  it("returns an empty array when no input is provided", () => {
    expect(uiMessagesToModelMessages([])).toEqual([]);
  });

  it("prepends the system prompt before user/assistant turns", () => {
    const messages = [uiMsg("user", "hello"), uiMsg("assistant", "hi there")];
    expect(uiMessagesToModelMessages(messages, "you are a helper")).toEqual([
      { role: "system", content: "you are a helper" },
      { role: "user", content: "hello" },
      { role: "assistant", content: "hi there" },
    ]);
  });

  it("concatenates text parts within a single message", () => {
    const m: UIMessage = {
      id: "m-1",
      role: "user",
      parts: [
        { type: "text", text: "hello " },
        { type: "text", text: "world" },
      ],
    };
    expect(uiMessagesToModelMessages([m])).toEqual([
      { role: "user", content: "hello world" },
    ]);
  });

  it("drops messages whose only parts are non-text", () => {
    const m: UIMessage = {
      id: "m-1",
      role: "user",
      parts: [
        {
          type: "file",
          url: "data:image/png;base64,xx",
          mediaType: "image/png",
        },
      ],
    };
    expect(uiMessagesToModelMessages([m])).toEqual([]);
  });

  it("preserves a system role embedded in the message list", () => {
    const messages = [uiMsg("system", "hidden hint"), uiMsg("user", "?")];
    expect(uiMessagesToModelMessages(messages)).toEqual([
      { role: "system", content: "hidden hint" },
      { role: "user", content: "?" },
    ]);
  });

  it("ignores empty string `system` prop", () => {
    const messages = [uiMsg("user", "hi")];
    expect(uiMessagesToModelMessages(messages, "")).toEqual([
      { role: "user", content: "hi" },
    ]);
  });

  it("drops UI system messages when `system` prop is provided (no double-prepend)", () => {
    const messages = [
      uiMsg("system", "from UI"),
      uiMsg("user", "hello"),
    ];
    expect(uiMessagesToModelMessages(messages, "from transport")).toEqual([
      { role: "system", content: "from transport" },
      { role: "user", content: "hello" },
    ]);
  });
});
