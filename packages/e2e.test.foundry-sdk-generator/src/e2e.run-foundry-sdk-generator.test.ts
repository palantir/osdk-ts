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

import { execa } from "execa";
import { describe, expect, it } from "vitest";

describe("foundry-sdk-generator", () => {
  it(
    "should do a basic execution via pnpm exec",
    { timeout: 10_000 },
    async () => {
      expect(true).toBe(true);

      const { stdout } = await execa`pnpm exec foundry-sdk-generator --help`;

      expect(stdout).toMatchInlineSnapshot(`
        "foundry-sdk-generator.mjs <command>

        Commands:
          foundry-sdk-generator.mjs generatePackag  Generates a new npm package which ca
          e                                         n be published

        Options:
          --help     Show help                                                 [boolean]
          --version  Show version number                                       [boolean]"
      `);
    },
  );
});
//
