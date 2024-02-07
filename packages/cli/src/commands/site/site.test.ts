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

import { afterEach } from "node:test";
import { describe, expect, it, vi } from "vitest";
import yargs from "yargs";
import configLoader from "../../util/configLoader.js";
import siteHandler from "./index.js";

vi.mock("../../util/configLoader");
vi.mock("consola");

describe("siteHandler", () => {
  const mockConfig = {
    site: {
      application: "test",
      directory: "/test",
    },
    foundryUrl: "https://example.palantirfoundry.com",
  };

  const argvMock: any = {
    options: vi.fn(() => argvMock),
    group: vi.fn(() => argvMock),
    command: vi.fn(() => argvMock),
    check: vi.fn(() => argvMock),
    demandCommand: vi.fn(() => argvMock),
  };

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should parse options with defaults from the config file", async () => {
    vi.mocked(configLoader).mockResolvedValue(mockConfig);

    const site = await siteHandler();
    const builder = site.builder as any;
    builder(argvMock);

    expect(argvMock.options).toHaveBeenCalledWith(expect.objectContaining({
      application: expect.objectContaining({
        default: mockConfig.site.application,
      }),
      foundryUrl: expect.objectContaining({
        default: mockConfig.foundryUrl,
      }),
    }));
  });

  it("should demand all options when no config file is present", async () => {
    vi.mocked(configLoader).mockResolvedValue(undefined);
    const site = await siteHandler();
    const builder = site.builder as any;
    builder(argvMock);

    expect(argvMock.options).toHaveBeenCalledWith(expect.objectContaining({
      application: expect.objectContaining({
        demandOption: true,
      }),
      foundryUrl: expect.objectContaining({
        demandOption: true,
      }),
    }));
  });

  it("should replace trailing slash for foundryUrl", async () => {
    vi.mocked(configLoader).mockResolvedValue(mockConfig);
    const site: any = await siteHandler();
    const parser: any = yargs(
      [
        "site",
        "deploy",
        "--version",
        "1.0.0",
        "--foundryUrl",
        "https://example.palantirfoundry.com/",
      ],
    ).command(site).exitProcess(false).version(false);
    parser.parse();
    expect(parser.argv.foundryUrl).toBe("https://example.palantirfoundry.com");
  });

  it("should throw if both token and tokenFile are passed", async () => {
    vi.mocked(configLoader).mockResolvedValue(mockConfig);
    const site: any = await siteHandler();
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(
      () => {},
    );

    const parser = yargs([
      "site",
      "deploy",
      "--token",
      "test-token",
      "--tokenFile",
      "test-token-file",
    ]).command(site).version(false);
    expect(() => {
      parser.parse();
    }).toThrow();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        "Arguments token and tokenFile are mutually exclusive",
      ),
    );
  });

  it("should throw if both foundryUrl isn't valid", async () => {
    vi.mocked(configLoader).mockResolvedValue(mockConfig);
    const site: any = await siteHandler();
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(
      () => {},
    );

    const parser = yargs([
      "site",
      "deploy",
      "--foundryUrl",
      "not-a-url",
    ]).command(site).version(false);
    expect(() => {
      parser.parse();
    }).toThrow();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        "foundryUrl must start with https://",
      ),
    );
  });
});
