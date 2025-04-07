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

  const parameterIdsSet = new Set(parameterIds);
  invariant(
    parameterIdsSet.size === parameterIds.length,
    `Parameter ids must be unique`,
  );

  const undefinedParametersInSections = Object.values(actionDef.sections ?? {})
    .flatMap(p => p)
    .filter(pId => !parameterIdsSet.has(pId));
  invariant(
    undefinedParametersInSections.length === 0,
    `Parameters [${undefinedParametersInSections}] were referenced in section definitions but not defined`,
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

  const undefinedParametersInOrdering = (actionDef.formContentOrdering ?? [])
    .flatMap(
      item =>
        item.type === "parameterId"
          ? [item.parameterId]
          : actionDef.sections![item.sectionId],
    ).filter(p => !parameterIdsSet.has(p));
  invariant(
    undefinedParametersInOrdering.length === 0,
    `Parameters [${undefinedParametersInOrdering}] were referenced in content ordering but not defined`,
  );
  invariant(
    actionDef.rules.length > 0,
    `Action type ${actionDef.apiName} must have at least one logic rule`,
  );

  // TODO(dpaquin): check parameters used in rules are defined

  // TODO(dpaquin): do all parameters need to exist in parameterValidations (for knowing the render hints, value constraints, etc)?

  const fullAction = { ...actionDef, apiName: apiName };
  ontologyDefinition.actionTypes[apiName] = fullAction;
  return fullAction;
}
