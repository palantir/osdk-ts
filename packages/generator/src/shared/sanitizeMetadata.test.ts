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

import { describe, expect, it } from "vitest";
import { sanitizeMetadata } from "./sanitizeMetadata.js";

describe(sanitizeMetadata, () => {
  it("sanitized action apiNames", () => {
    const sanitizedOntology = sanitizeMetadata({
      objectTypes: {},
      actionTypes: {
        "kebab-case": {
          apiName: "kebab-case",
          operations: [],
          parameters: {},
          status: "ACTIVE",
          rid: "ri.a.b.c.d",
        },
      },
      ontology: {
        rid: "ri.a.b.c.d",
        apiName: "ontology",
        displayName: "",
        description: "",
      },
      queryTypes: {},
      interfaceTypes: {},
      sharedPropertyTypes: {},
    });
    expect(sanitizedOntology.actionTypes["kebabCase"].apiName).toEqual(
      "kebabCase",
    );
  });
});
