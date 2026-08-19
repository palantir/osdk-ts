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

import type {
  OntologyIrV2,
  ValueTypeDataConstraint,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";
import {
  generateClientSdkVersionTwoPointZero,
  type MinimalFs,
} from "@osdk/generator";
import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import {
  convertSdkGenerationInput,
  normalizeSdkGenerationActionTypes,
  unwrapSdkGenerationInput,
} from "./convertSdkGenerationInput.js";

type StringValueTypeConstraint = Extract<
  ValueTypeDataConstraint["constraint"]["constraint"],
  { type: "string" }
>;

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

function createInMemoryFiles(): {
  fs: MinimalFs;
  files: Map<string, string>;
} {
  const files = new Map<string, string>();
  return {
    files,
    fs: {
      mkdir: () => Promise.resolve(),
      readdir: () => Promise.resolve([]),
      writeFile: (path, contents) => {
        files.set(path, contents);
        return Promise.resolve();
      },
    },
  };
}

function valueTypeVersionId(version: string): string {
  const hash = createHash("md5").update(version, "utf8").digest("hex");
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-${hash.slice(12, 16)}-${
    hash.slice(16, 20)
  }-${hash.slice(20)}`;
}

describe("convertSdkGenerationInput", () => {
  it("preserves envelope ActionTypeV2 metadata during SDK generation", () => {
    const actionRid = "ri.ontology.main.action-type.noop";
    const ontology = emptyBlock();
    const envelope: OntologyIrV2 = {
      importedOntology: emptyBlock(),
      importedValueTypes: [],
      ontology: {
        ...ontology,
        actionTypes: {
          [actionRid]: {
            actionType: {
              actionTypeLogic: {
                logic: { rules: [] },
                notifications: [],
                validation: {
                  actionTypeLevelValidation: { ordering: [], rules: {} },
                  parameterValidations: {},
                  sectionValidations: {},
                },
              },
              metadata: {
                apiName: "noop",
                displayMetadata: {
                  applyingMessage: [],
                  description: "",
                  displayName: "No-op",
                  successMessage: [],
                  typeClasses: [],
                },
                formContentOrdering: [],
                parameterOrdering: [],
                parameters: {},
                rid: actionRid,
                sections: {},
                status: { type: "active", active: {} },
                version: "1.0.0",
              },
            },
            parameterIds: {},
          },
        },
        knownIdentifiers: {
          ...ontology.knownIdentifiers,
          actionTypes: { [actionRid]: "action-type-noop" },
        },
      },
      randomnessKey: "00000000-0000-0000-0000-000000000000",
      transitiveImportedOntology: emptyBlock(),
      valueTypes: [],
    };

    const metadata = convertSdkGenerationInput(envelope);
    const actionTypes = normalizeSdkGenerationActionTypes(metadata.actionTypes);
    expect(actionTypes).toEqual({ noop: actionTypes.noop });
    expect(actionTypes.noop).toMatchObject({
      apiName: "noop",
      operations: [],
      parameters: {},
    });
  });

  it("unwraps block-only ActionTypeFullMetadata during SDK generation", () => {
    const action: Ontologies.ActionTypeV2 = {
      apiName: "createMobile",
      displayName: "Create Mobile",
      operations: [],
      parameters: {},
      rid: "ri.actions.main.action-type.create-mobile",
      status: "ACTIVE",
    };

    expect(
      normalizeSdkGenerationActionTypes({
        createMobile: { actionType: action, fullLogicRules: [] },
      }),
    ).toEqual({ createMobile: action });
  });

  it("keeps wrapped block-only inputs backwards compatible", () => {
    const block = emptyBlock();

    expect(unwrapSdkGenerationInput({ ontology: block })).toBe(block);
  });

  it("preserves Value Types and generates their literal unions from the SDK input", async () => {
    const randomnessKey = "00000000-0000-0000-0000-000000000000";
    const valueTypeRid = `ri.ontology-metadata.temp.value-type.${
      createHash("sha256")
        .update(`mobility-${randomnessKey}`, "utf8")
        .digest("hex")
    }`;
    const versionId = valueTypeVersionId("1.0.0");
    const ontology = emptyBlock();
    const envelope: OntologyIrV2 = {
      importedOntology: emptyBlock(),
      importedValueTypes: [],
      ontology: {
        ...ontology,
        interfaceTypes: {
          "ri.interface.Mobile": {
            interfaceType: {
              actionTypeConstraints: [],
              apiName: "Mobile",
              displayMetadata: { displayName: "Mobile" },
              extendsInterfaces: [],
              links: [],
              properties: [],
              propertiesV2: {},
              propertiesV3: {
                mobility: {
                  type: "sharedPropertyBasedPropertyType",
                  sharedPropertyBasedPropertyType: {
                    requireImplementation: true,
                    sharedPropertyType: {
                      aliases: [],
                      apiName: "mobility",
                      displayMetadata: {
                        displayName: "Mobility",
                        visibility: "NORMAL",
                      },
                      indexedForSearch: true,
                      rid: "ri.shared-property.mobility",
                      type: {
                        type: "string",
                        string: {
                          isLongText: false,
                          supportsExactMatching: true,
                        },
                      },
                      typeClasses: [],
                      valueType: { rid: valueTypeRid, versionId },
                    },
                  },
                },
              },
              rid: "ri.interface.Mobile",
              status: { type: "active", active: {} },
            },
          },
        },
        knownIdentifiers: {
          ...ontology.knownIdentifiers,
          valueTypes: {
            [valueTypeRid]: { [versionId]: "mobility-value-type" },
          },
        },
      },
      randomnessKey,
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
                      } satisfies StringValueTypeConstraint["string"],
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

    const generated = createInMemoryFiles();
    const generationMetadata = {
      ...metadata,
      actionTypes: normalizeSdkGenerationActionTypes(metadata.actionTypes),
    };
    await generateClientSdkVersionTwoPointZero(
      generationMetadata,
      "generate-sdk/test",
      generated.fs,
      "generated",
      "module",
    );

    expect(
      generated.files.get("generated/ontology/interfaces/Mobile.ts"),
    ).toContain("readonly mobility: 'Moving' | 'Stationary' | undefined;");
  });
});
