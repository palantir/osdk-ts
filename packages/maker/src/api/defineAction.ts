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

import type { ParameterId } from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import { namespace, ontologyDefinition } from "./defineOntology.js";
import type { ActionType } from "./types.js";

export function defineAction(actionDef: ActionType): ActionType {
  const apiName = namespace + actionDef.apiName;
  const parameterIds = (actionDef.parameters ?? []).map(p => p.id);

  if (ontologyDefinition.actionTypes[apiName] !== undefined) {
    throw new Error(
      `Action type with apiName ${actionDef.apiName} is already defined`,
    );
  }
  invariant(
    /^[a-z0-9]+(-[a-z0-9]+)*$/.test(actionDef.apiName),
    `Action type apiName "${actionDef.apiName}" must be alphanumeric, lowercase, and kebab-case`,
  );

  const parameterIdsSet = new Set(parameterIds);
  invariant(
    parameterIdsSet.size === parameterIds.length,
    `Parameter ids must be unique`,
  );

  const parameterIdsNotFound = Array.from(referencedParameterIds(actionDef))
    .filter(p => !parameterIdsSet.has(p));
  invariant(
    parameterIdsNotFound.length === 0,
    `Parameters [${parameterIdsNotFound}] were referenced but not defined`,
  );

  const definedSectionIds = new Set(Object.keys(actionDef.sections ?? []));
  const undefinedSectionsInOrdering = (actionDef.formContentOrdering ?? [])
    .flatMap(
      s => s.type === "parameterId" ? [] : [s.sectionId],
    ).filter(sId => !definedSectionIds.has(sId));
  invariant(
    undefinedSectionsInOrdering.length === 0,
    `Sections [${undefinedSectionsInOrdering}] were referenced in content ordering but not defined`,
  );

  invariant(
    actionDef.rules.length > 0,
    `Action type ${actionDef.apiName} must have at least one logic rule`,
  );

  // TODO(dpaquin): check parameter ids referenced anywhere are defined?

  const fullAction = { ...actionDef, apiName: apiName };
  ontologyDefinition.actionTypes[apiName] = fullAction;
  return fullAction;
}

function referencedParameterIds(actionDef: ActionType): Set<ParameterId> {
  const parameterIds: Set<ParameterId> = new Set();

  // section definitions
  Object.values(actionDef.sections ?? {})
    .flatMap(p => p).forEach(pId => parameterIds.add(pId));

  // form content ordering
  (actionDef.formContentOrdering ?? []).forEach(item => {
    if (item.type === "parameterId") {
      parameterIds.add(item.parameterId);
    }
  });

  // logic rules
  actionDef.rules.forEach(rule => {
    switch (rule.type) {
      case "addInterfaceRule":
        parameterIds.add(rule.addInterfaceRule.objectType);
        Object.values(rule.addInterfaceRule.sharedPropertyValues).forEach(v => {
          if (v.type === "parameterId") {
            parameterIds.add(v.parameterId);
          }
        });
        break;
      case "modifyInterfaceRule":
        parameterIds.add(rule.modifyInterfaceRule.interfaceObjectToModify);
        Object.values(rule.modifyInterfaceRule.sharedPropertyValues).forEach(
          v => {
            if (v.type === "parameterId") {
              parameterIds.add(v.parameterId);
            }
          },
        );
        break;
    }
  });
  return parameterIds;
}
