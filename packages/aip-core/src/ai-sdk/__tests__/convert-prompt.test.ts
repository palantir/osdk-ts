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

import type { LanguageModelV3Prompt, SharedV3Warning } from "@ai-sdk/provider";
import { describe, expect, it } from "vitest";
import { convertPrompt } from "../convert-prompt.js";

describe("convertPrompt", () => {
  it("converts system messages", () => {
    const warnings: Array<SharedV3Warning> = [];
    const result = convertPrompt(
      [{ role: "system", content: "Be helpful." }],
      warnings,
    );
    expect(result).toEqual([{ role: "system", content: "Be helpful." }]);
    expect(warnings).toHaveLength(0);
  });

  it("converts user text messages", () => {
    const warnings: Array<SharedV3Warning> = [];
    const result = convertPrompt(
      [{ role: "user", content: [{ type: "text", text: "Hello" }] }],
      warnings,
    );
    expect(result).toEqual([{
      role: "user",
      content: [{ type: "text", text: "Hello" }],
    }]);
  });

  it("warns on file parts in user messages and produces non-empty content", () => {
    const warnings: Array<SharedV3Warning> = [];
    const result = convertPrompt(
      [{
        role: "user",
        content: [{ type: "file", data: "base64data", mediaType: "image/png" }],
      }],
      warnings,
    );
    expect(warnings).toHaveLength(1);
    expect(warnings[0].type).toBe("unsupported");
    // Should produce a fallback empty text part instead of an empty array
    expect(result[0].content).toEqual([{ type: "text", text: "" }]);
  });

  it("converts assistant messages with text and tool calls", () => {
    const warnings: Array<SharedV3Warning> = [];
    const prompt: LanguageModelV3Prompt = [{
      role: "assistant",
      content: [
        { type: "text", text: "Let me check." },
        {
          type: "tool-call",
          toolCallId: "call_1",
          toolName: "search",
          input: { query: "test" },
        },
      ],
    }];
    const result = convertPrompt(prompt, warnings);
    expect(result).toEqual([{
      role: "assistant",
      content: "Let me check.",
      tool_calls: [{
        id: "call_1",
        type: "function",
        function: {
          name: "search",
          arguments: "{\"query\":\"test\"}",
        },
      }],
    }]);
  });

  it("converts tool result messages with text output", () => {
    const warnings: Array<SharedV3Warning> = [];
    const prompt: LanguageModelV3Prompt = [{
      role: "tool",
      content: [{
        type: "tool-result",
        toolCallId: "call_1",
        toolName: "search",
        output: { type: "text", value: "Found 3 results" },
      }],
    }];
    const result = convertPrompt(prompt, warnings);
    expect(result).toEqual([{
      role: "tool",
      content: "Found 3 results",
      tool_call_id: "call_1",
    }]);
  });

  it("converts tool result messages with JSON output", () => {
    const warnings: Array<SharedV3Warning> = [];
    const prompt: LanguageModelV3Prompt = [{
      role: "tool",
      content: [{
        type: "tool-result",
        toolCallId: "call_1",
        toolName: "search",
        output: { type: "json", value: { count: 3 } },
      }],
    }];
    const result = convertPrompt(prompt, warnings);
    expect(result[0].content).toBe("{\"count\":3}");
  });

  it("handles execution-denied tool results", () => {
    const warnings: Array<SharedV3Warning> = [];
    const prompt: LanguageModelV3Prompt = [{
      role: "tool",
      content: [{
        type: "tool-result",
        toolCallId: "call_1",
        toolName: "dangerous",
        output: { type: "execution-denied", reason: "Not allowed" },
      }],
    }];
    const result = convertPrompt(prompt, warnings);
    expect(result[0].content).toBe("Not allowed");
  });
});
