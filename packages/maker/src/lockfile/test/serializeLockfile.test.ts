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

import { describe, expect, it } from "vitest";

import type { OntologySchemaLockfile } from "../OntologySchemaLockfile.js";
import {
  ONTOLOGY_SCHEMA_LOCKFILE_VERSION,
  serializeLockfile,
} from "../OntologySchemaLockfile.js";

/**
 * A lockfile is a checked-in artifact, so its bytes are the compatibility surface. Two of the
 * shapes it persists — a property's `PropertyTypeType` and a transition's
 * `InterfaceSchemaMigrationInstruction` — are the authoring DSL's own types, recorded verbatim.
 * Nothing else couples the on-disk format to the DSL that tightly, and nothing in the type system
 * notices when the DSL is reshaped for authoring ergonomics: every lockfile in every consumer's
 * repository would silently change shape.
 *
 * This test is that tripwire. If it fails and the diff was intended, bump
 * `ONTOLOGY_SCHEMA_LOCKFILE_VERSION` and provide the migration for any lockfile already written
 * under the old version, then update the golden below.
 *
 * It covers one of each instruction variant and each grace period kind, so a variant added without
 * a deliberate look at the persisted format has nowhere to hide.
 */
const golden: OntologySchemaLockfile = {
  version: 1,
  interfaces: {
    "com.example.Employee": {
      schema: {
        properties: {
          classification: {
            type: {
              type: "marking",
              markingType: "MANDATORY",
              markingInputGroupName: "employeeMarkings",
            },
            required: true,
          },
          lastName: { type: "string", required: false },
          startDate: { type: "date", required: false },
        },
      },
      migrations: {
        active: [
          {
            id: "require-lastName",
            gracePeriod: { type: "afterInstall", days: 30 },
            instructions: [
              { type: "addRequiredProperty", property: "lastName" },
            ],
          },
          {
            id: "require-startDate",
            gracePeriod: { type: "deadline", deadline: "2026-01-31T00:00:00Z" },
            instructions: [
              { type: "addRequiredProperty", property: "startDate" },
            ],
          },
        ],
      },
    },
  },
};

describe("serializeLockfile", () => {
  it("writes the persisted format this version of maker promises", () => {
    expect(serializeLockfile(golden)).toBe(
      `{
  "version": 1,
  "interfaces": {
    "com.example.Employee": {
      "schema": {
        "properties": {
          "classification": {
            "type": {
              "type": "marking",
              "markingType": "MANDATORY",
              "markingInputGroupName": "employeeMarkings"
            },
            "required": true
          },
          "lastName": {
            "type": "string",
            "required": false
          },
          "startDate": {
            "type": "date",
            "required": false
          }
        }
      },
      "migrations": {
        "active": [
          {
            "id": "require-lastName",
            "gracePeriod": {
              "type": "afterInstall",
              "days": 30
            },
            "instructions": [
              {
                "type": "addRequiredProperty",
                "property": "lastName"
              }
            ]
          },
          {
            "id": "require-startDate",
            "gracePeriod": {
              "type": "deadline",
              "deadline": "2026-01-31T00:00:00Z"
            },
            "instructions": [
              {
                "type": "addRequiredProperty",
                "property": "startDate"
              }
            ]
          }
        ]
      }
    }
  }
}
`,
    );
  });

  // Pinned separately so that bumping the version fails here too, rather than only inside the
  // golden above where it could be waved through as part of a larger reformat.
  it("pins the version the golden was written under", () => {
    expect(golden.version).toBe(ONTOLOGY_SCHEMA_LOCKFILE_VERSION);
  });

  it("ends with a trailing newline, so the file is POSIX-clean in review", () => {
    expect(serializeLockfile(golden).endsWith("}\n")).toBe(true);
  });
});
