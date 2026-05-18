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

import type { ActionStatus } from "../action/ActionStatus.js";
import { defineCreateInterfaceObjectAction } from "../defineCreateInterfaceObjectAction.js";
import { defineDeleteInterfaceObjectAction } from "../defineDeleteInterfaceObjectAction.js";
import { defineModifyInterfaceObjectAction } from "../defineModifyInterfaceObjectAction.js";
import type { ActionParameterV2Config, ActionV2Def } from "./defineActionV2.js";
import type { InterfaceV2Def } from "./defineInterfaceV2.js";
import { propertyToActionParam } from "./propertyToActionParam.js";

/**
 * Minimal overrides for v2 interface-targeted action helpers. The
 * heavier fields (validation rules, sections, parameter configuration)
 * stay on the v1 helpers; this v2 surface covers the common create /
 * modify / delete shape with sensible defaults.
 */
export interface InterfaceActionV2Overrides {
  apiName?: string;
  displayName?: string;
  status?: ActionStatus;
}

/**
 * Shape of an interface-action's v2 config. `parameters` carries the
 * derived action-parameter record (one entry per interface property,
 * plus the appropriate selector key); `modifiedEntities` records that
 * the action affects the named interface.
 */
export interface InterfaceActionV2Config {
  apiName: string;
  parameters: Record<string, ActionParameterV2Config>;
  modifiedEntities: Record<
    string,
    { created: boolean; modified: boolean; deleted?: boolean }
  >;
}

const CREATE_SELECTOR_PARAM = "objectTypeParameter";
const MODIFY_SELECTOR_PARAM = "interfaceObjectToModifyParameter";
const DELETE_SELECTOR_PARAM = "objectToDeleteParameter";

/**
 * Collect every property apiName reachable from an InterfaceV2Def,
 * including ancestor interfaces via `extends`. `visited` prevents
 * cycles via a mutated `extends` array.
 */
function flattenInterfaceProperties(
  iface: InterfaceV2Def,
  visited: Set<string> = new Set(),
): Record<string, InterfaceV2Def["properties"][string]> {
  if (visited.has(iface.apiName)) {
    return {};
  }
  visited.add(iface.apiName);
  const props: Record<string, InterfaceV2Def["properties"][string]> = {};
  for (const parent of iface.extends ?? []) {
    Object.assign(props, flattenInterfaceProperties(parent, visited));
  }
  for (const [key, value] of Object.entries(iface.properties)) {
    props[key] = value;
  }
  return props;
}

/**
 * Build the parameters record for an interface-targeted action. The
 * selector parameter (objectType / interfaceObjectToModify /
 * objectToDelete) is typed as `string` at the v2 surface — v1 emits
 * the precise `interfaceReference` IR type but the v2 wrapper keeps
 * the selector loose to avoid coupling to v1 IR primitive shapes.
 *
 * Modify-style actions mark property parameters nullable (so callers
 * can partially update); create marks them strict (honoring the
 * property's own `nullable` flag).
 */
function buildInterfaceActionParams(
  iface: InterfaceV2Def,
  selectorKey: string,
  forceNullable: boolean,
): Record<string, ActionParameterV2Config> {
  const params: Record<string, ActionParameterV2Config> = {
    [selectorKey]: "string",
  };
  const flattened = flattenInterfaceProperties(iface);
  for (const [key, prop] of Object.entries(flattened)) {
    const param = propertyToActionParam(prop, forceNullable);
    if (param !== undefined) {
      params[key] = param;
    }
  }
  return params;
}

function wrap(
  config: InterfaceActionV2Config,
): ActionV2Def<InterfaceActionV2Config> {
  return {
    apiName: config.apiName,
    parameters: config.parameters,
    modifiedEntities: config.modifiedEntities,
    __brand: "ActionV2Def" as const,
  };
}

/**
 * Define a "create interface object" action targeting an
 * `InterfaceV2Def`. Auto-generates parameters for every interface
 * property (including inherited via `extends`) plus an
 * `objectTypeParameter` selector.
 */
export function defineCreateInterfaceObjectActionV2(
  interfaceDef: InterfaceV2Def,
  overrides?: InterfaceActionV2Overrides,
): ActionV2Def<InterfaceActionV2Config> {
  const v1Action = defineCreateInterfaceObjectAction({
    interfaceType: interfaceDef.__v1Def,
    apiName: overrides?.apiName,
    displayName: overrides?.displayName,
    status: overrides?.status,
  });
  return wrap({
    apiName: v1Action.apiName,
    parameters: buildInterfaceActionParams(
      interfaceDef,
      CREATE_SELECTOR_PARAM,
      false,
    ),
    modifiedEntities: {
      [interfaceDef.apiName]: { created: true, modified: false },
    },
  });
}

/**
 * Define a "modify interface object" action targeting an
 * `InterfaceV2Def`. Auto-generates parameters (all nullable) for every
 * interface property plus an `interfaceObjectToModifyParameter`
 * selector.
 */
export function defineModifyInterfaceObjectActionV2(
  interfaceDef: InterfaceV2Def,
  overrides?: InterfaceActionV2Overrides,
): ActionV2Def<InterfaceActionV2Config> {
  const v1Action = defineModifyInterfaceObjectAction({
    interfaceType: interfaceDef.__v1Def,
    apiName: overrides?.apiName,
    displayName: overrides?.displayName,
    status: overrides?.status,
  });
  return wrap({
    apiName: v1Action.apiName,
    parameters: buildInterfaceActionParams(
      interfaceDef,
      MODIFY_SELECTOR_PARAM,
      true,
    ),
    modifiedEntities: {
      [interfaceDef.apiName]: { created: false, modified: true },
    },
  });
}

/**
 * Define a "delete interface object" action targeting an
 * `InterfaceV2Def`. Emits only the `objectToDeleteParameter` selector.
 */
export function defineDeleteInterfaceObjectActionV2(
  interfaceDef: InterfaceV2Def,
  overrides?: InterfaceActionV2Overrides,
): ActionV2Def<InterfaceActionV2Config> {
  const v1Action = defineDeleteInterfaceObjectAction({
    interfaceType: interfaceDef.__v1Def,
    apiName: overrides?.apiName,
    displayName: overrides?.displayName,
    status: overrides?.status,
  });
  return wrap({
    apiName: v1Action.apiName,
    parameters: { [DELETE_SELECTOR_PARAM]: "string" },
    modifiedEntities: {
      [interfaceDef.apiName]: {
        created: false,
        modified: false,
        deleted: true,
      },
    },
  });
}
