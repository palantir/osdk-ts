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

import type { MarketplaceInterfaceType } from "@osdk/client.unstable";
import type { InterfaceType } from "../../api/interface/InterfaceType.js";
import { generateRid } from "../../util/generateRid.js";
import { convertSpt } from "./convertSpt.js";

export function convertInterface(
  interfaceType: InterfaceType,
): MarketplaceInterfaceType {
  const { __type, ...other } = interfaceType;
  return {
    ...other,
    // TODO: Generate proper RID based on apiName
    rid: generateRid(`interface.${interfaceType.apiName}`),
    propertiesV2: Object.fromEntries(
      Object.values(interfaceType.propertiesV2)
        .map((
          spt,
        ) => {
          const convertedSpt = convertSpt(spt.sharedPropertyType);
          return [convertedSpt.rid, {
            required: spt.required,
            sharedPropertyType: convertedSpt,
          }];
        }),
    ),
    displayMetadata: {
      displayName: interfaceType.displayMetadata.displayName,
      description: interfaceType.displayMetadata.description,
      icon: interfaceType.displayMetadata.icon ?? {
        type: "blueprint",
        blueprint: { color: "#4C90F0", locator: "layout-hierarchy" },
      },
    },
    // TODO: Convert extendsInterfaces from API names to RIDs
    extendsInterfaces: interfaceType.extendsInterfaces.map(i => generateRid(`interface.${i.apiName}`)),
    // TODO: Convert links to add RIDs
    links: interfaceType.links.map(link => ({
      ...link,
      rid: generateRid(`interface.link.${interfaceType.apiName}.${link.metadata.apiName}`),
    })),
    // these are omitted from our internal types but we need to re-add them for the final json
    properties: [],
    // TODO(mwalther): Support propertiesV3
    propertiesV3: {},
  };
}
