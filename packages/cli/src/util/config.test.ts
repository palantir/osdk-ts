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

import { findUp } from "find-up";
import { existsSync, promises as fsPromises } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import { loadFoundryConfig } from "./config.js";

vi.mock("find-up", () => ({
  findUp: vi.fn(),
}));

vi.mock("node:fs", () => ({
  promises: {
    readFile: vi.fn(),
  },
  existsSync: vi.fn(),
}));

describe("loadFoundryConfig", () => {
  vi.mocked(existsSync).mockResolvedValue(true);
  vi.mocked(findUp).mockResolvedValue("/path");

  it("should load and parse the configuration file correctly", async () => {
    const correctConfig = {
      foundryUrl: "http://localhost",
      site: {
        application: "test-app",
        directory: "/test/directory",
      },
    };

    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(correctConfig),
    );
    await expect(loadFoundryConfig()).resolves.toEqual(correctConfig);
  });

  it("should throw an error if the configuration file cannot be read", async () => {
    vi.mocked(fsPromises.readFile).mockRejectedValue(new Error("Read error"));

    await expect(loadFoundryConfig()).rejects.toThrow(
      "Couldn't read or parse config",
    );
  });

  it("should throw an error if the site key isn't found", async () => {
    const fakeConfig = {
      foundryUrl: "http://localhost",
    };

    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(fakeConfig),
    );

    await expect(loadFoundryConfig()).rejects.toThrow(
      "Config file schema is invalid.",
    );
  });

  it("should throw an error if the site configuration is missing required keys", async () => {
    const fakeConfig = {
      foundryUrl: "http://localhost",
      site: {
        directory: "/test/directory",
      },
    };

    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(fakeConfig),
    );

    await expect(loadFoundryConfig()).rejects.toThrow(
      "Config file schema is invalid.",
    );
  });

  it("should throw an error if foundryUrl isn't set on top level", async () => {
    const fakeConfig = {
      site: {
        foundryUrl: "http://localhost",
        directory: "/test/directory",
        application: "test-app",
      },
    };

    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(fakeConfig),
    );

    await expect(loadFoundryConfig()).rejects.toThrow(
      "Config file schema is invalid.",
    );
  });
});

describe("loadConfigFile", () => {
  it("should return undefined if the configuration file is not found", async () => {
    vi.mocked(findUp).mockResolvedValue(undefined);
    await expect(loadFoundryConfig()).resolves.toBeUndefined();
  });
});
