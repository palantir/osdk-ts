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

import { existsSync } from "node:fs";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { describe, expect, it } from "vitest";
import { GeneratePackageCommand } from "./GeneratePackageCommand";

describe(GeneratePackageCommand, () => {
  // ensure that we do not break backcompat by retaining our scripts export that links to the bundled types and esm output
  it("has a public scripts export", async () => {
    const generatedPath = path.join(
      __dirname,
      "..",
      "generatedNoCheck",
      "@test-app",
      "osdk",
    );
    const packagePath = path.join(generatedPath, "package.json");

    const packageJson = JSON.parse(await fs.readFile(packagePath, "utf-8"));

    const scriptsExport = packageJson["exports"]?.["."]?.["script"];
    expect(scriptsExport).toMatchInlineSnapshot(`
      {
        "default": "./dist/bundle/index.esm.js",
        "types": "./dist/bundle/index.d.ts",
      }
    `);

    const typesPath = path.join(generatedPath, scriptsExport.types);
    const esmPath = path.join(generatedPath, scriptsExport.default);

    expect(existsSync(typesPath)).toBe(true);
    expect(existsSync(esmPath)).toBe(true);
  });
});
