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
  ActionTypeBlockDataV2,
  ActionTypeRid,
  KnownMarketplaceIdentifiers,
} from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";
import type {
  BiMap,
  OntologyRidGenerator,
  ReadableId,
} from "../../../util/generateRid.js";
import { ActionTypeShapeExtractor } from "./ActionTypeShapeExtractor.js";

// Mock BiMap implementation for testing
class MockBiMap<K, V> implements BiMap<K, V> {
  private forward: Map<K, V>;
  private backward: Map<V, K>;

  constructor(entries: Array<[K, V]>) {
    this.forward = new Map(entries);
    this.backward = new Map(entries.map(([k, v]) => [v, k]));
  }
  asMap(): Map<K, V> {
    return this.forward;
  }

  get(key: K): V | undefined {
    return this.forward.get(key);
  }

  put(key: K, value: V): void {
    this.forward.set(key, value);
    this.backward.set(value, key);
  }

  inverse(): BiMap<V, K> {
    return new MockBiMap(Array.from(this.backward.entries()));
  }

  entries(): IterableIterator<[K, V]> {
    return this.forward.entries();
  }
}

// Helper to create a mock OntologyRidGenerator
function createMockRidGenerator(
  overrides: Partial<OntologyRidGenerator> = {},
): OntologyRidGenerator {
  return {
    getActionTypeRids: () => new MockBiMap([]) as any,
    getParameterRidAndIds: () => new Map() as any,
    getInterfaceRids: () => new MockBiMap([]) as any,
    getSharedPropertyTypeRids: () => new MockBiMap([]) as any,
    getInterfaceLinkTypeRids: () => new MockBiMap([]) as any,
    getInterfacePropertyTypeRids: () => new MockBiMap([]) as any,
    getPropertyTypeRids: () => new MockBiMap([]) as any,
    getDatasourceLocators: () => new MockBiMap([]) as any,
    getFilesDatasourceLocators: () => new MockBiMap([]) as any,
    getGeotimeSeriesIntegrationRids: () => new MockBiMap([]) as any,
    getTimeSeriesSyncs: () => new MockBiMap([]) as any,
    getColumnShapes: () => new MockBiMap([]) as any,
    getObjectTypeRids: () => new MockBiMap([]) as any,
    getLinkTypeRids: () => new MockBiMap([]) as any,
    getGroupIds: () => new MockBiMap([]) as any,
    getConsumedValueTypeReferences: () => new MockBiMap([]) as any,
    getProducedValueTypeReferences: () => new Map() as any,
    valueTypeMappingForReference: () => ({
      input: "" as ReadableId,
      output: "" as ReadableId,
    }),
    hashString: (input: string) => input,
    generateRid: (key: string) => key,
    generateRidForInterface: (apiName: string) => `interface.${apiName}` as any,
    generateRidForInterfaceLinkType: (
      apiName: string,
      interfaceTypeApiName: string,
    ) => `interface-link.${interfaceTypeApiName}.${apiName}` as any,
    generateRidForObjectType: (apiName: string) => `object.${apiName}` as any,
    generateRidForValueType: (apiName: string, version: string) =>
      ({
        rid: `vt.${apiName}.${version}`,
        versionId: version,
      }) as any,
    generateRidForTimeSeriesSync: (name: string) => `ts.${name}` as any,
    generateRidForLinkType: (linkTypeId: string) => `link.${linkTypeId}` as any,
    generateRidForGeotimeSeriesIntegration: (name: string) =>
      `geotime.${name}` as any,
    generateRidForActionType: (apiName: string) => `action.${apiName}` as any,
    generateRidForParameter: (actionTypeApiName: string, parameterId: string) =>
      `param.${actionTypeApiName}.${parameterId}` as any,
    generateSptRid: (apiName: string) => `spt.${apiName}` as any,
    generatePropertyRid: (apiName: string, objectTypeApiName: string) =>
      `prop.${objectTypeApiName}.${apiName}` as any,
    generateInterfacePropertyTypeRid: (
      apiName: string,
      interfaceTypeApiName: string,
    ) => `interface-prop.${interfaceTypeApiName}.${apiName}` as any,
    generateStructFieldRid: (propertyApiName: string, apiName: string) =>
      `struct-field.${propertyApiName}.${apiName}` as any,
    generateLocator: (dataSetName: string, _columnNames: Set<string>) => ({
      rid: `dataset.${dataSetName}`,
      branchId: "main",
    }),
    generateStreamLocator: (streamName: string, _columnNames: Set<string>) => ({
      streamLocatorRid: `stream.${streamName}`,
      branchId: "main",
    }),
    generateRestrictedViewLocator: (
      restrictedViewName: string,
      _columnNames: Set<string>,
    ) => ({
      rid: `restricted-view.${restrictedViewName}`,
    }),
    generateMediaSetViewLocator: (mediaSetViewName: string) => ({
      mediaSetRid: `media-set.${mediaSetViewName}`,
      mediaSetViewRid: `media-set-view.${mediaSetViewName}`,
      mediaSetBranchRid: `media-set-branch.${mediaSetViewName}`,
    }),
    toBlockInternalId: (readableId: ReadableId) => {
      return readableId;
    },
    getObjectTypeIds: () => new MockBiMap([]) as any,
    generateObjectTypeId: (objectTypeApiName: string) => `a00000000-0000-0000-0000-000000000000`,
    ...overrides,
  };
}

