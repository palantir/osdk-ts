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

import type {
  ActionType,
  ActionTypeBlockDataV2,
  KnownMarketplaceIdentifiers,
} from "@osdk/client.unstable";
import type {
  ActionTypeParameterShape,
  ActionTypeShape,
  BaseParameterType,
  FunctionInputShape,
  FunctionInputType,
  InputShape,
  LocalizedTitleAndDescription,
  OutputShape,
} from "@osdk/client.unstable/api";
import type {
  IDataType,
  IDiscoveredFunction,
} from "@osdk/generator-converters.ontologyir";

import type { FunctionsIr } from "../../../api/defineOntologyV2.js";
import type { InputMappingEntry } from "../../../cli/marketplaceSerialization/index.js";
import {
  type BlockShapes,
  type OntologyRidGenerator,
  type ReadableId,
  ReadableIdGenerator,
} from "../../../util/generateRid.js";

/**
 * Helper to create LocalizedTitleAndDescription with empty localizations
 */
function createLocalizedAbout(
  fallbackTitle: string,
  fallbackDescription?: string
): LocalizedTitleAndDescription {
  return {
    fallbackTitle,
    fallbackDescription: fallbackDescription ?? "",
    localizedTitle: {},
    localizedDescription: {},
  };
}

/**
 * Simple parameter types whose payload carries no fields to resolve; each maps
 * to `{ type: name, name: {} }`. Types needing lookups (decimal, object /
 * interface references, struct) are handled by the converter methods.
 */
function convertSimpleParameterType(t: string): BaseParameterType {
  switch (t) {
    case "boolean":
      return { type: "boolean", boolean: {} };
    case "booleanList":
      return { type: "booleanList", booleanList: {} };
    case "integer":
      return { type: "integer", integer: {} };
    case "integerList":
      return { type: "integerList", integerList: {} };
    case "long":
      return { type: "long", long: {} };
    case "longList":
      return { type: "longList", longList: {} };
    case "double":
      return { type: "double", double: {} };
    case "doubleList":
      return { type: "doubleList", doubleList: {} };
    case "string":
      return { type: "string", string: {} };
    case "stringList":
      return { type: "stringList", stringList: {} };
    case "geohash":
      return { type: "geohash", geohash: {} };
    case "geohashList":
      return { type: "geohashList", geohashList: {} };
    case "geoshape":
      return { type: "geoshape", geoshape: {} };
    case "geoshapeList":
      return { type: "geoshapeList", geoshapeList: {} };
    case "timeSeriesReference":
      return { type: "timeSeriesReference", timeSeriesReference: {} };
    case "timestamp":
      return { type: "timestamp", timestamp: {} };
    case "timestampList":
      return { type: "timestampList", timestampList: {} };
    case "date":
      return { type: "date", date: {} };
    case "dateList":
      return { type: "dateList", dateList: {} };
    case "attachment":
      return { type: "attachment", attachment: {} };
    case "attachmentList":
      return { type: "attachmentList", attachmentList: {} };
    case "marking":
      return { type: "marking", marking: {} };
    case "markingList":
      return { type: "markingList", markingList: {} };
    case "mediaReference":
      return { type: "mediaReference", mediaReference: {} };
    case "objectTypeReference":
      return { type: "objectTypeReference", objectTypeReference: {} };
    case "geotimeSeriesReference":
      return { type: "geotimeSeriesReference", geotimeSeriesReference: {} };
    case "geotimeSeriesReferenceList":
      return {
        type: "geotimeSeriesReferenceList",
        geotimeSeriesReferenceList: {},
      };
    default:
      throw new Error(`Unknown BaseParameterType: ${t}`);
  }
}

/**
 * Converts OntologyIR BaseParameterType to marketplace BaseParameterType.
 * Matches the Java BaseParameterTypeConverter visitor pattern.
 */
class BaseParameterTypeConverter {
  private readonly objectTypeIds: Record<string, string>;
  private readonly interfaceTypes: Record<string, string>;

  constructor(
    objectTypeIds?: Record<string, string>,
    interfaceTypes?: Record<string, string>
  ) {
    this.objectTypeIds = objectTypeIds ?? {};
    this.interfaceTypes = interfaceTypes ?? {};
  }

