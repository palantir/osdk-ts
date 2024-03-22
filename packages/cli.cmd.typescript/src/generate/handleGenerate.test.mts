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

import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { getPackageJsonContents } from "./handleGenerate.mjs";

describe("handleGenerate", () => {
  beforeEach(() => {
    process.env.PACKAGE_API_VERSION = "99.9.9";
    process.env.PACKAGE_CLIENT_VERSION = "88.8.8";
    process.env.PACKAGE_LEGACY_CLIENT_VERSION = "77.7.7";
  });

  afterEach(() => {
    delete process.env.PACKAGE_API_VERSION;
    delete process.env.PACKAGE_CLIENT_VERSION;
    delete process.env.PACKAGE_LEGACY_CLIENT_VERSION;
  });

  describe(getPackageJsonContents, () => {
    describe("v1", () => {
      test("returns the package.json contents", async () => {
        expect(await getPackageJsonContents("foo", "1.1.1", 1))
          .toMatchInlineSnapshot(`
            {
              "devDependencies": {
                "@arethetypeswrong/cli": "^0.15.2",
                "@osdk/api": "^99.9.9",
                "@osdk/legacy-client": "^77.7.7",
                "tslib": "^2.6.2",
                "typescript": "^5.4.2",
              },
              "exports": {
                ".": {
                  "import": "./dist/module/index.js",
                  "require": "./dist/commonjs/index.js",
                },
                "./ontology/objects": {
                  "import": "./dist/module/ontology/objects/index.js",
                  "require": "./dist/commonjs/ontology/objects/index.js",
                },
              },
              "files": [
                "**/*.js",
                "**/*.d.ts",
                "dist/**/package.json",
              ],
              "main": "./dist/commonjs/index.js",
              "module": "./dist/module/index.js",
              "name": "foo",
              "peerDependencies": {
                "@osdk/api": "^99.9.9",
                "@osdk/legacy-client": "^77.7.7",
              },
              "scripts": {
                "check": "npm exec attw $(npm pack)",
                "prepack": "tsc -p ./dist/module/tsconfig.json && tsc -p ./dist/commonjs/tsconfig.json",
              },
              "version": "1.1.1",
            }
          `);
      });
    });

    describe("v2", () => {
      test("returns the package.json contents", async () => {
        expect(await getPackageJsonContents("foo", "1.2.3", 2))
          .toMatchInlineSnapshot(`
            {
              "devDependencies": {
                "@arethetypeswrong/cli": "^0.15.2",
                "@osdk/api": "^99.9.9",
                "@osdk/client": "^88.8.8",
                "tslib": "^2.6.2",
                "typescript": "^5.4.2",
              },
              "exports": {
                ".": {
                  "import": "./dist/module/index.js",
                  "require": "./dist/commonjs/index.js",
                },
                "./ontology/objects": {
                  "import": "./dist/module/ontology/objects.js",
                  "require": "./dist/commonjs/ontology/objects.js",
                },
              },
              "files": [
                "**/*.js",
                "**/*.d.ts",
                "dist/**/package.json",
              ],
              "main": "./dist/commonjs/index.js",
              "module": "./dist/module/index.js",
              "name": "foo",
              "peerDependencies": {
                "@osdk/api": "^99.9.9",
                "@osdk/client": "^88.8.8",
              },
              "scripts": {
                "check": "npm exec attw $(npm pack)",
                "prepack": "tsc -p ./dist/module/tsconfig.json && tsc -p ./dist/commonjs/tsconfig.json",
              },
              "version": "1.2.3",
            }
          `);
      });
    });
  });
});
