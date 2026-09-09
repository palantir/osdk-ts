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

import * as fs from "fs";

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  ALIASES_JSON_FILE_ENV_VAR,
  RESOURCES_JSON_FILE_ENV_VAR,
} from "./environment.js";
import { resetPublishedCache } from "./loaders.js";
import * as experimental from "./public/experimental.js";
import { Aliases } from "./public/experimental.js";

vi.mock("fs");

const ALIASES_JSON = JSON.stringify({
  defaults: {
    custom: { myAlias: "value" },
    models: {},
    egressConnections: {},
    datasets: {},
    mediasets: {},
    streams: {},
  },
  version: 1,
});

const RESOURCES_JSON = JSON.stringify({
  resources: {
    custom: { previewAlias: "preview-value" },
    models: [],
    datasets: [],
    mediasets: [],
    streams: [],
  },
  egress: { connections: [] },
});

describe("experimental Node entry point", () => {
  beforeEach(() => {
    resetPublishedCache();
    vi.clearAllMocks();
    delete process.env[RESOURCES_JSON_FILE_ENV_VAR];
    process.env[ALIASES_JSON_FILE_ENV_VAR] = "/app/var/data/aliases.json";
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(ALIASES_JSON);
  });

  afterEach(() => {
    delete process.env[ALIASES_JSON_FILE_ENV_VAR];
    delete process.env[RESOURCES_JSON_FILE_ENV_VAR];
  });

  it("resolves aliases through the filesystem runtime", async () => {
    await expect(Aliases.custom("myAlias")).resolves.toBe("value");
    expect(fs.readFileSync).toHaveBeenCalledOnce();
  });

  it("turns synchronous failures into rejected promises", async () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);

    await expect(Aliases.custom("missing")).rejects.toThrow(
      "Aliases file not found",
    );
  });

  it("resolves a live-preview alias", async () => {
    delete process.env[ALIASES_JSON_FILE_ENV_VAR];
    process.env[RESOURCES_JSON_FILE_ENV_VAR] = "/app/var/data/resources.json";
    vi.mocked(fs.readFileSync).mockReturnValue(RESOURCES_JSON);

    await expect(Aliases.custom("previewAlias")).resolves.toBe("preview-value");
  });

  it("exposes custom only through the Aliases namespace", () => {
    expect(experimental).not.toHaveProperty("custom");
    expect(Aliases).not.toHaveProperty("DEFAULT_RESOURCES_PATH");
    expect(Aliases).not.toHaveProperty("load");
  });
});
