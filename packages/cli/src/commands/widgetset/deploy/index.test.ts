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

import { beforeEach, expect, test, vi } from "vitest";
import yargs from "yargs";

import configLoader from "../../../util/configLoader.js";
import widgetSet from "../index.js";
import widgetSetDeployCommand from "./widgetSetDeployCommand.mjs";

vi.mock("../../../util/configLoader.js");
vi.mock("./widgetSetDeployCommand.mjs");

beforeEach(() => vi.clearAllMocks());

test("rejects deploying a local package even when a destination is supplied", async () => {
  vi.mocked(configLoader).mockResolvedValue({
    configFilePath: "/project/foundry.config.json",
    foundryConfig: { build: "local", widgetSet: { directory: "dist" } },
  });

  await expect(
    yargs([])
      .count("verbose")
      .exitProcess(false)
      .command(widgetSet)
      .parseAsync([
        "widgetset",
        "deploy",
        "--widgetSet",
        "ri.widgetregistry.main.widget-set.11111111-1111-1111-1111-111111111111",
        "--foundryUrl",
        "https://example.com",
        "--token",
        "test-token",
      ]),
  ).rejects.toThrow("Local widget packages cannot be deployed directly");
  expect(widgetSetDeployCommand).not.toHaveBeenCalled();
});

test("deploys an existing widget project using its configured destination", async () => {
  const rid =
    "ri.widgetregistry.main.widget-set.11111111-1111-1111-1111-111111111111";
  vi.mocked(configLoader).mockResolvedValue({
    configFilePath: "/project/foundry.config.json",
    foundryConfig: {
      foundryUrl: "https://example.com",
      widgetSet: { rid, directory: "dist" },
    },
  });

  await yargs([])
    .count("verbose")
    .exitProcess(false)
    .command(widgetSet)
    .parseAsync(["widgetset", "deploy", "--token", "test-token"]);
  expect(widgetSetDeployCommand).toHaveBeenCalledWith(
    expect.objectContaining({
      widgetSet: rid,
      foundryUrl: "https://example.com/",
      directory: "dist",
      token: "test-token",
    }),
  );
});
