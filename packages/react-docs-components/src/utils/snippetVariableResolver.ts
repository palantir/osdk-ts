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
import { toCamelCase, toSnakeCase, toAllCapsSnakeCase } from "./snippetHelpers.js";

// =============================================================================
// Types
// =============================================================================

export type EntityType = "objectType" | "actionType" | "queryType" | "interfaceType";

export interface SnippetContext {
  ontology: OntologyFullMetadata;
  entityType: EntityType;
  entityApiName: string;
  // Optional overrides for specific variables (e.g., selected property)
  overrides?: Record<string, unknown>;
}

// =============================================================================
// IR Types (matching @osdk/docs-spec-sdk)
// =============================================================================

/**
 * PropertySampleValueTypeIR - for object/interface properties
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
 * ActionParameterSampleValueTypeIR - for action parameters
 */
type ActionParameterSampleValueIR =
  | { type: "boolean"; value: boolean }
  | { type: "integer"; value: number }
  | { type: "long"; value: number }
  | { type: "double"; value: number }
  | { type: "date"; daysOffset: number }
  | { type: "timestamp"; daysOffset: number }
  | { type: "string"; value: string }
  | { type: "object"; primaryKeyType: "string" | "other"; apiName?: string }
  | { type: "objectSet"; objectTypeApiName: string }
  | { type: "objectType"; objectTypeApiName: string }
  | { type: "attachment"; hasAttachments: boolean }
  | { type: "mediaReference"; hasMediaParameter: boolean }
  | { type: "interface" }
  | { type: "marking" }
  | { type: "unknown"; value?: string }
  | { type: "list"; subtype: ActionParameterSampleValueIR }
  | { type: "set"; subtype: ActionParameterSampleValueIR };

