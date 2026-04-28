/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectMetadata } from "@osdk/api";
import { describe, expect, it } from "vitest";
import { propertyJsdoc } from "./propertyJsdoc.js";

describe(propertyJsdoc, () => {
  it("renders value type descriptions as property metadata", () => {
    const property = {
      type: "string",
      valueTypeApiName: "emailValueType",
    } satisfies ObjectMetadata.Property;

    expect(
      propertyJsdoc(property, undefined, {
        apiName: "email",
        valueTypeDescription: "A value type for email addresses",
      }),
    ).toMatchInlineSnapshot(`
      "/**
       *   value type description: A value type for email addresses
       */
      "
    `);
  });
});
