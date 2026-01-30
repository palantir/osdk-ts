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

import type { ActionParameterV2, ActionTypeV2, InterfaceType, OntologyFullMetadata, QueryTypeV2, SharedPropertyType } from "@osdk/foundry.ontologies";
import {
  toAllCapsSnakeCase,
  toCamelCase,
  toSnakeCase,
} from "./snippetHelpers.js";

/**
 * Helper to uppercase first character
 */
function toUpperCaseFirstChar(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Type for property sample value in IR format
 * This matches PropertySampleValueTypeIR from @osdk/docs-spec-sdk
 */
type PropertySampleValueIR =
  | { type: "boolean"; value: boolean }
  | { type: "byte"; value: number }
  | { type: "integer"; value: number }
  | { type: "short"; value: number }
  | { type: "long"; value: number }
  | { type: "decimal"; value: number }
  | { type: "double"; value: number }
  | { type: "float"; value: number }
  | { type: "date"; daysOffset: number }
  | { type: "timestamp"; daysOffset: number }
  | { type: "string"; value: string }
  | { type: "unknown"; value?: string }
  | { type: "array"; subtype: PropertySampleValueIR };

/**
 * Get sample value for object property in IR format based on property type
 */
function getPropertySampleValueIR(propertyDef: { dataType?: { type: string } }): PropertySampleValueIR {
  const dataType = propertyDef.dataType as { type: string } | undefined;
  const type = dataType?.type ?? "string";

  switch (type) {
    case "boolean":
      return { type: "boolean", value: true };
    case "byte":
      return { type: "byte", value: 1 };
    case "integer":
      return { type: "integer", value: 123 };
    case "short":
      return { type: "short", value: 123 };
    case "long":
      return { type: "long", value: 123 };
    case "decimal":
      return { type: "decimal", value: 123.45 };
    case "double":
      return { type: "double", value: 123.45 };
    case "float":
      return { type: "float", value: 123.45 };
    case "date":
      return { type: "date", daysOffset: 0 };
    case "timestamp":
      return { type: "timestamp", daysOffset: 0 };
    case "string":
      return { type: "string", value: "sampleValue" };
    case "array":
      // For arrays, return a simple string subtype
      return { type: "array", subtype: { type: "string", value: "sampleValue" } };
    default:
      return { type: "string", value: "sampleValue" };
  }
}

/**
 * Map ontology data to variables needed for snippet templates
 */
export function mapOntologyToVariables(
  ontology: OntologyFullMetadata,
  objectTypeApiName: string,
): Record<string, unknown> {
  const objectTypeMeta = ontology.objectTypes[objectTypeApiName];
  if (!objectTypeMeta) {
    throw new Error(`Object type "${objectTypeApiName}" not found in ontology`);
  }

  const objectType = objectTypeMeta.objectType;
  const objectTypeCamel = toCamelCase(objectTypeApiName);

  // Find title property (displayName or first property)
  const titlePropertyApiName = objectType.displayName
    || Object.keys(objectType.properties)[0];

  const titleProperty = titlePropertyApiName
    ? toCamelCase(titlePropertyApiName)
    : "property";

  // Map properties to { apiName, value } format with IR value types
  const rawProperties = Object.entries(objectType.properties).map((
    [apiName, propDef],
  ) => ({
    apiName,
    value: getPropertySampleValueIR(propDef),
  }));

  // Get primary key property
  const primaryKeyApiName = objectType.primaryKey;
  const primaryKeyPropDef = objectType.properties[primaryKeyApiName];
  const rawPrimaryKeyProperty = {
    apiName: primaryKeyApiName,
    value: primaryKeyPropDef
      ? getPropertySampleValueIR(primaryKeyPropDef)
      : { type: "string" as const, value: "primaryKeyValue" },
  };

  // Get first property for examples
  const firstPropertyApiName = Object.keys(objectType.properties)[0];
  const firstPropDef = firstPropertyApiName ? objectType.properties[firstPropertyApiName] : undefined;
  const property = firstPropertyApiName
    ? toCamelCase(firstPropertyApiName)
    : "property";
  const propertySnakeCase = toSnakeCase(property);

  // Get raw property value for first property in IR format
  const rawPropertyValue = firstPropDef
    ? getPropertySampleValueIR(firstPropDef)
    : { type: "string" as const, value: "sampleValue" };

  // Get incremented value for first property (used in aggregations)
  const rawPropertyValueIncremented = firstPropDef
    ? getPropertySampleValueIncrementedIR(firstPropDef)
    : { type: "string" as const, value: "sampleValue2" };

  // Detect date/timestamp properties
  const firstPropType = (firstPropDef?.dataType as { type: string } | undefined)?.type;
  const isDateProperty = firstPropType === "date";
  const isTimestampProperty = firstPropType === "timestamp";

  return {
    // Ontology level
    rawOntologyApiName: ontology.ontology.apiName,
    packageName: "@my-org/osdk", // Default package name

    // Object type
    objectType: objectTypeCamel,
    rawObjectTypeApiName: objectTypeApiName,

    // Title property
    titleProperty,
    titlePropertySnakeCase: toSnakeCase(titleProperty),
    allCapsTitlePropertySnakeCase: toAllCapsSnakeCase(titleProperty),

    // Properties
    rawProperties,
    rawPrimaryKeyProperty,
    rawPropertyValue,
    rawPropertyValueIncremented,
    property,
    propertySnakeCase,
    isDateProperty,
    isTimestampProperty,

    // Links (if any)
    linkTypes: objectTypeMeta.linkTypes,

    // Boolean flags
    hasProperties: rawProperties.length > 0,
  };
}

/**
 * Get an incremented sample value for aggregation examples
 */
function getPropertySampleValueIncrementedIR(propertyDef: { dataType?: { type: string } }): PropertySampleValueIR {
  const dataType = propertyDef.dataType as { type: string } | undefined;
  const type = dataType?.type ?? "string";

  switch (type) {
    case "boolean":
      return { type: "boolean", value: false };
    case "byte":
      return { type: "byte", value: 2 };
    case "integer":
      return { type: "integer", value: 456 };
    case "short":
      return { type: "short", value: 456 };
    case "long":
      return { type: "long", value: 456 };
    case "decimal":
      return { type: "decimal", value: 456.78 };
    case "double":
      return { type: "double", value: 456.78 };
    case "float":
      return { type: "float", value: 456.78 };
    case "date":
      return { type: "date", daysOffset: 7 };
    case "timestamp":
      return { type: "timestamp", daysOffset: 7 };
    case "string":
      return { type: "string", value: "sampleValue2" };
    default:
      return { type: "string", value: "sampleValue2" };
  }
}


// ============================================================================
// Action Type Variable Mapping
// ============================================================================

/**
 * Check if action parameter has an attachment type
 */
function isAttachmentParameter(param: ActionParameterV2): boolean {
  const dataType = param.dataType as { type: string };
  return dataType.type === "attachment";
}

/**
 * Check if action parameter has a timestamp type
 */
function isTimestampParameter(param: ActionParameterV2): boolean {
  const dataType = param.dataType as { type: string };
  return dataType.type === "timestamp";
}

/**
 * Check if action parameter has a date type
 */
function isDateParameter(param: ActionParameterV2): boolean {
  const dataType = param.dataType as { type: string };
  return dataType.type === "date";
}

/**
 * Type for action parameter sample value in IR format
 * This matches ActionParameterSampleValueTypeIR from @osdk/docs-spec-sdk
 */
type ActionParameterSampleValueIR =
  | { type: "string"; value: string }
  | { type: "integer"; value: number }
  | { type: "long"; value: number }
  | { type: "double"; value: number }
  | { type: "float"; value: number }
  | { type: "boolean"; value: boolean }
  | { type: "date"; daysOffset: number }
  | { type: "timestamp"; daysOffset: number }
  | { type: "attachment"; hasAttachments: boolean }
  | { type: "mediaReference"; hasMediaParameter: boolean }
  | { type: "object"; primaryKeyType: "string" | "other"; apiName?: string }
  | { type: "objectSet"; objectTypeApiName: string }
  | { type: "objectType"; objectTypeApiName: string }
  | { type: "interface" }
  | { type: "marking" }
  | { type: "unknown"; value?: string };

/**
 * Get sample value for action parameter in IR format
 */
function getActionParameterSampleValueIR(param: ActionParameterV2): ActionParameterSampleValueIR {
  const dataType = param.dataType as { type: string; objectApiName?: string; objectTypeApiName?: string };
  switch (dataType.type) {
    case "string":
      return { type: "string", value: "sampleValue" };
    case "integer":
      return { type: "integer", value: 123 };
    case "long":
      return { type: "long", value: 123 };
    case "double":
      return { type: "double", value: 123.45 };
    case "float":
      return { type: "float", value: 123.45 };
    case "boolean":
      return { type: "boolean", value: true };
    case "date":
      return { type: "date", daysOffset: 0 };
    case "timestamp":
      return { type: "timestamp", daysOffset: 0 };
    case "attachment":
      return { type: "attachment", hasAttachments: true };
    case "mediaReference":
      return { type: "mediaReference", hasMediaParameter: true };
    case "object":
      return { type: "object", primaryKeyType: "string", apiName: dataType.objectApiName };
    case "objectSet":
      return { type: "objectSet", objectTypeApiName: dataType.objectTypeApiName || "ObjectType" };
    case "objectType":
      return { type: "objectType", objectTypeApiName: dataType.objectTypeApiName || "ObjectType" };
    case "interfaceObject":
      return { type: "interface" };
    case "marking":
      return { type: "marking" };
    default:
      return { type: "unknown", value: "sampleValue" };
  }
}

/**
 * Map action type to variables for snippet templates
 */
export function mapActionToVariables(
  ontology: OntologyFullMetadata,
  actionTypeApiName: string,
): Record<string, unknown> {
  const actionType = ontology.actionTypes[actionTypeApiName] as ActionTypeV2 | undefined;
  if (!actionType) {
    throw new Error(`Action type "${actionTypeApiName}" not found in ontology`);
  }

  const actionApiName = toCamelCase(actionTypeApiName);
  const parameters = actionType.parameters || {};
  const parameterEntries = Object.entries(parameters);

  // Map parameters for snippet templates in IR format
  // Format: { key: string, value: ActionParameterSampleValueTypeIR, last: boolean }
  const rawActionTypeParameterValues = parameterEntries.map(([apiName, param], index, array) => ({
    key: apiName,
    value: getActionParameterSampleValueIR(param),
    last: index === array.length - 1,
  }));

  // Check for attachment/timestamp/date/media parameters
  const hasAttachmentProperty = parameterEntries.some(([, param]) => isAttachmentParameter(param));
  const hasTimestampInputs = parameterEntries.some(([, param]) => isTimestampParameter(param));
  const hasDateInputs = parameterEntries.some(([, param]) => isDateParameter(param));
  const hasMediaParameter = parameterEntries.some(([, param]) => {
    const dataType = param.dataType as { type: string };
    return dataType.type === "mediaReference";
  });

  // Find first attachment parameter if any
  const attachmentParam = parameterEntries.find(([, param]) => isAttachmentParameter(param));
  const attachmentProperty = attachmentParam ? toCamelCase(attachmentParam[0]) : undefined;

  // Get first object type from ontology for context
  const firstObjectTypeApiName = Object.keys(ontology.objectTypes)[0] || "Object";
  const objectType = toCamelCase(firstObjectTypeApiName);

  return {
    // Ontology level
    rawOntologyApiName: ontology.ontology.apiName,
    packageName: "@my-org/osdk",

    // Action type identifiers
    actionApiName,
    rawActionApiName: actionTypeApiName,
    actionApiNameUpperCaseFirstCharacter: toUpperCaseFirstChar(actionApiName),
    actionApiNameSnakeCase: toSnakeCase(actionApiName),
    actionApiNameBatchRequest: `${actionApiName}BatchRequest`,

    // Parameters
    rawActionTypeParameterValues,
    hasParameters: parameterEntries.length > 0,

    // Type flags
    hasTimestampInputs,
    hasDateInputs,
    needsImports: hasTimestampInputs || hasDateInputs,

    // Attachment handling
    hasAttachmentProperty,
    hasAttachmentUpload: hasAttachmentProperty,
    hasAttachmentImports: hasAttachmentProperty,
    attachmentProperty,

    // Media handling
    hasMediaParameter,

    // Edit types (default values - would need action metadata for accurate values)
    actionEditAddObjectTypes: [],
    actionEditModifyObjectTypes: [],
    actionEditDeleteObjectCount: 0,
    actionEditAddedLinksCount: 0,
    actionEditDeletedLinksCount: 0,
    hasEditObjectTypes: false,

    // Context object type
    objectType,
  };
}

// ============================================================================
// Query Type Variable Mapping
// ============================================================================

/**
 * Type for function sample value in IR format
 * This matches FunctionSampleValueTypeIR from @osdk/docs-spec-sdk
 */
type FunctionSampleValueIR =
  | { type: "boolean"; value: boolean }
  | { type: "integer"; value: number }
  | { type: "long"; value: number }
  | { type: "double"; value: number }
  | { type: "decimal"; value: number }
  | { type: "float"; value: number }
  | { type: "date"; daysOffset: number }
  | { type: "timestamp"; daysOffset: number }
  | { type: "string"; value: string }
  | { type: "object"; primaryKeyType: "string" | "other"; apiName?: string }
  | { type: "attachment"; hasAttachments: boolean }
  | { type: "anonymousCustomType" }
  | { type: "customType" }
  | { type: "unknown"; value?: string }
  | { type: "map"; keyType: FunctionSampleValueIR; valueType: FunctionSampleValueIR }
  | { type: "list"; subtype: FunctionSampleValueIR }
  | { type: "set"; subtype: FunctionSampleValueIR };

/**
 * Get sample value for query parameter in IR format
 */
function getQueryParameterSampleValueIR(dataType: { type: string; objectApiName?: string }): FunctionSampleValueIR {
  switch (dataType.type) {
    case "boolean":
      return { type: "boolean", value: true };
    case "integer":
      return { type: "integer", value: 123 };
    case "long":
      return { type: "long", value: 123 };
    case "double":
      return { type: "double", value: 123.45 };
    case "decimal":
      return { type: "decimal", value: 123.45 };
    case "float":
      return { type: "float", value: 123.45 };
    case "date":
      return { type: "date", daysOffset: 0 };
    case "timestamp":
      return { type: "timestamp", daysOffset: 0 };
    case "string":
      return { type: "string", value: "sampleValue" };
    case "object":
      return { type: "object", primaryKeyType: "string", apiName: dataType.objectApiName };
    case "attachment":
      return { type: "attachment", hasAttachments: true };
    default:
      return { type: "string", value: "sampleValue" };
  }
}

/**
 * Map query type to variables for snippet templates
 */
export function mapQueryToVariables(
  ontology: OntologyFullMetadata,
  queryTypeApiName: string,
): Record<string, unknown> {
  const queryType = ontology.queryTypes[queryTypeApiName] as QueryTypeV2 | undefined;
  if (!queryType) {
    throw new Error(`Query type "${queryTypeApiName}" not found in ontology`);
  }

  const funcApiName = toCamelCase(queryTypeApiName);
  const parameters = queryType.parameters || {};
  const parameterEntries = Object.entries(parameters);

  // Map parameters for snippet templates in IR format
  // FunctionSampleParametersIR expects { parameters: Record<string, FunctionSampleValueTypeIR> }
  const parametersRecord: Record<string, FunctionSampleValueIR> = {};
  for (const [apiName, param] of parameterEntries) {
    const dataType = param.dataType as { type: string; objectApiName?: string };
    parametersRecord[apiName] = getQueryParameterSampleValueIR(dataType);
  }
  const rawFunctionInputValues = { parameters: parametersRecord };

  // Check for timestamp/date parameters
  const hasTimestampInputs = parameterEntries.some(([, param]) => {
    const dataType = param.dataType as { type: string };
    return dataType.type === "timestamp";
  });
  const hasDateInputs = parameterEntries.some(([, param]) => {
    const dataType = param.dataType as { type: string };
    return dataType.type === "date";
  });

  // Check for attachment parameters
  const hasAttachmentProperty = parameterEntries.some(([, param]) => {
    const dataType = param.dataType as { type: string };
    return dataType.type === "attachment";
  });

  const attachmentParam = parameterEntries.find(([, param]) => {
    const dataType = param.dataType as { type: string };
    return dataType.type === "attachment";
  });
  const attachmentProperty = attachmentParam ? toCamelCase(attachmentParam[0]) : undefined;

  // Get first object type from ontology for context
  const firstObjectTypeApiName = Object.keys(ontology.objectTypes)[0] || "Object";
  const objectType = toCamelCase(firstObjectTypeApiName);

  return {
    // Ontology level
    rawOntologyApiName: ontology.ontology.apiName,
    packageName: "@my-org/osdk",

    // Function/Query identifiers
    funcApiName,
    rawFuncApiName: queryTypeApiName,
    funcApiNameSnakeCase: toSnakeCase(funcApiName),
    funcVersion: queryType.version,

    // Parameters
    rawFunctionInputValues,

    // Type flags
    hasTimestampInputs,
    hasDateInputs,
    needsImports: hasTimestampInputs || hasDateInputs,

    // Attachment handling
    hasAttachmentProperty,
    hasAttachmentUpload: hasAttachmentProperty,
    hasAttachmentImports: hasAttachmentProperty,
    attachmentProperty,

    // Context object type
    objectType,
  };
}

// ============================================================================
// Interface Type Variable Mapping
// ============================================================================

/**
 * Get the first property from an interface type
 */
function getFirstInterfaceProperty(interfaceType: InterfaceType): string {
  const properties = interfaceType.properties || {};
  const firstPropertyApiName = Object.keys(properties)[0];
  return firstPropertyApiName ? toCamelCase(firstPropertyApiName) : "property";
}

/**
 * Get sample value for a shared property type in IR format
 */
function getSharedPropertySampleValueIR(propertyType: SharedPropertyType): PropertySampleValueIR {
  const dataType = propertyType.dataType as { type: string };
  switch (dataType.type) {
    case "boolean":
      return { type: "boolean", value: true };
    case "byte":
      return { type: "byte", value: 1 };
    case "integer":
      return { type: "integer", value: 123 };
    case "short":
      return { type: "short", value: 123 };
    case "long":
      return { type: "long", value: 123 };
    case "decimal":
      return { type: "decimal", value: 123.45 };
    case "double":
      return { type: "double", value: 123.45 };
    case "float":
      return { type: "float", value: 123.45 };
    case "date":
      return { type: "date", daysOffset: 0 };
    case "timestamp":
      return { type: "timestamp", daysOffset: 0 };
    case "string":
      return { type: "string", value: "sampleValue" };
    default:
      return { type: "string", value: "sampleValue" };
  }
}

/**
 * Map interface type to variables for snippet templates
 */
export function mapInterfaceToVariables(
  ontology: OntologyFullMetadata,
  interfaceTypeApiName: string,
): Record<string, unknown> {
  const interfaceType = ontology.interfaceTypes[interfaceTypeApiName] as InterfaceType | undefined;
  if (!interfaceType) {
    throw new Error(`Interface type "${interfaceTypeApiName}" not found in ontology`);
  }

  const interfaceApiName = toCamelCase(interfaceTypeApiName);
  const properties = interfaceType.properties || {};
  const propertyEntries = Object.entries(properties);

  // Get first property
  const firstProperty = getFirstInterfaceProperty(interfaceType);

  // Get first property's sample value in IR format
  const firstPropertyDef = propertyEntries[0];
  const rawPropertyValue = firstPropertyDef
    ? getSharedPropertySampleValueIR(firstPropertyDef[1])
    : { type: "string" as const, value: "sampleValue" };

  // Get implementing object types (would need link info from ontology)
  const implementingObjectTypes = Object.keys(ontology.objectTypes)
    .filter(objTypeApiName => {
      const objTypeMeta = ontology.objectTypes[objTypeApiName];
      const implementedInterfaces = objTypeMeta?.implementsInterfaces || [];
      return implementedInterfaces.includes(interfaceTypeApiName);
    })
    .map(apiName => toCamelCase(apiName));

  // Get first implementing object type for cast example
  const firstObjectType = implementingObjectTypes[0]
    || toCamelCase(Object.keys(ontology.objectTypes)[0] || "Object");
  const firstObjectTypeRaw = Object.keys(ontology.objectTypes).find(apiName =>
    toCamelCase(apiName) === firstObjectType
  ) || Object.keys(ontology.objectTypes)[0] || "Object";

  return {
    // Ontology level
    rawOntologyApiName: ontology.ontology.apiName,
    packageName: "@my-org/osdk",

    // Interface identifiers
    interfaceApiName,
    interfaceApiNameCamelCase: interfaceApiName,

    // Property for examples
    property: firstProperty,
    rawPropertyValue,

    // Object type for cast examples
    objectTypeApiName: firstObjectTypeRaw,
    objectTypeApiNameCamelCase: firstObjectType,
  };
}
