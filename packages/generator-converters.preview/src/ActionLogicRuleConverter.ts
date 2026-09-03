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
  ActionTypeBlockDataV2,
  LinkedObjectReference,
  LogicRule,
  LogicRuleValue,
  OntologyBlockDataV2,
  OntologyIrActionTypeBlockDataV2,
  OntologyIrLogicRule,
  OntologyIrLogicRuleValue,
  OntologyIrOntologyBlockDataV2,
  OntologyIrStaticValue,
  StaticValue,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";
import {
  type BlockDataApiNameLookup,
  buildBlockDataInterfaceLinkTypeLookup,
  buildBlockDataInterfaceTypeLookup,
  buildBlockDataObjectTypeLookup,
  resolveBlockDataApiName,
} from "@osdk/generator-converters.ontologyir";

interface ApiNameLookup {
  byId: Map<string, string>;
  byHyphenated: Map<string, string>;
}

type SourceLogicRuleArgument = LogicRuleValue | OntologyIrLogicRuleValue;
type SourceStaticValue = StaticValue | OntologyIrStaticValue;

function convertLogicRuleArguments(
  values: Record<string, SourceLogicRuleArgument>,
): Record<string, Ontologies.LogicRuleArgument> {
  const result: Record<string, Ontologies.LogicRuleArgument> = {};
  for (const [key, value] of Object.entries(values)) {
    result[key] = convertLogicRuleArgument(value);
  }
  return result;
}

function convertLogicRuleArgument(
  value: SourceLogicRuleArgument,
): Ontologies.LogicRuleArgument {
  switch (value.type) {
    case "parameterId":
      return {
        type: "parameterId",
        parameterId: value.parameterId,
      };
    case "staticValue":
      return {
        type: "staticValue",
        value: convertStaticValue(value.staticValue),
      };
    case "objectParameterPropertyValue":
      return {
        type: "objectParameterPropertyValue",
        parameterId: value.objectParameterPropertyValue.parameterId,
        propertyTypeApiName: value.objectParameterPropertyValue.propertyTypeId,
      };
    case "interfaceParameterPropertyValue":
      return {
        type: "interfaceParameterPropertyValue",
        parameterId: value.interfaceParameterPropertyValue.parameterId,
        sharedPropertyTypeRid:
          value.interfaceParameterPropertyValue.sharedPropertyTypeRid,
      };
    case "currentUser":
      return { type: "currentUser" };
    case "currentTime":
      return { type: "currentTime" };
    case "uniqueIdentifier":
      return value.uniqueIdentifier.linkId == null
        ? { type: "uniqueIdentifier" }
        : {
          type: "uniqueIdentifier",
          linkId: value.uniqueIdentifier.linkId,
        };
    case "synchronousWebhookOutput":
      return {
        type: "synchronousWebhookOutput",
        webhookOutputParamName: value.synchronousWebhookOutput,
      };
    case "interfaceParameterPropertyValueV2":
    case "mediaReferenceParameterPropertyValue":
    case "scheduleRunRid":
      throw new Error(
        `Logic rule argument '${value.type}' is not supported by the gateway API`,
      );
    default:
      throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
  }
}

/**
 * The ontology metadata API models static values as tagged unions, while the
 * gateway API expects the corresponding untagged JSON value.
 */
function convertStaticValue(value: SourceStaticValue): Ontologies.DataValue {
  switch (value.type) {
    case "boolean":
      return value.boolean;
    case "booleanList":
      return value.booleanList.booleans;
    case "integer":
      return value.integer;
    case "integerList":
      return value.integerList.integers;
    case "long":
      return value.long;
    case "longList":
      return value.longList.longs;
    case "double":
      return value.double;
    case "doubleList":
      return value.doubleList.doubles;
    case "string":
      return value.string;
    case "stringList":
      return value.stringList.strings;
    case "decimal":
      return value.decimal.decimalValue;
    case "decimalList":
      return value.decimalList.decimals;
    case "date":
      return value.date.dateValue;
    case "dateList":
      return value.dateList.dates;
    case "geohash":
      return value.geohash.geohash;
    case "geohashList":
      return value.geohashList.geohashes;
    case "geoshape":
      return value.geoshape.geoshape;
    case "geoshapeList":
      return value.geoshapeList.geoshapes;
    case "timeSeriesReference": {
      const reference = value.timeSeriesReference.timeSeriesReference;
      switch (reference.type) {
        case "seriesId":
          return reference.seriesId;
        case "templateRid":
          return reference.templateRid;
        case "qualifiedSeriesId":
          return reference.qualifiedSeriesId;
        default:
          throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
      }
    }
    case "timestamp":
      return value.timestamp;
    case "timestampList":
      return value.timestampList.timestamps;
    case "null":
      return null;
    case "objectLocator":
      return convertObjectPrimaryKey(value.objectLocator.primaryKey);
    case "objectLocatorList":
      return value.objectLocatorList.objectLocatorList.map(locator =>
        convertObjectPrimaryKey(locator.primaryKey)
      );
    case "objectType":
      return value.objectType.objectTypeId;
    case "attachment":
      return value.attachment.attachment;
    case "attachmentList":
      return value.attachmentList.attachments;
    case "marking":
      return value.marking.marking;
    case "markingList":
      return value.markingList.markings;
    case "mediaReference":
      return {
        mimeType: value.mediaReference.mimeType,
        reference: value.mediaReference.mediaReference,
      };
    case "mediaReferenceList":
      return value.mediaReferenceList.mediaReferences.map(mediaReference => ({
        mimeType: mediaReference.mimeType,
        reference: mediaReference.mediaReference,
      }));
    case "geotimeSeriesReference":
      return value.geotimeSeriesReference;
    case "geotimeSeriesReferenceList":
      return value.geotimeSeriesReferenceList.geotimeSeriesReferences;
    case "struct":
      return Object.fromEntries(
        value.struct.structFields.map(field => [
          field.structFieldApiName,
          convertStaticValue(field.structFieldDataValue),
        ]),
      );
    case "structList":
      return value.structList.structs.map(struct =>
        Object.fromEntries(
          struct.structFields.map(field => [
            field.structFieldApiName,
            convertStaticValue(field.structFieldDataValue),
          ]),
        )
      );
    case "scenarioReference":
      return value.scenarioReference.scenarioRid;
    default:
      throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
  }
}

