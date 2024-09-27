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

import { describe, expect, it } from "vitest";
import { updateVersionsIfTheyExist } from "./handleGenerate.mjs";

describe(updateVersionsIfTheyExist, () => {
  it("should update versions if they exist", () => {
    const input = {
      dependencies: {
        "@osdk/cli": "1.0.0",
        "@ignore/a": "1.0.0",
      },
      devDependencies: {
        "@osdk/client": "2.0.0",
        "@ignore/b": "2.0.0",
      },
      peerDependencies: {
        "@osdk/api": "3.0.0",
        "@ignore/c": "3.0.0",
      },
    };

    updateVersionsIfTheyExist(input, {
      "@osdk/cli": "1.0.1",
      "@osdk/client": "2.0.1",
      "@osdk/api": "3.0.1",
    });

    expect(input).toEqual({
      dependencies: {
        "@osdk/cli": "1.0.1",
        "@ignore/a": "1.0.0",
      },
      devDependencies: {
        "@osdk/client": "2.0.1",
        "@ignore/b": "2.0.0",
      },
      peerDependencies: {
        "@osdk/api": "3.0.1",
        "@ignore/c": "3.0.0",
      },
    });
  });
});
