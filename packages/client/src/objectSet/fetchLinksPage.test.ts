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
import { remapLinksPage, remapObjectLocator } from "./fetchLinksPage.js";

describe("remapObjectLocator", () => {
  it("works", () => {
    expect(
      remapObjectLocator({
        __apiName: "Foo",
        __primaryKey: "bar",
        prop: "BAZ",
      }),
    ).toEqual({ $apiName: "Foo", $primaryKey: "bar" });
  });
});

describe("remapLinksPage", () => {
  it("works", () => {
    expect(
      remapLinksPage({
        nextPageToken: "foo",
        data: [
          {
            sourceObject: { __apiName: "Object", __primaryKey: 0 },
            linkedObjects: [
              {
                targetObject: { __apiName: "LinkedObject", __primaryKey: 1 },
                linkType: "link",
              },
            ],
          },
          {
            sourceObject: { __apiName: "Object", __primaryKey: 1 },
            linkedObjects: [
              {
                targetObject: { __apiName: "LinkedObject", __primaryKey: 2 },
                linkType: "link",
              },
              {
                targetObject: { __apiName: "LinkedObject", __primaryKey: 3 },
                linkType: "link",
              },
            ],
          },
        ],
      }),
    ).toEqual({
      nextPageToken: "foo",
      data: [
        {
          source: { $apiName: "Object", $primaryKey: 0 },
          target: { $apiName: "LinkedObject", $primaryKey: 1 },
          linkType: "link",
        },
        {
          source: { $apiName: "Object", $primaryKey: 1 },
          target: { $apiName: "LinkedObject", $primaryKey: 2 },
          linkType: "link",
        },
        {
          source: { $apiName: "Object", $primaryKey: 1 },
          target: { $apiName: "LinkedObject", $primaryKey: 3 },
          linkType: "link",
        },
      ],
    });
  });
});
