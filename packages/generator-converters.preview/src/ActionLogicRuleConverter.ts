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

interface ApiNameLookup {
  byId: Map<string, string>;
  byHyphenated: Map<string, string>;
}

function buildObjectTypeLookup(
  ir: OntologyIrOntologyBlockDataV2 | undefined,
): ApiNameLookup | undefined {
  if (!ir?.objectTypes) {
    return undefined;
  }
  const byId = new Map<string, string>();
  const byHyphenated = new Map<string, string>();
  for (const [key, value] of Object.entries(ir.objectTypes)) {
    const apiName = value.objectType.apiName;
    byId.set(key, apiName);
    byHyphenated.set(apiName.replace(/\./g, "-"), apiName);
  }
  return { byId, byHyphenated };
}

function buildInterfaceTypeLookup(
  ir: OntologyIrOntologyBlockDataV2 | undefined,
): ApiNameLookup | undefined {
  if (!ir?.interfaceTypes) {
    return undefined;
  }
  const byId = new Map<string, string>();
  const byHyphenated = new Map<string, string>();
  for (const [key, value] of Object.entries(ir.interfaceTypes)) {
    const apiName = value.interfaceType.apiName;
    byId.set(key, apiName);
    byHyphenated.set(apiName.replace(/\./g, "-"), apiName);
  }
  return { byId, byHyphenated };
}

function resolveApiName(id: string, lookup: ApiNameLookup | undefined): string {
  if (!lookup) {
    return id;
  }
  return lookup.byId.get(id) ?? lookup.byHyphenated.get(id) ?? id;
}

function getObjectReferenceType(
  action: OntologyIrActionTypeBlockDataV2,
  paramKey: string,
): { objectTypeId: string } {
  const param = action.actionType.metadata.parameters[paramKey];
  if (!param || param.type.type !== "objectReference") {
    throw new Error(
      `Parameter '${paramKey}' must be an objectReference type`,
    );
  }
  return param.type.objectReference;
}

/**
 * Build lookups once and convert all logic rules for an action.
 * Avoids rebuilding lookup Maps on every rule.
 */
export function convertIrLogicRulesToActionLogicRules(
  rules: OntologyIrLogicRule[],
  action: OntologyIrActionTypeBlockDataV2,
  ir?: OntologyIrOntologyBlockDataV2,
): Ontologies.ActionLogicRule[] {
  const objectLookup = buildObjectTypeLookup(ir);
  const interfaceLookup = buildInterfaceTypeLookup(ir);

  return rules.map(irRule =>
    convertSingleRule(irRule, action, objectLookup, interfaceLookup)
  );
}

/**
 * Convert a single OntologyIrLogicRule to ActionLogicRule.
 * Kept as a public API for callers that only need a single rule conversion.
 */
export function convertIrLogicRuleToActionLogicRule(
  irRule: OntologyIrLogicRule,
  action: OntologyIrActionTypeBlockDataV2,
  ir?: OntologyIrOntologyBlockDataV2,
): Ontologies.ActionLogicRule {
  const objectLookup = buildObjectTypeLookup(ir);
  const interfaceLookup = buildInterfaceTypeLookup(ir);
  return convertSingleRule(irRule, action, objectLookup, interfaceLookup);
}

function convertSingleRule(
  irRule: OntologyIrLogicRule,
  action: OntologyIrActionTypeBlockDataV2,
  objectLookup: ApiNameLookup | undefined,
  interfaceLookup: ApiNameLookup | undefined,
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
      const result: Ontologies.CreateObjectLogicRule & {
        type: "createObject";
      } = {
        type: "createObject",
        objectTypeApiName: resolveApiName(r.objectTypeId, objectLookup),
        propertyArguments,
        structPropertyArguments: {},
      };
      return result;
    }

    case "addOrModifyObjectRuleV2": {
      const r = irRule.addOrModifyObjectRuleV2;
      const objRef = getObjectReferenceType(action, r.objectToModify);
      // propertyArguments left empty: the downstream generator resolves
      // property mappings from the action parameter configuration rather
      // than from the logic rule itself for createOrModify rules.
      const result: Ontologies.CreateOrModifyObjectLogicRule & {
        type: "createOrModifyObject";
      } = {
        type: "createOrModifyObject",
        objectTypeApiName: resolveApiName(objRef.objectTypeId, objectLookup),
        propertyArguments: {},
        structPropertyArguments: {},
      };
      return result;
    }

    case "modifyObjectRule": {
      const r = irRule.modifyObjectRule;
      // Validate that the parameter is an objectReference (throws if not)
      getObjectReferenceType(action, r.objectToModify);
      const result: Ontologies.ModifyObjectLogicRule & {
        type: "modifyObject";
      } = {
        type: "modifyObject",
        objectToModify: r.objectToModify,
        propertyArguments: {},
        structPropertyArguments: {},
      };
      return result;
    }

    case "deleteObjectRule": {
      const r = irRule.deleteObjectRule;
      const result: Ontologies.DeleteObjectLogicRule & {
        type: "deleteObject";
      } = {
        type: "deleteObject",
        objectToDelete: r.objectToDelete,
      };
      return result;
    }

    case "addInterfaceRule": {
      const r = irRule.addInterfaceRule;
      const interfaceApiName = resolveApiName(
        r.interfaceApiName,
        interfaceLookup,
      );
      const result: Ontologies.CreateInterfaceLogicRule & {
        type: "createInterface";
      } = {
        type: "createInterface",
        interfaceTypeApiName: interfaceApiName,
        objectType: interfaceApiName,
        sharedPropertyArguments: {},
        structPropertyArguments: {},
      };
      return result;
    }

    case "modifyInterfaceRule": {
      const r = irRule.modifyInterfaceRule;
      const result: Ontologies.ModifyInterfaceLogicRule & {
        type: "modifyInterface";
      } = {
        type: "modifyInterface",
        interfaceObjectToModify: r.interfaceObjectToModifyParameter,
        sharedPropertyArguments: {},
        structPropertyArguments: {},
      };
      return result;
    }

    case "addLinkRule":
      throw new Error("addLinkRule is not supported for ActionLogicRule");

    case "deleteLinkRule":
      throw new Error("deleteLinkRule is not supported for ActionLogicRule");

    default:
      throw new Error(
        `Unsupported logic rule type: ${(irRule as { type: string }).type}`,
      );
  }
}
