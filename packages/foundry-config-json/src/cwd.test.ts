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

import { execFile } from "node:child_process";
import { mkdir, mkdtemp, realpath, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import { afterEach, beforeEach, expect, it } from "vitest";

import { autoVersion } from "./autoVersion.js";
import { loadFoundryConfig } from "./config.js";

const execFileAsync = promisify(execFile);
let root: string;
let nested: string;

beforeEach(async () => {
  root = await realpath(await mkdtemp(path.join(tmpdir(), "foundry-config-")));
  nested = path.join(root, "src");
  await mkdir(nested);
});

afterEach(async () => {
  await rm(root, { recursive: true, force: true });
});

it("loads widget config from the supplied directory's ancestors", async () => {
  const config = {
    foundryUrl: "placeholder",
    widgetSet: { rid: "placeholder", directory: "dist" },
  };
  const configFilePath = path.join(root, "foundry.config.json");
  await writeFile(configFilePath, JSON.stringify(config));

  await expect(loadFoundryConfig("widgetSet", nested)).resolves.toEqual({
    configFilePath,
    foundryConfig: config,
  });
});

it("loads site config from the supplied directory", async () => {
  const config = {
    foundryUrl: "https://example.com",
    site: { application: "example", directory: "dist" },
  };
  const configFilePath = path.join(root, "foundry.config.json");
  await writeFile(configFilePath, JSON.stringify(config));

  await expect(loadFoundryConfig("site", root)).resolves.toEqual({
    configFilePath,
    foundryConfig: config,
  });
});

it("resolves the package version from the supplied directory's ancestors", async () => {
  await writeFile(
    path.join(root, "package.json"),
    JSON.stringify({ version: "9.8.7" }),
  );

  await expect(autoVersion({ type: "package-json" }, nested)).resolves.toBe(
    "9.8.7",
  );
});

it("resolves Git tags in the supplied directory's repository", async () => {
  await execFileAsync("git", ["init", "--quiet"], { cwd: root });
  await execFileAsync(
    "git",
    [
      "-c",
      "user.name=Test",
      "-c",
      "user.email=test@example.com",
      "-c",
      `core.hooksPath=${path.join(root, "hooks")}`,
      "commit",
      "--allow-empty",
      "--no-gpg-sign",
      "-m",
      "Test fixture",
    ],
    { cwd: root },
  );
  await execFileAsync(
    "git",
    [
      "-c",
      "user.name=Test",
      "-c",
      "user.email=test@example.com",
      "-c",
      "tag.gpgSign=false",
      "tag",
      "-a",
      "widget-v9.8.7",
      "-m",
      "Test version",
    ],
    { cwd: root },
  );

  await expect(
    autoVersion({ type: "git-describe", tagPrefix: "widget-v" }, nested),
  ).resolves.toBe("9.8.7");
});
