/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getFoundryToken } from "./getFoundryToken.js";

describe("getFoundryToken", () => {
  let originalToken: string | undefined;

  beforeEach(() => {
    originalToken = process.env.FOUNDRY_TOKEN;
  });

  afterEach(() => {
    if (originalToken !== undefined) {
      process.env.FOUNDRY_TOKEN = originalToken;
    } else {
      delete process.env.FOUNDRY_TOKEN;
    }
  });

  it("returns the token when FOUNDRY_TOKEN is set", () => {
    process.env.FOUNDRY_TOKEN = "test-token-123";
    expect(getFoundryToken({ preview: true })).toBe("test-token-123");
  });

  it("throws when FOUNDRY_TOKEN is not set", () => {
    delete process.env.FOUNDRY_TOKEN;
    expect(() => getFoundryToken({ preview: true })).toThrow(
      "FOUNDRY_TOKEN environment variable is not set",
    );
  });

  it("throws when preview is not true", () => {
    process.env.FOUNDRY_TOKEN = "test-token-123";
    expect(() =>
      getFoundryToken({ preview: false } as unknown as { preview: true })
    ).toThrow(
      "This API is in preview. You must pass { preview: true } to use it.",
    );
  });
});
