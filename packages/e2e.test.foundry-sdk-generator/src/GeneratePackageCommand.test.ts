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
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

describe("Generate Package Command", () => {
  // ensure that we do not break backcompat by retaining our scripts export that links to the bundled types and esm output
  it.each(["@test-app2", "@test-app2-beta"])(
    "has a public scripts export for %s",
    async (scope) => {
      const generatedPath = path.join(
        path.dirname(fileURLToPath(import.meta.url)),
        "generatedNoCheck",
        scope,
        "osdk",
      );
      const packagePath = path.join(generatedPath, "package.json");

      const packageJson = JSON.parse(await fs.readFile(packagePath, "utf-8"));

      const scriptsExport = packageJson["exports"]?.["."]?.["script"];
      expect(scriptsExport).toEqual({
        "types": "./dist/bundle/index.d.mts",
        "default": "./dist/bundle/index.mjs",
      });

      const esmPath = path.join(generatedPath, scriptsExport.default);

      expect(existsSync(esmPath), esmPath).toBe(true);

      const contents = await fs.readFile(
        path.join(generatedPath, "esm", "index.js"),
        "utf-8",
      );
      expect(contents).not.toContain("Object.defineProperty(exports,");
    },
  );
});
