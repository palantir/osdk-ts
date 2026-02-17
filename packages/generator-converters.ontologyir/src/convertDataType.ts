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

import type * as Ontologies from "@osdk/foundry.ontologies";
import type { IDataType } from "./OntologyIrToFullMetadataConverter.js";

export function convertDataType(
  dataType: IDataType,
  customTypes: Record<string, unknown>,
  required?: boolean,
): Ontologies.QueryDataType {
  if (required === false && dataType.type !== "optionalType") {
    return {
      type: "union",
      unionTypes: [convertDataType(dataType, customTypes), {
        type: "null",
      }],
    };
  }
  switch (dataType.type) {
    case "string":
      return { type: "string" };
    case "boolean":
      return { type: "boolean" };
    case "integer":
      return { type: "integer" };
    case "long":
      return { type: "long" };
    case "float":
      return { type: "float" };
    case "double":
      return { type: "double" };
    case "date":
      return { type: "date" };
    case "timestamp":
      return { type: "timestamp" };
    case "attachment":
      return { type: "attachment" };
    case "optionalType": {
      const optionalData = dataType as {
        type: "optionalType";
        optionalType: { wrappedType: IDataType };
      };
      return {
        type: "union",
        unionTypes: [
          convertDataType(
            optionalData.optionalType.wrappedType,
            customTypes,
          ),
          { type: "null" },
        ],
      };
    }
    case "set": {
      const setData = dataType as {
        type: "set";
        set: { elementsType: IDataType };
      };
      return {
        type: "set",
        subType: convertDataType(setData.set.elementsType, customTypes),
      };
    }
    case "objectSet": {
      const objectSetData = dataType as {
        type: "objectSet";
        objectSet: { objectTypeId: string };
      };
      return {
        type: "objectSet",
        objectApiName: objectSetData.objectSet.objectTypeId,
      };
    }
    case "list": {
      const listData = dataType as {
        type: "list";
        list: { elementsType: IDataType };
      };
      return {
        type: "array",
        subType: convertDataType(
          listData.list.elementsType,
          customTypes,
        ),
      };
    }
    case "functionCustomType": {
      const customTypeData = dataType as {
        type: "functionCustomType";
        functionCustomType: string;
      };
      return convertFunctionCustomType(
        customTypeData.functionCustomType,
        customTypes,
      );
    }
    case "object": {
      const objectData = dataType as {
        type: "object";
        object: { objectTypeId: string };
      };
      return {
        type: "object",
        objectApiName: objectData.object.objectTypeId,
        objectTypeApiName: objectData.object.objectTypeId,
      };
    }
    default:
      throw new Error(`Unsupported data type: ${dataType.type}`);
  }
}

function convertFunctionCustomType(
  functionId: string,
  customTypes: Record<string, unknown>,
): Ontologies.QueryDataType {
  const customType = customTypes[functionId] as
    | {
      fieldMetadata: Record<string, { required?: boolean }>;
      fields: Record<string, IDataType>;
    }
    | undefined;
  if (!customType) {
    throw new Error(
      `Unknown function custom type: '${functionId}' not found in customTypes`,
    );
  }
  const fieldMetadata = customType.fieldMetadata;
  const fields = customType.fields;
  const structFields = Object.keys(fields).map(key => {
    return {
      name: key,
      fieldType: convertDataType(
        fields[key],
        customTypes,
        fieldMetadata[key].required ?? true,
      ),
    };
  });
  return {
    type: "struct",
    fields: structFields,
  };
}
