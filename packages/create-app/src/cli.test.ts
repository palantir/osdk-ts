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

import fs from "node:fs";
import path from "node:path";
import { dirSync } from "tmp";
import { beforeEach, expect, test, vi } from "vitest";
import { cli } from "./cli.js";
import type { Template } from "./templates.js";
import { TEMPLATES } from "./templates.js";

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
  test(`CLI creates ${template.id}`, async () => {
    await runTest({
      project: `expected-${template.id}`,
      template,
      corsProxy: false,
    });
  });

  test(`CLI creates ${template.id} with CORS proxy`, async () => {
    await runTest({
      project: `expected-${template.id}-cors-proxy`,
      template,
      corsProxy: true,
    });
  });
}

async function runTest(
  { project, template, corsProxy }: {
    project: string;
    template: Template;
    corsProxy: boolean;
  },
): Promise<void> {
  await cli([
    "npx",
    "@osdk/create-app",
    project,
    "--overwrite",
    "--template",
    template.id,
    "--foundryUrl",
    "https://example.palantirfoundry.com",
    "--applicationUrl",
    "https://app.example.palantirfoundry.com",
    "--application",
    "ri.third-party-applications.main.application.fake",
    "--clientId",
    "123",
    "--osdkPackage",
    "@fake/sdk",
    "--osdkRegistryUrl",
    "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm",
    "--corsProxy",
    corsProxy.toString(),
  ]);

  expect(fs.readdirSync(path.join(process.cwd(), project)).length)
    .toBeGreaterThan(0);
  expect(fs.existsSync(path.join(process.cwd(), project, "package.json")))
    .toBe(true);
  expect(fs.existsSync(path.join(process.cwd(), project, "README.md")))
    .toBe(true);
}
