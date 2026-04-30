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
import type { ModelMessage } from "../types.js";

/**
 * Convert `UIMessage[]` from the `ai` package (the conversation shape
 * rendered in the UI) into `ModelMessage[]` (the shape `streamText` accepts).
 *
 * v0: text-only. File parts, reasoning parts, source parts, and tool-related
 * parts are dropped. Tool-result UIMessages (none in v0 either) would map to
 * `ToolModelMessage` once tool round-trips are wired up.
 *
 * When `system` is provided, any system-role messages already in `ui` are
 * dropped so the prompt isn't double-prepended — the transport-level
 * `system` wins.
 */
export function uiMessagesToModelMessages(
  ui: ReadonlyArray<UIMessage>,
  system?: string,
): Array<ModelMessage> {
  const out: Array<ModelMessage> = [];
  const transportSystemSet = system != null && system.length > 0;

  if (transportSystemSet) {
    out.push({ role: "system", content: system });
  }

  for (const m of ui) {
    const text = extractText(m);
    if (m.role === "system") {
      if (transportSystemSet) {
        continue;
      }
      if (text.length > 0) {
        out.push({ role: "system", content: text });
      }
      continue;
    }
    if (m.role === "user") {
      if (text.length > 0) {
        out.push({ role: "user", content: text });
      }
      continue;
    }
    if (m.role === "assistant") {
      if (text.length > 0) {
        out.push({ role: "assistant", content: text });
      }
      continue;
    }
  }

  return out;
}

function extractText(m: UIMessage): string {
  const parts = m.parts ?? [];
  let buf = "";
  for (const p of parts) {
    if (p.type === "text") {
      buf += p.text;
    }
  }
  return buf;
}
