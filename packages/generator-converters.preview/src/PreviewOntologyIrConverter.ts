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
  OntologyIrActionTypeBlockDataV2,
  OntologyIrOntologyBlockDataV2,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";
import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import { convertIrLogicRulesToActionLogicRules } from "./ActionLogicRuleConverter.js";
import { toUuid } from "./ridUtils.js";

/**
 * Extended return type that uses ActionTypeFullMetadata instead of ActionTypeV2.
 */
export interface PreviewOntologyFullMetadata
  extends Omit<Ontologies.OntologyFullMetadata, "actionTypes">
{
  actionTypes: Record<string, Ontologies.ActionTypeFullMetadata>;
}

/**
 * Preview converter that extends the base OntologyIrToFullMetadataConverter
 * to return ActionTypeFullMetadata with fullLogicRules instead of ActionTypeV2.
 */
export class PreviewOntologyIrConverter {
  /**
   * Main entry point - converts IR to full metadata with enhanced action types.
   * Returns ActionTypeFullMetadata which includes fullLogicRules.
   */
  static getPreviewFullMetadataFromIr(
    ir: OntologyIrOntologyBlockDataV2,
  ): PreviewOntologyFullMetadata {
    const baseMetadata = OntologyIrToFullMetadataConverter
      .getFullMetadataFromIr(ir);

    const actionTypes = this.convertActionTypesWithFullLogicRules(
      Object.values(ir.actionTypes),
      ir,
    );

    // Post-process object types to use UUID-based RIDs
    const objectTypes = this.convertObjectTypesWithUuidRids(
      baseMetadata.objectTypes,
    );

    return {
      ...baseMetadata,
      objectTypes,
      actionTypes,
      ontology: {
        apiName: "ontology",
        rid: "ri.ontology.main.ontology.0",
        displayName: "ontology",
        description: "local ontology",
      },
    };
  }

  /**
   * Post-process object types to use UUID-based RIDs for properties.
   */
  private static convertObjectTypesWithUuidRids(
    objectTypes: Record<string, Ontologies.ObjectTypeFullMetadata>,
  ): Record<string, Ontologies.ObjectTypeFullMetadata> {
    const result: Record<string, Ontologies.ObjectTypeFullMetadata> = {};

    for (const [apiName, fullMetadata] of Object.entries(objectTypes)) {
      const objectType = fullMetadata.objectType;
      const properties: Record<string, Ontologies.PropertyV2> = {};

      for (const [propKey, prop] of Object.entries(objectType.properties)) {
        properties[propKey] = {
          ...prop,
          rid: `ri.ontology.main.property.${toUuid(apiName + "." + propKey)}`,
        };
      }

      result[apiName] = {
        ...fullMetadata,
        objectType: {
          ...objectType,
          rid: `ri.ontology.main.object-type.${toUuid(apiName)}`,
          properties,
        },
      };
    }

    return result;
  }

  /**
   * Convert IR action types to ActionTypeFullMetadata format.
   * Reuses base converter for action type conversion, then process
   * RIDs to use UUID-based format and adds fullLogicRules.
   */
  private static convertActionTypesWithFullLogicRules(
    actions: OntologyIrActionTypeBlockDataV2[],
    ir: OntologyIrOntologyBlockDataV2,
  ): Record<string, Ontologies.ActionTypeFullMetadata> {
    const baseActionTypes = OntologyIrToFullMetadataConverter
      .getOsdkActionTypes(actions);

    // Build a lookup from apiName to the original IR action for logic rules
    const actionsByApiName = new Map(
      actions.map(a => [a.actionType.metadata.apiName, a]),
    );

    const result: Record<string, Ontologies.ActionTypeFullMetadata> = {};
    for (const [apiName, baseActionType] of Object.entries(baseActionTypes)) {
      const action = actionsByApiName.get(apiName)!;
      result[apiName] = {
        actionType: {
          ...baseActionType,
          rid: `ri.ontology.main.action-type.${toUuid(apiName)}`,
        },
        fullLogicRules: convertIrLogicRulesToActionLogicRules(
          action.actionType.actionTypeLogic.logic.rules,
          action,
          ir,
        ),
      };
    }

    return result;
  }
}