/**
 * FunctionSampleValueTypeIR - for query/function parameters
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

// =============================================================================
// IR Value Generators
// =============================================================================

function getPropertySampleValueIR(dataType: { type: string } | undefined): PropertySampleValueIR {
  const type = dataType?.type ?? "string";
  switch (type) {
    case "boolean": return { type: "boolean", value: true };
    case "byte": return { type: "byte", value: 1 };
    case "integer": return { type: "integer", value: 123 };
    case "short": return { type: "short", value: 123 };
    case "long": return { type: "long", value: 123 };
    case "decimal": return { type: "decimal", value: 123.45 };
    case "double": return { type: "double", value: 123.45 };
    case "float": return { type: "float", value: 123.45 };
    case "date": return { type: "date", daysOffset: 0 };
    case "timestamp": return { type: "timestamp", daysOffset: 0 };
    case "string": return { type: "string", value: "sampleValue" };
    case "array": return { type: "array", subtype: { type: "string", value: "sampleValue" } };
    default: return { type: "string", value: "sampleValue" };
  }
}

function getPropertySampleValueIncrementedIR(dataType: { type: string } | undefined): PropertySampleValueIR {
  const type = dataType?.type ?? "string";
  switch (type) {
    case "boolean": return { type: "boolean", value: false };
    case "byte": return { type: "byte", value: 2 };
    case "integer": return { type: "integer", value: 456 };
    case "short": return { type: "short", value: 456 };
    case "long": return { type: "long", value: 456 };
    case "decimal": return { type: "decimal", value: 456.78 };
    case "double": return { type: "double", value: 456.78 };
    case "float": return { type: "float", value: 456.78 };
    case "date": return { type: "date", daysOffset: 7 };
    case "timestamp": return { type: "timestamp", daysOffset: 7 };
    case "string": return { type: "string", value: "sampleValue2" };
    default: return { type: "string", value: "sampleValue2" };
  }
}

function getActionParameterSampleValueIR(param: ActionParameterV2): ActionParameterSampleValueIR {
  const dataType = param.dataType as { type: string; objectApiName?: string; objectTypeApiName?: string; interfaceTypeApiName?: string };
  switch (dataType.type) {
    case "boolean": return { type: "boolean", value: true };
    case "integer": return { type: "integer", value: 123 };
    case "long": return { type: "long", value: 123 };
    case "double": return { type: "double", value: 123.45 };
    case "date": return { type: "date", daysOffset: 0 };
    case "timestamp": return { type: "timestamp", daysOffset: 0 };
    case "string": return { type: "string", value: "sampleValue" };
    case "object": return { type: "object", primaryKeyType: "string", apiName: dataType.objectApiName };
    case "objectSet": return { type: "objectSet", objectTypeApiName: dataType.objectTypeApiName || "ObjectType" };
    case "objectType": return { type: "objectType", objectTypeApiName: dataType.objectTypeApiName || "ObjectType" };
    case "attachment": return { type: "attachment", hasAttachments: true };
    case "mediaReference": return { type: "mediaReference", hasMediaParameter: true };
    case "interfaceObject": return { type: "interface" };
    case "marking": return { type: "marking" };
    default: return { type: "unknown", value: "sampleValue" };
  }
}

function getFunctionParameterSampleValueIR(dataType: { type: string; objectApiName?: string }): FunctionSampleValueIR {
  switch (dataType.type) {
    case "boolean": return { type: "boolean", value: true };
    case "integer": return { type: "integer", value: 123 };
    case "long": return { type: "long", value: 123 };
    case "double": return { type: "double", value: 123.45 };
    case "decimal": return { type: "decimal", value: 123.45 };
    case "float": return { type: "float", value: 123.45 };
    case "date": return { type: "date", daysOffset: 0 };
    case "timestamp": return { type: "timestamp", daysOffset: 0 };
    case "string": return { type: "string", value: "sampleValue" };
    case "object": return { type: "object", primaryKeyType: "string", apiName: dataType.objectApiName };
    case "attachment": return { type: "attachment", hasAttachments: true };
    default: return { type: "string", value: "sampleValue" };
  }
}

function getSharedPropertySampleValueIR(propertyType: SharedPropertyType): PropertySampleValueIR {
  const dataType = propertyType.dataType as { type: string };
  return getPropertySampleValueIR(dataType);
}

// =============================================================================
// Entity Metadata Extractors
// =============================================================================

interface ObjectTypeMetadata {
  apiName: string;
  camelName: string;
  properties: Array<{ apiName: string; dataType: { type: string } }>;
  primaryKey: string;
  primaryKeyDataType: { type: string } | undefined;
  firstProperty: { apiName: string; dataType: { type: string } } | undefined;
  linkTypes: unknown[];
}

function extractObjectTypeMetadata(ontology: OntologyFullMetadata, apiName: string): ObjectTypeMetadata | undefined {
  const meta = ontology.objectTypes[apiName];
  if (!meta) return undefined;

  const objType = meta.objectType;
  const properties = Object.entries(objType.properties).map(([propApiName, propDef]) => ({
    apiName: propApiName,
    dataType: (propDef.dataType as { type: string }) || { type: "string" },
  }));

  const primaryKeyProp = objType.properties[objType.primaryKey];

  return {
    apiName,
    camelName: toCamelCase(apiName),
    properties,
    primaryKey: objType.primaryKey,
    primaryKeyDataType: primaryKeyProp?.dataType as { type: string } | undefined,
    firstProperty: properties[0],
    linkTypes: meta.linkTypes || [],
  };
}

interface ActionTypeMetadata {
  apiName: string;
  camelName: string;
  parameters: Array<{ apiName: string; param: ActionParameterV2 }>;
  hasAttachmentParameter: boolean;
  hasMediaParameter: boolean;
  hasTimestampParameter: boolean;
  hasDateParameter: boolean;
}

function extractActionTypeMetadata(ontology: OntologyFullMetadata, apiName: string): ActionTypeMetadata | undefined {
  const actionType = ontology.actionTypes[apiName] as ActionTypeV2 | undefined;
  if (!actionType) return undefined;

  const parameters = Object.entries(actionType.parameters || {}).map(([paramApiName, param]) => ({
    apiName: paramApiName,
    param,
  }));

  const hasAttachmentParameter = parameters.some(p => (p.param.dataType as { type: string }).type === "attachment");
  const hasMediaParameter = parameters.some(p => (p.param.dataType as { type: string }).type === "mediaReference");
  const hasTimestampParameter = parameters.some(p => (p.param.dataType as { type: string }).type === "timestamp");
  const hasDateParameter = parameters.some(p => (p.param.dataType as { type: string }).type === "date");

  return {
    apiName,
    camelName: toCamelCase(apiName),
    parameters,
    hasAttachmentParameter,
    hasMediaParameter,
    hasTimestampParameter,
    hasDateParameter,
  };
}

interface QueryTypeMetadata {
  apiName: string;
  camelName: string;
  parameters: Array<{ apiName: string; dataType: { type: string; objectApiName?: string } }>;
  version: string | undefined;
  hasTimestampParameter: boolean;
  hasDateParameter: boolean;
  hasAttachmentParameter: boolean;
}

function extractQueryTypeMetadata(ontology: OntologyFullMetadata, apiName: string): QueryTypeMetadata | undefined {
  const queryType = ontology.queryTypes[apiName] as QueryTypeV2 | undefined;
  if (!queryType) return undefined;

  const parameters = Object.entries(queryType.parameters || {}).map(([paramApiName, param]) => ({
    apiName: paramApiName,
    dataType: param.dataType as { type: string; objectApiName?: string },
  }));

  const hasTimestampParameter = parameters.some(p => p.dataType.type === "timestamp");
  const hasDateParameter = parameters.some(p => p.dataType.type === "date");
  const hasAttachmentParameter = parameters.some(p => p.dataType.type === "attachment");

  return {
    apiName,
    camelName: toCamelCase(apiName),
    parameters,
    version: queryType.version,
    hasTimestampParameter,
    hasDateParameter,
    hasAttachmentParameter,
  };
}

interface InterfaceTypeMetadata {
  apiName: string;
  camelName: string;
  properties: Array<{ apiName: string; propType: SharedPropertyType }>;
  firstProperty: { apiName: string; propType: SharedPropertyType } | undefined;
  implementingObjectTypes: string[];
}

function extractInterfaceTypeMetadata(ontology: OntologyFullMetadata, apiName: string): InterfaceTypeMetadata | undefined {
  const interfaceType = ontology.interfaceTypes[apiName] as InterfaceType | undefined;
  if (!interfaceType) return undefined;

  const properties = Object.entries(interfaceType.properties || {}).map(([propApiName, propType]) => ({
    apiName: propApiName,
    propType,
  }));

  // Find implementing object types
  const implementingObjectTypes = Object.keys(ontology.objectTypes).filter(objApiName => {
    const objMeta = ontology.objectTypes[objApiName];
    const implementedInterfaces = objMeta?.implementsInterfaces || [];
    return implementedInterfaces.includes(apiName);
  });

  return {
    apiName,
    camelName: toCamelCase(apiName),
    properties,
    firstProperty: properties[0],
    implementingObjectTypes,
  };
}

// =============================================================================
// Variable Builders - Create the "raw" input objects for computed variables
// =============================================================================

/**
 * Build rawActionTypeParameterValues for actionParameterSampleValuesV1/V2
 */
