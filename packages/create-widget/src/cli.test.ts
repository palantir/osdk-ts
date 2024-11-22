/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { dirSync } from "tmp";
import { beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { cli } from "./cli.js";
import { TEMPLATES } from "./generatedNoCheck/templates.js";
import type { Template } from "./templates.js";

let createWidgetVersion: string;
beforeAll(() => {
  createWidgetVersion = JSON.parse(
    fs.readFileSync(
      path.join(dirname(fileURLToPath(import.meta.url)), "..", "package.json"),
      "utf-8",
    ),
  ).version;
});

beforeEach(() => {
  const tmpDir = dirSync({ unsafeCleanup: true });
  const tmpDirName = tmpDir.name;
  vi.spyOn(process, "cwd").mockImplementation(() => tmpDirName);

  return () => {
    vi.restoreAllMocks();
    tmpDir?.removeCallback();
  };
});

for (const template of TEMPLATES) {
  describe.each(["2.x"])("For SDK version %s", (sdkVersion) => {
    test(`CLI creates ${template.id}`, async () => {
      await runTest({
        project: `expected-${template.id}`,
        template,
        sdkVersion,
      });
    });
  });
}

async function runTest({
  project,
  template,
  sdkVersion,
}: {
  project: string;
  template: Template;
  sdkVersion: string;
}): Promise<void> {
  await cli([
    "npx",
    "@osdk/create-app",
    project,
    "--overwrite",
    "--template",
    template.id,
    "--foundryUrl",
    "https://example.palantirfoundry.com",
    "--widget",
    "ri.viewregistry.main.view.fake",
    "--osdkPackage",
    "@custom-widget/sdk",
    "--osdkRegistryUrl",
    "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm",
    "--sdkVersion",
    sdkVersion,
  ]);

  expect(
    fs.readdirSync(path.join(process.cwd(), project)).length,
  ).toBeGreaterThan(0);
  expect(fs.existsSync(path.join(process.cwd(), project, "package.json"))).toBe(
    true,
  );
  expect(fs.existsSync(path.join(process.cwd(), project, "README.md"))).toBe(
    true,
  );

  const packageJson = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), project, "package.json"), "utf-8"),
  );
}
