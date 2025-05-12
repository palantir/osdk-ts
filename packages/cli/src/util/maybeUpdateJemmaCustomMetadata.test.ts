/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import * as fs from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";
import { maybeUpdateJemmaCustomMetadata } from "./maybeUpdateJemmaCustomMetadata.js";

vi.mock("node:fs");
vi.mock("consola", () => ({
  consola: {
    error: vi.fn(),
  },
}));

describe("maybeUpdateJemmaCustomMetadata", () => {
  const TEST_FILE_PATH = "/test/metadata.json";
  const TEST_SITE_LINK = "https://example.com";

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("should not write to file when environment variable is not set", () => {
    maybeUpdateJemmaCustomMetadata(TEST_SITE_LINK);
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });

  it("should create new file with site link when file does not exist", () => {
    vi.stubEnv("JEMMA_JOB_CUSTOM_METADATA_PATH", TEST_FILE_PATH);
    vi.mocked(fs.readFileSync).mockImplementation(() => {
      throw new Error("File not found");
    });

    maybeUpdateJemmaCustomMetadata(TEST_SITE_LINK);

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      TEST_FILE_PATH,
      JSON.stringify({ siteLink: TEST_SITE_LINK }, null, 2),
    );
  });

  it("should write to file when it exists but is empty", () => {
    vi.stubEnv("JEMMA_JOB_CUSTOM_METADATA_PATH", TEST_FILE_PATH);
    vi.mocked(fs.readFileSync).mockReturnValue("{}");

    maybeUpdateJemmaCustomMetadata(TEST_SITE_LINK);

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      TEST_FILE_PATH,
      JSON.stringify({ siteLink: TEST_SITE_LINK }, null, 2),
    );
  });

  it("should override existing values in file", () => {
    vi.stubEnv("JEMMA_JOB_CUSTOM_METADATA_PATH", TEST_FILE_PATH);
    const existingData = {
      someOtherKey: "value",
      siteLink: "old-link.com",
    };
    vi.mocked(fs.readFileSync).mockReturnValue(JSON.stringify(existingData));

    maybeUpdateJemmaCustomMetadata(TEST_SITE_LINK);

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      TEST_FILE_PATH,
      JSON.stringify(
        {
          ...existingData,
          siteLink: TEST_SITE_LINK,
        },
        null,
        2,
      ),
    );
  });

  it("should write to the file even if it contains invalid JSON", () => {
    vi.stubEnv("JEMMA_JOB_CUSTOM_METADATA_PATH", TEST_FILE_PATH);
    vi.mocked(fs.readFileSync).mockReturnValue("invalid json");

    maybeUpdateJemmaCustomMetadata(TEST_SITE_LINK);

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      TEST_FILE_PATH,
      JSON.stringify({ siteLink: TEST_SITE_LINK }, null, 2),
    );
  });
});