function buildRawActionTypeParameterValues(
  actionMeta: ActionTypeMetadata
): Array<{ key: string; value: ActionParameterSampleValueIR; last: boolean }> {
  return actionMeta.parameters.map((p, index, array) => ({
    key: p.apiName,
    value: getActionParameterSampleValueIR(p.param),
    last: index === array.length - 1,
  }));
}

/**
 * Build rawFunctionInputValues for functionInputValuesV1/V2
 */
function buildRawFunctionInputValues(
  queryMeta: QueryTypeMetadata
): { parameters: Record<string, FunctionSampleValueIR> } {
  const parameters: Record<string, FunctionSampleValueIR> = {};
  for (const p of queryMeta.parameters) {
    parameters[p.apiName] = getFunctionParameterSampleValueIR(p.dataType);
  }
  return { parameters };
}

/**
 * Build rawProperties for propertiesV1/V2
 */
function buildRawProperties(
  objectMeta: ObjectTypeMetadata
): Array<{ apiName: string; value: PropertySampleValueIR }> {
  return objectMeta.properties.map(p => ({
    apiName: p.apiName,
    value: getPropertySampleValueIR(p.dataType),
  }));
}

/**
 * Build rawPrimaryKeyProperty for primaryKeyPropertyV1/V2
 */
