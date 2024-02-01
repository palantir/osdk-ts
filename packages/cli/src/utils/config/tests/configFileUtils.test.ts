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
import { promises as fsPromises } from "node:fs";
import { beforeEach, describe, expect, it, vi } from "vitest";
import * as configModule from "../configFileUtils.js";

vi.mock("consola", () => ({
  consola: {
    error: vi.fn(),
    warn: vi.fn(),
  },
}));

vi.mock("find-up", () => ({
  findUp: vi.fn(),
}));

vi.mock("node:fs", () => ({
  promises: {
    readFile: vi.fn(),
  },
}));

describe("loadConfigFile", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should load and parse the configuration file correctly", async () => {
    const fakeConfig = {
      site: {
        application: "test-app",
        foundryUrl: "http://localhost",
        directory: "/test/directory",
      },
    };
    const fakeConfigPath = "/path/to/foundry.config.json";

    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(fakeConfig),
    );
    vi.mocked(findUp).mockResolvedValue(fakeConfigPath);

    const result = await configModule.loadConfigFile();

    expect(result).toEqual({
      configJson: fakeConfig,
      configFilePath: fakeConfigPath,
    });
  });

  it("should return undefined if the configuration file is not found", async () => {
    vi.mocked(findUp).mockResolvedValue(undefined);

    const result = await configModule.loadConfigFile();

    expect(result).toBeUndefined();
  });

  it("should throw an error if the configuration file cannot be read", async () => {
    vi.mocked(findUp).mockResolvedValue("/path/to/foundry.config.json");
    vi.mocked(fsPromises.readFile).mockRejectedValue(new Error("Read error"));

    await expect(configModule.loadConfigFile()).rejects.toThrow("Read error");
  });
});

describe("extractSiteConfig", () => {
  it("should extract the site configuration from the config JSON", () => {
    const configJson = {
      site: {
        application: "test-app",
        foundryUrl: "http://localhost",
        directory: "/test/directory",
      },
    };

    const siteConfig = configModule.extractSiteConfig(configJson);

    expect(siteConfig).toEqual(configJson.site);
  });

  it("should throw an error if the site key isn't found", () => {
    const configJson = {} as any;

    expect(() => configModule.extractSiteConfig(configJson)).toThrow(
      "Could not find a site entry in the config file.",
    );
  });

  it("should throw an error if the site configuration is invalid", () => {
    const configJson = {
      site: {
        application: "test-app",
        directory: "/test/directory",
      },
    } as any;

    expect(() => configModule.extractSiteConfig(configJson)).toThrow(
      "Missing required keys in site config: foundryUrl",
    );
  });
});
