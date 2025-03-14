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

import { describe, expect, it } from "vitest";
import { customNormalize } from "../generatePackage.js";

describe("test path normalization", () => {
  it("works for mac", () => {
    const macPath =
      "/Volumes/testFolder/osdk-ts/packages/foundry-sdk-generator/src/generate/betaClient/__tests__/customNormalize.test.ts";
    expect(customNormalize(macPath)).toEqual(macPath);

    const macPathExtraSlashes =
      "/Volumes/testFolder/osdk-ts//packages/foundry-sdk-generator/src//generate/betaClient/__tests__/customNormalize.test.ts";
    expect(customNormalize(macPathExtraSlashes)).toEqual(macPath);
  });

  it("works for windows", () => {
    const normalizedWindowsPath =
      "C/Users/testFolder/osdk-ts/packages/foundry-sdk-generator/src/generate/betaClient/__tests__/customNormalize.test.ts";

    const windowsPath =
      "C\\Users\\testFolder\\osdk-ts\\packages\\foundry-sdk-generator\\src\\generate\\betaClient\\__tests__\\customNormalize.test.ts";
    expect(customNormalize(windowsPath)).toEqual(normalizedWindowsPath);

    const macPathExtraSlashes =
      "C\\Users\\testFolder\\osdk-ts\\\\packages\\foundry-sdk-generator\\src\\generate\\betaClient\\__tests__\\\\customNormalize.test.ts";
    expect(customNormalize(macPathExtraSlashes)).toEqual(
      normalizedWindowsPath,
    );
  });
});
