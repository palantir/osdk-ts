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
  OntologyBlockDataV2,
  ValueTypeBlockData,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";
import {
  OntologyBlockDataToFullMetadataConverter,
  toUuid,
} from "@osdk/generator-converters.ontologyir";
import { convertBlockDataLogicRulesToActionLogicRules } from "./ActionLogicRuleConverter.js";

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
  static getPreviewFullMetadataFromBlockData(
    blockdata: OntologyBlockDataV2,
    importedTypes?: Ontologies.OntologyFullMetadata,
    valueTypes: Record<string, ValueTypeBlockData> = {},
  ): PreviewOntologyFullMetadata {
    const baseMetadata = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(
        blockdata,
        // Preview exposes local actions only, even when an import has the same API name.
        importedTypes ? { ...importedTypes, actionTypes: {} } : undefined,
        undefined,
        valueTypes,
      );

    const actionTypes = this.addActionLogicRules(
      baseMetadata.actionTypes,
      blockdata,
      importedTypes,
    );
    // Post-process object types to use UUID-based RIDs
    const objectTypes = this.convertObjectTypesWithUuidRids(
      baseMetadata.objectTypes,
    );

    return {
      ...baseMetadata,
      objectTypes,
      actionTypes,
      actionTypesFullMetadata: actionTypes,
      ontology: {
        apiName: "ontology",
        rid: "ri.ontology.main.ontology.0",
        displayName: "ontology",
        description: "local ontology",
      },
    };
  }

  /**
   * Post-process object types to use UUID-based RIDs for properties and link types.
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

      const linkTypes = fullMetadata.linkTypes.map(lt => ({
        ...lt,
        linkTypeRid: `ri.ontology.main.link-type.${
          toUuid(lt.linkTypeRid || lt.apiName)
        }` as Ontologies.LinkTypeRid,
      }));

      result[apiName] = {
        ...fullMetadata,
        linkTypes,
        objectType: {
          ...objectType,
          rid: `ri.ontology.main.object-type.${toUuid(apiName)}`,
          properties,
        },
      };
    }

    return result;
  }

  private static addActionLogicRules(
    actionTypes: Record<string, Ontologies.ActionTypeV2>,
    blockdata: OntologyBlockDataV2,
    importedTypes?: Ontologies.OntologyFullMetadata,
  ): Record<string, Ontologies.ActionTypeFullMetadata> {
    const actionsByApiName = new Map(
      Object.values(blockdata.actionTypes).map(a => [
        a.actionType.metadata.apiName,
        a,
      ]),
    );
    const result: Record<string, Ontologies.ActionTypeFullMetadata> = {};
    for (const [apiName, baseActionType] of Object.entries(actionTypes)) {
      const action = actionsByApiName.get(apiName)!;
      result[apiName] = {
        actionType: {
          ...baseActionType,
        },
        fullLogicRules: convertBlockDataLogicRulesToActionLogicRules(
          action.actionType.actionTypeLogic.logic.rules,
          action,
          blockdata,
          importedTypes,
        ),
      };
    }

    return result;
  }
}
