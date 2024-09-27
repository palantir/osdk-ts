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

import { describe, expect, test } from "vitest";
import { getPackageJsonContents } from "./generateClientSdkPackage.js";

describe("generateClientSdkPackage", () => {
  describe(getPackageJsonContents, () => {
    const versions = {
      osdkApiVersion: "^99.9.9",
      osdkClientVersion: "^88.8.8",
      osdkClientApiVersion: "^66.6.6",
      areTheTypesWrongVersion: "^0.15.2",
      tslibVersion: "^2.6.2",
      typescriptVersion: "^5.4.2",
    } as const;

    describe("v2", () => {
      test("returns the package.json contents", async () => {
        expect(getPackageJsonContents("foo", "1.2.3", versions))
          .toMatchInlineSnapshot(`
            {
              "devDependencies": {
                "@arethetypeswrong/cli": "^0.15.2",
                "@osdk/api": "^99.9.9",
                "tslib": "^2.6.2",
                "typescript": "^5.4.2",
              },
              "exports": {
                ".": {
                  "import": "./dist/module/index.js",
                  "require": "./dist/commonjs/index.js",
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
