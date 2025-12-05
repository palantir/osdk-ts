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

const expectedNpmRcWithExpectedOsdkRegistryUrl = `
//example.palantirfoundry.com/artifacts/api/:_authToken=\${FOUNDRY_TOKEN}
@myapp:registry=https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.a4a7fe1c-486f-4226-b706-7b90005f527d/contents/release/npm/
`.trimStart();

const expectedNpmRcWithUnexpectedOsdkRegistryUrl = `
//registry.com/:_authToken=\${FOUNDRY_TOKEN}
@myapp:registry=https://registry.com/
`.trimStart();

test("it generates .npmrc for package and registry", () => {
  expect(
    generateNpmRc({
      osdkPackage: "@myapp/sdk",
      osdkRegistryUrl:
        "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.a4a7fe1c-486f-4226-b706-7b90005f527d/contents/release/npm",
    }),
  ).toEqual(expectedNpmRcWithExpectedOsdkRegistryUrl);
});

test("it generates .npmrc for package and unexpected registry", () => {
  expect(
    generateNpmRc({
      osdkPackage: "@myapp/sdk",
      osdkRegistryUrl: "https://registry.com",
    }),
  ).toEqual(expectedNpmRcWithUnexpectedOsdkRegistryUrl);
});
