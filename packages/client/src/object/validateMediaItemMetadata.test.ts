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
    const raw = {
      type: "imagery",
      format: "PNG",
      sizeBytes: 1024,
      sizeBytesLong: "1024",
      bands: [],
    };
    expect(validateMediaItemMetadata(raw)).toBe(raw);
  });

  it.each([
    "audio",
    "document",
    "imagery",
    "spreadsheet",
    "untyped",
    "model3d",
    "video",
    "dicom",
    "email",
  ])("preserves exact and legacy sizes for %s", (type) => {
    for (const sizeBytesLong of [
      "2147483647",
      "2147483648",
      "9007199254740993",
    ]) {
      const raw = { type, sizeBytes: 2147483647, sizeBytesLong };
      expect(validateMediaItemMetadata(raw)).toBe(raw);
    }
  });

  it("adds the long size for an older response without changing its legacy size", () => {
    const raw = { type: "untyped", sizeBytes: 1024 };
    expect(validateMediaItemMetadata(raw)).toEqual({
      type: "untyped",
      sizeBytes: 1024,
      sizeBytesLong: "1024",
    });
    expect(raw).toEqual({ type: "untyped", sizeBytes: 1024 });
  });

  it("rejects known metadata without either size field", () => {
    expect(() => validateMediaItemMetadata({ type: "untyped" })).toThrow();
  });

  it("rejects a non-string long size instead of using the capped legacy size", () => {
    expect(() =>
      validateMediaItemMetadata({
        type: "untyped",
        sizeBytes: 2147483647,
        sizeBytesLong: 2147483648,
      }),
    ).toThrow();
  });

  it("keeps CAD metadata and its exact size in the unknown payload", () => {
    const raw = {
      type: "cad",
      format: "STEP",
      sizeBytes: 2147483647,
      sizeBytesLong: "2147483648",
    };
    const result = validateMediaItemMetadata(raw);
    expect(result.type).toBe("unknown");
    if (result.type === "unknown") {
      expect(result.raw).toBe(raw);
    }
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
