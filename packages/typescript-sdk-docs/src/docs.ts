/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { SdkSnippets } from "@osdk/docs-spec-core";
import type {
  ActionParameterSampleValuesIR,
  ActionParameterSampleValueTypeIR,
  FunctionSampleParametersIR,
  FunctionSampleValueTypeIR,
  OSDK_SNIPPETS_SPEC,
  PropertySampleIR,
  PropertySampleValueTypeIR,
} from "@osdk/docs-spec-sdk";
import { outdent } from "outdent";
import { snippets } from "./generatedNoCheck/docsNoComputedVariables.js";

const indentedNewLine = (spacesCount: number) => `\n${" ".repeat(spacesCount)}`;

export const TYPESCRIPT_OSDK_SNIPPETS: SdkSnippets<typeof OSDK_SNIPPETS_SPEC> =
  {
    ...snippets,
    computedVariables: {
      functionInputValuesV1: handleFunctionInputValuesV1,
      functionInputValuesV2: handleFunctionInputValuesV2,
      actionParameterSampleValuesV1: handleActionParameterSampleValuesV1,
      actionParameterSampleValuesV2: handleActionParameterSampleValuesV2,
      propertyValueV1: handlePropertyValueV1,
      propertyValueV2: handlePropertyValueV2,
      propertyValueIncrementedV1: handlePropertyValueIncrementedV1,
      propertyValueIncrementedV2: handlePropertyValueIncrementedV2,
      propertiesV1: handlePropertiesV1,
      propertiesV2: handlePropertiesV2,
      primaryKeyPropertyV1: handlePrimaryKeyPropertyV1,
      primaryKeyPropertyV2: handlePrimaryKeyPropertyV2,
      primaryKeyPropertyValueV2: handlePrimaryKeyPropertyValueV2,
      linkedPropertiesV1: handleLinkedPropertiesV1,
      linkedPropertiesV2: handleLinkedPropertiesV2,
      linkedPrimaryKeyPropertyV1: handleLinkedPrimaryKeyPropertyV1,
      linkedPrimaryKeyPropertyV2: handleLinkedPrimaryKeyPropertyV2,
      arrayElementValue: handleArrayElementValue,
    },
  };

// SDK major version enum
enum SdkMajorVersion {
  V1 = 1,
  V2 = 2,
}

// Helper functions for properties
function handleFunctionInputValuesV1({
  rawFunctionInputValues,
}: {
  rawFunctionInputValues?: FunctionSampleParametersIR;
}) {
  return renderFunctionInputValues(rawFunctionInputValues, SdkMajorVersion.V1);
}

function handleFunctionInputValuesV2({
  rawFunctionInputValues,
}: {
  rawFunctionInputValues?: FunctionSampleParametersIR;
}) {
  return renderFunctionInputValues(rawFunctionInputValues, SdkMajorVersion.V2);
}

function handleActionParameterSampleValuesV1({
  rawActionTypeParameterValues,
}: {
  rawActionTypeParameterValues?: ActionParameterSampleValuesIR;
}) {
  return renderActionParameterValues(
    rawActionTypeParameterValues,
    SdkMajorVersion.V1,
  );
}

function handleActionParameterSampleValuesV2({
  rawActionTypeParameterValues,
}: {
  rawActionTypeParameterValues?: ActionParameterSampleValuesIR;
}) {
  return renderActionParameterValues(
    rawActionTypeParameterValues,
    SdkMajorVersion.V2,
  );
}

function handlePropertyValueV1(
  { rawPropertyValue }: { rawPropertyValue?: PropertySampleValueTypeIR },
) {
  return renderPropertyValue(rawPropertyValue, SdkMajorVersion.V1);
}

function handlePropertyValueV2(
  { rawPropertyValue }: { rawPropertyValue?: PropertySampleValueTypeIR },
) {
  return renderPropertyValue(rawPropertyValue, SdkMajorVersion.V2);
}

