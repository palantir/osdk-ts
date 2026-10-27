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

import {
  datasetRefSchema,
  resourceIdentity,
  type ColumnType,
} from "@osdk/resource";
import invariant from "tiny-invariant";

import type { PropertyTypeType } from "../properties/PropertyTypeType.js";
import type { ObjectTypeDefinition } from "./ObjectTypeDefinition.js";
import { getPropertySource } from "./PropertySource.js";

export function validateDatasetDatasource(
  definition: ObjectTypeDefinition,
): void {
  const datasetDatasources =
    definition.datasources?.filter(
      (datasource) => datasource.type === "dataset",
    ) ?? [];

  const hasDatasetReference = datasetDatasources.some(
    (datasource) => datasource.dataset !== undefined,
  );
  const allHaveDatasetReference = datasetDatasources.every(
    (datasource) => datasource.dataset !== undefined,
  );

  invariant(
    !hasDatasetReference || allHaveDatasetReference,
    `Object "${definition.apiName}" cannot mix dataset datasources with and without explicit dataset references`,
  );

  const references = datasetDatasources.flatMap((datasource) => {
    if (datasource.dataset === undefined) return [];

    const reference = datasetRefSchema.parse(datasource.dataset);
    invariant(
      reference.locator.type === "rid",
      `Dataset backing datasource for object "${definition.apiName}" requires a RID locator; API-name dataset references are not supported`,
    );

    invariant(
      !definition.includeEmptyBackingDatasource,
      "An explicit dataset reference cannot also create an empty backing datasource",
    );
    return [reference];
  });

  for (const [name, property] of Object.entries(definition.properties ?? {})) {
    const source = getPropertySource(property);
    if (source?.type === "editOnly") {
      invariant(
        !definition.datasources?.some(
          (datasource) => datasource.type === "stream",
        ),
        "Edit only properties are not supported on object types with stream datasources",
      );
      continue;
    }
    if (source?.type === "direct") {
      invariant(
        definition.datasources?.some(
          (datasource) => datasource.type === "direct",
        ),
        `Direct source for property "${name}" on object "${definition.apiName}" requires a direct datasource`,
      );
      continue;
    }
    // NOTE: The source is either "column" or "struct" at this point

    // If there is no dataset reference AND this property has a source, then error
    invariant(
      source === undefined || hasDatasetReference,
      `Property "${name}" on object "${definition.apiName}" can only specify a column source for an explicit dataset backing datasource`,
    );
    if (!hasDatasetReference) continue;

    // At this point, we know there is a dataset reference, so we are going to require a source
    // This forces folks who use a dataset reference to use the "source" field
    invariant(
      source !== undefined,
      `Property "${name}" on object "${definition.apiName}" requires an explicit column source`,
    );

    // Just a sanity check at this point
    invariant(
      source.type === "column" || source.type === "struct",
      `Property "${name}" on object "${definition.apiName}" requires a single column or struct source`,
    );

    const selected = source.type === "struct" ? source.column : source;
    invariant(selected.column.length > 0, "Column name must not be empty");
    if (source.type === "struct") {
      invariant(
        typeof property.type === "object" && property.type.type === "struct",
        `Struct source for property "${name}" on object "${definition.apiName}" requires a struct property`,
      );

      for (const field of Object.keys(property.type.structDefinition)) {
        invariant(
          Object.hasOwn(source.fields, field),
          `Struct source for property "${name}" must map field "${field}"`,
        );
      }

      // Backing field names become keys in the emitted struct mapping.
      const columnFields = new Set<string>();
      for (const [field, columnField] of Object.entries(source.fields)) {
        invariant(
          Object.hasOwn(property.type.structDefinition, field),
          `Struct source for property "${name}" maps unknown field "${field}"`,
        );
        invariant(
          columnField.length > 0,
          "Struct source field names must not be empty",
        );
        invariant(
          !columnFields.has(columnField),
          `Struct source for property "${name}" maps backing field "${columnField}" more than once`,
        );
        columnFields.add(columnField);
      }
    }
    for (const reference of references) {
      invariant(
        resourceIdentity(selected.resource) === resourceIdentity(reference),
        `Column source for property "${name}" on object "${definition.apiName}" must reference its backing dataset`,
      );
      const schema = reference.schema ?? selected.resource.schema;
      if (schema === undefined) continue;
      invariant(
        Object.hasOwn(schema.columns, selected.column),
        `Dataset for object "${definition.apiName}" has no column "${selected.column}"`,
      );

      let column = schema.columns[selected.column];
      if (property.array) {
        invariant(
          column.type === "array",
          `Column "${selected.column}" must be an array for object "${definition.apiName}"`,
        );
        column = column.elementType;
      }
      invariant(
        isCompatible(
          property.type,
          column,
          source.type === "struct" ? source.fields : undefined,
        ),
        `Column "${selected.column}" is incompatible with property type ${JSON.stringify(property.type)} on object "${definition.apiName}": received ${JSON.stringify(column)}`,
      );
    }
  }
}

function isCompatible(
  property: PropertyTypeType,
  column: ColumnType,
  fields?: Readonly<Record<string, string>>,
): boolean {
  const kind = typeof property === "string" ? property : property.type;
  switch (kind) {
    case "attachment":
    case "geopoint":
    case "geoshape":
    case "geotimeSeries":
    case "marking":
    case "mediaReference":
      return column.type === "string";
    case "vector":
      return column.type === "array" && column.elementType.type === "float";
    case "struct": {
      if (
        column.type !== "struct" ||
        typeof property !== "object" ||
        property.type !== "struct"
      )
        return false;
      return Object.entries(property.structDefinition).every(
        ([name, field]) => {
          const columnField = fields?.[name] ?? name;
          return (
            Object.hasOwn(column.fields, columnField) &&
            isCompatible(
              typeof field === "object" && "fieldType" in field
                ? field.fieldType
                : field,
              column.fields[columnField],
            )
          );
        },
      );
    }
    case "decimal":
      return (
        column.type === "decimal" &&
        (typeof property === "string" ||
          property.type !== "decimal" ||
          ((property.precision === undefined ||
            column.precision === undefined ||
            property.precision === column.precision) &&
            (property.scale === undefined ||
              column.scale === undefined ||
              property.scale === column.scale)))
      );
    case "boolean":
    case "byte":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "short":
    case "string":
    case "timestamp":
      return column.type === kind;
    default:
      // Keep declared kinds exhaustive without rejecting unknown runtime kinds.
      kind satisfies never;
      return true;
  }
}
