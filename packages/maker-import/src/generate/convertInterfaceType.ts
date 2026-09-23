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

import type * as Ontologies from "@osdk/foundry.ontologies";
import type {
  InterfacePropertyType,
  InterfaceType,
  SharedPropertyType,
} from "@osdk/maker";
import { OntologyEntityTypeEnum } from "@osdk/maker";
import { consola } from "consola";

import { convertSharedPropertyType } from "./convertSharedPropertyType.js";
import { mapPropertyType } from "./mapPropertyType.js";
import { withoutNamespace } from "./utils.js";

/**
 * Converts a gateway InterfaceType to a maker InterfaceType.
 *
 * `allInterfaces` is the full map so we can resolve extendsInterfaces references.
 */
export function convertInterfaceType(
  iface: Ontologies.InterfaceType,
  allInterfaces: Record<string, Ontologies.InterfaceType>,
): InterfaceType {
  const shortName = withoutNamespace(iface.apiName);

  // propertiesV2 is SPT-only; propertiesV3 also carries inline-defined properties.
  const propertiesV2: Record<
    string,
    { sharedPropertyType: SharedPropertyType; required: boolean }
  > = {};
  const propertiesV3: Record<string, InterfacePropertyType> = {};

  for (const [_propApiName, prop] of Object.entries(iface.propertiesV2)) {
    if (prop.type === "interfaceSharedPropertyType") {
      const converted = convertSharedPropertyType(prop);
      if (converted) {
        const entry = {
          sharedPropertyType: converted,
          required: prop.required,
        };
        propertiesV2[prop.apiName] = entry;
        propertiesV3[withoutNamespace(prop.apiName)] = entry;
      }
    } else if (prop.type === "interfaceDefinedPropertyType") {
      const mapped = mapPropertyType(prop.dataType);
      if (mapped) {
        propertiesV3[withoutNamespace(prop.apiName)] = {
          type: mapped.type,
          array: mapped.array,
          displayName: prop.displayName,
          description: prop.description,
          required: prop.requireImplementation,
        };
      } else {
        consola.warn(
          `Skipping interface-defined property "${prop.apiName}": unsupported type "${prop.dataType.type}"`,
        );
      }
    }
  }

  // Resolve extendsInterfaces — recursively convert referenced interfaces
  const extendsInterfaces: Array<InterfaceType> = [];
  for (const extApiName of iface.extendsInterfaces) {
    const extIface = allInterfaces[extApiName];
    if (extIface) {
      extendsInterfaces.push(convertInterfaceType(extIface, allInterfaces));
    }
  }

  return {
    __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
    apiName: iface.apiName,
    displayMetadata: {
      displayName: iface.displayName ?? shortName,
      description: iface.description ?? "",
    },
    extendsInterfaces,
    links: [],
    actionTypeConstraints: [],
    status: { type: "active", active: {} },
    propertiesV2,
    propertiesV3,
    searchable: true,
    // Metadata that predates the gateway reporting this field says nothing about the interface's
    // opt-in state, so leave the key off rather than claiming it is opted out — maker treats an
    // absent flag on an imported interface as unknown and an explicit `false` as a definite no.
    //
    // TODO: read `iface.schemaMigrationsEnabled` directly once the `foundry-platform-typescript`
    // catalog picks up the gateway release that declares it on the public v2 `InterfaceType`.
    ...("schemaMigrationsEnabled" in iface &&
    typeof iface.schemaMigrationsEnabled === "boolean"
      ? { schemaMigrationsEnabled: iface.schemaMigrationsEnabled }
      : {}),
  };
}
