/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { OntologyIrV2 } from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";
import {
  convertSdkGenerationInput,
  unwrapSdkGenerationInput,
} from "./convertSdkGenerationInput.js";

function emptyBlock(): OntologyIrV2["ontology"] {
  return {
    actionTypes: {},
    blockOutputCompassLocations: {},
    interfaceTypes: {},
    knownIdentifiers: {
      actionParameterIds: {},
      actionParameters: {},
      actionTypes: {},
      datasourceColumns: {},
      datasources: {},
      filesDatasources: {},
      functions: {},
      geotimeSeriesSyncs: {},
      groupIds: {},
      interfaceActionTypeConstraints: {},
      interfaceLinkTypes: {},
      interfaceParameterConstraints: {},
      interfacePropertyTypes: {},
      interfaceTypes: {},
      linkTypeIds: {},
      linkTypes: {},
      markings: {},
      objectPropertyTypeIdsToRids: {},
      objectTypeIds: {},
      objectTypes: {},
      propertyTypeIds: {},
      propertyTypes: {},
      sharedPropertyTypes: {},
      structFieldRidsToApiNames: {},
      timeSeriesSyncs: {},
      valueTypes: {},
      webhooks: {},
      workshopModules: {},
    },
    linkTypes: {},
    objectTypes: {},
    ruleSets: {},
    sharedPropertyTypes: {},
  };
}

describe("convertSdkGenerationInput", () => {
  it("keeps wrapped block-only inputs backwards compatible", () => {
    const block = emptyBlock();

    expect(unwrapSdkGenerationInput({ ontology: block })).toBe(block);
  });

  it("preserves Value Types from a complete Maker V2 envelope", () => {
    const envelope: OntologyIrV2 = {
      importedOntology: emptyBlock(),
      importedValueTypes: [],
      ontology: emptyBlock(),
      randomnessKey: "00000000-0000-0000-0000-000000000000",
      transitiveImportedOntology: emptyBlock(),
      valueTypes: [
        {
          metadata: {
            apiName: "mobility",
            baseType: { type: "string", string: {} },
            displayMetadata: {
              description: "Movement state",
              displayName: "Mobility",
            },
            status: { type: "active", active: {} },
          },
          versions: [
            {
              baseType: { type: "string", string: {} },
              constraints: [
                {
                  constraint: {
                    constraint: {
                      type: "string",
                      string: {
                        type: "oneOf",
                        oneOf: {
                          useIgnoreCase: false,
                          values: ["Moving", "Stationary"],
                        },
                      },
                    },
                  },
                },
              ],
              exampleValues: [],
              version: "1.0.0",
            },
          ],
        },
      ],
    };

    const metadata = convertSdkGenerationInput(envelope);

    expect(metadata.valueTypes.mobility).toMatchObject({
      apiName: "mobility",
      constraints: [
        { type: "enum", options: ["Moving", "Stationary"] },
      ],
      version: "1.0.0",
    });
  });
});
