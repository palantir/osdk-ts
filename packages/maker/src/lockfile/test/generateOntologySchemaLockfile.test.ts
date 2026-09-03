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

import { beforeEach, describe, expect, it } from "vitest";

import { defineInterface } from "../../api/defineInterface.js";
import {
  defineOntology,
  getOntologyDefinition,
} from "../../api/defineOntology.js";
import { generateOntologySchemaLockfile } from "../generateOntologySchemaLockfile.js";
import type { OntologySchemaLockfile } from "../OntologySchemaLockfile.js";

/**
 * The lockfile for an ontology whose one enrolled interface has a struct property, with the
 * struct's one field displayed under `displayName`.
 */
async function lockAddressStruct(
  displayName: string,
): Promise<OntologySchemaLockfile> {
  await defineOntology("com.palantir.", () => {}, "/tmp/");
  defineInterface({
    apiName: "Person",
    properties: {
      address: {
        type: {
          type: "struct",
          structDefinition: {
            zip: { fieldType: "string", displayMetadata: { displayName } },
          },
        },
      },
    },
    schemaMigrations: { transitions: [] },
  });
  return generateOntologySchemaLockfile(getOntologyDefinition());
}

describe("generateOntologySchemaLockfile", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  it("records a struct type without its field display metadata", async () => {
    // Otherwise renaming a struct field's display name marks the lockfile out of date, and then
    // reads as a breaking type change against the recorded one.
    expect(await lockAddressStruct("ZIP")).toEqual(
      await lockAddressStruct("Postal code"),
    );
  });
});
