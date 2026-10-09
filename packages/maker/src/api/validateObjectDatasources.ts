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

import invariant from "tiny-invariant";

import type { ObjectType } from "./object/ObjectType.js";
import type { ObjectTypeDatasourceDefinition_dataset } from "./object/ObjectTypeDatasourceDefinition.js";
import type { ObjectTypeDefinition } from "./object/ObjectTypeDefinition.js";

/** Validates an object's datasource configuration. */
export function validateObjectDatasources(
  objectDef: ObjectTypeDefinition | ObjectType,
): void {
  const datasources = objectDef.datasources ?? [];
  if (objectDef.includeEmptyBackingDatasource) {
    const nonDatasetDatasources = datasources.filter(
      (ds) => ds.type !== "dataset",
    );
    invariant(
      nonDatasetDatasources.length === 0,
      `Object type "${objectDef.apiName}" has non-dataset datasources (${nonDatasetDatasources
        .map((ds) => ds.type)
        .join(", ")}) and cannot use includeEmptyBackingDatasource. ` +
        `Empty backing datasources are only supported for object types with dataset datasources.`,
    );
  }
  const baseDatasources = datasources.filter((ds) =>
    ["dataset", "stream", "restrictedView", "direct"].includes(ds.type),
  );
  invariant(
    baseDatasources.length <= 1,
    `Object ${objectDef.apiName} has more than one base datasource (got: [${baseDatasources
      .map((ds) => ds.type)
      .join(", ")}])`,
  );
  for (const datasource of datasources) {
    if (datasource.type === "dataset") {
      validateDatasetDatasource(objectDef, datasource);
    }
  }
}

function validateDatasetDatasource(
  objectDef: ObjectTypeDefinition | ObjectType,
  datasource: ObjectTypeDatasourceDefinition_dataset,
): void {
  const context = `Object "${objectDef.apiName}"`;
  if (datasource.dataset !== undefined) {
    invariant(
      datasource.dataset != null &&
        typeof datasource.dataset.name === "string" &&
        datasource.dataset.name.trim().length > 0,
      `${context} dataset reference must have a non-empty name`,
    );
    invariant(
      !objectDef.includeEmptyBackingDatasource,
      `${context} cannot use includeEmptyBackingDatasource with an explicit dataset`,
    );
  }

  if (datasource.propertyMapping === undefined) return;
  invariant(
    datasource.dataset !== undefined,
    `${context} propertyMapping requires an explicit dataset`,
  );
  invariant(
    datasource.propertyMapping != null &&
      typeof datasource.propertyMapping === "object" &&
      (Object.getPrototypeOf(datasource.propertyMapping) === Object.prototype ||
        Object.getPrototypeOf(datasource.propertyMapping) == null),
    `${context} dataset propertyMapping must be a record`,
  );

  const properties = new Map<string, { editOnly?: boolean }>(
    Array.isArray(objectDef.properties)
      ? objectDef.properties.map((property) => [property.apiName, property])
      : Object.entries(objectDef.properties ?? {}),
  );
  const derivedPropertyNames = new Set(
    (objectDef.datasources ?? []).flatMap((ds) =>
      ds.type === "derived" ? Object.keys(ds.propertyMapping) : [],
    ),
  );
  for (const [propertyName, columnName] of Object.entries(
    datasource.propertyMapping,
  )) {
    invariant(
      properties.has(propertyName),
      `${context} dataset propertyMapping references undefined property "${propertyName}"`,
    );
    invariant(
      !properties.get(propertyName)?.editOnly &&
        !derivedPropertyNames.has(propertyName),
      `${context} property "${propertyName}" is edit-only or derived and cannot map to a dataset column`,
    );
    invariant(
      typeof columnName === "string" && columnName.length > 0,
      `${context} property "${propertyName}" must map to a non-empty column name`,
    );
  }
}
