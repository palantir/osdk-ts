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

import { compareSync } from "dir-compare";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { DirResult } from "tmp";
import { dirSync } from "tmp";
import { beforeEach, expect, test, vi } from "vitest";
import { cli } from "./cli.js";
import { TEMPLATES } from "./templates.js";

const snapshotsDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "__snapshots__",
);
beforeEach(() => {
  let tmpDir: DirResult | undefined;
  if (process.env.UPDATE_SNAPSHOTS === "true") {
    vi.spyOn(process, "cwd").mockImplementation(() => snapshotsDir);
  } else {
    tmpDir = dirSync({ unsafeCleanup: true });
    const tmpDirName = tmpDir.name;
    vi.spyOn(process, "cwd").mockImplementation(() => tmpDirName);
  }

  return () => {
    vi.restoreAllMocks();
    tmpDir?.removeCallback();
  };
});

for (const template of TEMPLATES) {
  test(`CLI creates ${template.id}`, async () => {
    const project = `expected-${template.id}`;
    await cli([
      "npx",
      "@osdk/create-app",
      project,
      "--overwrite",
      "--template",
      template.id,
      "--foundry-url",
      "https://example.palantirfoundry.com",
      "--application-url",
      "https://app.example.palantirfoundry.com",
      "--client-id",
      "123",
      "--osdk-package",
      "@fake/sdk",
      "--osdk-registry-url",
      "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm",
    ]);

    const result = compareSync(
      path.join(process.cwd(), project),
      path.join(snapshotsDir, project),
      { compareContent: true },
    );
    expect.soft(result.same).toBe(true);
    expect.soft(result.differences).toEqual(0);
  });
}
