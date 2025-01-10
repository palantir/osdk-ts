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
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { dirSync } from "tmp";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";
import { cli } from "./cli.js";
import { TEMPLATES } from "./generatedNoCheck/templates.js";
import type { Template } from "./templates.js";

let createAppVersion: string;
beforeAll(() => {
  createAppVersion = JSON.parse(
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

describe.each(TEMPLATES)("template $id", (template) => {
  const supportedVersions = Object.keys(template.files);
  describe.each(supportedVersions)("For SDK version %s", (sdkVersion) => {
    beforeAll(() => {
      vi.stubEnv("STABLE_PACKAGE_CLIENT_VERSION", "2.1.0-beta.20");
    });

    afterAll(() => {
      vi.unstubAllEnvs();
    });

    test(`CLI creates ${template.id}`, async () => {
      await runTest({
        project: `expected-${template.id}`,
        template,
        corsProxy: false,
        sdkVersion,
      });
    });

    test(`CLI creates ${template.id} with CORS proxy`, async () => {
      await runTest({
        project: `expected-${template.id}-cors-proxy`,
        template,
        corsProxy: true,
        sdkVersion,
      });
    });
  });
});

async function runTest(
  { project, template, corsProxy, sdkVersion }: {
    project: string;
    template: Template;
    corsProxy: boolean;
    sdkVersion: string;
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
    "--sdkVersion",
    sdkVersion,
  ]);

  expect(fs.readdirSync(path.join(process.cwd(), project)).length)
    .toBeGreaterThan(0);
  expect(fs.existsSync(path.join(process.cwd(), project, "package.json")))
    .toBe(true);
  expect(fs.existsSync(path.join(process.cwd(), project, "README.md")))
    .toBe(true);

  const packageJson = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), project, "package.json"), "utf-8"),
  );

  if (sdkVersion === "2.x") {
    // Since the example-generator needs to set the version to `workspace:*`,
    // we cannot use PRs to check that the version is being generated correctly.

    // Therefore we run this test to be sure that the version is being set as we assume
    // it should be, so that if the create-app code were to change to different behavior
    // it would be caught.
    expect(packageJson.dependencies["@osdk/client"]).toBe(
      `^${createAppVersion}`,
    );
  } else {
    expect(packageJson.dependencies["@osdk/client"]).toBe(
      undefined,
    );
  }
}
