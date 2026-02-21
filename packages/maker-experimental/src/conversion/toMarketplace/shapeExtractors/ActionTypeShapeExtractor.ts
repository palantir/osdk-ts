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
  ActionTypeParameterShape,
  ActionTypeShape,
  BaseParameterType,
  LocalizedTitleAndDescription,
  OutputShape,
} from "@osdk/client.unstable/api";
import type {
  ActionType,
  ActionTypeBlockDataV2,
  KnownMarketplaceIdentifiers,
} from "@osdk/client.unstable";
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
  fallbackDescription?: string,
): LocalizedTitleAndDescription {
  return {
    fallbackTitle,
    fallbackDescription: fallbackDescription ?? "",
    localizedTitle: {},
    localizedDescription: {},
  };
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
    interfaceTypes?: Record<string, string>,
  ) {
    this.objectTypeIds = objectTypeIds ?? {};
    this.interfaceTypes = interfaceTypes ?? {};
  }

  convert(parameterType: { type: string }): BaseParameterType {
    const pt = parameterType as Record<string, unknown> & { type: string };
    const t = pt.type;
    switch (t) {
      // Simple types - return {type: "name", name: {}}
      case "boolean":
        return { type: "boolean", boolean: {} } as BaseParameterType;
      case "booleanList":
        return { type: "booleanList", booleanList: {} } as BaseParameterType;
      case "integer":
        return { type: "integer", integer: {} } as BaseParameterType;
      case "integerList":
        return { type: "integerList", integerList: {} } as BaseParameterType;
      case "long":
        return { type: "long", long: {} } as BaseParameterType;
      case "longList":
        return { type: "longList", longList: {} } as BaseParameterType;
      case "double":
        return { type: "double", double: {} } as BaseParameterType;
      case "doubleList":
        return { type: "doubleList", doubleList: {} } as BaseParameterType;
      case "string":
        return { type: "string", string: {} } as BaseParameterType;
      case "stringList":
        return { type: "stringList", stringList: {} } as BaseParameterType;
      case "decimal": {
        const dec = pt.decimal as { precision?: number; scale?: number } | undefined;
        return { type: "decimal", decimal: { precision: dec?.precision, scale: dec?.scale } } as BaseParameterType;
      }
      case "decimalList": {
        const dec = pt.decimalList as { precision?: number; scale?: number } | undefined;
        return { type: "decimalList", decimalList: { precision: dec?.precision, scale: dec?.scale } } as BaseParameterType;
      }
      case "geohash":
        return { type: "geohash", geohash: {} } as BaseParameterType;
      case "geohashList":
        return { type: "geohashList", geohashList: {} } as BaseParameterType;
      case "geoshape":
        return { type: "geoshape", geoshape: {} } as BaseParameterType;
      case "geoshapeList":
        return { type: "geoshapeList", geoshapeList: {} } as BaseParameterType;
      case "timeSeriesReference":
        return { type: "timeSeriesReference", timeSeriesReference: {} } as BaseParameterType;
      case "timestamp":
        return { type: "timestamp", timestamp: {} } as BaseParameterType;
      case "timestampList":
        return { type: "timestampList", timestampList: {} } as BaseParameterType;
      case "date":
        return { type: "date", date: {} } as BaseParameterType;
      case "dateList":
        return { type: "dateList", dateList: {} } as BaseParameterType;
      case "attachment":
        return { type: "attachment", attachment: {} } as BaseParameterType;
      case "attachmentList":
        return { type: "attachmentList", attachmentList: {} } as BaseParameterType;
      case "marking":
        return { type: "marking", marking: {} } as BaseParameterType;
      case "markingList":
        return { type: "markingList", markingList: {} } as BaseParameterType;
      case "mediaReference":
        return { type: "mediaReference", mediaReference: {} } as BaseParameterType;
      case "objectTypeReference":
        return { type: "objectTypeReference", objectTypeReference: {} } as BaseParameterType;
      case "geotimeSeriesReference":
        return { type: "geotimeSeriesReference", geotimeSeriesReference: {} } as BaseParameterType;
      case "geotimeSeriesReferenceList":
        return { type: "geotimeSeriesReferenceList", geotimeSeriesReferenceList: {} } as BaseParameterType;

      // Object reference types - need to look up objectTypeId in knownIdentifiers
      case "objectReference": {
        const objRef = pt.objectReference as { objectTypeId: string } | undefined;
        const blockId = objRef ? this.objectTypeIds[objRef.objectTypeId] : undefined;
        return {
          type: "objectReference",
          objectReference: { objectTypeId: blockId ?? "" },
        } as BaseParameterType;
      }
      case "objectReferenceList": {
        const objRef = pt.objectReferenceList as { objectTypeId: string } | undefined;
        const blockId = objRef ? this.objectTypeIds[objRef.objectTypeId] : undefined;
        return {
          type: "objectReferenceList",
          objectReferenceList: { objectTypeId: blockId ?? "" },
        } as BaseParameterType;
      }
      case "objectSetRid": {
        const objRef = pt.objectSetRid as { objectTypeId: string } | undefined;
        const blockId = objRef ? this.objectTypeIds[objRef.objectTypeId] : undefined;
        return {
          type: "objectSetRid",
          objectSetRid: { objectTypeId: blockId ?? "" },
        } as BaseParameterType;
      }

      // Interface reference types - need to look up interfaceTypeRid in knownIdentifiers
      case "interfaceReference": {
        const ifRef = pt.interfaceReference as { interfaceTypeRid: string } | undefined;
        const blockId = ifRef ? this.interfaceTypes[ifRef.interfaceTypeRid] : undefined;
        return {
          type: "interfaceReference",
          interfaceReference: { interfaceTypeRid: blockId ?? "" },
        } as BaseParameterType;
      }
      case "interfaceReferenceList": {
        const ifRef = pt.interfaceReferenceList as { interfaceTypeRid: string } | undefined;
        const blockId = ifRef ? this.interfaceTypes[ifRef.interfaceTypeRid] : undefined;
        return {
          type: "interfaceReferenceList",
          interfaceReferenceList: { interfaceTypeRid: blockId ?? "" },
        } as BaseParameterType;
      }
      case "interfaceObjectSetRid": {
        const ifRef = pt.interfaceObjectSetRid as { interfaceTypeRid: string } | undefined;
        const blockId = ifRef ? this.interfaceTypes[ifRef.interfaceTypeRid] : undefined;
        return {
          type: "interfaceObjectSetRid",
          interfaceObjectSetRid: { interfaceTypeRid: blockId ?? "" },
        } as BaseParameterType;
      }

      // Struct types
      case "struct": {
        const structType = pt.struct as { structFieldTypes?: Record<string, { type: string; [key: string]: unknown }> } | undefined;
        const convertedFields: Record<string, unknown> = {};
        if (structType?.structFieldTypes) {
          for (const [fieldName, fieldType] of Object.entries(structType.structFieldTypes)) {
            convertedFields[fieldName] = this.convertStructField(fieldType);
          }
        }
        return {
          type: "struct",
          struct: { structFieldTypes: convertedFields },
        } as BaseParameterType;
      }
      case "structList": {
        const structType = pt.structList as { structFieldTypes?: Record<string, { type: string; [key: string]: unknown }> } | undefined;
        const convertedFields: Record<string, unknown> = {};
        if (structType?.structFieldTypes) {
          for (const [fieldName, fieldType] of Object.entries(structType.structFieldTypes)) {
            convertedFields[fieldName] = this.convertStructField(fieldType);
          }
        }
        // Java converts structList to struct (not structList)
        return {
          type: "struct",
          struct: { structFieldTypes: convertedFields },
        } as BaseParameterType;
      }

      default:
        throw new Error(`Unknown BaseParameterType: ${t}`);
    }
  }

  private convertStructField(fieldType: { type: string; [key: string]: unknown }): unknown {
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
        const objRef = fieldType.objectReference as { objectTypeId: string } | undefined;
        const blockId = objRef ? this.objectTypeIds[objRef.objectTypeId] : undefined;
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
  ): BlockShapes {
    const actionApiName = (actionType.actionType as ActionType).metadata.apiName;
    const actionReadableId = ReadableIdGenerator.getForActionType(actionApiName);

    // Verify this readable ID exists in the rid generator
    const actionTypeRid = ridGenerator.getActionTypeRids().get(actionReadableId);
    if (!actionTypeRid) {
      return {
        inputShapes: new Map(),
        outputShapes: new Map(),
        inputShapeMetadata: new Map(),
      };
    }

    // Build action type shape
    const actionOutputShape: ActionTypeShape = {
      about: createLocalizedAbout(
        (actionType.actionType as ActionType).metadata.displayMetadata.displayName,
        (actionType.actionType as ActionType).metadata.displayMetadata.description,
      ),
      parameters: {}, // Legacy field, kept empty
      parametersV2: Object.entries(actionType.parameterIds ?? {}).map(
        ([_key, parameterId]) => {
          const paramReadableId = this.getParameterReadableId(
            actionApiName,
            parameterId,
          );
          return this.toBlockInternalId(paramReadableId, ridGenerator);
        },
      ),
    };

    const baseParameterTypeConverter = new BaseParameterTypeConverter(
      knownIdentifiers.objectTypeIds,
      knownIdentifiers.interfaceTypes,
    );

    // Build parameter output shapes
    const allOutputShapes = new Map<ReadableId, OutputShape>();

    // Add parameter shapes
    const parameters = (actionType.actionType as ActionType).metadata.parameters;
    if (parameters) {
      for (const [parameterId, parameter] of Object.entries(parameters)) {
        const paramReadableId = this.getParameterReadableId(
          actionApiName,
          parameterId,
        );

        const parameterShape: ActionTypeParameterShape = {
          about: createLocalizedAbout(
            parameter.displayMetadata.displayName,
            parameter.displayMetadata.description,
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

    return {
      inputShapes: new Map(),
      outputShapes: allOutputShapes,
      inputShapeMetadata: new Map(),
    };
  }

  private getParameterReadableId(
    actionApiName: string,
    parameterId: string,
  ): ReadableId {
    return `action-${actionApiName}-parameter-${parameterId}` as ReadableId;
  }

  private toBlockInternalId(
    readableId: ReadableId,
    ridGenerator: OntologyRidGenerator,
  ): string {
    return ridGenerator.toBlockInternalId(readableId);
  }
}