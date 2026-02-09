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
  BranchId,
  ColumnName,
  DatasetRid,
  GeotimeSeriesIntegrationRid,
  MediaSetViewLocator,
  ObjectTypeBlockDataV2,
  ObjectTypeDatasource,
  PropertyType,
  PropertyTypeMappingInfo,
  PropertyTypeRid,
  RestrictedViewRid,
  SharedPropertyTypeRid,
  StreamLocatorRid,
  TimeSeriesSyncRid,
  Type,
} from "@osdk/client.unstable";
import type {
  DatasourceColumnShape,
  DatasourceColumnType,
  DatasourceLocator,
  FilesDatasourceInputShape,
  FilesDatasourceLocator,
  GeotimeSeriesIntegrationShape,
  InputShape,
  LocalizedTitleAndDescription,
  ObjectTypeOutputShape,
  PropertyOutputShape,
  ResolvedDatasourceColumnShape,
  RestrictedViewLocator,
  StreamLocator,
  TabularDatasourceInputShape,
  TimeSeriesSyncShape,
  TimeSeriesSyncType,
  Void,
} from "@osdk/client.unstable/api";
import type {
  BiMap,
  BlockShapes,
  OntologyRidGenerator,
  ReadableId,
  ReadableIdGenerator,
} from "../../../util/generateRid.js";
import {
  typeToConcreteDataType,
  typeToMarketplaceBaseType,
  typeToMarketplaceObjectPropertyType,
} from "../typeVisitors.js";

/**
 * Helper to create LocalizedTitleAndDescription with empty localizations
 */
function createLocalizedAbout(
  fallbackTitle: string,
  fallbackDescription: string,
): LocalizedTitleAndDescription {
  return {
    fallbackTitle,
    fallbackDescription,
    localizedTitle: {},
    localizedDescription: {},
  };
}

/**
 * TypeScript port of Java's ObjectTypeShapeExtractor class
 */
export class ObjectTypeShapeExtractor {
  private readonly randomnessKey?: string;

  constructor(randomnessKey?: string) {
    this.randomnessKey = randomnessKey;
  }

  /**
   * Extract shapes from an ObjectType
   */
  extract(
    objectReadableId: ReadableId,
    objectType: ObjectTypeBlockDataV2,
    ridGenerator: OntologyRidGenerator,
  ): BlockShapes {
    // BiMap inverse() returns BiMap<V,K> so we convert to Map<K,V>
    const propertyReadableIdsByRid = ridGenerator.getPropertyTypeRids()
      .inverse();

    const readableIdsForSptRid = ridGenerator.getSharedPropertyTypeRids()
      .inverse();

    // Build property output shapes
    const propertyOutputShapeMap = new Map<ReadableId, PropertyOutputShape>();
    for (
      const [propertyRid, propertyType] of Object.entries(
        objectType.objectType.propertyTypes,
      )
    ) {
      const readableId = propertyReadableIdsByRid.get(
        propertyRid,
      );
      if (readableId) {
        propertyOutputShapeMap.set(
          readableId,
          this.getShapeForProperty(
            objectReadableId,
            propertyType,
            readableIdsForSptRid.asMap(),
            ridGenerator,
          ),
        );
      }
    }

    const datasourcesByReadableId = ridGenerator.getDatasourceLocators()
      .asMap();
    const filesDatasourcesByReadableId = ridGenerator
      .getFilesDatasourceLocators();
    const geotimeSeriesIntegrationRidByReadableId = new Map<
      ReadableId,
      GeotimeSeriesIntegrationRid
    >(
      Array.from(
        ridGenerator.getGeotimeSeriesIntegrationRids().entries(),
      ),
    );
    const timeSeriesSyncRidByReadableId = ridGenerator.getTimeSeriesSyncs();

    const propertyTypes = new Map<PropertyTypeRid, Type>();
    for (
      const [rid, propertyType] of Object.entries(
        objectType.objectType.propertyTypes,
      )
    ) {
      propertyTypes.set(rid as PropertyTypeRid, propertyType.type);
    }

    const columnShapes = ridGenerator.getColumnShapes().asMap();

    // Build object type output shape
    const objectTypeOutputShape: ObjectTypeOutputShape = {
      about: createLocalizedAbout(
        objectType.objectType.displayMetadata.displayName,
        objectType.objectType.displayMetadata.description ?? "",
      ),
      editsSupport: objectType.entityMetadata?.arePatchesEnabled
        ? "EDITS_ENABLED"
        : "EDITS_DISABLED",
      objectsBackendVersion: "V2",
      propertyTypes: Array.from(propertyOutputShapeMap.keys()).map(val => ridGenerator.toBlockInternalId(val)),
    };

    const blockShapes: BlockShapes = {
      inputShapes: new Map(),
      outputShapes: new Map(),
      inputShapeMetadata: new Map(),
    };

    // Add property output shapes
    for (
      const [readableId, propertyShape] of Array.from(
        propertyOutputShapeMap.entries(),
      )
    ) {
      blockShapes.outputShapes.set(readableId, {
        type: "property",
        property: propertyShape,
      });
    }

    // Add object type output shape
    blockShapes.outputShapes.set(objectReadableId, {
      type: "objectType",
      objectType: objectTypeOutputShape,
    });

    // Extract shapes from datasources
    for (const ds of objectType.datasources) {
      const dsShapes = this.getShapesFromDatasource(
        ds,
        datasourcesByReadableId,
        filesDatasourcesByReadableId,
        geotimeSeriesIntegrationRidByReadableId,
        propertyTypes,
        propertyReadableIdsByRid.asMap(),
        propertyOutputShapeMap,
        timeSeriesSyncRidByReadableId,
        columnShapes,
        ridGenerator,
      );
      for (const [id, shape] of Array.from(dsShapes.entries())) {
        blockShapes.inputShapes.set(id, shape);
      }
    }

    // Extract value type input shapes if present
    for (
      const propertyType of Object.values(objectType.objectType.propertyTypes)
    ) {
      this.extractValueTypeInputShapeIfPresent(
        propertyType.valueType,
        propertyType.displayMetadata.displayName,
        propertyType.type,
        blockShapes,
        ridGenerator,
      );
    }

    return blockShapes;
  }

