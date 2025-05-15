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
import { getTemplatePackageFile } from "./getTemplatePackageFile.js";

describe("getTemplatePackageFile", () => {
  it("replaces the specified package name with the template key", () => {
    const packageJson = JSON.stringify({
      dependencies: {
        "some-package": "^1.0.0",
        "another-package": "^2.0.0",
      },
    });

    const result = getTemplatePackageFile(packageJson, "some-package");
    const expectedJson = JSON.stringify({
      dependencies: {
        "another-package": "^2.0.0",
        "@{{APPLICATION_PACKAGE_NAME}}/sdk": "latest",
      },
    });
    expect(JSON.stringify(JSON.parse(result))).toBe(expectedJson);
  });

  it("does not modify dependencies if the package name is not found", () => {
    const packageJson = JSON.stringify({
      dependencies: {
        "another-package": "^2.0.0",
      },
    });

    const result = getTemplatePackageFile(packageJson, "non-existent-package");
    const expectedJson = JSON.stringify({
      dependencies: {
        "another-package": "^2.0.0",
      },
    });

    expect(result).toBe(expectedJson);
  });

  it("handles package.json with no dependencies", () => {
    const packageJson = JSON.stringify({});

    const result = getTemplatePackageFile(packageJson, "some-package");
    const expectedJson = JSON.stringify({}, null, 2);

    expect(result).toBe(expectedJson);
  });

  it("handles package.json with null dependencies", () => {
    const packageJson = JSON.stringify({
      dependencies: {},
    });

    const result = getTemplatePackageFile(packageJson, "some-package");
    const expectedJson = JSON.stringify({
      dependencies: {},
    });
    expect(result).toBe(expectedJson);
  });
});
