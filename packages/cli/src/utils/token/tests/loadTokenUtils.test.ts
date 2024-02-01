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

import * as fs from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";
import * as tokenModule from "../loadTokenUtils.js";

vi.mock("consola", () => ({
  consola: {
    debug: vi.fn(),
    warn: vi.fn(),
  },
}));

vi.mock("node:fs", () => ({
  readFileSync: vi.fn(),
}));

const originalEnv = process.env;
vi.stubGlobal("process", { ...process, env: { ...originalEnv } });

const validToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

describe("loadToken", () => {
  it("should load a valid token from a direct argument", () => {
    const token = tokenModule.loadToken(validToken);
    expect(token).toBe(validToken);
  });

  it("should load a valid token from a file", () => {
    vi.mocked(fs.readFileSync).mockReturnValue(validToken);
    const token = tokenModule.loadToken(undefined, "valid-token.txt");

    expect(token).toBe(validToken);
  });

  it("should load a valid token from an environment variable", () => {
    process.env.FOUNDRY_TOKEN = validToken;

    const token = tokenModule.loadToken();

    expect(token).toBe(validToken);
    delete process.env.FOUNDRY_TOKEN;
  });

  it("should throw an error if no token is found", () => {
    delete process.env.FOUNDRY_TOKEN;
    delete process.env.FOUNDRY_SDK_AUTH_TOKEN;

    expect(() => tokenModule.loadToken()).toThrow("No token found.");
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.restoreAllMocks();
  });
});

describe("loadTokenFile", () => {
  it("should throw an error if the token file is not found", () => {
    expect(() => tokenModule.loadToken(undefined, "doesnt-exist.txt"))
      .toThrow(`Unable to read token file "doesnt-exist.txt"`);
  });
});

describe("checkIsValidToken", () => {
  it("should throw an error if the token is invalid", () => {
    expect(() => tokenModule.loadToken("token"))
      .toThrow(`Token "token" is not a valid JWT`);
  });

  it("should throw an error if the token file is invalid", () => {
    const invalidToken = "token";
    vi.mocked(fs.readFileSync).mockReturnValue(invalidToken);

    expect(() => tokenModule.loadToken(undefined, "invalid-token.txt"))
      .toThrow(`Token "token" is not a valid JWT`);
  });
});