function handlePropertyValueIncrementedV1({
  rawPropertyValueIncremented,
}: {
  rawPropertyValueIncremented?: PropertySampleValueTypeIR;
}) {
  return renderPropertyValue(rawPropertyValueIncremented, SdkMajorVersion.V1);
}

function handlePropertyValueIncrementedV2({
  rawPropertyValueIncremented,
}: {
  rawPropertyValueIncremented?: PropertySampleValueTypeIR;
}) {
  return renderPropertyValue(rawPropertyValueIncremented, SdkMajorVersion.V2);
}

function handleArrayElementValue(
  { rawPropertyValue }: { rawPropertyValue?: PropertySampleValueTypeIR },
) {
  return renderArrayElementPropertyValue(rawPropertyValue, SdkMajorVersion.V2);
}

function renderArrayElementPropertyValue(
  propertyValue: PropertySampleValueTypeIR | undefined,
  majorVersion: SdkMajorVersion,
): string {
  if (propertyValue == null) {
    throw new Error("Cannot render a null property value");
  }

  return renderType(propertyValue, majorVersion, "arraySubType");
}

function handlePropertiesV1(
  { rawProperties }: { rawProperties?: PropertySampleIR[] },
) {
  if (rawProperties == null) {
    throw new Error("Cannot render with null rawProperties");
  }

  return rawProperties.map(prop => ({
    apiName: prop.apiName,
    value: renderPropertyValue(prop.value, SdkMajorVersion.V1),
  }));
}

function handlePropertiesV2(
  { rawProperties }: { rawProperties?: PropertySampleIR[] },
) {
  if (rawProperties == null) {
    throw new Error("Cannot render with null rawProperties");
  }

  return rawProperties.map(prop => ({
    apiName: prop.apiName,
    value: renderPropertyValue(prop.value, SdkMajorVersion.V2),
  }));
}

function handlePrimaryKeyPropertyV1(
  { rawPrimaryKeyProperty }: { rawPrimaryKeyProperty?: PropertySampleIR },
) {
  if (rawPrimaryKeyProperty == null) {
    throw new Error("Cannot render with null rawPrimaryKeyProperty");
  }

  return {
    apiName: rawPrimaryKeyProperty.apiName,
    value: renderPropertyValue(rawPrimaryKeyProperty.value, SdkMajorVersion.V1),
  };
}

function handlePrimaryKeyPropertyV2(
  { rawPrimaryKeyProperty }: { rawPrimaryKeyProperty?: PropertySampleIR },
) {
  if (rawPrimaryKeyProperty == null) {
    throw new Error("Cannot render with null rawPrimaryKeyProperty");
  }

  return {
    apiName: rawPrimaryKeyProperty.apiName,
    value: renderPropertyValue(rawPrimaryKeyProperty.value, SdkMajorVersion.V2),
  };
}

function handlePrimaryKeyPropertyValueV2({
  rawPrimaryKeyProperty,
}: {
  rawPrimaryKeyProperty?: PropertySampleIR;
}) {
  if (rawPrimaryKeyProperty == null) {
    throw new Error("Cannot render with null rawPrimaryKeyProperty");
  }

  return renderPropertyValue(rawPrimaryKeyProperty.value, SdkMajorVersion.V2);
}

function handleLinkedPropertiesV1(
  { rawLinkedProperties }: { rawLinkedProperties?: PropertySampleIR[] },
) {
  if (rawLinkedProperties == null) {
    throw new Error("Cannot render with null rawLinkedProperties");
  }

  return rawLinkedProperties.map(prop => ({
    apiName: prop.apiName,
    value: renderPropertyValue(prop.value, SdkMajorVersion.V1),
  }));
}

