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

import { describe, expect, it } from "vitest";
import { mapFinishReason } from "./map-finish-reason.js";

describe("mapFinishReason", () => {
  it("maps 'stop' correctly", () => {
    expect(mapFinishReason("stop")).toEqual({ unified: "stop", raw: "stop" });
  });

  it("maps 'length' correctly", () => {
    expect(mapFinishReason("length")).toEqual({
      unified: "length",
      raw: "length",
    });
  });

  it("maps 'tool_calls' to 'tool-calls'", () => {
    expect(mapFinishReason("tool_calls")).toEqual({
      unified: "tool-calls",
      raw: "tool_calls",
    });
  });

  it("maps 'function_call' to 'tool-calls'", () => {
    expect(mapFinishReason("function_call")).toEqual({
      unified: "tool-calls",
      raw: "function_call",
    });
  });

  it("maps 'content_filter' to 'content-filter'", () => {
    expect(mapFinishReason("content_filter")).toEqual({
      unified: "content-filter",
      raw: "content_filter",
    });
  });

  it("maps unknown values to 'other'", () => {
    expect(mapFinishReason("something_else")).toEqual({
      unified: "other",
      raw: "something_else",
    });
  });

  it("maps undefined to 'other'", () => {
    expect(mapFinishReason(undefined)).toEqual({
      unified: "other",
      raw: undefined,
    });
  });
});