function buildRawPrimaryKeyProperty(
  objectMeta: ObjectTypeMetadata
): { apiName: string; value: PropertySampleValueIR } {
  return {
    apiName: objectMeta.primaryKey,
    value: getPropertySampleValueIR(objectMeta.primaryKeyDataType),
  };
}

/**
 * Build rawPropertyValue for propertyValueV1/V2
 */
function buildRawPropertyValue(
  dataType: { type: string } | undefined
): PropertySampleValueIR {
  return getPropertySampleValueIR(dataType);
}

/**
 * Build rawPropertyValueIncremented for propertyValueIncrementedV1/V2
 */
function buildRawPropertyValueIncremented(
  dataType: { type: string } | undefined
): PropertySampleValueIR {
  return getPropertySampleValueIncrementedIR(dataType);
}

// =============================================================================
// Main Variable Resolution
// =============================================================================

/**
 * Resolve all variables needed for a snippet based on context
 */
export function resolveSnippetVariables(ctx: SnippetContext): Record<string, unknown> {
  const variables: Record<string, unknown> = {};

  // Common variables
  variables.rawOntologyApiName = ctx.ontology.ontology.apiName;
  variables.packageName = "@my-org/osdk"; // Default, can be overridden

  // Get first object type for context (used in many snippets)
  const firstObjectTypeApiName = Object.keys(ctx.ontology.objectTypes)[0];
  const firstObjectMeta = firstObjectTypeApiName
    ? extractObjectTypeMetadata(ctx.ontology, firstObjectTypeApiName)
    : undefined;

  switch (ctx.entityType) {
    case "objectType": {
      const meta = extractObjectTypeMetadata(ctx.ontology, ctx.entityApiName);
      if (meta) {
        // Object type identifiers
        variables.objectType = meta.camelName;
        variables.rawObjectTypeApiName = meta.apiName;

        // Properties
        variables.rawProperties = buildRawProperties(meta);
        variables.rawPrimaryKeyProperty = buildRawPrimaryKeyProperty(meta);
        variables.hasProperties = meta.properties.length > 0;

        // First property for examples
        const firstProp = meta.firstProperty;
        variables.property = firstProp ? toCamelCase(firstProp.apiName) : "property";
        variables.propertySnakeCase = toSnakeCase(variables.property as string);
        variables.rawPropertyValue = buildRawPropertyValue(firstProp?.dataType);
        variables.rawPropertyValueIncremented = buildRawPropertyValueIncremented(firstProp?.dataType);

        // Title property
        const titlePropApiName = meta.properties[0]?.apiName;
        variables.titleProperty = titlePropApiName ? toCamelCase(titlePropApiName) : "property";
        variables.titlePropertySnakeCase = toSnakeCase(variables.titleProperty as string);
        variables.allCapsTitlePropertySnakeCase = toAllCapsSnakeCase(variables.titleProperty as string);

        // Date/timestamp detection
        const firstPropType = firstProp?.dataType?.type;
        variables.isDateProperty = firstPropType === "date";
        variables.isTimestampProperty = firstPropType === "timestamp";

        // Links
        variables.linkTypes = meta.linkTypes;
      }
      break;
    }

    case "actionType": {
      const meta = extractActionTypeMetadata(ctx.ontology, ctx.entityApiName);
      if (meta) {
        // Action identifiers
        variables.actionApiName = meta.camelName;
        variables.rawActionApiName = meta.apiName;
        variables.actionApiNameUpperCaseFirstCharacter = meta.camelName.charAt(0).toUpperCase() + meta.camelName.slice(1);
        variables.actionApiNameSnakeCase = toSnakeCase(meta.camelName);
        variables.actionApiNameBatchRequest = `${meta.camelName}BatchRequest`;

        // Parameters - the key input for computed variables
        variables.rawActionTypeParameterValues = buildRawActionTypeParameterValues(meta);
        variables.hasParameters = meta.parameters.length > 0;

        // Type flags
        variables.hasTimestampInputs = meta.hasTimestampParameter;
        variables.hasDateInputs = meta.hasDateParameter;
        variables.needsImports = meta.hasTimestampParameter || meta.hasDateParameter;

        // Attachment handling
        variables.hasAttachmentProperty = meta.hasAttachmentParameter;
        variables.hasAttachmentUpload = meta.hasAttachmentParameter;
        variables.hasAttachmentImports = meta.hasAttachmentParameter;

        const attachmentParam = meta.parameters.find(p =>
          (p.param.dataType as { type: string }).type === "attachment"
        );
        variables.attachmentProperty = attachmentParam ? toCamelCase(attachmentParam.apiName) : undefined;

        // Media handling
        variables.hasMediaParameter = meta.hasMediaParameter;

        // Context object type (for examples that need an object type)
        variables.objectType = firstObjectMeta?.camelName || "Object";

        // Property for media examples
        if (firstObjectMeta?.firstProperty) {
          variables.property = toCamelCase(firstObjectMeta.firstProperty.apiName);
        }
      }
      break;
    }

    case "queryType": {
      const meta = extractQueryTypeMetadata(ctx.ontology, ctx.entityApiName);
      if (meta) {
        // Function/Query identifiers
        variables.funcApiName = meta.camelName;
        variables.rawFuncApiName = meta.apiName;
        variables.funcApiNameSnakeCase = toSnakeCase(meta.camelName);
        variables.funcVersion = meta.version;

        // Parameters - the key input for computed variables
        variables.rawFunctionInputValues = buildRawFunctionInputValues(meta);

        // Type flags
        variables.hasTimestampInputs = meta.hasTimestampParameter;
        variables.hasDateInputs = meta.hasDateParameter;
        variables.needsImports = meta.hasTimestampParameter || meta.hasDateParameter;

        // Attachment handling
        variables.hasAttachmentProperty = meta.hasAttachmentParameter;
        variables.hasAttachmentUpload = meta.hasAttachmentParameter;
        variables.hasAttachmentImports = meta.hasAttachmentParameter;

        const attachmentParam = meta.parameters.find(p => p.dataType.type === "attachment");
        variables.attachmentProperty = attachmentParam ? toCamelCase(attachmentParam.apiName) : undefined;

        // Context object type
        variables.objectType = firstObjectMeta?.camelName || "Object";
      }
      break;
    }

    case "interfaceType": {
      const meta = extractInterfaceTypeMetadata(ctx.ontology, ctx.entityApiName);
      if (meta) {
        // Interface identifiers
        variables.interfaceApiName = meta.camelName;
        variables.interfaceApiNameCamelCase = meta.camelName;

        // First property
        const firstProp = meta.firstProperty;
        variables.property = firstProp ? toCamelCase(firstProp.apiName) : "property";
        variables.rawPropertyValue = firstProp
          ? getSharedPropertySampleValueIR(firstProp.propType)
          : { type: "string", value: "sampleValue" };

        // Implementing object types
        const firstImplObjType = meta.implementingObjectTypes[0]
          || Object.keys(ctx.ontology.objectTypes)[0]
          || "Object";
        variables.objectTypeApiName = firstImplObjType;
        variables.objectTypeApiNameCamelCase = toCamelCase(firstImplObjType);
      }
      break;
    }
  }

  // Apply any overrides
  if (ctx.overrides) {
    Object.assign(variables, ctx.overrides);
  }

  return variables;
}

/**
 * Resolve computed variables by calling their functions with the resolved variables
 */
export function resolveComputedVariables(
  variables: Record<string, unknown>,
  computedVariableNames: string[],
  computedVariableFunctions: Record<string, (vars: Record<string, unknown>) => unknown>,
): Record<string, unknown> {
  const resolved: Record<string, unknown> = {};

  for (const varName of computedVariableNames) {
    const func = computedVariableFunctions[varName];
    if (func) {
      try {
        resolved[varName] = func(variables);
      } catch (error) {
        resolved[varName] = `[Error computing ${varName}: ${error}]`;
      }
    } else {
      resolved[varName] = `[Missing function for ${varName}]`;
    }
  }

  return resolved;
}