  private getShapeForProperty(
    objectBlockShapeId: ReadableId,
    propertyType: PropertyType,
    readableIdsForSptRid: Map<SharedPropertyTypeRid, ReadableId>,
    ridGenerator: OntologyRidGenerator,
  ): PropertyOutputShape {
    const shape: PropertyOutputShape = {
      about: createLocalizedAbout(
        propertyType.displayMetadata.displayName,
        propertyType.displayMetadata.description ?? "",
      ),
      type: this.convertPropertyTypeToMarketplaceType(propertyType.type),
      objectType: ridGenerator.toBlockInternalId(objectBlockShapeId),
    };

    if (propertyType.sharedPropertyTypeRid) {
      const sptReadableId = readableIdsForSptRid.get(
        propertyType.sharedPropertyTypeRid,
      );
      if (sptReadableId) {
        shape.sharedPropertyType = ridGenerator.toBlockInternalId(sptReadableId);
      }
    }

    return shape;
  }

  private getShapesFromDatasource(
    datasource: ObjectTypeDatasource,
    datasourcesByReadableId: Map<ReadableId, DatasourceLocator>,
    filesDatasourcesByReadableId: BiMap<ReadableId, FilesDatasourceLocator>,
    geotimeSeriesIntegrationRidByReadableId: Map<
      ReadableId,
      GeotimeSeriesIntegrationRid
    >,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyReadableIdsByRid: Map<PropertyTypeRid, ReadableId>,
    propertyOutputShapeMap: Map<ReadableId, PropertyOutputShape>,
    timeSeriesSyncRidByReadableId: BiMap<ReadableId, TimeSeriesSyncRid>,
    columnReadableIds: Map<ReadableId, ResolvedDatasourceColumnShape>,
    ridGenerator: OntologyRidGenerator,
  ): Map<ReadableId, InputShape> {
    const dsDefinition = datasource.datasource;

    switch (dsDefinition.type) {
      case "dataset":
        return new Map(); // Not implemented in original
      case "datasetV2":
        return this.getShapesFromDataset(
          datasourcesByReadableId,
          propertyTypes,
          propertyReadableIdsByRid,
          propertyOutputShapeMap,
          columnReadableIds,
          dsDefinition.datasetV2.datasetRid,
          dsDefinition.datasetV2.branchId,
          dsDefinition.datasetV2.propertyMapping,
          ridGenerator,
        );
      case "datasetV3":
        return this.getShapesFromDataset(
          datasourcesByReadableId,
          propertyTypes,
          propertyReadableIdsByRid,
          propertyOutputShapeMap,
          columnReadableIds,
          dsDefinition.datasetV3.datasetRid,
          dsDefinition.datasetV3.branchId,
          dsDefinition.datasetV3.propertyMapping,
          ridGenerator,
        );
      case "derived":
        return new Map(); // Empty per original
      case "direct":
        return new Map();
      case "editsOnly":
        return new Map();
      case "geotimeSeries":
        return this.getShapesFromGeotimeSeriesIntegration(
          geotimeSeriesIntegrationRidByReadableId,
          dsDefinition.geotimeSeries.geotimeSeriesIntegrationRid,
        );
      case "media":
        return new Map();
      case "mediaSetView":
        return this.getShapesFromMediaSetView(
          filesDatasourcesByReadableId,
          dsDefinition.mediaSetView.mediaSetViewLocator,
        );
      case "restrictedStream":
        return new Map();
      case "restrictedView":
        return new Map();
      case "restrictedViewV2":
        return this.getShapesFromRestrictedView(
          datasourcesByReadableId,
          propertyTypes,
          propertyReadableIdsByRid,
          propertyOutputShapeMap,
          columnReadableIds,
          dsDefinition.restrictedViewV2.restrictedViewRid,
          dsDefinition.restrictedViewV2.propertyMapping,
          ridGenerator,
        );
      case "stream":
        return this.getShapesFromStream(
          datasourcesByReadableId,
          propertyTypes,
          propertyReadableIdsByRid,
          propertyOutputShapeMap,
          columnReadableIds,
          dsDefinition.stream.streamLocator.streamLocatorRid,
          dsDefinition.stream.streamLocator.branchId,
          dsDefinition.stream.propertyMapping,
          ridGenerator,
        );
      case "streamV2":
        return this.getShapesFromStream(
          datasourcesByReadableId,
          propertyTypes,
          propertyReadableIdsByRid,
          propertyOutputShapeMap,
          columnReadableIds,
          dsDefinition.streamV2.streamLocator.streamLocatorRid,
          dsDefinition.streamV2.streamLocator.branchId,
          dsDefinition.streamV2.propertyMapping,
          ridGenerator,
        );
      case "streamV3":
        const mapping = new Map<PropertyTypeRid, ColumnName>();
        for (
          const [rid, info] of Object.entries(
            dsDefinition.streamV3.propertyMapping,
          )
        ) {
          mapping.set(
            rid as PropertyTypeRid,
            this.getColumnNameFromPropertyTypeMappingInfo(info),
          );
        }
        return this.getShapesFromStream(
          datasourcesByReadableId,
          propertyTypes,
          propertyReadableIdsByRid,
          propertyOutputShapeMap,
          columnReadableIds,
          dsDefinition.streamV3.streamLocator.streamLocatorRid,
          dsDefinition.streamV3.streamLocator.branchId,
          mapping,
          ridGenerator,
        );
      case "table":
        return new Map();
      case "timeSeries":
        return this.getShapesFromTimeSeriesSync(
          timeSeriesSyncRidByReadableId,
          propertyTypes,
          dsDefinition.timeSeries.properties,
          dsDefinition.timeSeries.timeSeriesSyncRid,
        );
      default:
        return new Map();
    }
  }

