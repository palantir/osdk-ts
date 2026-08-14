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

import { describe, it } from "vitest";

/**
 * The OSDK wrapper {@link AipAgentChat} delegates its rendering to
 * {@link BaseAipAgentChat} (covered by `BaseAipAgentChat.test.tsx`) and wires
 * it to `useChat` from `@osdk/react/experimental/aip`. The behaviors below
 * are scaffolded as `it.todo` until a full mock harness for `useChat` lands.
 */
describe("AipAgentChat (OSDK wrapper)", () => {
  it.todo("calls useChat with the configured model");
  it.todo("wires sendMessage from useChat into BaseAipAgentChat");
  it.todo(
    "wraps activeModel and availableModels into a model picker rendered in composer footer",
  );
});
