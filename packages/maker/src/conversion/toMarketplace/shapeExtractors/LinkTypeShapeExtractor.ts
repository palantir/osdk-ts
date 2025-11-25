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
  LinkTypeBlockDataV2,
  LinkTypeRid,
  ObjectTypeRid,
} from "@osdk/client.unstable";
import type {
  DatasourceColumnShape,
  DatasourceLocator,
  InputShape,
  LinkTypeIntermediaryShape,
  LinkTypeManyToManyOutputShape,
  LinkTypeOneToManyShape,
  LinkTypeOutputShape,
  LocalizedTitleAndDescription,
  TabularDatasourceInputShape,
  TabularDatasourceType,
  Void,
} from "@osdk/client.unstable/api";
import type {
  BlockShapes,
  OntologyRidGenerator,
} from "./ObjectTypeShapeExtractor.ts";

/**
 * Helper to create LocalizedTitleAndDescription with empty localizations
 */
function createLocalizedAbout(
  fallbackTitle: string,
  fallbackDescription: string = "",
): LocalizedTitleAndDescription {
  return {
    fallbackTitle,
    fallbackDescription,
    localizedTitle: {},
    localizedDescription: {},
  };
}

/**
 * Helper to convert readable ID to block shape ID
 */
function toBlockShapeId(readableId: string, randomnessKey?: string): string {
  return randomnessKey ? `${readableId}-${randomnessKey}` : readableId;
}

/**
 * TypeScript port of Java's LinkTypeShapeExtractor class
 */
export class LinkTypeShapeExtractor {
  private readonly randomnessKey?: string;

  constructor(randomnessKey?: string) {
    this.randomnessKey = randomnessKey;
  }

  /**
   * Extract shapes from a LinkType
   */
  extract(
    linkReadableId: string,
    link: LinkTypeBlockDataV2,
    ridGenerator: OntologyRidGenerator,
  ): BlockShapes {
    const editsEnabled = link.entityMetadata?.arePatchesEnabled ?? false;

    const definition = link.linkType.definition;

    switch (definition.type) {
      case "intermediary":
        return this.extractIntermediary(
          linkReadableId,
          definition.intermediary,
          ridGenerator,
        );
      case "manyToMany":
        return this.extractManyToMany(
          linkReadableId,
          definition.manyToMany,
          ridGenerator,
          link.datasources,
          editsEnabled,
        );
      case "oneToMany":
        return this.extractOneToMany(
          linkReadableId,
          definition.oneToMany,
          ridGenerator,
        );
      default:
        throw new Error(
          `Unknown link definition type: ${(definition as any).type}`,
        );
    }
  }

  /**
   * Extract one-to-many link shape
   */
  private extractOneToMany(
    linkReadableId: string,
    linkDefinition: any,
    ridGenerator: OntologyRidGenerator,
  ): BlockShapes {
    const outputShape: LinkTypeOneToManyShape = {
      about: createLocalizedAbout(
        linkDefinition.oneToManyLinkMetadata.displayMetadata.displayName,
      ),
      objectTypeShapeIdOneSide: this.getObjectTypeShapeId(
        ridGenerator,
        linkDefinition.objectTypeRidOneSide,
      ),
      objectTypeShapeIdManySide: this.getObjectTypeShapeId(
        ridGenerator,
        linkDefinition.objectTypeRidManySide,
      ),
      manyToOneLinkMetadata: createLocalizedAbout(
        linkDefinition.manyToOneLinkMetadata.displayMetadata.displayName,
      ),
      oneToManyLinkMetadata: createLocalizedAbout(
        linkDefinition.oneToManyLinkMetadata.displayMetadata.displayName,
      ),
      cardinalityHint: linkDefinition.cardinalityHint === "ONE_TO_ONE"
        ? "ONE_TO_ONE"
        : "ONE_TO_MANY",
    };

    return {
      inputShapes: new Map(),
      outputShapes: new Map([[linkReadableId, {
        type: "linkType",
        linkType: {
          type: "oneToMany",
          oneToMany: outputShape,
        } as LinkTypeOutputShape,
      }]]),
      inputShapeMetadata: new Map(),
    };
  }

