/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { promises as fsPromises } from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";
import { loadToken, loadTokenFile, validate } from "./token.js";

vi.mock("node:fs");

// {"header": {"alg":"HS256","typ":"JWT"}, "payload": {"sub":"1234567890","name":"TestUser","iat":1516239022}}
const validToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

describe("loadToken", () => {
  it("should load a valid token from a direct argument", async () => {
    const token = await loadToken(validToken);
    expect(token).toBe(validToken);
  });

  it("should load a valid token from a file", async () => {
    vi.mocked(fsPromises.readFile).mockResolvedValue(
      validToken,
    );
    const token = await loadToken(undefined, "valid-token.txt");
    expect(token).toBe(validToken);
  });

  it("should load a valid token from the FOUNDRY_TOKEN environment variable", async () => {
    vi.stubEnv("FOUNDRY_TOKEN", validToken);
    vi.stubEnv("FOUNDRY_SDK_AUTH_TOKEN", "");
    expect(await loadToken()).toBe(validToken);
  });

  it("should load a valid token from the deprecated FOUNDRY_SDK_AUTH_TOKEN environment variable", async () => {
    vi.stubEnv("FOUNDRY_TOKEN", "");
    vi.stubEnv("FOUNDRY_SDK_AUTH_TOKEN", validToken);
    expect(await loadToken()).toBe(validToken);
  });

  it("should throw an error if no token is found", async () => {
    vi.stubEnv("FOUNDRY_TOKEN", "");
    vi.stubEnv("FOUNDRY_SDK_AUTH_TOKEN", "");
    await expect(() => loadToken()).rejects.toThrow("No token found.");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });
});

describe("loadTokenFile", () => {
  it("should throw an error if the token file is not found", async () => {
    await expect(() => loadTokenFile("doesnt-exist.txt"))
      .rejects.toThrow(`Unable to read token file "doesnt-exist.txt"`);
  });
});

describe("validate", () => {
  it("should throw an error if the token is invalid", () => {
    expect(() => validate("token"))
      .toThrow(`Token does not appear to be a JWT`);
  });
});
