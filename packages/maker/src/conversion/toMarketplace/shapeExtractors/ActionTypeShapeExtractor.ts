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
  LocalizedTitleAndDescription,
  OutputShape,
} from "@osdk/client.unstable/api";
import type {
  ActionType,
  ActionTypeBlockDataV2,
  KnownMarketplaceIdentifiers,
} from "@osdk/client.unstable";
import type {
  BlockShapes,
  OntologyRidGenerator,
  ReadableId,
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
 * Base parameter type converter - simplified version for now
 * In a complete implementation, this would handle all parameter types
 */
class BaseParameterTypeConverter {
  constructor(
    _objectTypeIds?: Record<string, string>,
    _interfaceTypes?: Record<string, string>,
  ) {}

  convert(_parameterType: any): any {
    // Simplified conversion - in production, this would handle all parameter types
    // including objects, interfaces, primitives, arrays, etc.
    return {
      type: "primitive",
      primitive: {
        type: "stringType",
        stringType: { isLongText: false, supportsExactMatching: true },
      },
    };
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
    const actionReadableIdsByRid = ridGenerator.getActionTypeRids().inverse();
    const actionRid = (actionType.actionType as ActionType).metadata.rid;
    const actionReadableId = actionReadableIdsByRid.get(actionRid);

    if (!actionReadableId) {
      // If we don't have a readable ID, we can't extract shapes
      return {
        inputShapes: new Map(),
        outputShapes: new Map(),
        inputShapeMetadata: new Map(),
      };
    }

    const actionApiName = (actionType.actionType as ActionType).metadata.apiName;

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