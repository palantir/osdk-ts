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

import { resolve } from "path";
import { expect, test, vi } from "vitest";
import type { PackageJson } from "../../common/PackageJson.js";
import { visitNpmPackages } from "../../common/visitNpmPackages.js";
import { getWidgetSetInputSpec } from "../getWidgetSetInputSpec.js";

vi.mock("../../common/visitNpmPackages.ts");

test("getWidgetSetInputSpec successfully discovers OSDK packages", async () => {
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
      "package4": "0.4.0",
    },
    osdk: {
      rid: "ridPackage2",
    },
  };
  const packageJson3: PackageJson = {
    name: "package3",
    version: "0.3.0",
    dependencies: {
      "package4": "0.4.1",
    },
    osdk: {
      rid: "ridPackage3",
    },
  };
  const packageJson4: PackageJson = {
    name: "package3",
    version: "0.4.0",
    osdk: {
      rid: "ridPackage4",
    },
  };
  const packageJson4_1: PackageJson = {
    name: "package4",
    version: "0.4.1",
    osdk: {
      rid: "ridPackage4",
    },
  };

  vi.mocked(visitNpmPackages).mockImplementation(
    (packageJsonPath, onVisit) => {
      onVisit(packageJsonPath, packageJson1);
      onVisit(
        resolve(packageJsonPath, "/node_modules/package2@0.2.0/package.json"),
        packageJson2,
      );
      onVisit(
        resolve(packageJsonPath, "/node_modules/package3@0.3.0/package.json"),
        packageJson3,
      );
      // Handle multiple versions of same OSDK package
      onVisit(
        resolve(packageJsonPath, "/node_modules/package4@0.4.0/package.json"),
        packageJson4,
      );
      onVisit(
        resolve(packageJsonPath, "/node_modules/package4@0.4.1/package.json"),
        packageJson4_1,
      );
      // Handle multiple occurrences of same version of OSDK package
      onVisit(
        resolve(packageJsonPath, "/node_modules/package4@0.4.1/package.json"),
        packageJson4_1,
      );
      return Promise.resolve();
    },
  );
  const widgetSetInputSpec = await getWidgetSetInputSpec(
    "/path/to/package.json",
  );

  expect(widgetSetInputSpec).toEqual({
    discovered: {
      sdks: [
        { rid: "ridPackage2", version: "0.2.0" },
        { rid: "ridPackage3", version: "0.3.0" },
        { rid: "ridPackage4", version: "0.4.0" },
        { rid: "ridPackage4", version: "0.4.1" },
      ],
    },
  });
});
