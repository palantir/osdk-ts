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

import { mkdtempSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { clearApiGatewayCache } from "./getApiGatewayBaseUrl.js";
import { getOpenAiBaseUrl } from "./getOpenAiBaseUrl.js";

describe("getOpenAiBaseUrl", () => {
  let originalEnv: string | undefined;
  let tempDir: string;

  beforeEach(() => {
    originalEnv = process.env.FOUNDRY_SERVICE_DISCOVERY_V2;
    tempDir = mkdtempSync(join(tmpdir(), "osdk-test-"));
  });

  afterEach(() => {
    clearApiGatewayCache();
    if (originalEnv !== undefined) {
      process.env.FOUNDRY_SERVICE_DISCOVERY_V2 = originalEnv;
    } else {
      delete process.env.FOUNDRY_SERVICE_DISCOVERY_V2;
    }
    rmSync(tempDir, { recursive: true, force: true });
  });

  it("returns the OpenAI proxy URL", () => {
    const yamlContent =
      `api_gateway:\n  - "https://example.palantirfoundry.com"\n`;
    const filePath = join(tempDir, "discovery.yaml");
    writeFileSync(filePath, yamlContent);
    process.env.FOUNDRY_SERVICE_DISCOVERY_V2 = filePath;

    expect(getOpenAiBaseUrl({ preview: true })).toBe(
      "https://example.palantirfoundry.com/api/v1/models/openai",
    );
  });

  it("throws when preview is not true", () => {
    expect(() =>
      getOpenAiBaseUrl({ preview: false } as unknown as { preview: true })
    )
      .toThrow(
        "This API is in preview. You must pass { preview: true } to use it.",
      );
  });
});