  /**
   * Extract many-to-many link shape
   */
  private extractManyToMany(
    linkReadableId: string,
    linkDefinition: any,
    ridGenerator: OntologyRidGenerator,
    dataSources: any[],
    editsEnabled: boolean,
  ): BlockShapes {
    const linkTypeName =
      linkDefinition.objectTypeAToBLinkMetadata.displayMetadata.displayName;

    const outputShape: LinkTypeManyToManyOutputShape = {
      about: createLocalizedAbout(linkTypeName),
      objectTypeAToBLinkMetadata: createLocalizedAbout(
        linkDefinition.objectTypeAToBLinkMetadata.displayMetadata.displayName,
      ),
      objectTypeBToALinkMetadata: createLocalizedAbout(
        linkDefinition.objectTypeBToALinkMetadata.displayMetadata.displayName,
      ),
      objectTypeShapeIdA: this.getObjectTypeShapeId(
        ridGenerator,
        linkDefinition.objectTypeRidA,
      ),
      objectTypeShapeIdB: this.getObjectTypeShapeId(
        ridGenerator,
        linkDefinition.objectTypeRidB,
      ),
      editsSupport: editsEnabled ? "EDITS_ENABLED" : "EDITS_DISABLED",
      objectsBackendVersion: "V2",
    };

    const datasetShapes = new Map<string, InputShape>();

    for (const datasource of dataSources) {
      const datasourceDefinition = datasource.datasource;
      let datasourceLocator: DatasourceLocator;
      let columns: Set<string>;
      let datasourceType: TabularDatasourceType;

      if (datasourceDefinition.type === "dataset") {
        datasourceLocator = {
          type: "dataset",
          dataset: {
            rid: datasourceDefinition.dataset.datasetRid,
            branch: datasourceDefinition.dataset.branchId,
          },
        };
        columns = new Set([
          ...Object.values(
            datasourceDefinition.dataset.objectTypeAPrimaryKeyMapping,
          ).map(String),
          ...Object.values(
            datasourceDefinition.dataset.objectTypeBPrimaryKeyMapping,
          ).map(String),
        ]);
        datasourceType = "DATASET";
      } else if (datasourceDefinition.type === "stream") {
        datasourceLocator = {
          type: "stream",
          stream: {
            rid: datasourceDefinition.stream.streamLocator.streamLocatorRid,
            branch: datasourceDefinition.stream.streamLocator.branchId,
          },
        };
        columns = new Set([
          ...Object.values(
            datasourceDefinition.stream.objectTypeAPrimaryKeyMapping,
          ).map(String),
          ...Object.values(
            datasourceDefinition.stream.objectTypeBPrimaryKeyMapping,
          ).map(String),
        ]);
        datasourceType = "STREAM";
      } else {
        continue;
      }

      // Find datasource readable ID
      let datasourceReadableId: string | undefined;
      for (
        const [id, loc] of ridGenerator.getDatasourceLocators().inverse()
          .entries()
      ) {
        if (this.datasourceLocatorsMatch(loc, datasourceLocator)) {
          datasourceReadableId = id;
          break;
        }
      }

      if (!datasourceReadableId) continue;

      // Create column shapes
      const columnShapes = this.getColumnInputShapesForManyToManyDatasets(
        ridGenerator,
        columns,
        datasourceLocator,
        datasourceReadableId,
      );

      for (const [id, shape] of columnShapes.entries()) {
        datasetShapes.set(id, shape);
      }

      // Create datasource shape
      const datasourceShape = this.getInputShapeForManyToManyDatasource(
        ridGenerator,
        linkTypeName,
        columns,
        datasourceLocator,
        datasourceType,
      );

      datasetShapes.set(datasourceReadableId, datasourceShape);
    }

    return {
      inputShapes: datasetShapes,
      outputShapes: new Map([[linkReadableId, {
        type: "linkType",
        linkType: {
          type: "manyToMany",
          manyToMany: outputShape,
        } as LinkTypeOutputShape,
      }]]),
      inputShapeMetadata: new Map(),
    };
  }

  /**
   * Extract intermediary link shape
   */
  private extractIntermediary(
    linkReadableId: string,
    linkDefinition: any,
    ridGenerator: OntologyRidGenerator,
  ): BlockShapes {
    const outputShape: LinkTypeIntermediaryShape = {
      about: createLocalizedAbout(
        linkDefinition.objectTypeAToBLinkMetadata.displayMetadata.displayName,
      ),
      objectTypeAToBLinkMetadata: createLocalizedAbout(
        linkDefinition.objectTypeAToBLinkMetadata.displayMetadata.displayName,
      ),
      objectTypeBToALinkMetadata: createLocalizedAbout(
        linkDefinition.objectTypeBToALinkMetadata.displayMetadata.displayName,
      ),
      objectTypeAShapeId: this.getObjectTypeShapeId(
        ridGenerator,
        linkDefinition.objectTypeRidA,
      ),
      objectTypeBShapeId: this.getObjectTypeShapeId(
        ridGenerator,
        linkDefinition.objectTypeRidB,
      ),
      intermediaryObjectTypeShapeId: this.getObjectTypeShapeId(
        ridGenerator,
        linkDefinition.intermediaryObjectTypeRid,
      ),
      aToIntermediaryLinkTypeShapeId: this.getLinkTypeShapeId(
        ridGenerator,
        linkDefinition.aToIntermediaryLinkTypeRid,
      ),
      intermediaryToBLinkTypeShapeId: this.getLinkTypeShapeId(
        ridGenerator,
        linkDefinition.intermediaryToBLinkTypeRid,
      ),
    };

    return {
      inputShapes: new Map(),
      outputShapes: new Map([[linkReadableId, {
        type: "linkType",
        linkType: {
          type: "intermediary",
          intermediary: outputShape,
        } as LinkTypeOutputShape,
      }]]),
      inputShapeMetadata: new Map(),
    };
  }