  private getShapesFromGeotimeSeriesIntegration(
    geotimeSeriesIntegrationRidByReadableId: Map<
      ReadableId,
      GeotimeSeriesIntegrationRid
    >,
    geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid,
  ): Map<ReadableId, InputShape> {
    let readableId: ReadableId | undefined;
    for (
      const [id, rid] of geotimeSeriesIntegrationRidByReadableId.entries()
    ) {
      if (rid === geotimeSeriesIntegrationRid) {
        readableId = id;
        break;
      }
    }
    if (!readableId) return new Map();

    const shape: GeotimeSeriesIntegrationShape = {
      about: createLocalizedAbout(readableId, ""),
    };

    return new Map([[readableId, {
      type: "geotimeSeriesIntegration",
      geotimeSeriesIntegration: shape,
    }]]);
  }

  private getShapesFromMediaSetView(
    filesDatasourcesByReadableId: BiMap<ReadableId, FilesDatasourceLocator>,
    mediaSetViewLocator: MediaSetViewLocator, // MediaSetViewLocator from OMS types
  ): Map<ReadableId, InputShape> {
    const filesDatasourceLocator: FilesDatasourceLocator = {
      type: "mediaSet",
      mediaSet: {
        rid: mediaSetViewLocator.mediaSetRid,
        branch: "master", // Matches OntologyMetadataConstants.ONTOLOGY_DATASET_BRANCH_ID
      },
    };

    const readableId: ReadableId | undefined = filesDatasourcesByReadableId
      .inverse().get(filesDatasourceLocator);

    if (!readableId) return new Map();

    const shape: FilesDatasourceInputShape = {
      about: createLocalizedAbout(readableId, ""),
      supportedTypes: [
        {
          type: "mediaSet",
          mediaSet: {
            pathPolicy: { type: "any", any: {} as Void },
            mediaSchema: { type: "any", any: {} as Void },
          },
        },
      ],
    };

    return new Map([[readableId, {
      type: "filesDatasource",
      filesDatasource: shape,
    }]]);
  }

