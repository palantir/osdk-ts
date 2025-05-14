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

import fs from "fs";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import * as codeWorkspacesMode from "../codeWorkspacesMode.js";

const FOUNDRY_PROXY_URL = "foundry.proxy.url";
const DEV_SERVER_DOMAIN = "workspace.stack.com";
const DEV_SERVER_BASE_PATH = "/proxy/path";
const FOUNDRY_PROXY_TOKEN = "/tmp/token.txt";
const MOCK_TOKEN = "token-value";

describe("codeWorkspacesMode", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe("isCodeWorkspacesMode", () => {
    test("returns true for 'code-workspaces' mode", () => {
      expect(codeWorkspacesMode.isCodeWorkspacesMode("code-workspaces")).toBe(
        true,
      );
    });

    test("returns false for other modes", () => {
      expect(codeWorkspacesMode.isCodeWorkspacesMode("dev")).toBe(false);
      expect(codeWorkspacesMode.isCodeWorkspacesMode(undefined)).toBe(false);
    });
  });

  describe("getCodeWorkspacesFoundryUrl", () => {
    test("returns correct URL when env is set", () => {
      vi.stubEnv("FOUNDRY_PROXY_URL", FOUNDRY_PROXY_URL);
      expect(codeWorkspacesMode.getCodeWorkspacesFoundryUrl()).toBe(
        `https://${FOUNDRY_PROXY_URL}`,
      );
    });

    test("throws if env is missing", () => {
      vi.stubEnv("FOUNDRY_PROXY_URL", undefined);
      expect(() => codeWorkspacesMode.getCodeWorkspacesFoundryUrl()).toThrow();
    });
  });

  describe("getCodeWorkspacesBaseHref", () => {
    test("returns correct base href when env is set", () => {
      vi.stubEnv("DEV_SERVER_DOMAIN", DEV_SERVER_DOMAIN);
      vi.stubEnv("DEV_SERVER_BASE_PATH", DEV_SERVER_BASE_PATH);
      expect(codeWorkspacesMode.getCodeWorkspacesBaseHref()).toBe(
        `https://${DEV_SERVER_DOMAIN}${DEV_SERVER_BASE_PATH}`,
      );
    });

    test("throws if DEV_SERVER_DOMAIN is missing", () => {
      vi.stubEnv("DEV_SERVER_DOMAIN", undefined);
      vi.stubEnv("DEV_SERVER_BASE_PATH", DEV_SERVER_BASE_PATH);
      expect(() => codeWorkspacesMode.getCodeWorkspacesBaseHref()).toThrow();
    });

    test("throws if DEV_SERVER_BASE_PATH is missing", () => {
      vi.stubEnv("DEV_SERVER_DOMAIN", DEV_SERVER_DOMAIN);
      vi.stubEnv("DEV_SERVER_BASE_PATH", undefined);
      expect(() => codeWorkspacesMode.getCodeWorkspacesBaseHref()).toThrow();
    });
  });

  describe("getCodeWorkspacesFoundryToken", () => {
    test("returns token from file when env and file are set", () => {
      vi.stubEnv("FOUNDRY_PROXY_TOKEN", FOUNDRY_PROXY_TOKEN);
      vi.spyOn(fs, "readFileSync").mockReturnValue(MOCK_TOKEN);
      expect(codeWorkspacesMode.getCodeWorkspacesFoundryToken()).toBe(
        MOCK_TOKEN,
      );
    });

    test("throws if env is missing", () => {
      vi.stubEnv("FOUNDRY_PROXY_TOKEN", undefined);
      expect(() => codeWorkspacesMode.getCodeWorkspacesFoundryToken())
        .toThrow();
    });

    test("throws if file read fails", () => {
      vi.stubEnv("FOUNDRY_PROXY_TOKEN", FOUNDRY_PROXY_TOKEN);
      vi.spyOn(fs, "readFileSync").mockImplementation(() => {
        throw new Error("fail");
      });
      expect(() => codeWorkspacesMode.getCodeWorkspacesFoundryToken())
        .toThrow();
    });
  });
});