function convertObjectPrimaryKey(
  primaryKey: Extract<SourceStaticValue, { type: "objectLocator" }>[
    "objectLocator"
  ]["primaryKey"],
): Ontologies.DataValue {
  const convertedEntries = Object.entries(primaryKey).map(([key, value]) => [
    key,
    convertStaticValue(value),
  ]);
  return convertedEntries.length === 1
    ? convertedEntries[0][1]
    : Object.fromEntries(convertedEntries);
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

function firstExistingObjectParameterId(
  refs: LinkedObjectReference[],
  field: string,
): string {
  const first = refs[0];
  if (!first || first.type !== "existingObject") {
    throw new Error(
      `Interface-link rule ${field} must reference exactly one existing object`,
    );
  }
  return first.existingObject;
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

function getObjectReferenceTypeFromBlockData(
  action: ActionTypeBlockDataV2,
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

export function convertBlockDataLogicRulesToActionLogicRules(
  rules: LogicRule[],
  action: ActionTypeBlockDataV2,
  blockdata?: OntologyBlockDataV2,
): Ontologies.ActionLogicRule[] {
  const objectLookup = buildBlockDataObjectTypeLookup(blockdata);
  const interfaceLookup = buildBlockDataInterfaceTypeLookup(blockdata);
  const interfaceLinkLookup = buildBlockDataInterfaceLinkTypeLookup(blockdata);

  return rules.map(rule =>
    convertBlockDataSingleRule(
      rule,
      action,
      objectLookup,
      interfaceLookup,
      interfaceLinkLookup,
    )
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
      const result: Ontologies.CreateObjectLogicRule & {
        type: "createObject";
      } = {
        type: "createObject",
        objectTypeApiName: resolveApiName(r.objectTypeId, objectLookup),
        propertyArguments: convertLogicRuleArguments(r.propertyValues),
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
        propertyArguments: convertLogicRuleArguments(r.propertyValues),
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

    case "functionRule": {
      const r = irRule.functionRule;
      const result: Ontologies.FunctionLogicRule & {
        type: "function";
      } = {
        type: "function",
        functionRid: r.functionRid,
        functionInputValues: convertLogicRuleArguments(r.functionInputValues),
        functionVersion: r.functionVersion,
      };
      return result;
    }

    case "addInterfaceLinkRuleV2": {
      const r = irRule.addInterfaceLinkRuleV2;
      const result: Ontologies.CreateInterfaceLinkLogicRule & {
        type: "createInterfaceLink";
      } = {
        type: "createInterfaceLink",
        interfaceTypeApiName: resolveApiName(
          r.interfaceTypeRid,
          interfaceLookup,
        ),
        interfaceLinkTypeApiName: r.interfaceLinkTypeRid,
        sourceObject: firstExistingObjectParameterId(
          r.sourceObjects,
          "sourceObjects",
        ),
        targetObject: firstExistingObjectParameterId(
          r.targetObjects,
          "targetObjects",
        ),
      };
      return result;
    }

    case "deleteInterfaceLinkRule": {
      const r = irRule.deleteInterfaceLinkRule;
      const result: Ontologies.DeleteInterfaceLinkLogicRule & {
        type: "deleteInterfaceLink";
      } = {
        type: "deleteInterfaceLink",
        interfaceTypeApiName: resolveApiName(
          r.interfaceTypeRid,
          interfaceLookup,
        ),
        interfaceLinkTypeApiName: r.interfaceLinkTypeRid,
        sourceObject: r.sourceObject,
        targetObject: r.targetObject,
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

function convertBlockDataSingleRule(
  rule: LogicRule,
  action: ActionTypeBlockDataV2,
  objectLookup: BlockDataApiNameLookup | undefined,
  interfaceLookup: BlockDataApiNameLookup | undefined,
  interfaceLinkLookup: BlockDataApiNameLookup | undefined,
): Ontologies.ActionLogicRule {
  switch (rule.type) {
    case "addObjectRule": {
      const r = rule.addObjectRule;
      const result: Ontologies.CreateObjectLogicRule & {
        type: "createObject";
      } = {
        type: "createObject",
        objectTypeApiName: resolveBlockDataApiName(
          r.objectTypeId,
          objectLookup,
        ),
        propertyArguments: convertLogicRuleArguments(r.propertyValues),
        structPropertyArguments: {},
      };
      return result;
    }

    case "addOrModifyObjectRuleV2": {
      const r = rule.addOrModifyObjectRuleV2;
      const objRef = getObjectReferenceTypeFromBlockData(
        action,
        r.objectToModify,
      );
      // propertyArguments left empty: the downstream generator resolves
      // property mappings from the action parameter configuration rather
      // than from the logic rule itself for createOrModify rules.
      const result: Ontologies.CreateOrModifyObjectLogicRule & {
        type: "createOrModifyObject";
      } = {
        type: "createOrModifyObject",
        objectTypeApiName: resolveBlockDataApiName(
          objRef.objectTypeId,
          objectLookup,
        ),
        propertyArguments: {},
        structPropertyArguments: {},
      };
      return result;
    }

    case "modifyObjectRule": {
      const r = rule.modifyObjectRule;
      // Validate that the parameter is an objectReference (throws if not)
      getObjectReferenceTypeFromBlockData(action, r.objectToModify);
      const result: Ontologies.ModifyObjectLogicRule & {
        type: "modifyObject";
      } = {
        type: "modifyObject",
        objectToModify: r.objectToModify,
        propertyArguments: convertLogicRuleArguments(r.propertyValues),
        structPropertyArguments: {},
      };
      return result;
    }

    case "deleteObjectRule": {
      const r = rule.deleteObjectRule;
      const result: Ontologies.DeleteObjectLogicRule & {
        type: "deleteObject";
      } = {
        type: "deleteObject",
        objectToDelete: r.objectToDelete,
      };
      return result;
    }

    case "addInterfaceRule": {
      const r = rule.addInterfaceRule;
      const interfaceApiName = resolveBlockDataApiName(
        r.interfaceTypeRid,
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
      const r = rule.modifyInterfaceRule;
      const result: Ontologies.ModifyInterfaceLogicRule & {
        type: "modifyInterface";
      } = {
        type: "modifyInterface",
        interfaceObjectToModify: r.interfaceObjectToModify,
        sharedPropertyArguments: {},
        structPropertyArguments: {},
      };
      return result;
    }

    case "functionRule": {
      const r = rule.functionRule;
      const result: Ontologies.FunctionLogicRule & {
        type: "function";
      } = {
        type: "function",
        functionRid: r.functionRid,
        functionInputValues: convertLogicRuleArguments(r.functionInputValues),
        functionVersion: r.functionVersion,
      };
      return result;
    }

    case "addInterfaceLinkRuleV2": {
      const r = rule.addInterfaceLinkRuleV2;
      const result: Ontologies.CreateInterfaceLinkLogicRule & {
        type: "createInterfaceLink";
      } = {
        type: "createInterfaceLink",
        interfaceTypeApiName: resolveBlockDataApiName(
          r.interfaceTypeRid,
          interfaceLookup,
        ),
        interfaceLinkTypeApiName: resolveBlockDataApiName(
          r.interfaceLinkTypeRid,
          interfaceLinkLookup,
        ),
        sourceObject: firstExistingObjectParameterId(
          r.sourceObjects,
          "sourceObjects",
        ),
        targetObject: firstExistingObjectParameterId(
          r.targetObjects,
          "targetObjects",
        ),
      };
      return result;
    }

    case "deleteInterfaceLinkRule": {
      const r = rule.deleteInterfaceLinkRule;
      const result: Ontologies.DeleteInterfaceLinkLogicRule & {
        type: "deleteInterfaceLink";
      } = {
        type: "deleteInterfaceLink",
        interfaceTypeApiName: resolveBlockDataApiName(
          r.interfaceTypeRid,
          interfaceLookup,
        ),
        interfaceLinkTypeApiName: resolveBlockDataApiName(
          r.interfaceLinkTypeRid,
          interfaceLinkLookup,
        ),
        sourceObject: r.sourceObject,
        targetObject: r.targetObject,
      };
      return result;
    }

    case "addLinkRule":
      throw new Error("addLinkRule is not supported for ActionLogicRule");

    case "deleteLinkRule":
      throw new Error("deleteLinkRule is not supported for ActionLogicRule");

    default:
      throw new Error(
        `Unsupported logic rule type: ${(rule as { type: string }).type}`,
      );
  }
}