  private getShapesFromTimeSeriesSync(
    timeSeriesSyncRidByReadableId: BiMap<ReadableId, TimeSeriesSyncRid>,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyTypeRids: Array<PropertyTypeRid>,
    timeSeriesSyncRid: TimeSeriesSyncRid,
  ): Map<ReadableId, InputShape> {
    const readableId: ReadableId | undefined = timeSeriesSyncRidByReadableId
      .inverse().get(timeSeriesSyncRid);

    if (!readableId) return new Map();

    const timeSeriesSyncTypes = new Set(
      propertyTypeRids.map(rid => {
        const type = propertyTypes.get(rid);
        return type ? this.getTimeSeriesSyncType(type) : undefined;
      }).filter((t): t is TimeSeriesSyncType => t !== undefined),
    );

    if (timeSeriesSyncTypes.size !== 1) {
      throw new Error("Invalid time series types");
    }

    const syncType = Array.from(timeSeriesSyncTypes)[0];
    const shape: TimeSeriesSyncShape = {
      about: createLocalizedAbout(readableId, ""),
      type: syncType,
    };

    return new Map([[readableId, {
      type: "timeSeriesSync",
      timeSeriesSync: shape,
    }]]);
  }

  private getShapesFromStream<T>(
    datasourcesByReadableId: Map<ReadableId, DatasourceLocator>,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyReadableIdsByRid: Map<PropertyTypeRid, ReadableId>,
    propertyOutputShapeMap: Map<ReadableId, PropertyOutputShape>,
    columnReadableIds: Map<ReadableId, ResolvedDatasourceColumnShape>,
    streamLocatorRid: StreamLocatorRid,
    branchId: BranchId,
    propertyMapping: Map<PropertyTypeRid, T> | Record<string, T>,
    ridGenerator: OntologyRidGenerator,
  ): Map<ReadableId, InputShape> {
    const streamLocator: DatasourceLocator = {
      type: "stream",
      stream: {
        rid: streamLocatorRid,
        branch: branchId,
      } as StreamLocator,
    };

    let datasourceReadableId: ReadableId | undefined;
    for (const [id, loc] of datasourcesByReadableId.entries()) {
      if (
        loc.type === "stream" && loc.stream.rid === streamLocator.stream.rid
      ) {
        datasourceReadableId = id;
        break;
      }
    }
    if (!datasourceReadableId) return new Map();

    const propertyMappingMap = propertyMapping instanceof Map
      ? propertyMapping
      : new Map(Object.entries(propertyMapping) as Array<[PropertyTypeRid, T]>);

    const columnShapes = this.getColumnShapes(
      streamLocator,
      columnReadableIds,
      propertyTypes,
      propertyReadableIdsByRid,
      propertyOutputShapeMap,
      datasourceReadableId,
      propertyMappingMap,
      ridGenerator,
      (val: T) => (typeof val === "string" ? val : (val as any)),
    );

    const datasourceInputShape: TabularDatasourceInputShape = {
      about: createLocalizedAbout(datasourceReadableId, ""),
      supportedTypes: ["STREAM"],
      schema: Array.from(columnShapes.keys()).map(id => ridGenerator.toBlockInternalId(id)),
    };

    const result = new Map<ReadableId, InputShape>([
      [datasourceReadableId, {
        type: "tabularDatasource",
        tabularDatasource: datasourceInputShape,
      }],
    ]);

    for (const [id, colShape] of columnShapes.entries()) {
      result.set(id, { type: "datasourceColumn", datasourceColumn: colShape });
    }

    return result;
  }

