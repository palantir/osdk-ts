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
  InterfaceTypeBlockDataV2,
  ObjectTypeBlockDataV2,
  OntologyBlockDataV2,
  PropertyType,
} from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";
import { OntologyBlockDataToFullMetadataConverter } from "./OntologyBlockDataToFullMetadataConverter.js";

const interfaceApiName = "com.palantir.ontology.actionItem";
const interfaceRid = "ri.ontology.main.interface-type.action-item";
const parentInterfaceApiName = "com.palantir.ontology.workItem";
const parentInterfaceRid = "ri.ontology.main.interface-type.work-item";
const secondaryParentInterfaceApiName = "com.palantir.ontology.assignable";
const secondaryParentInterfaceRid =
  "ri.ontology.main.interface-type.assignable";
const rootInterfaceApiName = "com.palantir.ontology.entity";
const rootInterfaceRid = "ri.ontology.main.interface-type.entity";
const idInterfacePropertyRid = "ri.ontology.main.interface-property-type.id";
const assigneeInterfacePropertyRid =
  "ri.ontology.main.interface-property-type.assignee";
const titleInterfacePropertyRid =
  "ri.ontology.main.interface-property-type.title";
const statusInterfacePropertyRid =
  "ri.ontology.main.interface-property-type.status";
const statusSharedPropertyRid = "ri.ontology.main.shared-property-type.status";
const objectApiName = "com.palantir.ontology.task";
const objectRid = "ri.ontology.main.object-type.task";

function objectPropertyRid(apiName: string): string {
  return `ri.ontology.main.property-type.${apiName}`;
}

function createProperty(apiName: string): PropertyType {
  return {
    apiName,
    rid: objectPropertyRid(apiName),
    id: apiName,
    displayMetadata: {
      displayName: apiName,
      visibility: "NORMAL",
    },
    indexedForSearch: true,
    status: { type: "active", active: {} },
    type: {
      type: "string",
      string: {
        isLongText: false,
        supportsExactMatching: true,
        supportsEfficientLeadingWildcard: false,
      },
    },
    typeClasses: [],
  };
}

function createInterfaceDefinedProperty(rid: string, apiName: string) {
  return {
    type: "interfaceDefinedPropertyType" as const,
    interfaceDefinedPropertyType: {
      rid,
      apiName,
      displayMetadata: {
        displayName: apiName,
        visibility: "NORMAL" as const,
      },
      type: {
        type: "string" as const,
        string: { isLongText: false, supportsExactMatching: true },
      },
      constraints: {
        requireImplementation: true,
        indexedForSearch: true,
        primaryKeyConstraint: "NO_RESTRICTION" as const,
        typeClasses: [],
      },
    },
  };
}

function createInterfaceBlock(
  apiName: string,
  rid: string,
  propertiesV3: InterfaceTypeBlockDataV2["interfaceType"]["propertiesV3"],
  extendsInterfaces: string[] = [],
): InterfaceTypeBlockDataV2 {
  return {
    interfaceType: {
      apiName,
      rid,
      displayMetadata: { displayName: apiName },
      status: { type: "active", active: {} },
      actionTypeConstraints: [],
      extendsInterfaces,
      links: [],
      properties: [],
      propertiesV2: {},
      propertiesV3,
    },
  };
}

function createInterface(): InterfaceTypeBlockDataV2 {
  return createInterfaceBlock(
    interfaceApiName,
    interfaceRid,
    {
      [titleInterfacePropertyRid]: createInterfaceDefinedProperty(
        titleInterfacePropertyRid,
        "title",
      ),
      [statusInterfacePropertyRid]: {
        type: "sharedPropertyBasedPropertyType",
        sharedPropertyBasedPropertyType: {
          requireImplementation: true,
          sharedPropertyType: {
            rid: statusSharedPropertyRid,
            apiName: "status",
            displayMetadata: {
              displayName: "Status",
              visibility: "NORMAL",
            },
            type: createProperty("unused").type,
            aliases: [],
            indexedForSearch: true,
            typeClasses: [],
          },
        },
      },
    },
  );
}

