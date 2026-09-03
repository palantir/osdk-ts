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
 * An example checked-in lockfile. A change to the lockfile format requires migrations for existing
 * any existing lockfile.
 *
 * This test is the tripwire to catch such changes. If it fails, and the diff was intended, bump
 * ONTOLOGY_SCHEMA_LOCKFILE_VERSION and provide the migration for a previously-written lockfile,
 * then update this golden object.
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
      transitions: [
        {
          id: "require-lastName",
          gracePeriod: { type: "afterInstall", days: 30 },
          instructions: [{ type: "addRequiredProperty", property: "lastName" }],
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
};

describe("serializeLockfile", () => {
  it("writes the persisted format this version of maker promises", () => {
    expect(serializeLockfile(golden)).toBe(
      `{
  "//": [
    "This is a generated file, do not modify manually.",
    "Run \`maker --write-locks\` to regenerate this file."
  ],
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
      "transitions": [
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
`,
    );
  });

  it("pins the version the golden was written under", () => {
    expect(golden.version).toBe(ONTOLOGY_SCHEMA_LOCKFILE_VERSION);
  });

  it("ends with a trailing newline, so the file is POSIX-clean in review", () => {
    expect(serializeLockfile(golden).endsWith("}\n")).toBe(true);
  });

  it("keeps the header comment parseable as JSON", () => {
    const parsed = JSON.parse(serializeLockfile(golden));
    expect(Object.keys(parsed)[0]).toBe("//");
    delete parsed["//"];
    expect(parsed).toStrictEqual(golden);
  });
});