  convert(parameterType: { type: string }): BaseParameterType {
    const pt = parameterType as Record<string, unknown> & { type: string };
    const t = pt.type;

    switch (t) {
      case "decimal":
      case "decimalList":
        return this.#convertDecimal(t, pt);

      // Object reference types - need to look up objectTypeId in knownIdentifiers
      case "objectReference":
      case "objectReferenceList":
      case "objectSetRid":
        return this.#convertObjectReference(t, pt);

      // Interface reference types - need to look up interfaceTypeRid
      case "interfaceReference":
      case "interfaceReferenceList":
      case "interfaceObjectSetRid":
        return this.#convertInterfaceReference(t, pt);

      case "struct":
      case "structList":
        return this.#convertStruct(t, pt);

      default:
        return convertSimpleParameterType(t);
    }
  }

  #convertDecimal(
    t: "decimal" | "decimalList",
    pt: Record<string, unknown>
  ): BaseParameterType {
    const dec = pt[t] as { precision?: number; scale?: number } | undefined;
    const decimal = { precision: dec?.precision, scale: dec?.scale };
    if (t === "decimal") {
      return { type: "decimal", decimal };
    }
    return { type: "decimalList", decimalList: decimal };
  }

  #convertObjectReference(
    t: "objectReference" | "objectReferenceList" | "objectSetRid",
    pt: Record<string, unknown>
  ): BaseParameterType {
    const objRef = pt[t] as { objectTypeId: string } | undefined;
    const blockId = objRef
      ? this.objectTypeIds[objRef.objectTypeId]
      : undefined;
    const ref = { objectTypeId: blockId ?? "" };
    switch (t) {
      case "objectReference":
        return { type: "objectReference", objectReference: ref };
      case "objectReferenceList":
        return { type: "objectReferenceList", objectReferenceList: ref };
      default:
        return { type: "objectSetRid", objectSetRid: ref };
    }
  }

  #convertInterfaceReference(
    t:
      | "interfaceReference"
      | "interfaceReferenceList"
      | "interfaceObjectSetRid",
    pt: Record<string, unknown>
  ): BaseParameterType {
    const ifRef = pt[t] as { interfaceTypeRid: string } | undefined;
    const blockId = ifRef
      ? this.interfaceTypes[ifRef.interfaceTypeRid]
      : undefined;
    const ref = { interfaceTypeRid: blockId ?? "" };
    switch (t) {
      case "interfaceReference":
        return { type: "interfaceReference", interfaceReference: ref };
      case "interfaceReferenceList":
        return { type: "interfaceReferenceList", interfaceReferenceList: ref };
      default:
        return { type: "interfaceObjectSetRid", interfaceObjectSetRid: ref };
    }
  }

  #convertStruct(
    t: "struct" | "structList",
    pt: Record<string, unknown>
  ): BaseParameterType {
    const structType = pt[t] as
      | {
          structFieldTypes?: Record<
            string,
            { type: string; [key: string]: unknown }
          >;
        }
      | undefined;
    const convertedFields: Record<string, unknown> = {};
    if (structType?.structFieldTypes) {
      for (const [fieldName, fieldType] of Object.entries(
        structType.structFieldTypes
      )) {
        convertedFields[fieldName] = this.convertStructField(fieldType);
      }
    }
    // Java converts structList to struct (not structList).
    return {
      type: "struct",
      struct: { structFieldTypes: convertedFields },
    } as BaseParameterType;
  }

  private convertStructField(fieldType: {
    type: string;
    [key: string]: unknown;
  }): unknown {
    const t = fieldType.type;
    switch (t) {
      case "boolean":
        return { type: "boolean", boolean: {} };
      case "integer":
        return { type: "integer", integer: {} };
      case "long":
        return { type: "long", long: {} };
      case "double":
        return { type: "double", double: {} };
      case "string":
        return { type: "string", string: {} };
      case "date":
        return { type: "date", date: {} };
      case "timestamp":
        return { type: "timestamp", timestamp: {} };
      case "geohash":
        return { type: "geohash", geohash: {} };
      case "objectReference": {
        const objRef = fieldType.objectReference as
          | { objectTypeId: string }
          | undefined;
        const blockId = objRef
          ? this.objectTypeIds[objRef.objectTypeId]
          : undefined;
        return {
          type: "objectReference",
          objectReference: { objectTypeId: blockId ?? "" },
        };
      }
      default:
        throw new Error(`Unknown struct field BaseParameterType: ${t}`);
    }
  }
}

