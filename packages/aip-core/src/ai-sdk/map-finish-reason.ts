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

import type { LanguageModelV3FinishReason } from "@ai-sdk/provider";

export function mapFinishReason(
  raw: string | undefined,
): LanguageModelV3FinishReason {
  let unified: LanguageModelV3FinishReason["unified"];
  switch (raw) {
    case "stop":
      unified = "stop";
      break;
    case "length":
      unified = "length";
      break;
    case "tool_calls":
    case "function_call":
      unified = "tool-calls";
      break;
    case "content_filter":
      unified = "content-filter";
      break;
    default:
      unified = "other";
      break;
  }
  return { unified, raw };
}
