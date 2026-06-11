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

import type { ActionTypeV2 } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import { wireActionTypeV2ToSdkActionMetadata } from "./wireActionTypeV2ToSdkActionMetadata.js";

describe(wireActionTypeV2ToSdkActionMetadata, () => {
  it("carries struct field nullability through to the sdk metadata", () => {
    const wireActionType: ActionTypeV2 = {
      apiName: "createPerson",
      description: "Create a person",
      parameters: {
        person: {
          dataType: {
            type: "struct",
            fields: [
              {
                name: "firstName",
                fieldType: { type: "string" },
                required: true,
              },
              {
                name: "lastName",
                fieldType: { type: "string" },
                required: true,
              },
              {
                name: "middleName",
                fieldType: { type: "string" },
                required: false,
              },
              {
                name: "age",
                fieldType: { type: "integer" },
                required: false,
              },
            ],
          },
          required: true,
        },
      },
      rid: "ri.ontology.main.action-type.00000000-0000-0000-0000-000000000000",
      operations: [],
      status: "ACTIVE",
    };

    const result = wireActionTypeV2ToSdkActionMetadata(wireActionType);

    expect(result.parameters).toEqual({
      person: {
        multiplicity: false,
        nullable: false,
        description: undefined,
        type: {
          type: "struct",
          struct: {
            // required fields keep the bare string encoding so existing
            // generated SDKs are unchanged
            firstName: "string",
            lastName: "string",
            // optional fields carry their nullability
            middleName: { type: "string", nullable: true },
            age: { type: "integer", nullable: true },
          },
        },
      },
    });
  });
});
