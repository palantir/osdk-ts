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
import { extname } from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { loadFoundryConfig } from "./config.js";

vi.mock("find-up");
vi.mock("node:fs");
vi.mock("node:path");

describe("loadFoundryConfig - site", () => {
  beforeEach(() => {
    vi.mocked(findUp).mockResolvedValue("/path/foundry.config.json");
    vi.mocked(extname).mockReturnValue(".json");
  });

  it("should load and parse the configuration file correctly", async () => {
    const correctConfig = {
      foundryUrl: "http://localhost",
      site: {
        application: "test-app",
        directory: "/test/directory",
        autoVersion: {
          type: "git-describe",
        },
        uploadOnly: true,
      },
    };

    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(correctConfig),
    );
    await expect(loadFoundryConfig("site")).resolves.toEqual({
      configFilePath: "/path/foundry.config.json",
      foundryConfig: {
        ...correctConfig,
      },
    });
  });

  it("should load and parse the configuration file correctly without optionals", async () => {
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
    await expect(loadFoundryConfig("site")).resolves.toEqual({
      configFilePath: "/path/foundry.config.json",
      foundryConfig: {
        ...correctConfig,
      },
    });
  });

  it("should load and parse package.json auto version strategy", async () => {
    const correctConfig = {
      foundryUrl: "http://localhost",
      site: {
        application: "test-app",
        directory: "/test/directory",
        autoVersion: {
          type: "package-json",
        },
      },
    };

    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(correctConfig),
    );
    await expect(loadFoundryConfig("site")).resolves.toEqual({
      configFilePath: "/path/foundry.config.json",
      foundryConfig: {
        ...correctConfig,
      },
    });
  });

  it("should throw an error if autoVersion type isn't allowed", async () => {
    const inCorrectConfig = {
      foundryUrl: "http://localhost",
      site: {
        application: "test-app",
        directory: "/test/directory",
        autoVersion: {
          type: "invalid",
        },
      },
    };

    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(inCorrectConfig),
    );

    await expect(loadFoundryConfig("site")).rejects.toThrow(
      "The configuration file /path/foundry.config.json does not match",
    );
  });

  it("should throw an error if autoVersion type is missing", async () => {
    const inCorrectConfig = {
      foundryUrl: "http://localhost",
      site: {
        application: "test-app",
        directory: "/test/directory",
        autoVersion: {},
      },
    };

    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(inCorrectConfig),
    );

    await expect(loadFoundryConfig("site")).rejects.toThrow(
      "The configuration file /path/foundry.config.json does not match the expected schema: data/site/autoVersion must match exactly one schema in oneOf",
    );
  });

  it("should throw an error if uploadOnly isn't a boolean", async () => {
    const inCorrectConfig = {
      foundryUrl: "http://localhost",
      site: {
        application: "test-app",
        directory: "/test/directory",
        uploadOnly: 123,
      },
    };

    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(inCorrectConfig),
    );

    await expect(loadFoundryConfig("site")).rejects.toThrow(
      "The configuration file /path/foundry.config.json does not match the expected schema: data/site/uploadOnly must be boolean",
    );
  });

  it("should throw an error if the configuration file cannot be read", async () => {
    vi.mocked(fsPromises.readFile).mockRejectedValue(new Error("Read error"));

    await expect(loadFoundryConfig("site")).rejects.toThrow(
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

    await expect(loadFoundryConfig("site")).rejects.toThrow(
      "The configuration file /path/foundry.config.json does not match",
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

    await expect(loadFoundryConfig("site")).rejects.toThrow(
      "The configuration file /path/foundry.config.json does not match",
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

    await expect(loadFoundryConfig("site")).rejects.toThrow(
      "The configuration file /path/foundry.config.json does not match",
    );
  });

  it("should return undefined if the configuration file is not found", async () => {
    vi.mocked(findUp).mockResolvedValue(undefined);
    await expect(loadFoundryConfig("site")).resolves.toBeUndefined();
  });

  it("should throw if config file extension isn't supported", async () => {
    vi.mocked(extname).mockResolvedValue(".yaml");
    await expect(loadFoundryConfig("site")).rejects.toThrow(
      "Unsupported file extension:",
    );
  });
});

describe("loadFoundryConfig - widget set", () => {
  beforeEach(() => {
    vi.mocked(findUp).mockResolvedValue("/path/foundry.config.json");
    vi.mocked(extname).mockReturnValue(".json");
  });

  it("should load and parse the configuration file correctly", async () => {
    const correctConfig = {
      foundryUrl: "http://localhost",
      widgetSet: {
        rid: "test-rid",
        directory: "/test/directory",
        repository: "test-repository-rid",
        autoVersion: {
          type: "git-describe",
        },
      },
    };

    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(correctConfig),
    );
    await expect(loadFoundryConfig("widgetSet")).resolves.toEqual({
      configFilePath: "/path/foundry.config.json",
      foundryConfig: {
        ...correctConfig,
      },
    });
  });
});