function convertShapeDataType(
  dataType: IDataType,
  objectTypeIds: Record<string, string>,
  interfaceTypes: Record<string, string>,
  ridGenerator: OntologyRidGenerator
): { type: string; [key: string]: unknown } {
  switch (dataType.type) {
    case "object": {
      const objectTypeId = ridGenerator.generateObjectTypeId(
        (dataType.object as { objectTypeId: string }).objectTypeId
      );
      const blockId = objectTypeIds[objectTypeId];
      return {
        type: "object",
        object: { objectTypeId: blockId },
      };
    }
    case "objectSet": {
      const objectTypeId = ridGenerator.generateObjectTypeId(
        (dataType.objectSet as { objectTypeId: string }).objectTypeId
      );
      const blockId = objectTypeIds[objectTypeId];
      return {
        type: "objectSet",
        objectSet: { objectTypeId: blockId },
      };
    }
    case "interface": {
      const blockId =
        interfaceTypes[
          (dataType.interface as { interfaceTypeRid: string }).interfaceTypeRid
        ];
      return {
        type: "interface",
        interface: { interfaceTypeReference: blockId },
      };
    }
    case "interfaceObjectSet": {
      const blockId =
        interfaceTypes[
          (dataType.interfaceObjectSet as { interfaceTypeRid: string })
            .interfaceTypeRid
        ];
      return {
        type: "interfaceObjectSet",
        interfaceObjectSet: { interfaceTypeReference: blockId },
      };
    }
    case "list": {
      const list = dataType.list as
        | { elementsType: { type: string; [key: string]: unknown } }
        | undefined;
      if (list) {
        return {
          type: "list",
          list: {
            elementsType: convertShapeDataType(
              list.elementsType,
              objectTypeIds,
              interfaceTypes,
              ridGenerator
            ),
          },
        };
      }
      return dataType;
    }
    case "set": {
      const set = dataType.set as
        | { elementsType: { type: string; [key: string]: unknown } }
        | undefined;
      if (set) {
        return {
          type: "set",
          set: {
            elementsType: convertShapeDataType(
              set.elementsType,
              objectTypeIds,
              interfaceTypes,
              ridGenerator
            ),
          },
        };
      }
      return dataType;
    }
    case "optionalType": {
      const opt = dataType.optionalType as
        | { wrappedType: { type: string; [key: string]: unknown } }
        | undefined;
      if (opt) {
        return {
          type: "optionalType",
          optionalType: {
            wrappedType: convertShapeDataType(
              opt.wrappedType,
              objectTypeIds,
              interfaceTypes,
              ridGenerator
            ),
          },
        };
      }
      return dataType;
    }
    default:
      return dataType;
  }
}

function buildFunctionShape(
  functionApiName: string,
  discoveredFunction: IDiscoveredFunction,
  ridGenerator: OntologyRidGenerator,
  knownIdentifiers: KnownMarketplaceIdentifiers
): FunctionInputShape {
  const objectTypeIds = knownIdentifiers.objectTypeIds ?? {};
  const interfaceTypes = knownIdentifiers.interfaceTypes ?? {};

  const inputs = discoveredFunction.inputs.map((input) => {
    let dataType = input.dataType as { type: string; [key: string]: unknown };
    let required = true;

    if (dataType.type === "optionalType") {
      const opt = dataType.optionalType as
        | { wrappedType: { type: string; [key: string]: unknown } }
        | undefined;
      if (opt) {
        dataType = opt.wrappedType;
        required = false;
      }
    }

    return {
      about: createLocalizedAbout(functionApiName, ""),
      inputName: input.name,
      dataType: convertShapeDataType(
        dataType,
        objectTypeIds,
        interfaceTypes,
        ridGenerator
      ),
      required,
    };
  }) as unknown as FunctionInputType[];

  const outputDataType = discoveredFunction.output.single.dataType as {
    type: string;
    [key: string]: unknown;
  };

  return {
    about: createLocalizedAbout(functionApiName),
    inputs,
    output: {
      type: "singleOutputType",
      singleOutputType: {
        about: createLocalizedAbout("Function Output", ""),
        dataType: convertShapeDataType(
          outputDataType,
          objectTypeIds,
          interfaceTypes,
          ridGenerator
        ),
      },
    },
    customTypes:
      discoveredFunction.customTypes as FunctionInputShape["customTypes"],
    contracts: [],
  } as unknown as FunctionInputShape;
}

/**
 * Extracts action type shapes from an ActionTypeBlockDataV2
 */
