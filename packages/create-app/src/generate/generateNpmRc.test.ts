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

import { expect, test } from "vitest";
import { generateNpmRc } from "./generateNpmRc.js";

const expected = `
//registry.com/:_authToken=\${FOUNDRY_TOKEN}
@myapp:registry=https://registry.com/
`.trimStart();

const expectedNoOsdkPackage = `
//registry.com/:_authToken=\${FOUNDRY_TOKEN}
<OSDK package name>:registry=https://registry.com/
`.trimStart();

const expectedNoOsdkRegistryUrl = `
//<OSDK registry URL>/:_authToken=\${FOUNDRY_TOKEN}
@myapp:registry=https://<OSDK registry URL>/
`.trimStart();

const expectedNoOsdkPackageNoOsdkRegistryUrl = `
//<OSDK registry URL>/:_authToken=\${FOUNDRY_TOKEN}
<OSDK package name>:registry=https://<OSDK registry URL>/
`.trimStart();

test("it generates .npmrc with osdk package and osdk registry url", () => {
  expect(
    generateNpmRc({
      osdkPackage: "@myapp/sdk",
      osdkRegistryUrl: "https://registry.com",
    }),
  ).toEqual(expected);
});

test("it generates .npmrc without osdk package with osdk registry url", () => {
  expect(
    generateNpmRc({
      osdkPackage: undefined,
      osdkRegistryUrl: "https://registry.com",
    }),
  ).toEqual(expectedNoOsdkPackage);
});

test("it generates .npmrc with osdk package without osdk registry url", () => {
  expect(
    generateNpmRc({
      osdkPackage: "@myapp/sdk",
      osdkRegistryUrl: undefined,
    }),
  ).toEqual(expectedNoOsdkRegistryUrl);
});

test("it generates .npmrc without osdk package without osdk registry url", () => {
  expect(
    generateNpmRc({
      osdkPackage: undefined,
      osdkRegistryUrl: undefined,
    }),
  ).toEqual(expectedNoOsdkPackageNoOsdkRegistryUrl);
});
