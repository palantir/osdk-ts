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
import { getRequiredPropertiesForCreate } from "./getRequiredPropertiesForCreate.js";

type ObjectTypeMetadata = Parameters<
  typeof getRequiredPropertiesForCreate
>[0];

function createObjectTypeMetadata(
  datasources: ObjectTypeMetadata["datasources"],
): ObjectTypeMetadata {
  return {
    apiName: "TestObject",
    displayName: "Test object",
    pluralDisplayName: "Test objects",
    aliases: [],
    datasources,
    icon: { type: "blueprint", name: "blueprint", color: "blue" },
    primaryKey: "id",
    properties: {
      id: {
        dataType: { type: "string" },
        rid: "id-rid",
        typeClasses: [],
        dataConstraints: { nullability: "NOT_NULLABLE" },
      },
      columnRequired: {
        dataType: { type: "string" },
        rid: "column-required-rid",
        typeClasses: [],
        dataConstraints: { nullability: "NOT_NULLABLE" },
      },
      editOnlyRequired: {
        dataType: { type: "string" },
        rid: "edit-only-required-rid",
        typeClasses: [],
        dataConstraints: { nullability: "NOT_NULLABLE" },
      },
      editOnlyNullable: {
        dataType: { type: "string" },
        rid: "edit-only-nullable-rid",
        typeClasses: [],
        dataConstraints: { nullability: "NULLABLE" },
      },
    },
    rid: "test-object-rid",
    status: "ACTIVE",
    titleProperty: "id",
  };
}

describe(getRequiredPropertiesForCreate, () => {
  it("includes only non-nullable properties on a single edit-only write path", () => {
    const objectType = createObjectTypeMetadata([{
      rid: "datasource-rid",
      definition: {
        type: "dataset",
        datasetRid: "dataset-rid",
        propertyMapping: {
          id: { type: "column", column: "id" },
          columnRequired: {
            type: "column",
            column: "column_required",
          },
          editOnlyRequired: { type: "editOnly" },
          editOnlyNullable: { type: "editOnly" },
        },
      },
    }]);

    expect(getRequiredPropertiesForCreate(objectType)).toEqual([
      "editOnlyRequired",
      "id",
    ]);
  });

  it("does not infer required properties from multiple editable datasources", () => {
    const objectType = createObjectTypeMetadata([
      {
        rid: "first-datasource-rid",
        definition: {
          type: "dataset",
          datasetRid: "first-dataset-rid",
          propertyMapping: {
            editOnlyRequired: { type: "editOnly" },
          },
        },
      },
      {
        rid: "second-datasource-rid",
        definition: {
          type: "dataset",
          datasetRid: "second-dataset-rid",
          propertyMapping: {
            editOnlyNullable: { type: "editOnly" },
          },
        },
      },
    ]);

    expect(getRequiredPropertiesForCreate(objectType)).toEqual(["id"]);
  });

  it("treats every property on an edits-only datasource as writable", () => {
    const objectType = createObjectTypeMetadata([{
      rid: "datasource-rid",
      definition: { type: "editsOnly" },
    }]);

    expect(getRequiredPropertiesForCreate(objectType)).toEqual([
      "columnRequired",
      "editOnlyRequired",
      "id",
    ]);
  });
});
