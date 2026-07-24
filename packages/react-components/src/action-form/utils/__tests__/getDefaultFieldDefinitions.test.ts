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

import type { ActionMetadata } from "@osdk/api";
import { describe, expect, it } from "vitest";

import { getDefaultFieldDefinitions } from "../getDefaultFieldDefinitions.js";

function makeMetadata(
  parameters: ActionMetadata["parameters"]
): ActionMetadata {
  return {
    type: "action",
    apiName: "TestAction",
    displayName: "Test action",
    parameters,
    status: "ACTIVE",
    rid: "ri.action.test",
  };
}

describe("getDefaultFieldDefinitions", () => {
  it.each([
    "marking",
    "geohash",
    "geoshape",
    "objectType",
  ] satisfies ReadonlyArray<ActionMetadata.DataType.BaseActionParameterTypes>)(
    "renders unsupported primitive parameter type %s as unsupported",
    (parameterType) => {
      const [fieldDefinition] = getDefaultFieldDefinitions(
        makeMetadata({
          tags: {
            type: parameterType,
            nullable: false,
          },
        })
      );

      expect(fieldDefinition).toMatchObject({
        fieldKey: "tags",
        fieldComponent: "UNSUPPORTED",
        fieldComponentProps: {},
      });
    }
  );

  it("renders interface parameters as unsupported", () => {
    const [fieldDefinition] = getDefaultFieldDefinitions(
      makeMetadata({
        tags: {
          type: { type: "interface", interface: "Employee" },
          nullable: false,
        },
      })
    );

    expect(fieldDefinition).toMatchObject({
      fieldKey: "tags",
      fieldComponent: "UNSUPPORTED",
      fieldComponentProps: {},
    });
  });

  it("renders struct parameters as unsupported", () => {
    const [fieldDefinition] = getDefaultFieldDefinitions(
      makeMetadata({
        tags: {
          type: { type: "struct", struct: { name: "string" } },
          nullable: false,
        },
      })
    );

    expect(fieldDefinition).toMatchObject({
      fieldKey: "tags",
      fieldComponent: "UNSUPPORTED",
      fieldComponentProps: {},
    });
  });

  describe("label", () => {
    it("uses the parameter displayName when present", () => {
      const [fieldDefinition] = getDefaultFieldDefinitions(
        makeMetadata({
          tags: {
            type: "string",
            nullable: false,
            displayName: "Tags",
          },
        })
      );

      expect(fieldDefinition.label).toBe("Tags");
    });

    it("falls back to the parameter key when displayName is absent", () => {
      const [fieldDefinition] = getDefaultFieldDefinitions(
        makeMetadata({
          tags: {
            type: "string",
            nullable: false,
          },
        })
      );

      expect(fieldDefinition.label).toBe("tags");
    });
  });
});
