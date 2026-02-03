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
  FunctionSampleValueTypeIR,
  OSDK_SNIPPETS_SPEC,
  PropertySampleIR,
  PropertySampleValueTypeIR,
} from "@osdk/docs-spec-sdk";
import { snippets } from "./generatedNoCheck/docsNoComputedVariables.js";

export const REACT_OSDK_SNIPPETS: SdkSnippets<typeof OSDK_SNIPPETS_SPEC> = {
  ...snippets,
  computedVariables: {
    actionParameterSampleValuesV2: handleActionParameterSampleValuesV2,
    propertyValueV2: handlePropertyValueV2,
    primaryKeyPropertyV2: handlePrimaryKeyPropertyV2,
    linkedPrimaryKeyPropertyV2: handleLinkedPrimaryKeyPropertyV2,
  },
};

function handleActionParameterSampleValuesV2({
  rawActionTypeParameterValues,
}: {
  rawActionTypeParameterValues?: ActionParameterSampleValuesIR;
}): Array<{ key: string; value: string; last: boolean }> {
  if (rawActionTypeParameterValues == null) {
    throw new Error("Cannot render a null rawActionTypeParameterValues");
  }

  return rawActionTypeParameterValues.map((param, index, array) => ({
    key: param.key,
    value: renderType(param.value),
    last: index === array.length - 1,
  }));
}

function handlePropertyValueV2({
  rawPropertyValue,
}: {
  rawPropertyValue?: PropertySampleValueTypeIR;
}): string {
  return renderPropertyValue(rawPropertyValue);
}

function handlePrimaryKeyPropertyV2({
  rawPrimaryKeyProperty,
}: {
  rawPrimaryKeyProperty?: PropertySampleIR;
}): { apiName: string; value: string } {
  if (rawPrimaryKeyProperty == null) {
    throw new Error("Cannot render with null rawPrimaryKeyProperty");
  }

  return {
    apiName: rawPrimaryKeyProperty.apiName,
    value: renderPropertyValue(rawPrimaryKeyProperty.value),
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
}): { apiName: string; value: string; type: string } {
  if (rawLinkedPrimaryKeyProperty == null) {
    throw new Error("Cannot render with null rawLinkedPrimaryKeyProperty");
  }

  return {
    apiName: rawLinkedPrimaryKeyProperty.apiName,
    value: renderPropertyValue(rawLinkedPrimaryKeyProperty.value),
    type: rawLinkedPrimaryKeyProperty.type,
  };
}

function renderPropertyValue(
  propertyValue: PropertySampleValueTypeIR | undefined,
): string {
  if (propertyValue == null) {
    throw new Error("Cannot render a null property value");
  }

  return renderType(propertyValue);
}

function renderType(
  type:
    | ActionParameterSampleValueTypeIR
    | FunctionSampleValueTypeIR
    | PropertySampleValueTypeIR,
): string {
  if (type == null) {
    throw new Error("Cannot render a null type value");
  }

  switch (type.type) {
    case "array":
    case "set":
    case "list":
      return `[${renderType(type.subtype)}]`;
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
      return type.value.toString();
    case "date": {
      const offsetDate = new Date();
      offsetDate.setDate(offsetDate.getDate() + (type.daysOffset ?? 0));
      return `"${offsetDate.toISOString().slice(0, 10)}"`;
    }
    case "timestamp": {
      const offsetDate = new Date();
      offsetDate.setDate(offsetDate.getDate() + (type.daysOffset ?? 0));
      return `"${offsetDate.toISOString()}"`;
    }
    case "object":
      return `"primaryKeyValue" // or myObjectInstance`;
    case "objectSet":
      return `client(${type.objectTypeApiName}).where({ /* filter conditions */ })`;
    case "anonymousCustomType":
    case "customType":
    case "interface":
    case "marking":
      return "{}";
    case "attachment":
      return type.hasAttachments ? "attachment" : "{}";
    case "mediaReference":
      return "mediaUpload";
    case "objectType":
      return `"${type.objectTypeApiName}"`;
    case "map":
      return `{key: ${renderType(type.valueType)}}`;
    case "string":
      return `"${type.value ?? "value"}"`;
    case "unknown":
    default:
      return `"value"`;
  }
}
