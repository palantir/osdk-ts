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
import { changeVersionPrefix } from "./changeVersionPrefix.js";

describe(changeVersionPrefix, () => {
  const expectedPrefix = "^";
  it.each(["1.2.3", "~1.2.3", "^1.2.3"])(
    `replaces "%s" with "${expectedPrefix}1.2.3"`,
    async (version) => {
      const result = await changeVersionPrefix(version, expectedPrefix);
      expect(result).toEqual(`${expectedPrefix}1.2.3`);
    },
  );

  it.each(["workspace:1.2.3", "workspace:~1.2.3", "workspace:^1.2.3"])(
    `replaces "%s" with "${expectedPrefix}1.2.3"`,
    async (version) => {
      const result = await changeVersionPrefix(version, expectedPrefix);
      expect(result).toEqual(`workspace:${expectedPrefix}1.2.3`);
    },
  );

  it.each(["workspace:*", "workspace:^", "workspace:~"])(
    `replaces "%s" with "workspace:${expectedPrefix}"`,
    async (version) => {
      const result = await changeVersionPrefix(version, expectedPrefix);
      expect(result).toEqual(`workspace:${expectedPrefix}`);
    },
  );
});
