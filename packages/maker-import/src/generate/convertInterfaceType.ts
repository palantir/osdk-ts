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
  InterfaceDefinedProperty,
  InterfacePropertyType,
  InterfaceType,
  SharedPropertyType,
} from "@osdk/maker";
import { OntologyEntityTypeEnum } from "@osdk/maker";
import { convertSharedPropertyType } from "./convertSharedPropertyType.js";
import { mapPropertyType } from "./mapPropertyType.js";
import { withoutNamespace } from "./utils.js";

interface GatewayInterfaceType {
  apiName: string;
  displayName?: string;
  description?: string;
  extendsInterfaces: ReadonlyArray<string>;
  properties: Record<
    string,
    {
      apiName: string;
      displayName?: string;
      description?: string;
      dataType: { type: string; [key: string]: unknown };
    }
  >;
  propertiesV2?: Record<
    string,
    {
      type: string;
      apiName?: string;
      displayName?: string;
      description?: string;
      dataType?: { type: string; [key: string]: unknown };
      requireImplementation?: boolean;
    }
  >;
  links: Record<
    string,
    {
      apiName: string;
      displayName?: string;
      description?: string;
      cardinality: string;
      required: boolean;
      linkedEntityApiName: { type: string; apiName?: string };
    }
  >;
}

/**
 * Converts a gateway InterfaceType to a maker InterfaceType.
 *
 * `allInterfaces` is the full map so we can resolve extendsInterfaces references.
 */
export function convertInterfaceType(
  iface: GatewayInterfaceType,
  allInterfaces: Record<string, GatewayInterfaceType>,
): InterfaceType {
  const shortName = withoutNamespace(iface.apiName);

  // Convert properties to propertiesV2 (SharedPropertyType-based)
  const propertiesV2: Record<
    string,
    { sharedPropertyType: SharedPropertyType; required: boolean }
  > = {};
  const propertiesV3: Record<string, InterfacePropertyType> = {};

  for (const [sptApiName, sptDef] of Object.entries(iface.properties)) {
    const converted = convertSharedPropertyType({
      apiName: sptApiName,
      displayName: sptDef.displayName,
      description: sptDef.description,
      dataType: sptDef.dataType,
    });
    if (converted) {
      const entry = { sharedPropertyType: converted, required: true };
      propertiesV2[sptApiName] = entry;
      propertiesV3[withoutNamespace(sptApiName)] = entry;
    }
  }

  // Convert IDPs from propertiesV2 (gateway field) into propertiesV3
  if (iface.propertiesV2) {
    for (const [apiName, propDef] of Object.entries(iface.propertiesV2)) {
      if (
        propDef.type === "interfaceDefinedPropertyType" && propDef.dataType
      ) {
        const mapped = mapPropertyType(propDef.dataType);
        if (mapped) {
          const idpEntry: InterfaceDefinedProperty = {
            type: mapped.type,
            array: mapped.array,
            displayName: propDef.displayName,
            description: propDef.description,
            required: propDef.requireImplementation,
          };
          propertiesV3[withoutNamespace(apiName)] = idpEntry;
        }
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
      description: iface.description ?? shortName,
    },
    extendsInterfaces,
    links: [],
    status: { type: "active", active: {} },
    propertiesV2,
    propertiesV3,
    searchable: true,
  } as unknown as InterfaceType;
}
