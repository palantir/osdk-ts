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

import * as fs from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { dirSync } from "tmp";
import { beforeEach, describe, expect, it } from "vitest";
import { getDependencyVersionFromFindUpPackageJson } from "./getDependencyVersionFromFindUpPackageJson.js";

describe(getDependencyVersionFromFindUpPackageJson, () => {
  const fakeDepName = "not_a_real_dep_you_would_ever_find";
  const fakePeerDepName = "peer_not_a_real_dep_you_would_ever_find";
  const fakeDevDepName = "dev_not_a_real_dep_you_would_ever_find";
  const fakeDepVersion = "1.2.3";

  beforeEach(() => {
    const tmpDir = dirSync({ unsafeCleanup: true });
    const tmpDirName = tmpDir.name;
    const oldCwd = process.cwd();

    process.chdir(tmpDirName);

    fs.writeFileSync(
      "package.json",
      JSON.stringify({
        dependencies: {
          [fakeDepName]: `${fakeDepVersion}-${fakeDepName}`,
        },
        peerDependencies: {
          [fakePeerDepName]: `${fakeDepVersion}-${fakePeerDepName}`,
        },
        devDependencies: {
          [fakeDevDepName]: `${fakeDepVersion}-${fakeDevDepName}`,
        },
      }),
    );

    return () => {
      process.chdir(oldCwd);
      tmpDir.removeCallback();
    };
  });

  describe("inferring cwd", () => {
    it.each([fakeDepName, fakePeerDepName, fakeDevDepName])(
      "finds the tmp package.json and value for %s",
      async (depName) => {
        await expect(
          getDependencyVersionFromFindUpPackageJson(depName),
        ).resolves.toBe(`${fakeDepVersion}-${depName}`);
      },
    );
  });

  describe("not inferring cwd", () => {
    it.each([fakeDepName, fakePeerDepName, fakeDevDepName])(
      "does not find the value for %s",
      async (depName) => {
        await expect(
          getDependencyVersionFromFindUpPackageJson(depName, {
            cwd: dirname(fileURLToPath(import.meta.url)),
          }),
        ).rejects.toThrowError(
          /^Invariant failed: Could not find a dependency/,
        );
      },
    );

    it("does find our typescript version", async () => {
      await expect(
        getDependencyVersionFromFindUpPackageJson("typescript", {
          cwd: dirname(fileURLToPath(import.meta.url)),
        }),
      ).resolves.toBeDefined();
    });
  });
});