function handleLinkedPropertiesV2(
  { rawLinkedProperties }: { rawLinkedProperties?: PropertySampleIR[] },
) {
  if (rawLinkedProperties == null) {
    throw new Error("Cannot render with null rawLinkedProperties");
  }

  return rawLinkedProperties.map(prop => ({
    apiName: prop.apiName,
    value: renderPropertyValue(prop.value, SdkMajorVersion.V2),
  }));
}

function handleLinkedPrimaryKeyPropertyV1({
  rawLinkedPrimaryKeyProperty,
}: {
  rawLinkedPrimaryKeyProperty?: {
    apiName: string;
    value: PropertySampleValueTypeIR;
    type: string;
  };
}) {
  if (rawLinkedPrimaryKeyProperty == null) {
    throw new Error("Cannot render with null rawLinkedPrimaryKeyProperty");
  }

  return {
    apiName: rawLinkedPrimaryKeyProperty.apiName,
    value: renderPropertyValue(
      rawLinkedPrimaryKeyProperty.value,
      SdkMajorVersion.V1,
    ),
    type: rawLinkedPrimaryKeyProperty.type,
  };
}

function handleLinkedPrimaryKeyPropertyV2({
  rawLinkedPrimaryKeyProperty,
}: {
  rawLinkedPrimaryKeyProperty?: {
    apiName: string;
    value: PropertySampleValueTypeIR;
    type: string;
  };
}) {
  if (rawLinkedPrimaryKeyProperty == null) {
    throw new Error("Cannot render with null rawLinkedPrimaryKeyProperty");
  }

  return {
    apiName: rawLinkedPrimaryKeyProperty.apiName,
    value: renderPropertyValue(
      rawLinkedPrimaryKeyProperty.value,
      SdkMajorVersion.V2,
    ),
    type: rawLinkedPrimaryKeyProperty.type,
  };
}

// Common function to render function input values for any version
function renderFunctionInputValues(
  rawFunctionInputValues: FunctionSampleParametersIR | undefined,
  majorVersion: SdkMajorVersion,
): string {
  if (rawFunctionInputValues == null) {
    throw new Error("Cannot render a null rawFunctionInputValues");
  }
  if (Object.keys(rawFunctionInputValues.parameters).length === 0) {
    return "";
  }

  return outdent`
    {
        ${
    Object.entries(rawFunctionInputValues.parameters)
      .map(([key, value]) =>
        `"${key}": ${renderType(value, majorVersion, "functionInput")}`
      )
      .join(`,${indentedNewLine(4)}`)
  }
    }`;
}

// Common function to render action parameter values for any version
function renderActionParameterValues(
  rawActionTypeParameterValues: ActionParameterSampleValuesIR | undefined,
  majorVersion: SdkMajorVersion,
): Array<{ key: string; value: string; last: boolean }> {
  if (rawActionTypeParameterValues == null) {
    throw new Error("Cannot render a null rawActionTypeParameterValues");
  }

  return rawActionTypeParameterValues.map((param, index, array) => ({
    key: param.key,
    value: renderType(param.value, majorVersion, "actionParameter"),
    last: index === array.length - 1,
  }));
}

// Function to render property values
function renderPropertyValue(
  propertyValue: PropertySampleValueTypeIR | undefined,
  majorVersion: SdkMajorVersion,
): string {
  if (propertyValue == null) {
    throw new Error("Cannot render a null property value");
  }

  return renderType(propertyValue, majorVersion, "property");
}

