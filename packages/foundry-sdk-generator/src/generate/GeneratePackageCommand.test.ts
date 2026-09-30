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

import type { ActionTypeV2 } from "@osdk/foundry.ontologies";
import type { GeneratorError } from "@osdk/generator-converters";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { Arguments } from "yargs";
import { OntologyMetadataResolver } from "../ontologyMetadata/index.js";
import type { OntologyInfo } from "../ontologyMetadata/ontologyMetadataResolver.js";
import { Result } from "../ontologyMetadata/Result.js";
import { generatePackage } from "./betaClient/generatePackage.js";
import {
  GeneratePackageCommand,
  type generatePackageCommandArgs,
} from "./GeneratePackageCommand.js";

vi.mock(
  "./betaClient/generatePackage.js",
  () => ({ generatePackage: vi.fn() }),
);

const action: ActionTypeV2 = {
  apiName: "manageLinks",
  rid: "ri.ontology.main.action-type.manage-links",
  status: "ACTIVE",
  parameters: {},
  operations: [],
};

const ontologyInfo: OntologyInfo = {
  requestedMetadata: {
    ontology: {
      apiName: "test-ontology",
      displayName: "Test Ontology",
      description: "",
      rid: "ri.ontology.main.ontology.test",
    },
    actionTypes: { [action.apiName]: action },
    actionTypesFullMetadata: {
      [action.apiName]: {
        actionType: action,
        fullLogicRules: [{
          type: "createInterfaceLink",
          interfaceTypeApiName: "SourceInterface",
          interfaceLinkTypeApiName: "linkedTarget",
          sourceObject: "source",
          targetObject: "target",
        }],
      },
    },
    objectTypes: {},
    queryTypes: {},
    interfaceTypes: {},
    sharedPropertyTypes: {},
    valueTypes: {},
  },
  externalInterfaces: new Map(),
  externalObjects: new Map(),
  queryVersionReferences: new Map(),
};

const defaultArgs: Arguments<generatePackageCommandArgs> = {
  $0: "foundry-sdk-generator",
  _: ["generatePackage"],
  authToken: "test-token",
  foundryHostname: "https://stack.example.com",
  ontology: "ri.ontology.main.ontology.test",
  packageName: "@example/test-sdk",
  packageVersion: "1.2.3",
  outputDir: "build/test-sdk",
  actionTypes: [action.apiName],
};

describe("GeneratePackageCommand", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.mocked(generatePackage).mockClear();
  });

  it("requests full Action metadata without enabling the raw JSON export", async () => {
    const loadMetadata = vi.spyOn(
      OntologyMetadataResolver.prototype,
      "getWireOntologyDefinition",
    ).mockResolvedValue(
      Result.ok<OntologyInfo, GeneratorError[]>(ontologyInfo),
    );
    vi.spyOn(OntologyMetadataResolver.prototype, "getInfoForPackages")
      .mockResolvedValue(new Map());

    await new GeneratePackageCommand().handler(defaultArgs);

    expect(loadMetadata).toHaveBeenCalledWith(
      defaultArgs.ontology,
      expect.objectContaining({
        actionTypesApiNamesToLoad: [action.apiName],
        includeActionTypeFullMetadata: true,
      }),
      new Map(),
      undefined,
    );
    expect(generatePackage).toHaveBeenCalledWith(
      ontologyInfo,
      expect.objectContaining({ exportOntologyMetadata: false }),
      expect.anything(),
    );
  });

  it("does not request full Action metadata without selected Actions or raw export", async () => {
    const loadMetadata = vi.spyOn(
      OntologyMetadataResolver.prototype,
      "getWireOntologyDefinition",
    ).mockResolvedValue(Result.ok<OntologyInfo, GeneratorError[]>({
      ...ontologyInfo,
      requestedMetadata: {
        ...ontologyInfo.requestedMetadata,
        actionTypes: {},
        actionTypesFullMetadata: {},
      },
    }));
    vi.spyOn(OntologyMetadataResolver.prototype, "getInfoForPackages")
      .mockResolvedValue(new Map());

    await new GeneratePackageCommand().handler({
      ...defaultArgs,
      actionTypes: [],
    });

    expect(loadMetadata).toHaveBeenCalledWith(
      defaultArgs.ontology,
      expect.objectContaining({ includeActionTypeFullMetadata: false }),
      new Map(),
      undefined,
    );
    expect(generatePackage).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ exportOntologyMetadata: false }),
      expect.anything(),
    );
  });

  it("fails before generation if the stack omits full Action metadata", async () => {
    vi.spyOn(OntologyMetadataResolver.prototype, "getWireOntologyDefinition")
      .mockResolvedValue(Result.ok<OntologyInfo, GeneratorError[]>({
        ...ontologyInfo,
        requestedMetadata: {
          ...ontologyInfo.requestedMetadata,
          actionTypesFullMetadata: {},
        },
      }));
    vi.spyOn(OntologyMetadataResolver.prototype, "getInfoForPackages")
      .mockResolvedValue(new Map());
    await expect(new GeneratePackageCommand().handler(defaultArgs))
      .rejects.toMatchObject({
        message:
          "Unable to load full metadata for the following action types. The stack may not support the private-beta full Action metadata endpoint.",
        unsafeParams: { actionTypeApiNames: [action.apiName] },
      });

    expect(generatePackage).not.toHaveBeenCalled();
  });

  it("keeps the raw JSON export as an explicit opt-in", async () => {
    const loadMetadata = vi.spyOn(
      OntologyMetadataResolver.prototype,
      "getWireOntologyDefinition",
    ).mockResolvedValue(
      Result.ok<OntologyInfo, GeneratorError[]>(ontologyInfo),
    );
    vi.spyOn(OntologyMetadataResolver.prototype, "getInfoForPackages")
      .mockResolvedValue(new Map());

    await new GeneratePackageCommand().handler({
      ...defaultArgs,
      experimentalOntologyMetadata: true,
    });

    expect(loadMetadata).toHaveBeenCalledWith(
      defaultArgs.ontology,
      expect.objectContaining({ includeActionTypeFullMetadata: true }),
      new Map(),
      undefined,
    );
    expect(generatePackage).toHaveBeenCalledWith(
      ontologyInfo,
      expect.objectContaining({ exportOntologyMetadata: true }),
      expect.anything(),
    );
  });
});
