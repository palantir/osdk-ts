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
import { getChangelogEntry } from "./getChangelogEntry.js";

describe("getChangelogEntry", () => {
  const md = `# @osdk/api

## 1.1.1

### Patch Changes

- aaaaaaaa: AAA
- Updated dependencies [aaaaaaa1]
  - X@1.1.1
  - y@1.1.1

## 1.1.0

### Minor Changes

- bbbbbbbb: BBB

### Patch Changes

- Updated dependencies [bbbbbbb1]
  - x@1.1.0
  - Y@1.1.0

## 1.0.2

### Patch Changes

- cccccccc: CCC
- Updated dependencies [ccccccc1]
  - X@1.0.2
  - Y@1.0.2
`;

  it("parses correctly", () => {
    expect(getChangelogEntry(md, "1.1.1")).toMatchInlineSnapshot(`
      {
        "content": "### Patch Changes

      -   aaaaaaaa: AAA
      -   Updated dependencies [aaaaaaa1]
          -   X@1.1.1
          -   y@1.1.1
      ",
        "highestLevel": 1,
      }
    `);

    expect(getChangelogEntry(md, "1.1.0")).toMatchInlineSnapshot(`
      {
        "content": "### Minor Changes

      -   bbbbbbbb: BBB

      ### Patch Changes

      -   Updated dependencies [bbbbbbb1]
          -   x@1.1.0
          -   Y@1.1.0
      ",
        "highestLevel": 2,
      }
    `);

    expect(getChangelogEntry(md, "1.0.2")).toMatchInlineSnapshot(`
      {
        "content": "### Patch Changes

      -   cccccccc: CCC
      -   Updated dependencies [ccccccc1]
          -   X@1.0.2
          -   Y@1.0.2
      ",
        "highestLevel": 2,
      }
    `);

    expect(getChangelogEntry(md, "1.0.0")).toBe(undefined);
  });
});