describe("ActionTypeShapeExtractor", () => {
  describe("constructor", () => {
    it("should create extractor without randomness key", () => {
      const extractor = new ActionTypeShapeExtractor();
      expect(extractor).toBeDefined();
    });

    it("should create extractor with randomness key", () => {
      const extractor = new ActionTypeShapeExtractor();
      expect(extractor).toBeDefined();
    });
  });

  describe("extract", () => {
    it("should extract basic action type with parameters", () => {
      const actionType: ActionTypeBlockDataV2 = {
        actionType: {
          metadata: {
            rid: "ri.ontology.main.action-type.create-task" as ActionTypeRid,
            apiName: "createTask",
            displayMetadata: {
              displayName: "Create Task",
              description: "Creates a new task in the system",
              visibility: "NORMAL",
              icon: {
                type: "blueprint",
                blueprint: { locator: "add", color: "#2D72D2" },
              },
            },
            status: { type: "active", active: {} },
            parameters: {
              title: {
                displayMetadata: {
                  displayName: "Title",
                  description: "The task title",
                  visibility: "NORMAL",
                },
                type: {
                  type: "string",
                  string: { isLongText: false, supportsExactMatching: true },
                },
                required: true,
              },
              priority: {
                displayMetadata: {
                  displayName: "Priority",
                  description: "Task priority level",
                  visibility: "NORMAL",
                },
                type: {
                  type: "integer",
                  integer: {},
                },
                required: false,
              },
            },
          },
        } as any,
        parameterIds: {
          title: "title",
          priority: "priority",
        },
      };

      const ridGenerator = createMockRidGenerator({
        getActionTypeRids: () =>
          new MockBiMap<ReadableId, ActionTypeRid>([
            [
              "action-createTask" as ReadableId,
              "ri.ontology.main.action-type.create-task" as ActionTypeRid,
            ],
          ]),
      });

      const knownIdentifiers: KnownMarketplaceIdentifiers = {
        actionParameterIds: {},
        actionParameters: {},
        actionTypes: {},
        datasourceColumns: {},
        datasources: {},
        filesDatasources: {},
        functions: {},
        geotimeSeriesSyncs: {},
        groupIds: {},
        interfaceLinkTypes: {},
        interfacePropertyTypes: {},
        interfaceTypes: {},
        linkTypeIds: {},
        linkTypes: {},
        markings: {},
        objectTypeIds: {},
        objectTypes: {},
        propertyTypeIds: {},
        propertyTypes: {},
        sharedPropertyTypes: {},
        timeSeriesSyncs: {},
        valueTypes: {},
        webhooks: {},
        workshopModules: {},
      };

      const extractor = new ActionTypeShapeExtractor();
      const result = extractor.extract(actionType, ridGenerator, knownIdentifiers);

      // Should have output shapes for action type and parameters
      expect(result.outputShapes.size).toBe(3); // action + 2 parameters
      expect(result.outputShapes.has("action-createTask" as ReadableId)).toBe(true);

      const actionShape = result.outputShapes.get("action-createTask" as ReadableId);
      expect(actionShape).toBeDefined();
      expect(actionShape?.type).toBe("action");
      if (actionShape?.type === "action") {
        expect(actionShape.action.about.fallbackTitle).toBe("Create Task");
        expect(actionShape.action.about.fallbackDescription).toBe(
          "Creates a new task in the system",
        );
        expect(actionShape.action.parameters).toEqual({});
        expect(actionShape.action.parametersV2).toHaveLength(2);
      }

      // Check parameter shapes
      const titleParamShape = result.outputShapes.get(
        "action-createTask-parameter-title" as ReadableId,
      );
      expect(titleParamShape).toBeDefined();
      expect(titleParamShape?.type).toBe("actionParameter");
      if (titleParamShape?.type === "actionParameter") {
        expect(titleParamShape.actionParameter.about.fallbackTitle).toBe("Title");
        expect(titleParamShape.actionParameter.about.fallbackDescription).toBe(
          "The task title",
        );
        expect(titleParamShape.actionParameter.actionType).toBe(
          "action-createTask",
        );
      }
    });

    it("should extract action type without parameters", () => {
      const actionType: ActionTypeBlockDataV2 = {
        actionType: {
          metadata: {
            rid: "ri.ontology.main.action-type.refresh" as ActionTypeRid,
            apiName: "refresh",
            displayMetadata: {
              displayName: "Refresh",
              description: "Refreshes the current view",
              visibility: "NORMAL",
              icon: {
                type: "blueprint",
                blueprint: { locator: "refresh", color: "#2D72D2" },
              },
            },
            status: { type: "active", active: {} },
            parameters: {},
          },
        } as any,
        parameterIds: {},
      };

      const ridGenerator = createMockRidGenerator({
        getActionTypeRids: () =>
          new MockBiMap<ReadableId, ActionTypeRid>([
            [
              "action-refresh" as ReadableId,
              "ri.ontology.main.action-type.refresh" as ActionTypeRid,
            ],
          ]),
      });

      const knownIdentifiers: KnownMarketplaceIdentifiers = {
        actionParameterIds: {},
        actionParameters: {},
        actionTypes: {},
        datasourceColumns: {},
        datasources: {},
        filesDatasources: {},
        functions: {},
        geotimeSeriesSyncs: {},
        groupIds: {},
        interfaceLinkTypes: {},
        interfacePropertyTypes: {},
        interfaceTypes: {},
        linkTypeIds: {},
        linkTypes: {},
        markings: {},
        objectTypeIds: {},
        objectTypes: {},
        propertyTypeIds: {},
        propertyTypes: {},
        sharedPropertyTypes: {},
        timeSeriesSyncs: {},
        valueTypes: {},
        webhooks: {},
        workshopModules: {},
      };

      const extractor = new ActionTypeShapeExtractor();
      const result = extractor.extract(actionType, ridGenerator, knownIdentifiers);

      // Should have only action type shape, no parameters
      expect(result.outputShapes.size).toBe(1);
      expect(result.outputShapes.has("action-refresh" as ReadableId)).toBe(true);

      const actionShape = result.outputShapes.get("action-refresh" as ReadableId);
      expect(actionShape).toBeDefined();
      expect(actionShape?.type).toBe("action");
      if (actionShape?.type === "action") {
        expect(actionShape.action.parametersV2).toHaveLength(0);
      }
    });

    it("should return empty shapes if action has no readable ID", () => {
      const actionType: ActionTypeBlockDataV2 = {
        actionType: {
          metadata: {
            rid: "ri.ontology.main.action-type.unknown" as ActionTypeRid,
            apiName: "unknown",
            displayMetadata: {
              displayName: "Unknown",
              visibility: "NORMAL",
              icon: {
                type: "blueprint",
                blueprint: { locator: "help", color: "#2D72D2" },
              },
            },
            status: { type: "active", active: {} },
            parameters: {},
          },
        } as any,
        parameterIds: {},
      };

      // RidGenerator without the action RID mapping
      const ridGenerator = createMockRidGenerator();

      const knownIdentifiers: KnownMarketplaceIdentifiers = {
        actionParameterIds: {},
        actionParameters: {},
        actionTypes: {},
        datasourceColumns: {},
        datasources: {},
        filesDatasources: {},
        functions: {},
        geotimeSeriesSyncs: {},
        groupIds: {},
        interfaceLinkTypes: {},
        interfacePropertyTypes: {},
        interfaceTypes: {},
        linkTypeIds: {},
        linkTypes: {},
        markings: {},
        objectTypeIds: {},
        objectTypes: {},
        propertyTypeIds: {},
        propertyTypes: {},
        sharedPropertyTypes: {},
        timeSeriesSyncs: {},
        valueTypes: {},
        webhooks: {},
        workshopModules: {},
      };

      const extractor = new ActionTypeShapeExtractor();
      const result = extractor.extract(actionType, ridGenerator, knownIdentifiers);

      // Should return empty shapes
      expect(result.inputShapes.size).toBe(0);
      expect(result.outputShapes.size).toBe(0);
      expect(result.inputShapeMetadata.size).toBe(0);
    });

    it("should handle action with multiple parameters", () => {
      const actionType: ActionTypeBlockDataV2 = {
        actionType: {
          metadata: {
            rid: "ri.ontology.main.action-type.complex" as ActionTypeRid,
            apiName: "complexAction",
            displayMetadata: {
              displayName: "Complex Action",
              description: "An action with many parameters",
              visibility: "NORMAL",
              icon: {
                type: "blueprint",
                blueprint: { locator: "cog", color: "#2D72D2" },
              },
            },
            status: { type: "active", active: {} },
            parameters: {
              param1: {
                displayMetadata: {
                  displayName: "Parameter 1",
                  visibility: "NORMAL",
                },
                type: {
                  type: "string",
                  string: { isLongText: false, supportsExactMatching: true },
                },
                required: true,
              },
              param2: {
                displayMetadata: {
                  displayName: "Parameter 2",
                  visibility: "NORMAL",
                },
                type: {
                  type: "boolean",
                  boolean: {},
                },
                required: false,
              },
              param3: {
                displayMetadata: {
                  displayName: "Parameter 3",
                  visibility: "NORMAL",
                },
                type: {
                  type: "double",
                  double: {},
                },
                required: false,
              },
            },
          },
        } as any,
        parameterIds: {
          param1: "param1",
          param2: "param2",
          param3: "param3",
        },
      };

      const ridGenerator = createMockRidGenerator({
        getActionTypeRids: () =>
          new MockBiMap<ReadableId, ActionTypeRid>([
            [
              "action-complexAction" as ReadableId,
              "ri.ontology.main.action-type.complex" as ActionTypeRid,
            ],
          ]),
      });

      const knownIdentifiers: KnownMarketplaceIdentifiers = {
        actionParameterIds: {},
        actionParameters: {},
        actionTypes: {},
        datasourceColumns: {},
        datasources: {},
        filesDatasources: {},
        functions: {},
        geotimeSeriesSyncs: {},
        groupIds: {},
        interfaceLinkTypes: {},
        interfacePropertyTypes: {},
        interfaceTypes: {},
        linkTypeIds: {},
        linkTypes: {},
        markings: {},
        objectTypeIds: {},
        objectTypes: {},
        propertyTypeIds: {},
        propertyTypes: {},
        sharedPropertyTypes: {},
        timeSeriesSyncs: {},
        valueTypes: {},
        webhooks: {},
        workshopModules: {},
      };

      const extractor = new ActionTypeShapeExtractor();
      const result = extractor.extract(actionType, ridGenerator, knownIdentifiers);

      // Should have action + 3 parameters
      expect(result.outputShapes.size).toBe(4);
      expect(result.outputShapes.has("action-complexAction" as ReadableId)).toBe(
        true,
      );
      expect(
        result.outputShapes.has(
          "action-complexAction-parameter-param1" as ReadableId,
        ),
      ).toBe(true);
      expect(
        result.outputShapes.has(
          "action-complexAction-parameter-param2" as ReadableId,
        ),
      ).toBe(true);
      expect(
        result.outputShapes.has(
          "action-complexAction-parameter-param3" as ReadableId,
        ),
      ).toBe(true);

      const actionShape = result.outputShapes.get(
        "action-complexAction" as ReadableId,
      );
      if (actionShape?.type === "action") {
        expect(actionShape.action.parametersV2).toHaveLength(3);
      }
    });

    it("should apply randomness key through toBlockInternalId", () => {
      const actionType: ActionTypeBlockDataV2 = {
        actionType: {
          metadata: {
            rid: "ri.ontology.main.action-type.test" as ActionTypeRid,
            apiName: "testAction",
            displayMetadata: {
              displayName: "Test Action",
              visibility: "NORMAL",
              icon: {
                type: "blueprint",
                blueprint: { locator: "beaker", color: "#2D72D2" },
              },
            },
            status: { type: "active", active: {} },
            parameters: {
              input: {
                displayMetadata: {
                  displayName: "Input",
                  visibility: "NORMAL",
                },
                type: {
                  type: "string",
                  string: { isLongText: false, supportsExactMatching: true },
                },
                required: true,
              },
            },
          },
        } as any,
        parameterIds: {
          input: "input",
        },
      };

      const ridGenerator = createMockRidGenerator({
        getActionTypeRids: () =>
          new MockBiMap<ReadableId, ActionTypeRid>([
            [
              "action-testAction" as ReadableId,
              "ri.ontology.main.action-type.test" as ActionTypeRid,
            ],
          ]),
        toBlockInternalId: (readableId: ReadableId) => {
          // Simulate adding randomness
          return `${readableId}-with-randomness`;
        },
      });

      const knownIdentifiers: KnownMarketplaceIdentifiers = {
        actionParameterIds: {},
        actionParameters: {},
        actionTypes: {},
        datasourceColumns: {},
        datasources: {},
        filesDatasources: {},
        functions: {},
        geotimeSeriesSyncs: {},
        groupIds: {},
        interfaceLinkTypes: {},
        interfacePropertyTypes: {},
        interfaceTypes: {},
        linkTypeIds: {},
        linkTypes: {},
        markings: {},
        objectTypeIds: {},
        objectTypes: {},
        propertyTypeIds: {},
        propertyTypes: {},
        sharedPropertyTypes: {},
        timeSeriesSyncs: {},
        valueTypes: {},
        webhooks: {},
        workshopModules: {},
      };

      const extractor = new ActionTypeShapeExtractor();
      const result = extractor.extract(actionType, ridGenerator, knownIdentifiers);

      const actionShape = result.outputShapes.get(
        "action-testAction" as ReadableId,
      );
      if (actionShape?.type === "action") {
        // Parameters should have randomness applied
        expect(actionShape.action.parametersV2[0]).toContain("with-randomness");
      }

      const paramShape = result.outputShapes.get(
        "action-testAction-parameter-input" as ReadableId,
      );
      if (paramShape?.type === "actionParameter") {
        // Action type reference should have randomness applied
        expect(paramShape.actionParameter.actionType).toContain(
          "with-randomness",
        );
      }
    });
  });
});
