/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { readFile } from "fs/promises";
import resolvePackagePath from "resolve-package-path";
import { expect, test, vi } from "vitest";
import type { PackageJson } from "../../common/PackageJson.js";
import { visitNpmPackages } from "../visitNpmPackages.js";

vi.mock("fs/promises");
vi.mock("resolve-package-path");

test("visitNpmPackages", async () => {
  const packageJson1: PackageJson = {
    name: "package1",
    version: "0.1.0",
    dependencies: {
      "package2": "0.2.0",
      "package3": "0.3.0",
    },
  };
  const packageJson2: PackageJson = {
    name: "package2",
    version: "0.2.0",
    dependencies: {
      "package3": "0.3.0",
    },
  };
  const packageJson3: PackageJson = {
    name: "package3",
    version: "0.3.0",
  };

  const packageJsonPaths: Record<string, string> = {
    [packageJson1.name]: "/path/to/package.json",
    [packageJson2.name]: "/path/to/node_modules/package2/package.json",
    [packageJson3.name]: "/path/to/node_modules/package3/package.json",
  } as const;
  const packageJsons: Record<typeof packageJsonPaths[string], PackageJson> = {
    [packageJsonPaths[packageJson1.name]]: packageJson1,
    [packageJsonPaths[packageJson2.name]]: packageJson2,
    [packageJsonPaths[packageJson3.name]]: packageJson3,
  } as const;

  vi.mocked(resolvePackagePath).mockImplementation((target) => {
    const path = packageJsonPaths[target];
    if (path == null) {
      throw new Error(`Unexpected target: ${target}`);
    }
    return path;
  });
  vi.mocked(readFile).mockImplementation((path) => {
    const packageJson = packageJsons[path.toString()];
    if (packageJson == null) {
      throw new Error(`Unexpected path: ${path.toString()}`);
    }
    return Promise.resolve(JSON.stringify(packageJson));
  });

  const onVisit = vi.fn();
  await visitNpmPackages("/path/to/package.json", onVisit);

  expect(onVisit).toHaveBeenCalledTimes(3);
  expect(onVisit).toHaveBeenNthCalledWith(
    1,
    "/path/to/package.json",
    packageJson1,
  );
  expect(onVisit).toHaveBeenNthCalledWith(
    2,
    "/path/to/node_modules/package2/package.json",
    packageJson2,
  );
  expect(onVisit).toHaveBeenNthCalledWith(
    3,
    "/path/to/node_modules/package3/package.json",
    packageJson3,
  );
});