function createObject(): ObjectTypeBlockDataV2 {
  const id = createProperty("id");
  const taskTitle = createProperty("taskTitle");
  const taskStatus = createProperty("taskStatus");
  return {
    objectType: {
      apiName: objectApiName,
      rid: objectRid,
      id: "task",
      displayMetadata: {
        displayName: "Task",
        pluralDisplayName: "Tasks",
        visibility: "NORMAL",
        icon: {
          type: "blueprint",
          blueprint: { locator: "cube", color: "#2D72D2" },
        },
      },
      status: { type: "active", active: {} },
      primaryKeys: [id.rid],
      titlePropertyTypeRid: taskTitle.rid,
      propertyTypes: {
        [id.rid]: id,
        [taskTitle.rid]: taskTitle,
        [taskStatus.rid]: taskStatus,
      },
      implementsInterfaces: [interfaceRid],
      implementsInterfaces2: [{
        interfaceTypeApiName: interfaceApiName,
        interfaceTypeRid: interfaceRid,
        properties: {},
        propertiesV2: {
          [titleInterfacePropertyRid]: {
            type: "propertyTypeRid",
            propertyTypeRid: taskTitle.rid,
          },
          [statusInterfacePropertyRid]: {
            type: "propertyTypeRid",
            propertyTypeRid: taskStatus.rid,
          },
        },
        links: {},
        linksV2: {},
        actionTypes: {},
      }],
      allImplementsInterfaces: {},
      traits: { workflowObjectTypeTraits: {} },
      typeGroups: [],
    },
    datasources: [],
    writebackDatasets: [],
  };
}

function createBlockData(options: {
  interface?: boolean;
  object?: boolean;
} = {}): OntologyBlockDataV2 {
  const includeInterface = options.interface ?? true;
  const includeObject = options.object ?? true;
  return {
    interfaceTypes: includeInterface
      ? { [interfaceRid]: createInterface() }
      : {},
    objectTypes: includeObject ? { [objectRid]: createObject() } : {},
    actionTypes: {},
    linkTypes: {},
    sharedPropertyTypes: {},
    ruleSets: {},
    blockOutputCompassLocations: {},
    knownIdentifiers: {} as OntologyBlockDataV2["knownIdentifiers"],
  };
}

function createHierarchyBlockData(): OntologyBlockDataV2 {
  const blockData = createBlockData();
  const statusProperty = createInterface().interfaceType.propertiesV3[
    statusInterfacePropertyRid
  ];
  blockData.interfaceTypes = {
    // Descendants intentionally come first to verify hierarchy resolution does
    // not depend on the order of block data entries.
    [interfaceRid]: createInterfaceBlock(
      interfaceApiName,
      interfaceRid,
      {
        [assigneeInterfacePropertyRid]: createInterfaceDefinedProperty(
          assigneeInterfacePropertyRid,
          "assigneeId",
        ),
      },
      [parentInterfaceRid, secondaryParentInterfaceRid],
    ),
    [secondaryParentInterfaceRid]: createInterfaceBlock(
      secondaryParentInterfaceApiName,
      secondaryParentInterfaceRid,
      { [statusInterfacePropertyRid]: statusProperty },
      [rootInterfaceRid],
    ),
    [rootInterfaceRid]: createInterfaceBlock(
      rootInterfaceApiName,
      rootInterfaceRid,
      {
        [idInterfacePropertyRid]: createInterfaceDefinedProperty(
          idInterfacePropertyRid,
          "id",
        ),
      },
    ),
    [parentInterfaceRid]: createInterfaceBlock(
      parentInterfaceApiName,
      parentInterfaceRid,
      {
        [titleInterfacePropertyRid]: createInterfaceDefinedProperty(
          titleInterfacePropertyRid,
          "title",
        ),
      },
      [rootInterfaceRid],
    ),
  };

  const objectType = blockData.objectTypes[objectRid].objectType;
  const assignee = createProperty("taskAssigneeId");
  objectType.propertyTypes[assignee.rid] = assignee;
  objectType.implementsInterfaces2[0].propertiesV2 = {
    [idInterfacePropertyRid]: {
      type: "propertyTypeRid",
      propertyTypeRid: objectPropertyRid("id"),
    },
    [titleInterfacePropertyRid]: {
      type: "propertyTypeRid",
      propertyTypeRid: objectPropertyRid("taskTitle"),
    },
    [statusInterfacePropertyRid]: {
      type: "propertyTypeRid",
      propertyTypeRid: objectPropertyRid("taskStatus"),
    },
    [assigneeInterfacePropertyRid]: {
      type: "propertyTypeRid",
      propertyTypeRid: assignee.rid,
    },
  };
  return blockData;
}