  private getShapesFromDataset(
    datasourcesByReadableId: Map<ReadableId, DatasourceLocator>,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyReadableIdsByRid: Map<PropertyTypeRid, ReadableId>,
    propertyOutputShapeMap: Map<ReadableId, PropertyOutputShape>,
    columnReadableIds: Map<ReadableId, ResolvedDatasourceColumnShape>,
    datasetRid: DatasetRid,
    branchId: BranchId,
    propertyMapping: Record<ReadableId, PropertyTypeMappingInfo>,
    ridGenerator: OntologyRidGenerator,
  ): Map<ReadableId, InputShape> {
    const datasourceLocator: DatasourceLocator = {
      type: "dataset",
      dataset: {
        rid: datasetRid,
        branch: branchId,
      },
    };

    let datasourceReadableId: ReadableId | undefined;
    for (const [id, loc] of datasourcesByReadableId.entries()) {
      if (
        loc.type === "dataset"
        && loc.dataset.rid === datasourceLocator.dataset.rid
      ) {
        datasourceReadableId = id;
        break;
      }
    }
    if (!datasourceReadableId) return new Map();

    const propertyMappingMap = new Map(
      Object.entries(propertyMapping) as Array<
        [PropertyTypeRid, PropertyTypeMappingInfo]
      >,
    );

    const columnShapes = this.getColumnShapes(
      datasourceLocator,
      columnReadableIds,
      propertyTypes,
      propertyReadableIdsByRid,
      propertyOutputShapeMap,
      datasourceReadableId,
      propertyMappingMap,
      ridGenerator,
      (val: PropertyTypeMappingInfo) => {
        if (val.type === "column") return val.column;
        if (val.type === "struct") return val.struct.column;
        throw new Error("Error extracting column shapes");
      },
    );

    const datasourceInputShape: TabularDatasourceInputShape = {
      about: createLocalizedAbout(datasourceReadableId, ""),
      supportedTypes: ["DATASET"],
      schema: Array.from(columnShapes.keys()).map(id => ridGenerator.toBlockInternalId(id)),
    };

    const result = new Map<ReadableId, InputShape>([
      [datasourceReadableId, {
        type: "tabularDatasource",
        tabularDatasource: datasourceInputShape,
      }],
    ]);

    for (const [id, colShape] of Array.from(columnShapes.entries())) {
      result.set(id, { type: "datasourceColumn", datasourceColumn: colShape });
    }

    return result;
  }

  private getShapesFromRestrictedView(
    datasourcesByReadableId: Map<ReadableId, DatasourceLocator>,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyReadableIdsByRid: Map<PropertyTypeRid, ReadableId>,
    propertyOutputShapeMap: Map<ReadableId, PropertyOutputShape>,
    columnReadableIds: Map<ReadableId, ResolvedDatasourceColumnShape>,
    restrictedViewRid: RestrictedViewRid,
    propertyMapping: Record<ReadableId, PropertyTypeMappingInfo>,
    ridGenerator: OntologyRidGenerator,
  ): Map<ReadableId, InputShape> {
    const datasourceLocator: DatasourceLocator = {
      type: "restrictedView",
      restrictedView: {
        rid: restrictedViewRid,
      },
    };

    let datasourceReadableId: ReadableId | undefined;
    for (const [id, loc] of datasourcesByReadableId.entries()) {
      if (
        loc.type === "restrictedView"
        && loc.restrictedView.rid === datasourceLocator.restrictedView.rid
      ) {
        datasourceReadableId = id;
        break;
      }
    }
    if (!datasourceReadableId) return new Map();

    const propertyMappingMap = new Map(
      Object.entries(propertyMapping) as Array<
        [PropertyTypeRid, PropertyTypeMappingInfo]
      >,
    );

    const columnShapes = this.getColumnShapes(
      datasourceLocator,
      columnReadableIds,
      propertyTypes,
      propertyReadableIdsByRid,
      propertyOutputShapeMap,
      datasourceReadableId,
      propertyMappingMap,
      ridGenerator,
      (val: PropertyTypeMappingInfo) => {
        if (val.type === "column") return val.column;
        if (val.type === "struct") return val.struct.column;
        throw new Error("Error extracting column shapes");
      },
    );

    const datasourceInputShape: TabularDatasourceInputShape = {
      about: createLocalizedAbout(datasourceReadableId, ""),
      supportedTypes: ["RESTRICTED_VIEW"],
      schema: Array.from(columnShapes.keys()).map(id => ridGenerator.toBlockInternalId(id)),
    };

    const result = new Map<ReadableId, InputShape>([
      [datasourceReadableId, {
        type: "tabularDatasource",
        tabularDatasource: datasourceInputShape,
      }],
    ]);

    for (const [id, colShape] of Array.from(columnShapes.entries())) {
      result.set(id, { type: "datasourceColumn", datasourceColumn: colShape });
    }

    return result;
  }

