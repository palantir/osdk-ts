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

import type {
  LanguageModelV3Message,
  LanguageModelV3Prompt,
  SharedV3Warning,
} from "@ai-sdk/provider";

export interface OpenAiMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string | Array<{ type: "text"; text: string }> | null;
  tool_calls?: Array<OpenAiAssistantToolCall>;
  tool_call_id?: string;
}

export interface OpenAiAssistantToolCall {
  id: string;
  type: "function";
  function: { name: string; arguments: string };
}

export function convertPrompt(
  prompt: LanguageModelV3Prompt,
  warnings: Array<SharedV3Warning>,
): Array<OpenAiMessage> {
  const messages: Array<OpenAiMessage> = [];

  for (const message of prompt) {
    messages.push(...convertMessage(message, warnings));
  }

  return messages;
}

function convertMessage(
  message: LanguageModelV3Message,
  warnings: Array<SharedV3Warning>,
): Array<OpenAiMessage> {
  switch (message.role) {
    case "system":
      return [{ role: "system", content: message.content }];

    case "user": {
      const parts: Array<{ type: "text"; text: string }> = [];
      for (const part of message.content) {
        switch (part.type) {
          case "text":
            parts.push({ type: "text", text: part.text });
            break;
          case "file":
            warnings.push({
              type: "unsupported",
              feature: "user file content",
              details:
                "File content in user messages is not supported in v0 — ignored",
            });
            break;
        }
      }
      return [{ role: "user", content: parts }];
    }

    case "assistant": {
      let text = "";
      const toolCalls: Array<OpenAiAssistantToolCall> = [];
      for (const part of message.content) {
        switch (part.type) {
          case "text":
            text += part.text;
            break;
          case "tool-call":
            toolCalls.push({
              id: part.toolCallId,
              type: "function",
              function: {
                name: part.toolName,
                arguments: typeof part.input === "string"
                  ? part.input
                  : JSON.stringify(part.input ?? {}),
              },
            });
            break;
          case "reasoning":
          case "file":
          case "tool-result":
            warnings.push({
              type: "unsupported",
              feature: `assistant ${part.type} content`,
              details:
                `"${part.type}" parts in assistant messages are not supported in v0 — ignored`,
            });
            break;
        }
      }
      return [{
        role: "assistant",
        content: text.length > 0 ? text : null,
        tool_calls: toolCalls.length > 0 ? toolCalls : undefined,
      }];
    }

    case "tool":
      return message.content
        .filter(
          (part): part is Extract<typeof part, { type: "tool-result" }> => {
            if (part.type === "tool-result") return true;
            warnings.push({
              type: "unsupported",
              feature: `tool ${part.type} content`,
              details:
                `"${part.type}" parts in tool messages are not supported in v0 — ignored`,
            });
            return false;
          },
        )
        .map((part) => ({
          role: "tool" as const,
          content: stringifyToolResult(part, warnings),
          tool_call_id: part.toolCallId,
        }));
  }
}

function stringifyToolResult(
  part: { type: "tool-result"; output: unknown },
  warnings: Array<SharedV3Warning>,
): string {
  const output = part.output as
    | { type: string; value?: unknown; reason?: string }
    | undefined;
  if (output == null) return "";

  switch (output.type) {
    case "text":
    case "error-text":
      return typeof output.value === "string" ? output.value : "";
    case "json":
    case "error-json":
      return JSON.stringify(output.value);
    case "execution-denied":
      return output.reason ?? "Tool execution denied";
    case "content":
      return ((output.value as Array<{ type: string; text?: string }>) ?? [])
        .map((c) => {
          if (c.type === "text") return c.text ?? "";
          warnings.push({
            type: "unsupported",
            feature: "tool result media content",
            details:
              "Non-text tool result content is not supported in v0 — ignored",
          });
          return "";
        })
        .filter((s) => s.length > 0)
        .join("\n");
    default:
      return JSON.stringify(output);
  }
}