  /**
   * Get object type shape ID reference
   */
  private getObjectTypeShapeId(
    ridGenerator: OntologyRidGenerator,
    objectTypeRid: ObjectTypeRid,
  ): string {
    for (
      const [id, rid] of ridGenerator.getObjectTypeRids().inverse().entries()
    ) {
      if (rid === objectTypeRid) {
        return toBlockShapeId(id, this.randomnessKey);
      }
    }
    throw new Error(`Object type RID not found: ${objectTypeRid}`);
  }

  /**
   * Get link type shape ID reference
   */
  private getLinkTypeShapeId(
    ridGenerator: OntologyRidGenerator,
    linkTypeRid: LinkTypeRid,
  ): string {
    for (
      const [id, rid] of ridGenerator.getLinkTypeRids().inverse().entries()
    ) {
      if (rid === linkTypeRid) {
        return toBlockShapeId(id, this.randomnessKey);
      }
    }
    throw new Error(`Link type RID not found: ${linkTypeRid}`);
  }

  /**
   * Get input shape for many-to-many datasource
   */
  private getInputShapeForManyToManyDatasource(
    ridGenerator: OntologyRidGenerator,
    linkTypeName: string,
    columns: Set<string>,
    datasourceLocator: DatasourceLocator,
    datasourceType: TabularDatasourceType,
  ): InputShape {
    const columnReferences: string[] = [];

    for (const column of columns) {
      for (
        const [id, shape] of ridGenerator.getColumnShapes().inverse().entries()
      ) {
        if (
          this.datasourceLocatorsMatch(shape.datasource, datasourceLocator)
          && shape.name === column
        ) {
          columnReferences.push(toBlockShapeId(id, this.randomnessKey));
          break;
        }
      }
    }

    const shape: TabularDatasourceInputShape = {
      about: createLocalizedAbout(linkTypeName),
      schema: columnReferences,
      supportedTypes: [datasourceType],
    };

    return {
      type: "tabularDatasource",
      tabularDatasource: shape,
    };
  }

  /**
   * Get column input shapes for many-to-many datasets
   */
  private getColumnInputShapesForManyToManyDatasets(
    ridGenerator: OntologyRidGenerator,
    columns: Set<string>,
    datasourceLocator: DatasourceLocator,
    datasourceReadableId: string,
  ): Map<string, InputShape> {
    const columnShapes = new Map<string, InputShape>();

    for (const column of columns) {
      for (
        const [id, shape] of ridGenerator.getColumnShapes().inverse().entries()
      ) {
        if (
          this.datasourceLocatorsMatch(shape.datasource, datasourceLocator)
          && shape.name === column
        ) {
          const columnShape: DatasourceColumnShape = {
            about: createLocalizedAbout(column),
            type: {
              type: "generic",
              generic: { type: "any", any: {} as Void },
            },
            datasource: toBlockShapeId(
              datasourceReadableId,
              this.randomnessKey,
            ),
            typeclasses: [],
          };

          columnShapes.set(id, {
            type: "datasourceColumn",
            datasourceColumn: columnShape,
          });
          break;
        }
      }
    }

    return columnShapes;
  }

  /**
   * Helper to compare datasource locators
   */
  private datasourceLocatorsMatch(
    a: DatasourceLocator,
    b: DatasourceLocator,
  ): boolean {
    if (a.type !== b.type) return false;

    if (a.type === "dataset" && b.type === "dataset") {
      return a.dataset.rid === b.dataset.rid
        && a.dataset.branch === b.dataset.branch;
    }

    if (a.type === "stream" && b.type === "stream") {
      return a.stream.rid === b.stream.rid
        && a.stream.branch === b.stream.branch;
    }

    if (a.type === "restrictedView" && b.type === "restrictedView") {
      return a.restrictedView.rid === b.restrictedView.rid;
    }

    return false;
  }
}
