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
import { convertIrLogicRuleToActionLogicRule } from "./ActionLogicRuleConverter.js";
import type { ApiName } from "./ApiName.js";
import { toUuid } from "./ridUtils.js";

/**
 * Extended return type that uses ActionTypeFullMetadata instead of ActionTypeV2.
 */
export interface PreviewOntologyFullMetadata
  extends Omit<Ontologies.OntologyFullMetadata, "actionTypes">
{
  actionTypes: Record<ApiName, Ontologies.ActionTypeFullMetadata>;
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
    // Get the base metadata using the original converter
    const baseMetadata = OntologyIrToFullMetadataConverter
      .getFullMetadataFromIr(ir);

    // Convert action types with full logic rules
    const actionTypes = this.getPreviewActionTypes(
      Object.values(ir.actionTypes),
      ir,
    );

    return {
      ...baseMetadata,
      actionTypes,
      ontology: {
        apiName: "ontology",
        rid: `ri.ontology.main.ontology.0`,
        displayName: "ontology",
        description: "local ontology",
      },
    };
  }

  /**
   * Convert IR action types to OSDK format with ActionTypeFullMetadata.
   */
  private static getPreviewActionTypes(
    actions: OntologyIrActionTypeBlockDataV2[],
    ir: OntologyIrOntologyBlockDataV2,
  ): Record<ApiName, Ontologies.ActionTypeFullMetadata> {
    const result: Record<ApiName, Ontologies.ActionTypeFullMetadata> = {};

    for (const action of actions) {
      const metadata = action.actionType.metadata;
      const actionType: Ontologies.ActionTypeV2 = {
        rid: `ri.ontology.main.action-type.${toUuid(metadata.apiName)}`,
        apiName: metadata.apiName,
        displayName: metadata.displayMetadata.displayName,
        description: metadata.displayMetadata.description,
        parameters: this.getActionParameters(action),
        operations: this.getActionOperations(action),
        status: this.convertActionTypeStatus(metadata.status),
      };

      result[actionType.apiName] = {
        actionType,
        fullLogicRules: action.actionType.actionTypeLogic.logic.rules.map(
          rule => convertIrLogicRuleToActionLogicRule(rule, action, ir),
        ),
      };
    }

    return result;
  }

  /**
   * Convert action operations from IR (simple LogicRule format).
   */
  private static getActionOperations(
    action: OntologyIrActionTypeBlockDataV2,
  ): Ontologies.LogicRule[] {
    return action.actionType.actionTypeLogic.logic.rules.map(irLogic => {
      switch (irLogic.type) {
        case "addInterfaceRule": {
          const r = irLogic.addInterfaceRule;
          return {
            type: "createInterfaceObject",
            interfaceTypeApiName: r.interfaceApiName,
          } satisfies Ontologies.LogicRule;
        }
        case "addLinkRule":
          throw new Error("Add link rule not supported");
        case "addObjectRule": {
          const r = irLogic.addObjectRule;
          return {
            type: "createObject",
            objectTypeApiName: r.objectTypeId,
          } satisfies Ontologies.LogicRule;
        }
        case "addOrModifyObjectRuleV2": {
          const r = irLogic.addOrModifyObjectRuleV2;

          const modifyParamType =
            action.actionType.metadata.parameters[r.objectToModify].type;
          if (modifyParamType.type === "objectReference") {
            return {
              type: "modifyObject",
              objectTypeApiName: modifyParamType.objectReference.objectTypeId,
            } satisfies Ontologies.LogicRule;
          } else {
            throw new Error(
              "Unable to convert modifyAction because parameter does not exist",
            );
          }
        }
        case "deleteLinkRule":
          throw new Error("Delete link rule not supported");
        case "deleteObjectRule": {
          const r = irLogic.deleteObjectRule;
          const ontologyIrParameter =
            action.actionType.metadata.parameters[r.objectToDelete];
          if (ontologyIrParameter.type.type !== "objectReference") {
            throw new Error("invalid parameter type");
          }

          return {
            type: "deleteObject",
            objectTypeApiName:
              ontologyIrParameter.type.objectReference.objectTypeId,
          } satisfies Ontologies.LogicRule;
        }
        case "modifyInterfaceRule": {
          const r = irLogic.modifyInterfaceRule;
          const parameter = action.actionType.metadata.parameters[
            r.interfaceObjectToModifyParameter
          ];
          if (!parameter) {
            throw new Error("Could not find interface type api name");
          }

          let interfaceTypeApiName: string | null = null;
          switch (parameter.type.type) {
            case "interfaceReference":
              interfaceTypeApiName =
                parameter.type.interfaceReference.interfaceTypeRid;
              break;
            case "interfaceReferenceList":
              interfaceTypeApiName =
                parameter.type.interfaceReferenceList.interfaceTypeRid;
              break;
            default:
              interfaceTypeApiName = null;
          }

          if (!interfaceTypeApiName) {
            throw new Error("Could not find interface type api name");
          }

          return {
            type: "modifyInterfaceObject",
            interfaceTypeApiName,
          } satisfies Ontologies.LogicRule;
        }
        case "modifyObjectRule": {
          const r = irLogic.modifyObjectRule;

          const modifyParamType =
            action.actionType.metadata.parameters[r.objectToModify].type;
          if (modifyParamType.type === "objectReference") {
            return {
              type: "modifyObject",
              objectTypeApiName: modifyParamType.objectReference.objectTypeId,
            } satisfies Ontologies.LogicRule;
          } else {
            throw new Error(
              "Unable to convert modifyAction because parameter does not exist",
            );
          }
        }
        default:
          throw new Error("Unknown logic rule type");
      }
    });
  }

  /**
   * Convert action parameters from IR.
   */
  private static getActionParameters(
    action: OntologyIrActionTypeBlockDataV2,
  ): Record<string, Ontologies.ActionParameterV2> {
    const result: Record<string, Ontologies.ActionParameterV2> = {};

    for (
      const [paramKey, irParameter] of Object.entries(
        action.actionType.metadata.parameters,
      )
    ) {
      let dataType: Ontologies.ActionParameterType;
      switch (irParameter.type.type) {
        case "attachment":
          dataType = { type: "attachment" };
          break;
        case "attachmentList":
          dataType = {
            type: "array",
            subType: { type: "attachment" },
          };
          break;
        case "boolean":
          dataType = { type: "boolean" };
          break;
        case "booleanList":
          dataType = {
            type: "array",
            subType: { type: "boolean" },
          };
          break;
        case "date":
          dataType = { type: "date" };
          break;
        case "dateList":
          dataType = {
            type: "array",
            subType: { type: "date" },
          };
          break;
        case "decimal":
          throw new Error("Decimal type not supported");
        case "decimalList":
          throw new Error("Decimal list type not supported");
        case "double":
          dataType = { type: "double" };
          break;
        case "doubleList":
          dataType = {
            type: "array",
            subType: { type: "double" },
          };
          break;
        case "geohash":
          dataType = { type: "geohash" };
          break;
        case "geohashList":
          dataType = {
            type: "array",
            subType: { type: "geohash" },
          };
          break;
        case "geoshape":
          dataType = { type: "geoshape" };
          break;
        case "geoshapeList":
          dataType = {
            type: "array",
            subType: { type: "geoshape" },
          };
          break;
        case "geotimeSeriesReference":
          throw new Error("Geotime series reference type not supported");
        case "geotimeSeriesReferenceList":
          throw new Error("Geotime series reference list type not supported");
        case "integer":
          dataType = { type: "integer" };
          break;
        case "integerList":
          dataType = {
            type: "array",
            subType: { type: "integer" },
          };
          break;
        case "interfaceReference":
          throw new Error("Interface reference type not supported");
        case "interfaceReferenceList":
          throw new Error("Interface reference list type not supported");
        case "long":
          dataType = { type: "long" };
          break;
        case "longList":
          dataType = {
            type: "array",
            subType: { type: "long" },
          };
          break;
        case "marking":
          dataType = { type: "marking" };
          break;
        case "markingList":
          dataType = {
            type: "array",
            subType: { type: "marking" },
          };
          break;
        case "mediaReference":
          dataType = { type: "mediaReference" };
          break;
        case "mediaReferenceList":
          dataType = {
            type: "array",
            subType: { type: "mediaReference" },
          };
          break;
        case "objectReference": {
          const t = irParameter.type.objectReference;
          dataType = {
            type: "object",
            objectTypeApiName: t.objectTypeId,
            objectApiName: t.objectTypeId,
          };
          break;
        }
        case "objectReferenceList": {
          const t = irParameter.type.objectReferenceList;
          dataType = {
            type: "array",
            subType: {
              type: "object",
              objectTypeApiName: t.objectTypeId,
              objectApiName: t.objectTypeId,
            },
          };
          break;
        }
        case "objectSetRid":
          dataType = { type: "objectSet" };
          break;
        case "objectTypeReference":
          dataType = { type: "objectType" };
          break;
        case "string":
          dataType = { type: "string" };
          break;
        case "stringList":
          dataType = {
            type: "array",
            subType: { type: "string" },
          };
          break;
        case "struct":
          throw new Error("Struct type not supported (lazy implementation)");
        case "structList":
          throw new Error("Struct list type not supported");
        case "timeSeriesReference":
          throw new Error("Time series reference type not supported");
        case "timestamp":
          dataType = { type: "timestamp" };
          break;
        case "timestampList":
          dataType = {
            type: "array",
            subType: { type: "timestamp" },
          };
          break;
        default:
          throw new Error("Unknown parameter type");
      }

      result[paramKey] = {
        displayName: irParameter.displayMetadata.displayName,
        description: irParameter.displayMetadata.description,
        required: this.isParameterRequired(action, paramKey),
        dataType,
      };
    }

    return result;
  }

  private static isParameterRequired(
    action: OntologyIrActionTypeBlockDataV2,
    paramKey: string,
  ): boolean {
    return (
      action.actionType.actionTypeLogic.validation
        .parameterValidations[paramKey]
        .defaultValidation.validation.required.type === "required"
    );
  }

  private static convertActionTypeStatus(
    status: { type: string },
  ): "ACTIVE" | "DEPRECATED" | "EXPERIMENTAL" {
    switch (status.type) {
      case "active":
        return "ACTIVE";
      case "deprecated":
        return "DEPRECATED";
      case "example":
        throw new Error("Example status has no mapping");
      case "experimental":
        return "EXPERIMENTAL";
      default:
        throw new Error(`Unknown action type status: ${status.type}`);
    }
  }
}
