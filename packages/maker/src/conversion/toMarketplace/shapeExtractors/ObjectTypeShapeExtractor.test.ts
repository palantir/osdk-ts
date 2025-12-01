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
  ObjectTypeBlockDataV2,
  PropertyTypeRid,
} from "@osdk/client.unstable";
import type {
  DatasourceLocator,
  ResolvedDatasourceColumnShape,
} from "@osdk/client.unstable/api";
import { describe, expect, it } from "vitest";
import type {
  BiMap,
  BlockShapes,
  OntologyRidGenerator,
  ReadableId,
} from "../../../util/generateRid.js";
import { ObjectTypeShapeExtractor } from "./ObjectTypeShapeExtractor.js";

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

  inverse(): BiMap<V, K> {
    return new MockBiMap(Array.from(this.backward.entries()));
  }

  entries(): IterableIterator<[K, V]> {
    return this.forward.entries();
  }
}

describe("ObjectTypeShapeExtractor", () => {
  describe("constructor", () => {
    it("should create extractor without randomness key", () => {
      const extractor = new ObjectTypeShapeExtractor();
      expect(extractor).toBeDefined();
    });

    it("should create extractor with randomness key", () => {
      const extractor = new ObjectTypeShapeExtractor("test-key");
      expect(extractor).toBeDefined();
    });
  });

  describe("extract", () => {
    it("should extract basic object type with properties", () => {
      const objectType: ObjectTypeBlockDataV2 = {
        objectType: {
          apiName: "Employee",
          rid: "ri.ontology.main.object-type.employee",
          id: "employee-id",
          displayMetadata: {
            displayName: "Employee",
            description: "An employee in the organization",
            pluralDisplayName: "Employees",
            visibility: "NORMAL",
            icon: {
              type: "blueprint",
              blueprint: { locator: "person", color: "#2D72D2" },
            },
          },
          primaryKeys: [
            "ri.ontology.main.property-type.employee.id" as PropertyTypeRid,
          ],
          propertyTypes: {
            "ri.ontology.main.property-type.employee.id": {
              rid:
                "ri.ontology.main.property-type.employee.id" as PropertyTypeRid,
              apiName: "id",
              displayMetadata: {
                displayName: "ID",
                description: "Employee ID",
                visibility: "NORMAL",
              },
              type: {
                type: "string",
                string: { isLongText: false, supportsExactMatching: true },
              },
              id: "employee-id-pt-id",
              indexedForSearch: true,
              status: { type: "active", active: {} },
              typeClasses: [],
            },
            "ri.ontology.main.property-type.employee.name": {
              rid:
                "ri.ontology.main.property-type.employee.name" as PropertyTypeRid,
              apiName: "name",
              displayMetadata: {
                displayName: "Name",
                description: "Employee name",
                visibility: "NORMAL",
              },
              type: {
                type: "string",
                string: { isLongText: false, supportsExactMatching: true },
              },
              id: "employee-name-pt-id",
              indexedForSearch: true,
              status: { type: "active", active: {} },
              typeClasses: [],
            },
          },
          titlePropertyTypeRid:
            "ri.ontology.main.property-type.employee.name" as PropertyTypeRid,
          status: { type: "active", active: {} },
          redacted: false,
          implementsInterfaces: [],
          implementsInterfaces2: [],
          allImplementsInterfaces: {},
          traits: { workflowObjectTypeTraits: {} },
          typeGroups: [],
        },
        datasources: [],
        entityMetadata: {
          aliases: [],
          arePatchesEnabled: true,
          diffEdits: false,
          entityConfig: { objectDbTypeConfigs: {} },
          targetStorageBackend: {
            type: "objectStorageV2",
            objectStorageV2: {},
          },
        },
        writebackDatasets: [],
      };

      const ridGenerator: OntologyRidGenerator = {
        getPropertyTypeRids: () =>
          new MockBiMap<PropertyTypeRid, ReadableId>([
            [
              "ri.ontology.main.property-type.employee.id" as PropertyTypeRid,
              "employee.id" as ReadableId,
            ],
            [
              "ri.ontology.main.property-type.employee.name" as PropertyTypeRid,
              "employee.name" as ReadableId,
            ],
          ]),
        getSharedPropertyTypeRids: () => new MockBiMap([]) as any,
        getDatasourceLocators: () => new MockBiMap([]) as any,
        getFilesDatasourceLocators: () => new MockBiMap([]) as any,
        getGeotimeSeriesIntegrationRids: () => new MockBiMap([]) as any,
        getTimeSeriesSyncs: () => new MockBiMap([]) as any,
        getColumnShapes: () => new MockBiMap([]) as any,
        getObjectTypeRids: () => new MockBiMap([]) as any,
        getLinkTypeRids: () => new MockBiMap([]) as any,
        getGroupIds: () => new MockBiMap([]) as any,
        valueTypeMappingForReference: () => ({
          input: "" as ReadableId,
          output: "" as ReadableId,
        }),
        generateRid: function(key: string): string {
          return key;
        },
      };

      const extractor = new ObjectTypeShapeExtractor();
      const result: BlockShapes = extractor.extract(
        "employee" as ReadableId,
        objectType,
        ridGenerator,
      );

      // Should have output shapes for object type
      expect(result.outputShapes.has("employee" as ReadableId)).toBe(true);

      // Output shapes will include object type + any properties that have readable IDs
      expect(result.outputShapes.size).toBeGreaterThanOrEqual(1);

      const objectTypeShape = result.outputShapes.get(
        "employee" as ReadableId,
      );
      expect(objectTypeShape).toBeDefined();
      expect(objectTypeShape?.type).toBe("objectType");
      if (objectTypeShape?.type === "objectType") {
        expect(objectTypeShape.objectType.about.fallbackTitle).toBe("Employee");
        expect(objectTypeShape.objectType.about.fallbackDescription).toBe(
          "An employee in the organization",
        );
        expect(objectTypeShape.objectType.editsSupport).toBe("EDITS_ENABLED");
        expect(objectTypeShape.objectType.objectsBackendVersion).toBe("V2");
      }
    });

    it("should handle object type with dataset datasource", () => {
      const objectType: ObjectTypeBlockDataV2 = {
        objectType: {
          apiName: "Person",
          rid: "ri.ontology.main.object-type.person",
          id: "person-id",
          displayMetadata: {
            displayName: "Person",
            pluralDisplayName: "People",
            visibility: "NORMAL",
            icon: {
              type: "blueprint",
              blueprint: { locator: "person", color: "#2D72D2" },
            },
          },
          primaryKeys: [
            "ri.ontology.main.property-type.person.id" as PropertyTypeRid,
          ],
          propertyTypes: {
            "ri.ontology.main.property-type.person.id": {
              rid:
                "ri.ontology.main.property-type.person.id" as PropertyTypeRid,
              apiName: "id",
              displayMetadata: {
                displayName: "ID",
                visibility: "NORMAL",
              },
              type: {
                type: "string",
                string: { isLongText: false, supportsExactMatching: true },
              },
              id: "person-id-pt-id",
              indexedForSearch: true,
              status: { type: "active", active: {} },
              typeClasses: [],
            },
          },
          titlePropertyTypeRid:
            "ri.ontology.main.property-type.person.id" as PropertyTypeRid,
          status: { type: "active", active: {} },
          redacted: false,
          implementsInterfaces: [],
          implementsInterfaces2: [],
          allImplementsInterfaces: {},
          traits: { workflowObjectTypeTraits: {} },
          typeGroups: [],
        },
        datasources: [
          {
            rid: "ri.foundry.main.datasource.person-dataset" as any,
            datasource: {
              type: "datasetV2",
              datasetV2: {
                datasetRid: "ri.foundry.main.dataset.person",
                branchId: "main",
                propertyMapping: {
                  "ri.ontology.main.property-type.person.id": {
                    type: "column",
                    column: "person_id",
                  },
                },
              },
            },
          },
        ],
        entityMetadata: {
          aliases: [],
          arePatchesEnabled: false,
          diffEdits: false,
          entityConfig: { objectDbTypeConfigs: {} },
          targetStorageBackend: {
            type: "objectStorageV2",
            objectStorageV2: {},
          },
        },
        writebackDatasets: [],
      };

      const datasetLocator: DatasourceLocator = {
        type: "dataset",
        dataset: {
          rid: "ri.foundry.main.dataset.person",
          branch: "main",
        },
      };

      const ridGenerator: OntologyRidGenerator = {
        getPropertyTypeRids: () =>
          new MockBiMap<PropertyTypeRid, string>([
            [
              "ri.ontology.main.property-type.person.id" as PropertyTypeRid,
              "person.id",
            ],
          ]) as any,
        getSharedPropertyTypeRids: () => new MockBiMap([]) as any,
        getDatasourceLocators: () =>
          new MockBiMap<DatasourceLocator, string>([[
            datasetLocator,
            "person-dataset",
          ]]) as any,
        getFilesDatasourceLocators: () => new MockBiMap([]) as any,
        getGeotimeSeriesIntegrationRids: () => new MockBiMap([]) as any,
        getTimeSeriesSyncs: () => new MockBiMap([]) as any,
        getColumnShapes: () =>
          new MockBiMap<ResolvedDatasourceColumnShape, string>([
            [{
              datasource: datasetLocator,
              name: "person_id",
            }, "person-dataset.person_id"],
          ]) as any,
        getObjectTypeRids: () => new MockBiMap([]) as any,
        getLinkTypeRids: () => new MockBiMap([]) as any,
        getGroupIds: () => new MockBiMap([]) as any,
        valueTypeMappingForReference: () => ({
          input: "" as ReadableId,
          output: "" as ReadableId,
        }),
        generateRid: function(key: string): string {
          return key;
        },
      };

      const extractor = new ObjectTypeShapeExtractor();
      const result: BlockShapes = extractor.extract(
        "person" as ReadableId,
        objectType,
        ridGenerator,
      );

      // Should have input shapes for dataset
      expect(result.inputShapes.size).toBeGreaterThan(0);
      expect(result.inputShapes.has("person-dataset" as ReadableId)).toBe(
        true,
      );

      const datasetShape = result.inputShapes.get(
        "person-dataset" as ReadableId,
      );
      expect(datasetShape).toBeDefined();
      expect(datasetShape?.type).toBe("tabularDatasource");
      if (datasetShape?.type === "tabularDatasource") {
        expect(datasetShape.tabularDatasource.supportedTypes).toEqual([
          "DATASET",
        ]);
        expect(datasetShape.tabularDatasource.about.fallbackTitle).toBe(
          "person-dataset",
        );
      }
    });

    it("should handle object type with stream datasource", () => {
      const objectType: ObjectTypeBlockDataV2 = {
        objectType: {
          apiName: "Event",
          rid: "ri.ontology.main.object-type.event",
          id: "event-id",
          displayMetadata: {
            displayName: "Event",
            pluralDisplayName: "Events",
            visibility: "NORMAL",
            icon: {
              type: "blueprint",
              blueprint: { locator: "flash", color: "#2D72D2" },
            },
          },
          primaryKeys: [
            "ri.ontology.main.property-type.event.id" as PropertyTypeRid,
          ],
          propertyTypes: {
            "ri.ontology.main.property-type.event.id": {
              rid: "ri.ontology.main.property-type.event.id" as PropertyTypeRid,
              apiName: "id",
              displayMetadata: {
                displayName: "ID",
                visibility: "NORMAL",
              },
              type: {
                type: "string",
                string: { isLongText: false, supportsExactMatching: true },
              },
              id: "event-id-pt-id",
              indexedForSearch: true,
              status: { type: "active", active: {} },
              typeClasses: [],
            },
          },
          titlePropertyTypeRid:
            "ri.ontology.main.property-type.event.id" as PropertyTypeRid,
          status: { type: "active", active: {} },
          redacted: false,
          implementsInterfaces: [],
          implementsInterfaces2: [],
          allImplementsInterfaces: {},
          traits: { workflowObjectTypeTraits: {} },
          typeGroups: [],
        },
        datasources: [
          {
            rid: "ri.foundry.main.datasource.event-stream" as any,
            datasource: {
              type: "streamV2",
              streamV2: {
                streamLocator: {
                  streamLocatorRid: "ri.foundry.main.stream.event",
                  branchId: "main",
                },
                propertyMapping: {
                  "ri.ontology.main.property-type.event.id": "event_id",
                },
                retentionPolicy: { type: "none", none: {} },
              },
            },
          },
        ],
        entityMetadata: {
          aliases: [],
          arePatchesEnabled: false,
          diffEdits: false,
          entityConfig: { objectDbTypeConfigs: {} },
          targetStorageBackend: {
            type: "objectStorageV2",
            objectStorageV2: {},
          },
        },
        writebackDatasets: [],
      };

      const streamLocator: DatasourceLocator = {
        type: "stream",
        stream: {
          rid: "ri.foundry.main.stream.event",
          branch: "main",
        },
      };

      const ridGenerator: OntologyRidGenerator = {
        getPropertyTypeRids: () =>
          new MockBiMap<PropertyTypeRid, string>([
            [
              "ri.ontology.main.property-type.event.id" as PropertyTypeRid,
              "event.id",
            ],
          ]) as any,
        getSharedPropertyTypeRids: () => new MockBiMap([]) as any,
        getDatasourceLocators: () =>
          new MockBiMap<DatasourceLocator, string>([[
            streamLocator,
            "event-stream",
          ]]) as any,
        getFilesDatasourceLocators: () => new MockBiMap([]) as any,
        getGeotimeSeriesIntegrationRids: () => new MockBiMap([]) as any,
        getTimeSeriesSyncs: () => new MockBiMap([]) as any,
        getColumnShapes: () =>
          new MockBiMap<ResolvedDatasourceColumnShape, string>([
            [{
              datasource: streamLocator,
              name: "event_id",
            }, "event-stream.event_id"],
          ]) as any,
        getObjectTypeRids: () => new MockBiMap([]) as any,
        getLinkTypeRids: () => new MockBiMap([]) as any,
        getGroupIds: () => new MockBiMap([]) as any,
        valueTypeMappingForReference: () => ({
          input: "" as ReadableId,
          output: "" as ReadableId,
        }),
        generateRid: function(key: string): string {
          return key;
        },
      };

      const extractor = new ObjectTypeShapeExtractor();
      const result: BlockShapes = extractor.extract(
        "event" as ReadableId,
        objectType,
        ridGenerator,
      );

      // Should have input shapes for stream
      expect(result.inputShapes.has("event-stream" as ReadableId)).toBe(true);

      const streamShape = result.inputShapes.get(
        "event-stream" as ReadableId,
      );
      expect(streamShape).toBeDefined();
      expect(streamShape?.type).toBe("tabularDatasource");
      if (streamShape?.type === "tabularDatasource") {
        expect(streamShape.tabularDatasource.supportedTypes).toEqual([
          "STREAM",
        ]);
      }
    });

    it("should apply randomness key to block shape IDs", () => {
      const objectType: ObjectTypeBlockDataV2 = {
        objectType: {
          apiName: "Task",
          rid: "ri.ontology.main.object-type.task",
          id: "task-id",
          displayMetadata: {
            displayName: "Task",
            pluralDisplayName: "Tasks",
            visibility: "NORMAL",
            icon: {
              type: "blueprint",
              blueprint: { locator: "document", color: "#2D72D2" },
            },
          },
          primaryKeys: [
            "ri.ontology.main.property-type.task.id" as PropertyTypeRid,
          ],
          propertyTypes: {
            "ri.ontology.main.property-type.task.id": {
              rid: "ri.ontology.main.property-type.task.id" as PropertyTypeRid,
              apiName: "id",
              displayMetadata: {
                displayName: "ID",
                visibility: "NORMAL",
              },
              type: {
                type: "string",
                string: { isLongText: false, supportsExactMatching: true },
              },
              id: "task-id-pt-id",
              indexedForSearch: true,
              status: { type: "active", active: {} },
              typeClasses: [],
            },
          },
          titlePropertyTypeRid:
            "ri.ontology.main.property-type.task.id" as PropertyTypeRid,
          status: { type: "active", active: {} },
          redacted: false,
          implementsInterfaces: [],
          implementsInterfaces2: [],
          allImplementsInterfaces: {},
          traits: { workflowObjectTypeTraits: {} },
          typeGroups: [],
        },
        datasources: [],
        entityMetadata: {
          aliases: [],
          arePatchesEnabled: false,
          diffEdits: false,
          entityConfig: { objectDbTypeConfigs: {} },
          targetStorageBackend: {
            type: "objectStorageV2",
            objectStorageV2: {},
          },
        },
        writebackDatasets: [],
      };

      const ridGenerator: OntologyRidGenerator = {
        getPropertyTypeRids: () =>
          new MockBiMap<PropertyTypeRid, string>([
            [
              "ri.ontology.main.property-type.task.id" as PropertyTypeRid,
              "task.id",
            ],
          ]) as any,
        getSharedPropertyTypeRids: () => new MockBiMap([]) as any,
        getDatasourceLocators: () => new MockBiMap([]) as any,
        getFilesDatasourceLocators: () => new MockBiMap([]) as any,
        getGeotimeSeriesIntegrationRids: () => new MockBiMap([]) as any,
        getTimeSeriesSyncs: () => new MockBiMap([]) as any,
        getColumnShapes: () => new MockBiMap([]) as any,
        getObjectTypeRids: () => new MockBiMap([]) as any,
        getLinkTypeRids: () => new MockBiMap([]) as any,
        getGroupIds: () => new MockBiMap([]) as any,
        valueTypeMappingForReference: () => ({
          input: "" as ReadableId,
          output: "" as ReadableId,
        }),
        generateRid: function(key: string): string {
          return key;
        },
      };

      const extractor = new ObjectTypeShapeExtractor("random123");
      const result: BlockShapes = extractor.extract(
        "task" as ReadableId,
        objectType,
        ridGenerator,
      );

      const taskShape = result.outputShapes.get("task" as ReadableId);
      expect(taskShape).toBeDefined();
      if (taskShape?.type === "objectType") {
        // Property type references should include randomness key if there are properties
        const propertyShape = result.outputShapes.get(
          "task.id" as ReadableId,
        );
        if (propertyShape && propertyShape.type === "property") {
          // Check that the property reference in object type includes randomness key
          const propertyRefs = taskShape.objectType.propertyTypes;
          if (propertyRefs.length > 0) {
            expect(propertyRefs[0]).toContain("task.id");
          }
        }
      }
    });

    it("should handle empty datasources", () => {
      const objectType: ObjectTypeBlockDataV2 = {
        objectType: {
          apiName: "Simple",
          rid: "ri.ontology.main.object-type.simple",
          id: "simple-id",
          displayMetadata: {
            displayName: "Simple",
            pluralDisplayName: "Simples",
            visibility: "NORMAL",
            icon: {
              type: "blueprint",
              blueprint: { locator: "cube", color: "#2D72D2" },
            },
          },
          primaryKeys: [
            "ri.ontology.main.property-type.simple.id" as PropertyTypeRid,
          ],
          propertyTypes: {},
          titlePropertyTypeRid:
            "ri.ontology.main.property-type.simple.id" as PropertyTypeRid,
          status: { type: "active", active: {} },
          redacted: false,
          implementsInterfaces: [],
          implementsInterfaces2: [],
          allImplementsInterfaces: {},
          traits: { workflowObjectTypeTraits: {} },
          typeGroups: [],
        },
        datasources: [],
        entityMetadata: {
          aliases: [],
          arePatchesEnabled: false,
          diffEdits: false,
          entityConfig: { objectDbTypeConfigs: {} },
          targetStorageBackend: {
            type: "objectStorageV2",
            objectStorageV2: {},
          },
        },
        writebackDatasets: [],
      };

      const ridGenerator: OntologyRidGenerator = {
        getPropertyTypeRids: () => new MockBiMap([]) as any,
        getSharedPropertyTypeRids: () => new MockBiMap([]) as any,
        getDatasourceLocators: () => new MockBiMap([]) as any,
        getFilesDatasourceLocators: () => new MockBiMap([]) as any,
        getGeotimeSeriesIntegrationRids: () => new MockBiMap([]) as any,
        getTimeSeriesSyncs: () => new MockBiMap([]) as any,
        getColumnShapes: () => new MockBiMap([]) as any,
        getObjectTypeRids: () => new MockBiMap([]) as any,
        getLinkTypeRids: () => new MockBiMap([]) as any,
        getGroupIds: () => new MockBiMap([]) as any,
        valueTypeMappingForReference: () => ({
          input: "" as ReadableId,
          output: "" as ReadableId,
        }),
        generateRid: function(key: string): string {
          return key;
        },
      };

      const extractor = new ObjectTypeShapeExtractor();
      const result: BlockShapes = extractor.extract(
        "simple" as ReadableId,
        objectType,
        ridGenerator,
      );

      expect(result.outputShapes.size).toBe(1); // Just the object type
      expect(result.inputShapes.size).toBe(0); // No datasources
    });

    it("should handle edits disabled correctly", () => {
      const objectType: ObjectTypeBlockDataV2 = {
        objectType: {
          apiName: "ReadOnly",
          rid: "ri.ontology.main.object-type.readonly",
          id: "readonly-id",
          displayMetadata: {
            displayName: "Read Only",
            pluralDisplayName: "Read Only",
            visibility: "NORMAL",
            icon: {
              type: "blueprint",
              blueprint: { locator: "lock", color: "#2D72D2" },
            },
          },
          primaryKeys: [
            "ri.ontology.main.property-type.readonly.id" as PropertyTypeRid,
          ],
          propertyTypes: {},
          titlePropertyTypeRid:
            "ri.ontology.main.property-type.readonly.id" as PropertyTypeRid,
          status: { type: "active", active: {} },
          redacted: false,
          implementsInterfaces: [],
          implementsInterfaces2: [],
          allImplementsInterfaces: {},
          traits: { workflowObjectTypeTraits: {} },
          typeGroups: [],
        },
        datasources: [],
        entityMetadata: {
          aliases: [],
          arePatchesEnabled: false,
          diffEdits: false,
          entityConfig: { objectDbTypeConfigs: {} },
          targetStorageBackend: {
            type: "objectStorageV2",
            objectStorageV2: {},
          },
        },
        writebackDatasets: [],
      };

      const ridGenerator: OntologyRidGenerator = {
        getPropertyTypeRids: () => new MockBiMap([]) as any,
        getSharedPropertyTypeRids: () => new MockBiMap([]) as any,
        getDatasourceLocators: () => new MockBiMap([]) as any,
        getFilesDatasourceLocators: () => new MockBiMap([]) as any,
        getGeotimeSeriesIntegrationRids: () => new MockBiMap([]) as any,
        getTimeSeriesSyncs: () => new MockBiMap([]) as any,
        getColumnShapes: () => new MockBiMap([]) as any,
        getObjectTypeRids: () => new MockBiMap([]) as any,
        getLinkTypeRids: () => new MockBiMap([]) as any,
        getGroupIds: () => new MockBiMap([]) as any,
        valueTypeMappingForReference: () => ({
          input: "" as ReadableId,
          output: "" as ReadableId,
        }),
        generateRid: function(key: string): string {
          return key;
        },
      };

      const extractor = new ObjectTypeShapeExtractor();
      const result: BlockShapes = extractor.extract(
        "readonly" as ReadableId,
        objectType,
        ridGenerator,
      );

      const objectTypeShape = result.outputShapes.get(
        "readonly" as ReadableId,
      );
      expect(objectTypeShape).toBeDefined();
      if (objectTypeShape?.type === "objectType") {
        expect(objectTypeShape.objectType.editsSupport).toBe("EDITS_DISABLED");
      }
    });
  });
});
