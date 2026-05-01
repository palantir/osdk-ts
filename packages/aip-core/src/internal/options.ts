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

import type { ModelMessage, SystemModelMessage, Warning } from "../types.js";

export type SystemOption =
  | string
  | SystemModelMessage
  | Array<SystemModelMessage>
  | undefined;

export type PromptOption = string | Array<ModelMessage> | undefined;

export function resolveMessages(
  callerLabel: string,
  system: SystemOption,
  prompt: PromptOption,
  messages: Array<ModelMessage> | undefined,
): Array<ModelMessage> {
  if (prompt != null && messages != null) {
    throw new Error(
      `${callerLabel}: cannot specify both \`prompt\` and \`messages\`: choose one.`,
    );
  }

  const sys: Array<SystemModelMessage> = resolveSystem(system);
  const body: Array<ModelMessage> = resolveBody(prompt, messages);

  if (sys.length === 0 && body.length === 0) {
    throw new Error(
      `${callerLabel}: must provide at least one of \`system\`, \`prompt\`, or \`messages\`.`,
    );
  }

  return [...sys, ...body];
}

function resolveSystem(system: SystemOption): Array<SystemModelMessage> {
  if (system == null) {
    return [];
  }
  if (typeof system === "string") {
    return system === "" ? [] : [{ role: "system", content: system }];
  }
  if (Array.isArray(system)) {
    return system;
  }
  return [system];
}

function resolveBody(
  prompt: PromptOption,
  messages: Array<ModelMessage> | undefined,
): Array<ModelMessage> {
  if (messages != null) {
    return messages;
  }
  if (prompt == null) {
    return [];
  }
  if (typeof prompt === "string") {
    return [{ role: "user", content: prompt }];
  }
  return prompt;
}

export interface UnsupportedSetting<KEY extends string> {
  key: KEY;
  details?: string;
}

const COMMON_V0_UNSUPPORTED: ReadonlyArray<UnsupportedSetting<string>> = [
  { key: "activeTools" },
  { key: "topK", details: "OpenAI proxy does not accept top_k." },
  {
    key: "maxRetries",
    details: "Retries are handled by the underlying PlatformClient.fetch.",
  },
  { key: "timeout", details: "Use `abortSignal` with AbortSignal.timeout()." },
  { key: "providerOptions" },
];

export function collectV0Warnings(
  options: object,
  extras: ReadonlyArray<UnsupportedSetting<string>> = [],
): Array<Warning> {
  const bag = options as Record<string, unknown>;
  const warnings: Array<Warning> = [];
  for (const { key, details } of [...extras, ...COMMON_V0_UNSUPPORTED]) {
    if (bag[key] != null) {
      warnings.push({ type: "unsupported-setting", setting: key, details });
    }
  }
  return warnings;
}
