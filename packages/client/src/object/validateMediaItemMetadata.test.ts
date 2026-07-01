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

import { validateMediaItemMetadata } from "./validateMediaItemMetadata.js";

describe("validateMediaItemMetadata", () => {
  it("passes a known variant through unchanged", () => {
    const raw = { type: "imagery", format: "PNG", sizeBytes: 1024, bands: [] };
    expect(validateMediaItemMetadata(raw)).toBe(raw);
  });

  it("wraps an unknown variant as UnknownMediaItemMetadata, preserving the raw payload", () => {
    const raw = {
      type: "streamingVideo",
      duration: 120,
      codec: "h264",
      sizeBytes: 5_000_000,
    };
    const result = validateMediaItemMetadata(raw);
    expect(result.type).toBe("unknown");
    // type-narrow for field access
    if (result.type === "unknown") {
      expect(result.raw).toBe(raw);
      expect(result.raw.type).toBe("streamingVideo");
      expect(result.raw.duration).toBe(120);
      expect(result.raw.codec).toBe("h264");
    }
  });
});