describe(OntologyBlockDataToFullMetadataConverter, () => {
  it("preserves direct interface property implementations", () => {
    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(createBlockData());

    expect(
      result.objectTypes[objectApiName].implementsInterfaces2[interfaceApiName],
    ).toMatchObject({
      propertiesV2: {
        title: {
          type: "localPropertyImplementation",
          propertyApiName: "taskTitle",
        },
        status: {
          type: "localPropertyImplementation",
          propertyApiName: "taskStatus",
        },
      },
    });
    expect(result.objectTypes[objectApiName].implementsInterfaces).toEqual([
      interfaceApiName,
    ]);
    expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
      .toEqual([objectApiName]);
  });

  it("preserves resolved block data interface implementations", () => {
    const blockData = createBlockData();
    const objectType = blockData.objectTypes[objectRid].objectType;
    const implementation = objectType.implementsInterfaces2[0];
    objectType.implementsInterfaces2 = [];
    objectType.allImplementsInterfaces = {
      [interfaceRid]: implementation,
    };

    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(blockData);

    expect(
      result.objectTypes[objectApiName].implementsInterfaces2[interfaceApiName]
        .propertiesV2,
    ).toEqual({
      title: {
        type: "localPropertyImplementation",
        propertyApiName: "taskTitle",
      },
      status: {
        type: "localPropertyImplementation",
        propertyApiName: "taskStatus",
      },
    });
  });

  it("uses interface property RIDs for resolved shared properties", () => {
    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(createBlockData());
    const interfaceType = result.interfaceTypes[interfaceApiName];

    expect(interfaceType.propertiesV2.status.rid).toBe(statusSharedPropertyRid);
    expect(interfaceType.allPropertiesV2.status.rid).toBe(
      statusInterfacePropertyRid,
    );
  });

  it("expands object implementations through an interface hierarchy", () => {
    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(createHierarchyBlockData());
    const objectType = result.objectTypes[objectApiName];

    expect(objectType.implementsInterfaces).toHaveLength(4);
    expect(objectType.implementsInterfaces).toEqual(expect.arrayContaining([
      interfaceApiName,
      parentInterfaceApiName,
      secondaryParentInterfaceApiName,
      rootInterfaceApiName,
    ]));
    expect(
      objectType.implementsInterfaces2[interfaceApiName].propertiesV2,
    ).toEqual({
      id: { type: "localPropertyImplementation", propertyApiName: "id" },
      title: {
        type: "localPropertyImplementation",
        propertyApiName: "taskTitle",
      },
      status: {
        type: "localPropertyImplementation",
        propertyApiName: "taskStatus",
      },
      assigneeId: {
        type: "localPropertyImplementation",
        propertyApiName: "taskAssigneeId",
      },
    });
    expect(
      objectType.implementsInterfaces2[parentInterfaceApiName].propertiesV2,
    ).toEqual({
      id: { type: "localPropertyImplementation", propertyApiName: "id" },
      title: {
        type: "localPropertyImplementation",
        propertyApiName: "taskTitle",
      },
    });
    expect(
      objectType.implementsInterfaces2[secondaryParentInterfaceApiName]
        .propertiesV2,
    ).toEqual({
      id: { type: "localPropertyImplementation", propertyApiName: "id" },
      status: {
        type: "localPropertyImplementation",
        propertyApiName: "taskStatus",
      },
    });
    expect(
      objectType.implementsInterfaces2[rootInterfaceApiName].propertiesV2,
    ).toEqual({
      id: { type: "localPropertyImplementation", propertyApiName: "id" },
    });

    for (
      const apiName of [
        interfaceApiName,
        parentInterfaceApiName,
        secondaryParentInterfaceApiName,
        rootInterfaceApiName,
      ]
    ) {
      expect(result.interfaceTypes[apiName].implementedByObjectTypes).toEqual([
        objectApiName,
      ]);
    }
  });

  it.each(["transitive block data", "imported metadata"] as const)(
    "resolves mappings from %s",
    source => {
      const localBlockData = createBlockData({ interface: false });
      const interfaceBlockData = createBlockData({ object: false });
      const importedTypes = source === "imported metadata"
        ? OntologyBlockDataToFullMetadataConverter
          .getFullMetadataFromBlockData(interfaceBlockData)
        : undefined;
      const transitiveBlockData = source === "transitive block data"
        ? interfaceBlockData
        : undefined;

      const result = OntologyBlockDataToFullMetadataConverter
        .getFullMetadataFromBlockData(
          localBlockData,
          importedTypes,
          transitiveBlockData,
        );

      expect(
        result.objectTypes[objectApiName]
          .implementsInterfaces2[interfaceApiName]
          .propertiesV2,
      ).toEqual({
        title: {
          type: "localPropertyImplementation",
          propertyApiName: "taskTitle",
        },
        status: {
          type: "localPropertyImplementation",
          propertyApiName: "taskStatus",
        },
      });
      expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
        .toEqual([objectApiName]);
    },
  );

  it("does not mutate imported interface metadata", () => {
    const importedTypes = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(createBlockData());
    const importedInterface = importedTypes.interfaceTypes[interfaceApiName];
    const originalImportedTypes = structuredClone(importedTypes);

    const result = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(
        createBlockData({ interface: false, object: false }),
        importedTypes,
      );

    expect(importedTypes).toEqual(originalImportedTypes);
    expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
      .toEqual([objectApiName]);
    expect(result.interfaceTypes[interfaceApiName]).not.toBe(importedInterface);
    expect(result.interfaceTypes[interfaceApiName].implementedByObjectTypes)
      .not.toBe(importedInterface.implementedByObjectTypes);
  });
});