// Unified render function for all types
function renderType(
  type:
    | ActionParameterSampleValueTypeIR
    | FunctionSampleValueTypeIR
    | PropertySampleValueTypeIR,
  majorVersion: SdkMajorVersion,
  context: "property" | "functionInput" | "actionParameter" | "arraySubType",
): string {
  if (type == null) {
    throw new Error("Cannot render a null type value");
  }

  switch (type.type) {
    case "array":
    case "set":
    case "list":
      const arraySubType = renderType(type.subtype, majorVersion, context);
      return context === "arraySubType" ? arraySubType : `[${arraySubType}]`;
    case "boolean":
      return type.value ? "true" : "false";
    case "byte":
    case "integer":
    case "long":
    case "short":
      return type.value.toString();
    case "decimal":
    case "double":
    case "float":
      if (context === "actionParameter") {
        return `"${type.value.toString()}"`;
      }
      return type.value.toString();
    case "date":
      return getDateParameter(majorVersion, type.daysOffset);
    case "timestamp":
      return getTimestampParameter(majorVersion, type.daysOffset);
    case "object":
      const primaryKeyValue = type.primaryKeyType === "string"
        ? "\"primaryKeyValue\""
        : "primaryKeyValue";
      if (context === "actionParameter") {
        return majorVersion >= SdkMajorVersion.V2
          ? `"primaryKeyValue" // or myObjectInstance`
          : `{ __primaryKey: ${primaryKeyValue}, /* other properties */ }`;
      }
      return primaryKeyValue;
    case "objectSet":
      return `client(${type.objectTypeApiName}).where({ /* filter conditions */ })`;
    case "anonymousCustomType":
    case "customType":
      return "{}";
    case "attachment":
      return type.hasAttachments ? "attachment" : "{}";
    case "interface":
    case "marking":
      return "{}";
    case "mediaReference":
      return context === "actionParameter"
        ? "mediaUpload"
        : "mediaReferenceRid";
    case "objectType":
      return `"${type.objectTypeApiName}"`;
    case "map":
      if (type.keyType.type === "object") {
        return `{[${
          getMapKeyObjectName(type.keyType.apiName)
        }.$objectSpecifier]: ${
          renderType(type.valueType, majorVersion, context)
        }}`;
      }
      return `{${
        renderType(
          type.valueType,
          majorVersion,
          context,
        )
      }: ${renderType(type.valueType, majorVersion, context)}}`;

    case "string":
    case "unknown":
    default:
      return `"${type.value ?? "value"}"`;
  }
}

function getMapKeyObjectName(apiName?: string) {
  if (apiName == null) {
    return "osdkObject";
  }
  return `${getDisplayName(processObjectApiName(apiName))}OsdkObject`;
}

function getDisplayName(input: string): string {
  const tokens = input.split(/[_-]|(?<=[a-z])(?=[A-Z])/);
  const result = tokens.map(token => titleCase(token.toLowerCase())).join("");
  return result.charAt(0).toLowerCase() + result.slice(1);
}

function titleCase(token: string) {
  return (token[0] ?? "").toUpperCase() + token.slice(1);
}

// For objects that have namespaces prefixed to their api name, we remove it and only return the last portion
// As that is what the TS OSDK uses to generate identifiers for objects
function processObjectApiName(objectApiName: string) {
  const last = objectApiName.lastIndexOf(".");
  if (last === -1) {
    return objectApiName;
  }
  return objectApiName.slice(last + 1);
}

// Generic helper functions for date and timestamp
function getDateParameter(
  majorVersion: SdkMajorVersion,
  daysOffset = 0,
): string {
  const offsetDate = new Date();
  offsetDate.setDate(offsetDate.getDate() + daysOffset);
  const hasOffset = daysOffset !== 0;

  if (majorVersion >= SdkMajorVersion.V2) {
    return `"${offsetDate.toISOString().split("T")[0]}"`;
  }
  return hasOffset
    ? `LocalDate.now().plusDays(${daysOffset})`
    : "LocalDate.now()";
}

function getTimestampParameter(
  majorVersion: SdkMajorVersion,
  daysOffset = 0,
): string {
  const offsetDate = new Date();
  offsetDate.setDate(offsetDate.getDate() + daysOffset);
  const hasOffset = daysOffset !== 0;

  if (majorVersion >= SdkMajorVersion.V2) {
    return `"${offsetDate.toISOString()}"`;
  }
  return hasOffset
    ? `Timestamp.now().plusDays(${daysOffset})`
    : "Timestamp.now()";
}
