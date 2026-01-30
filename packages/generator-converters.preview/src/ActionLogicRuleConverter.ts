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
  OntologyIrLogicRule,
  OntologyIrOntologyBlockDataV2,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";

/**
 * Helper function to resolve the correct apiName from objectTypeId.
 * The objectTypeId coming from the rules may have hyphens instead of dots.
 */
function resolveObjectApiName(
  objectTypeId: string,
  ir?: OntologyIrOntologyBlockDataV2,
): string {
  if (ir?.objectTypes) {
    // Try direct lookup first
    if (ir.objectTypes[objectTypeId]) {
      return ir.objectTypes[objectTypeId].objectType.apiName;
    }
    // Also try to find by searching through values
    for (const obj of Object.values(ir.objectTypes)) {
      // Check if the apiName with hyphens replaced matches
      const hyphenatedApiName = obj.objectType.apiName.replace(/\./g, "-");
      if (hyphenatedApiName === objectTypeId) {
        return obj.objectType.apiName;
      }
    }
  }

  return objectTypeId;
}

/**
 * Helper function to resolve the correct apiName for interfaces.
 * The interfaceId in the action rules may use hyphens instead of dots.
 */
function resolveInterfaceApiName(
  interfaceId: string,
  ir?: OntologyIrOntologyBlockDataV2,
): string {
  if (ir?.interfaceTypes) {
    // Try direct lookup first
    if (ir.interfaceTypes[interfaceId]) {
      return ir.interfaceTypes[interfaceId].interfaceType.apiName;
    }
    // Also try to find by searching through values
    for (const interfaceEntry of Object.values(ir.interfaceTypes)) {
      // Check if the apiName with hyphens replaced matches
      const hyphenatedApiName = interfaceEntry.interfaceType.apiName.replace(
        /\./g,
        "-",
      );
      if (hyphenatedApiName === interfaceId) {
        return interfaceEntry.interfaceType.apiName;
      }
    }
  }
  // Fallback: if not found in IR, return the ID as-is
  return interfaceId;
}

/**
 * Convert OntologyIrLogicRule to ActionLogicRule for use in ActionTypeFullMetadata.
 */
export function convertIrLogicRuleToActionLogicRule(
  irRule: OntologyIrLogicRule,
  action: OntologyIrActionTypeBlockDataV2,
  ir?: OntologyIrOntologyBlockDataV2,
): Ontologies.ActionLogicRule {
  switch (irRule.type) {
    case "addObjectRule": {
      const r = irRule.addObjectRule;
      const propertyArguments: Record<
        Ontologies.PropertyApiName,
        Ontologies.LogicRuleArgument
      > = {};
      for (const [k, v] of Object.entries(r.propertyValues)) {
        propertyArguments[k] = v as Ontologies.LogicRuleArgument;
      }
      return {
        type: "createObject",
        objectTypeApiName: resolveObjectApiName(r.objectTypeId, ir),
        propertyArguments,
        structPropertyArguments: {},
      } as Ontologies.CreateObjectLogicRule & { type: "createObject" };
    }

    case "addOrModifyObjectRuleV2": {
      const r = irRule.addOrModifyObjectRuleV2;
      const modifyParamType =
        action.actionType.metadata.parameters[r.objectToModify].type;
      if (modifyParamType.type === "objectReference") {
        return {
          type: "createOrModifyObject",
          objectTypeApiName: resolveObjectApiName(
            modifyParamType.objectReference.objectTypeId,
            ir,
          ),
          propertyArguments: {},
          structPropertyArguments: {},
        } as Ontologies.CreateOrModifyObjectLogicRule & {
          type: "createOrModifyObject";
        };
      } else {
        throw new Error(
          "Unable to convert createOrModifyObject because parameter does not exist",
        );
      }
    }

    case "modifyObjectRule": {
      const r = irRule.modifyObjectRule;
      const modifyParamType =
        action.actionType.metadata.parameters[r.objectToModify].type;
      if (modifyParamType.type === "objectReference") {
        return {
          type: "modifyObject",
          objectToModify: r.objectToModify,
          propertyArguments: {},
          structPropertyArguments: {},
        } as Ontologies.ModifyObjectLogicRule & { type: "modifyObject" };
      } else {
        throw new Error(
          "Unable to convert modifyObject because parameter does not exist",
        );
      }
    }

    case "deleteObjectRule": {
      const r = irRule.deleteObjectRule;
      return {
        type: "deleteObject",
        objectToDelete: r.objectToDelete,
      } as Ontologies.DeleteObjectLogicRule & { type: "deleteObject" };
    }

    case "addInterfaceRule": {
      const r = irRule.addInterfaceRule;
      const interfaceApiName = resolveInterfaceApiName(r.interfaceApiName, ir);
      return {
        type: "createInterface",
        interfaceTypeApiName: interfaceApiName,
        objectType: interfaceApiName, // This might need to be resolved properly
        sharedPropertyArguments: {},
        structPropertyArguments: {},
      } as Ontologies.CreateInterfaceLogicRule & { type: "createInterface" };
    }

    case "modifyInterfaceRule": {
      const r = irRule.modifyInterfaceRule;
      return {
        type: "modifyInterface",
        interfaceObjectToModify: r.interfaceObjectToModifyParameter,
        sharedPropertyArguments: {},
        structPropertyArguments: {},
      } as Ontologies.ModifyInterfaceLogicRule & { type: "modifyInterface" };
    }

    case "addLinkRule": {
      throw new Error(
        "Add link rule not supported for ActionLogicRule conversion",
      );
    }

    case "deleteLinkRule": {
      throw new Error(
        "Delete link rule not supported for ActionLogicRule conversion",
      );
    }

    default:
      throw new Error(
        `Unsupported OntologyIrLogicRule type: ${
          (irRule as OntologyIrLogicRule).type
        }`,
      );
  }
}
