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
import { createMockAttachment } from "../createMockAttachment.js";

describe("createMockAttachment", () => {
  const rid = "ri.attachments.main.attachment.abc123";

  it("sets the rid", () => {
    const attachment = createMockAttachment(rid);
    expect(attachment.rid).toBe(rid);
  });

  describe("fetchContents", () => {
    it("returns a Response with the provided blob", async () => {
      const blob = new Blob(["hello world"], { type: "text/plain" });
      const attachment = createMockAttachment(rid, blob);

      const response = await attachment.fetchContents();
      const text = await response.text();

      expect(text).toBe("hello world");
    });

    it("throws when no blob was provided", () => {
      const attachment = createMockAttachment(rid);

      expect(() => attachment.fetchContents()).toThrow(
        `fetchContents was called on mock attachment "${rid}" but no blob was provided.`,
      );
    });
  });

  describe("fetchMetadata", () => {
    it("returns the provided metadata", async () => {
      const metadata = {
        rid,
        filename: "report.pdf",
        sizeBytes: 1024,
        mediaType: "application/pdf",
      };
      const attachment = createMockAttachment(rid, undefined, metadata);

      const result = await attachment.fetchMetadata();

      expect(result).toBe(metadata);
      expect(result.filename).toBe("report.pdf");
      expect(result.sizeBytes).toBe(1024);
      expect(result.mediaType).toBe("application/pdf");
    });

    it("throws when no metadata was provided", () => {
      const attachment = createMockAttachment(rid);

      expect(() => attachment.fetchMetadata()).toThrow(
        `fetchMetadata was called on mock attachment "${rid}" but no metadata was provided.`,
      );
    });
  });

  it("works with both blob and metadata provided", async () => {
    const blob = new Blob([JSON.stringify({ key: "value" })], {
      type: "application/json",
    });
    const metadata = {
      rid,
      filename: "data.json",
      sizeBytes: 15,
      mediaType: "application/json",
    };
    const attachment = createMockAttachment(rid, blob, metadata);

    const response = await attachment.fetchContents();
    const text = await response.text();
    expect(JSON.parse(text)).toEqual({ key: "value" });

    const meta = await attachment.fetchMetadata();
    expect(meta.filename).toBe("data.json");
  });
});
