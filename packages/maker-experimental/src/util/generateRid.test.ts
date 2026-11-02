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

import type { OntologyDefinition } from "@osdk/maker";
import { describe, expect, it } from "vitest";

import { OntologyRidGeneratorImpl } from "./generateRid.js";

const emptyOntology: OntologyDefinition = {
  ACTION_TYPE: {},
  INTERFACE_TYPE: {},
  LINK_TYPE: {},
  OBJECT_TYPE: {},
  SHARED_PROPERTY_TYPE: {},
  VALUE_TYPE: {},
};

describe("OntologyRidGeneratorImpl.generateRidForValueType", () => {
  it("gives different value types at the same semantic version distinct version IDs", () => {
    const ridGenerator = new OntologyRidGeneratorImpl(emptyOntology);
    const classification = ridGenerator.generateRidForValueType(
      "classification",
      "1.0.0",
    );
    const countryCode = ridGenerator.generateRidForValueType(
      "countryCode",
      "1.0.0",
    );

    expect(classification.rid).not.toBe(countryCode.rid);
    expect(classification.versionId).not.toBe(countryCode.versionId);
  });
});