  private getColumnShapes<T>(
    datasourceLocator: DatasourceLocator,
    columnReadableIds: Map<ReadableId, ResolvedDatasourceColumnShape>,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyReadableIdsByRid: Map<PropertyTypeRid, ReadableId>,
    propertyOutputShapeMap: Map<ReadableId, PropertyOutputShape>,
    datasourceReadableId: ReadableId,
    columns: Map<PropertyTypeRid, T>,
    ridGenerator: OntologyRidGenerator,
    columnNameGetter: (val: T) => string,
  ): Map<ReadableId, DatasourceColumnShape> {
    const result = new Map<ReadableId, DatasourceColumnShape>();

    for (const [propertyTypeRid, value] of Array.from(columns.entries())) {
      const propertyReadableId = propertyReadableIdsByRid.get(propertyTypeRid);
      if (!propertyReadableId) continue;

      const propertyOutputShape = propertyOutputShapeMap.get(
        propertyReadableId,
      );
      if (!propertyOutputShape) continue;

      const resolvedShape: ResolvedDatasourceColumnShape = {
        datasource: datasourceLocator,
        name: columnNameGetter(value),
      };

      let columnReadableId: ReadableId | undefined;
      for (const [id, shape] of columnReadableIds.entries()) {
        if (
          shape.datasource.type === resolvedShape.datasource.type
          && shape.name === resolvedShape.name
        ) {
          columnReadableId = id;
          break;
        }
      }
      if (!columnReadableId) continue;

      const propertyType = propertyTypes.get(propertyTypeRid);
      if (!propertyType) continue;

      const columnShape: DatasourceColumnShape = {
        about: createLocalizedAbout(
          propertyOutputShape.about.fallbackTitle,
          "",
        ),
        type: {
          type: "concrete",
          concrete: this.typeToConcreteDataType(propertyType),
        },
        datasource: ridGenerator.toBlockInternalId(datasourceReadableId),
        typeclasses: [],
      };

      result.set(columnReadableId, columnShape);
    }

    return result;
  }

  private getColumnNameFromPropertyTypeMappingInfo(
    info: PropertyTypeMappingInfo,
  ): ColumnName {
    if (info.type === "column") return info.column;
    if (info.type === "struct") return info.struct.column;
    throw new Error("Edits not supported yet");
  }

  private extractValueTypeInputShapeIfPresent(
    valueTypeReference: any,
    displayName: string,
    type: Type,
    blockShapes: BlockShapes,
    ridGenerator: OntologyRidGenerator,
  ): void {
    if (!valueTypeReference) return;

    const valueTypeInput: InputShape = {
      type: "valueType",
      valueType: {
        about: createLocalizedAbout(`Value Type Input for ${displayName}`, ""),
        baseType: typeToMarketplaceBaseType(type),
      },
    };

    const mappingEntry = ridGenerator.valueTypeMappingForReference(
      valueTypeReference,
    );
    blockShapes.inputShapes.set(mappingEntry.input, valueTypeInput);
  }

  private getTimeSeriesSyncType(type: Type): TimeSeriesSyncType | undefined {
    if (type.type !== "experimentalTimeDependentV1") return undefined;

    const metadata = type.experimentalTimeDependentV1.seriesValueMetadata;
    const isNumeric = metadata.type === "numeric";

    return isNumeric ? "NUMERIC" : "CATEGORICAL";
  }

  private convertPropertyTypeToMarketplaceType(type: Type): any {
    return typeToMarketplaceObjectPropertyType(type);
  }

  private typeToConcreteDataType(type: Type): any {
    return typeToConcreteDataType(type);
  }
}