export class ActionTypeShapeExtractor {
  /**
   * Extract action type shapes from block data
   */
  extract(
    actionType: ActionTypeBlockDataV2,
    ridGenerator: OntologyRidGenerator,
    knownIdentifiers: KnownMarketplaceIdentifiers,
    functionsIr?: FunctionsIr
  ): BlockShapes {
    const actionApiName = (actionType.actionType as ActionType).metadata
      .apiName;
    const actionReadableId =
      ReadableIdGenerator.getForActionType(actionApiName);

    // Verify this readable ID exists in the rid generator
    const actionTypeRid = ridGenerator
      .getActionTypeRids()
      .get(actionReadableId);
    if (!actionTypeRid) {
      return {
        inputShapes: new Map(),
        outputShapes: new Map(),
        inputShapeMetadata: new Map(),
        inputMappings: [],
      };
    }

    // Build action type shape
    const actionOutputShape: ActionTypeShape = {
      about: createLocalizedAbout(
        (actionType.actionType as ActionType).metadata.displayMetadata
          .displayName,
        (actionType.actionType as ActionType).metadata.displayMetadata
          .description
      ),
      parameters: {}, // Legacy field, kept empty
      parametersV2: Object.entries(actionType.parameterIds ?? {}).map(
        ([_key, parameterId]) => {
          const paramReadableId = this.getParameterReadableId(
            actionApiName,
            parameterId
          );
          return this.toBlockInternalId(paramReadableId, ridGenerator);
        }
      ),
    };

    const baseParameterTypeConverter = new BaseParameterTypeConverter(
      knownIdentifiers.objectTypeIds,
      knownIdentifiers.interfaceTypes
    );

    // Build parameter output shapes
    const allOutputShapes = new Map<ReadableId, OutputShape>();

    // Add parameter shapes
    const parameters = (actionType.actionType as ActionType).metadata
      .parameters;
    if (parameters) {
      for (const [parameterId, parameter] of Object.entries(parameters)) {
        const paramReadableId = this.getParameterReadableId(
          actionApiName,
          parameterId
        );

        const parameterShape: ActionTypeParameterShape = {
          about: createLocalizedAbout(
            parameter.displayMetadata.displayName,
            parameter.displayMetadata.description
          ),
          type: baseParameterTypeConverter.convert(parameter.type),
          actionType: this.toBlockInternalId(actionReadableId, ridGenerator),
        };

        allOutputShapes.set(paramReadableId, {
          type: "actionParameter",
          actionParameter: parameterShape,
        });
      }
    }

    // Add the action type shape itself
    allOutputShapes.set(actionReadableId, {
      type: "action",
      action: actionOutputShape,
    });

    const allInputShapes = new Map<ReadableId, InputShape>();
    const allInputMappings: InputMappingEntry[] = [];
    const functionRule = actionType.actionType.actionTypeLogic.logic.rules.find(
      (r) => r.type === "functionRule"
    );
    if (functionRule && functionsIr) {
      const functionApiName =
        functionRule.functionRule.functionRid.split(".").pop() ??
        functionRule.functionRule.functionRid;

      const discoveredFunction = functionsIr.discoveredFunctions.find(
        (f) => f.locator.typescript?.functionName === functionApiName
      );

      if (discoveredFunction) {
        const functionShape = buildFunctionShape(
          functionApiName,
          discoveredFunction,
          ridGenerator,
          knownIdentifiers
        );

        const readableFunctionId =
          ReadableIdGenerator.getForConsumedFunction(functionApiName);

        knownIdentifiers.functions[functionRule.functionRule.functionRid] = {
          [functionRule.functionRule.functionVersion]:
            ridGenerator.toBlockInternalId(readableFunctionId),
        };

        allInputShapes.set(readableFunctionId, {
          type: "function",
          function: functionShape,
        });
        allInputMappings.push({
          input: readableFunctionId,
          output: ReadableIdGenerator.getForFunction(functionApiName),
        });
      }
    }

    return {
      inputShapes: allInputShapes,
      outputShapes: allOutputShapes,
      inputShapeMetadata: new Map(),
      inputMappings: allInputMappings,
    };
  }

  private getParameterReadableId(
    actionApiName: string,
    parameterId: string
  ): ReadableId {
    return `action-${actionApiName}-parameter-${parameterId}` as ReadableId;
  }

  private toBlockInternalId(
    readableId: ReadableId,
    ridGenerator: OntologyRidGenerator
  ): string {
    return ridGenerator.toBlockInternalId(readableId);
  }
}
