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

import invariant from "tiny-invariant";
import type { ActionLevelValidationDefinition } from "./action/ActionLevelValidationDefinition.js";
import type { ActionParameter } from "./action/ActionParameter.js";
import type { ActionSection } from "./action/ActionSection.js";
import type { ActionStatus } from "./action/ActionStatus.js";
import { type ActionType } from "./action/ActionType.js";
import type { DefaultFormat } from "./action/DefaultFormat.js";
import type { SubmissionMetadata } from "./action/SubmissionMetadata.js";
import type { TableConfiguration } from "./action/TableConfiguration.js";
import { cloneDefinition } from "./cloneDefinition.js";
import type { BlueprintIcon } from "./common/BlueprintIcons.js";
import type { EntityPermission } from "./common/EntityPermission.js";
import { convertValidationRule, defineAction, kebab } from "./defineAction.js";
import type { InterfaceLinkConstraint } from "./defineInterfaceLinkConstraint.js";
import {
  importedTypes,
  namespace,
  ontologyDefinition,
  withoutNamespace,
} from "./defineOntology.js";
import type { InterfaceType } from "./interface/InterfaceType.js";
import { combineApiNamespaceIfMissing } from "./namespace/combineApiNamespaceIfMissing.js";

type CreateInterfaceLinkActionBaseDefinition = {
  apiName?: string;
  displayName?: string;
  status?: ActionStatus;
  sourceParameter?: { id?: string; displayName?: string };
  targetParameter?: { id?: string; displayName?: string };
  actionLevelValidation?: ActionLevelValidationDefinition;
  sections?: Array<ActionSection>;
  defaultFormat?: DefaultFormat;
  enableLayoutSwitch?: boolean;
  tableConfiguration?: TableConfiguration;
  submissionMetadata?: SubmissionMetadata;
  permission?: EntityPermission;
  icon?: { locator: BlueprintIcon; color: string };
};

export type CreateInterfaceLinkActionUserDefinition =
  & CreateInterfaceLinkActionBaseDefinition
  & (
    | { interfaceLink: InterfaceLinkConstraint; from?: InterfaceType }
    | { interfaceLink: string; from: InterfaceType }
  );

export function defineCreateInterfaceLinkAction(
  defInput: CreateInterfaceLinkActionUserDefinition,
): ActionType {
  const def = cloneDefinition(defInput);

  const linkConstraint = typeof def.interfaceLink === "string"
    ? undefined
    : def.interfaceLink;
  invariant(
    linkConstraint === undefined
      || def.from === undefined
      || def.from.apiName === linkConstraint.from.apiName,
    `"from" ("${def.from?.apiName}") does not match the interface ("${linkConstraint?.from.apiName}") that interface link constraint "${linkConstraint?.apiName}" was defined on. Omit "from" to use the constraint's own interface.`,
  );
  const from = def.from ?? linkConstraint?.from;
  invariant(
    from !== undefined,
    `"from" is required when "interfaceLink" is provided as a string (the api name).`,
  );

  const interfaceLinkApiName = typeof def.interfaceLink === "string"
    ? def.interfaceLink
    : def.interfaceLink.apiName;
  const linkApiName = combineApiNamespaceIfMissing(
    namespace,
    interfaceLinkApiName,
  );
  const link = from.links.find(l => l.metadata.apiName === linkApiName);
  invariant(
    link !== undefined,
    `Interface link constraint "${interfaceLinkApiName}" not found on interface "${from.apiName}". Define it with defineInterfaceLinkConstraint first.`,
  );
  invariant(
    link.linkedEntityTypeId.type === "interfaceType",
    `Interface link constraint "${interfaceLinkApiName}" on "${from.apiName}" does not link to an interface type.`,
  );
  const targetApiName = link.linkedEntityTypeId.interfaceType;
  invariant(
    ontologyDefinition.INTERFACE_TYPE[targetApiName] !== undefined
      || importedTypes.INTERFACE_TYPE[targetApiName] !== undefined,
    `Target interface "${targetApiName}" of interface link constraint "${interfaceLinkApiName}" is not defined.`,
  );

  const sourceId = def.sourceParameter?.id ?? "source";
  const targetId = def.targetParameter?.id ?? "target";

  const sourceParam: ActionParameter = {
    id: sourceId,
    displayName: def.sourceParameter?.displayName
      ?? from.displayMetadata.displayName,
    type: {
      type: "interfaceReference",
      interfaceReference: { interfaceTypeRid: from.apiName },
    },
    validation: {
      required: true,
      allowedValues: { type: "interfaceObjectQuery" },
    },
  };
  const targetParam: ActionParameter = {
    id: targetId,
    displayName: def.targetParameter?.displayName
      ?? withoutNamespace(targetApiName),
    type: link.cardinality === "MANY"
      ? {
        type: "interfaceReferenceList",
        interfaceReferenceList: { interfaceTypeRid: targetApiName },
      }
      : {
        type: "interfaceReference",
        interfaceReference: { interfaceTypeRid: targetApiName },
      },
    validation: {
      required: link.cardinality === "MANY"
        ? { listLength: link.required ? { min: 1 } : {} }
        : link.required,
      allowedValues: { type: "interfaceObjectQuery" },
    },
  };
  const parameters = [sourceParam, targetParam];

  return defineAction({
    apiName: def.apiName
      ?? `link-${kebab(withoutNamespace(from.apiName))}-${
        kebab(withoutNamespace(interfaceLinkApiName))
      }`,
    displayName: def.displayName
      ?? `Link ${from.displayMetadata.displayName}`,
    status: def.status ?? "active",
    entities: {
      affectedInterfaceTypes: [from.apiName, targetApiName],
      affectedObjectTypes: [],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    parameters,
    rules: [{
      type: "addInterfaceLinkRuleV2",
      addInterfaceLinkRuleV2: {
        interfaceTypeRid: from.apiName,
        interfaceLinkTypeRid: linkApiName,
        sourceObjects: [{ type: "existingObject", existingObject: sourceId }],
        targetObjects: [{ type: "existingObject", existingObject: targetId }],
      },
    }],
    parameterOrdering: [sourceId, targetId],
    ...(def.actionLevelValidation
      ? {
        validation: convertValidationRule(
          def.actionLevelValidation,
          parameters,
        ),
      }
      : {}),
    ...(def.defaultFormat && { defaultFormat: def.defaultFormat }),
    ...(def.enableLayoutSwitch
      && { enableLayoutSwitch: def.enableLayoutSwitch }),
    ...(def.tableConfiguration
      && { displayAndFormat: { table: def.tableConfiguration } }),
    ...(def.sections
      && { sections: Object.fromEntries(def.sections.map(s => [s.id, s])) }),
    ...(def.submissionMetadata
      && { submissionMetadata: def.submissionMetadata }),
    ...(def.permission && { permission: def.permission }),
    ...(def.icon && { icon: def.icon }),
  });
}
