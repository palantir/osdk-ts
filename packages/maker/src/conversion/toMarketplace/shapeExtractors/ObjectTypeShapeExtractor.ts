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
  GroupId,
  LinkTypeRid,
  ObjectTypeBlockDataV2,
  ObjectTypeDatasource,
  ObjectTypeRid,
  PropertyType,
  PropertyTypeMappingInfo,
  PropertyTypeRid,
  RestrictedViewRid,
  SharedPropertyTypeRid,
  StreamLocatorRid,
  TimeSeriesSyncRid,
  Type,
  ValueTypeReference,
} from "@osdk/client.unstable";
import type {
  DatasourceColumnShape,
  DatasourceColumnType,
  DatasourceLocator,
  FilesDatasourceInputShape,
  FilesDatasourceInputType,
  FilesDatasourceLocator,
  GeotimeSeriesIntegrationShape,
  InputShape,
  InputShapeMetadata,
  LocalizedTitleAndDescription,
  MediaSetDatasourceType,
  MediaSetLocator,
  ObjectTypeOutputShape,
  OutputShape,
  PropertyOutputShape,
  ResolvedDatasourceColumnShape,
  RestrictedViewLocator,
  StreamLocator,
  TabularDatasourceInputShape,
  TimeSeriesSyncShape,
  TimeSeriesSyncType,
  Void,
} from "@osdk/client.unstable/api";

/**
 * Placeholder interface for OntologyRidGenerator
 * This should be filled in with actual implementation
 */
export interface OntologyRidGenerator {
  getPropertyTypeRids(): BiMap<PropertyTypeRid, string>;
  getSharedPropertyTypeRids(): BiMap<SharedPropertyTypeRid, string>;
  getDatasourceLocators(): BiMap<DatasourceLocator, string>;
  getFilesDatasourceLocators(): BiMap<FilesDatasourceLocator, string>;
  getGeotimeSeriesIntegrationRids(): BiMap<GeotimeSeriesIntegrationRid, string>;
  getTimeSeriesSyncs(): BiMap<TimeSeriesSyncRid, string>;
  getColumnShapes(): BiMap<ResolvedDatasourceColumnShape, string>;
  getObjectTypeRids(): BiMap<ObjectTypeRid, string>;
  getLinkTypeRids(): BiMap<LinkTypeRid, string>;
  getGroupIds(): BiMap<GroupId, string>;
  valueTypeMappingForReference(valueTypeReference: ValueTypeReference): {
    input: string;
    output: string;
  };
}

/**
 * Simple BiMap interface (placeholder)
 */
interface BiMap<K, V> {
  get(key: K): V | undefined;
  inverse(): BiMap<V, K>;
  entries(): IterableIterator<[K, V]>;
}

/**
 * BlockShapes container for input and output shapes
 */
export interface BlockShapes {
  inputShapes: Map<string, InputShape>;
  outputShapes: Map<string, OutputShape>;
  inputShapeMetadata: Map<string, InputShapeMetadata>;
}

/**
 * Helper to convert readable ID to block shape ID
 */
function toBlockShapeId(readableId: string, randomnessKey?: string): string {
  // Placeholder implementation - should match Java's ReadableId.toBlockShapeId logic
  return randomnessKey ? `${readableId}-${randomnessKey}` : readableId;
}

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
    objectReadableId: string,
    objectType: ObjectTypeBlockDataV2,
    ridGenerator: OntologyRidGenerator,
  ): BlockShapes {
    // BiMap inverse() returns BiMap<V,K> so we convert to Map<K,V>
    const propertyReadableIdsByRid = new Map<PropertyTypeRid, string>(
      Array.from(ridGenerator.getPropertyTypeRids().inverse().entries()),
    );

    const readableIdsForSptRid = new Map<SharedPropertyTypeRid, string>(
      Array.from(ridGenerator.getSharedPropertyTypeRids().inverse().entries()),
    );

    // Build property output shapes
    const propertyOutputShapeMap = new Map<string, PropertyOutputShape>();
    for (
      const [propertyRid, propertyType] of Object.entries(
        objectType.objectType.propertyTypes,
      )
    ) {
      const readableId = propertyReadableIdsByRid.get(
        propertyRid as PropertyTypeRid,
      );
      if (readableId) {
        propertyOutputShapeMap.set(
          readableId,
          this.getShapeForProperty(
            objectReadableId,
            propertyType,
            readableIdsForSptRid,
          ),
        );
      }
    }

    const datasourcesByReadableId = new Map<string, DatasourceLocator>(
      Array.from(ridGenerator.getDatasourceLocators().inverse().entries()),
    );
    const filesDatasourcesByReadableId = new Map<
      string,
      FilesDatasourceLocator
    >(
      Array.from(ridGenerator.getFilesDatasourceLocators().inverse().entries()),
    );
    const geotimeSeriesIntegrationRidByReadableId = new Map<
      string,
      GeotimeSeriesIntegrationRid
    >(
      Array.from(
        ridGenerator.getGeotimeSeriesIntegrationRids().inverse().entries(),
      ),
    );
    const timeSeriesSyncRidByReadableId = new Map<string, TimeSeriesSyncRid>(
      Array.from(ridGenerator.getTimeSeriesSyncs().inverse().entries()),
    );

    const propertyTypes = new Map<PropertyTypeRid, Type>();
    for (
      const [rid, propertyType] of Object.entries(
        objectType.objectType.propertyTypes,
      )
    ) {
      propertyTypes.set(rid as PropertyTypeRid, propertyType.type);
    }

    const columnShapes = new Map<string, ResolvedDatasourceColumnShape>(
      Array.from(ridGenerator.getColumnShapes().inverse().entries()),
    );

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
      propertyTypes: Array.from(propertyOutputShapeMap.keys()).map(id =>
        toBlockShapeId(id, this.randomnessKey)
      ),
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
        propertyReadableIdsByRid,
        propertyOutputShapeMap,
        timeSeriesSyncRidByReadableId,
        columnShapes,
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
    objectReadableId: string,
    propertyType: PropertyType,
    readableIdsForSptRid: Map<SharedPropertyTypeRid, string>,
  ): PropertyOutputShape {
    const shape: PropertyOutputShape = {
      about: createLocalizedAbout(
        propertyType.displayMetadata.displayName,
        propertyType.displayMetadata.description ?? "",
      ),
      type: this.convertPropertyTypeToMarketplaceType(propertyType.type),
      objectType: toBlockShapeId(objectReadableId, this.randomnessKey),
    };

    if (propertyType.sharedPropertyTypeRid) {
      const sptReadableId = readableIdsForSptRid.get(
        propertyType.sharedPropertyTypeRid,
      );
      if (sptReadableId) {
        shape.sharedPropertyType = toBlockShapeId(
          sptReadableId,
          this.randomnessKey,
        );
      }
    }

    return shape;
  }

  private getShapesFromDatasource(
    datasource: ObjectTypeDatasource,
    datasourcesByReadableId: Map<string, DatasourceLocator>,
    filesDatasourcesByReadableId: Map<string, FilesDatasourceLocator>,
    geotimeSeriesIntegrationRidByReadableId: Map<
      string,
      GeotimeSeriesIntegrationRid
    >,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyReadableIdsByRid: Map<PropertyTypeRid, string>,
    propertyOutputShapeMap: Map<string, PropertyOutputShape>,
    timeSeriesSyncRidByReadableId: Map<string, TimeSeriesSyncRid>,
    columnReadableIds: Map<string, ResolvedDatasourceColumnShape>,
  ): Map<string, InputShape> {
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
      string,
      GeotimeSeriesIntegrationRid
    >,
    geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid,
  ): Map<string, InputShape> {
    let readableId: string | undefined;
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
    filesDatasourcesByReadableId: Map<string, FilesDatasourceLocator>,
    mediaSetViewLocator: any, // MediaSetViewLocator from OMS types
  ): Map<string, InputShape> {
    const filesDatasourceLocator: FilesDatasourceLocator = {
      type: "mediaSet",
      mediaSet: {
        rid: mediaSetViewLocator.mediaSetRid,
        branch: "master", // Matches OntologyMetadataConstants.ONTOLOGY_DATASET_BRANCH_ID
      } as MediaSetLocator,
    };

    let readableId: string | undefined;
    for (const [id, loc] of filesDatasourcesByReadableId.entries()) {
      if (
        loc.type === "mediaSet" && loc.mediaSet.rid
          === filesDatasourceLocator.mediaSet.rid
      ) {
        readableId = id;
        break;
      }
    }
    if (!readableId) return new Map();

    const shape: FilesDatasourceInputShape = {
      about: createLocalizedAbout(readableId, ""),
      supportedTypes: [
        {
          type: "mediaSet",
          mediaSet: {
            pathPolicy: { type: "any", any: {} as Void },
            mediaSchema: { type: "any", any: {} as Void },
          } as MediaSetDatasourceType,
        } as FilesDatasourceInputType,
      ],
    };

    return new Map([[readableId, {
      type: "filesDatasource",
      filesDatasource: shape,
    }]]);
  }

  private getShapesFromTimeSeriesSync(
    timeSeriesSyncRidByReadableId: Map<string, TimeSeriesSyncRid>,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyTypeRids: Array<PropertyTypeRid>,
    timeSeriesSyncRid: TimeSeriesSyncRid,
  ): Map<string, InputShape> {
    let readableId: string | undefined;
    for (const [id, rid] of timeSeriesSyncRidByReadableId.entries()) {
      if (rid === timeSeriesSyncRid) {
        readableId = id;
        break;
      }
    }
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
    datasourcesByReadableId: Map<string, DatasourceLocator>,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyReadableIdsByRid: Map<PropertyTypeRid, string>,
    propertyOutputShapeMap: Map<string, PropertyOutputShape>,
    columnReadableIds: Map<string, ResolvedDatasourceColumnShape>,
    streamLocatorRid: StreamLocatorRid,
    branchId: BranchId,
    propertyMapping: Map<PropertyTypeRid, T> | Record<string, T>,
  ): Map<string, InputShape> {
    const streamLocator: DatasourceLocator = {
      type: "stream",
      stream: {
        rid: streamLocatorRid,
        branch: branchId,
      } as StreamLocator,
    };

    let datasourceReadableId: string | undefined;
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
      (val: T) => (typeof val === "string" ? val : (val as any)),
    );

    const datasourceInputShape: TabularDatasourceInputShape = {
      about: createLocalizedAbout(datasourceReadableId, ""),
      supportedTypes: ["STREAM"],
      schema: Array.from(columnShapes.keys()).map(columnId =>
        toBlockShapeId(columnId, this.randomnessKey)
      ),
    };

    const result = new Map<string, InputShape>([
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
    datasourcesByReadableId: Map<string, DatasourceLocator>,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyReadableIdsByRid: Map<PropertyTypeRid, string>,
    propertyOutputShapeMap: Map<string, PropertyOutputShape>,
    columnReadableIds: Map<string, ResolvedDatasourceColumnShape>,
    datasetRid: DatasetRid,
    branchId: BranchId,
    propertyMapping: Record<string, PropertyTypeMappingInfo>,
  ): Map<string, InputShape> {
    const datasourceLocator: DatasourceLocator = {
      type: "dataset",
      dataset: {
        rid: datasetRid,
        branch: branchId,
      },
    };

    let datasourceReadableId: string | undefined;
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
      (val: PropertyTypeMappingInfo) => {
        if (val.type === "column") return val.column;
        if (val.type === "struct") return val.struct.column;
        throw new Error("Error extracting column shapes");
      },
    );

    const datasourceInputShape: TabularDatasourceInputShape = {
      about: createLocalizedAbout(datasourceReadableId, ""),
      supportedTypes: ["DATASET"],
      schema: Array.from(columnShapes.keys()).map(columnId =>
        toBlockShapeId(columnId, this.randomnessKey)
      ),
    };

    const result = new Map<string, InputShape>([
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
    datasourcesByReadableId: Map<string, DatasourceLocator>,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyReadableIdsByRid: Map<PropertyTypeRid, string>,
    propertyOutputShapeMap: Map<string, PropertyOutputShape>,
    columnReadableIds: Map<string, ResolvedDatasourceColumnShape>,
    restrictedViewRid: RestrictedViewRid,
    propertyMapping: Record<string, PropertyTypeMappingInfo>,
  ): Map<string, InputShape> {
    const datasourceLocator: DatasourceLocator = {
      type: "restrictedView",
      restrictedView: {
        rid: restrictedViewRid,
      } as RestrictedViewLocator,
    };

    let datasourceReadableId: string | undefined;
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
      (val: PropertyTypeMappingInfo) => {
        if (val.type === "column") return val.column;
        if (val.type === "struct") return val.struct.column;
        throw new Error("Error extracting column shapes");
      },
    );

    const datasourceInputShape: TabularDatasourceInputShape = {
      about: createLocalizedAbout(datasourceReadableId, ""),
      supportedTypes: ["RESTRICTED_VIEW"],
      schema: Array.from(columnShapes.keys()).map(columnId =>
        toBlockShapeId(columnId, this.randomnessKey)
      ),
    };

    const result = new Map<string, InputShape>([
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
    columnReadableIds: Map<string, ResolvedDatasourceColumnShape>,
    propertyTypes: Map<PropertyTypeRid, Type>,
    propertyReadableIdsByRid: Map<PropertyTypeRid, string>,
    propertyOutputShapeMap: Map<string, PropertyOutputShape>,
    datasourceReadableId: string,
    columns: Map<PropertyTypeRid, T>,
    columnNameGetter: (val: T) => string,
  ): Map<string, DatasourceColumnShape> {
    const result = new Map<string, DatasourceColumnShape>();

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

      let columnReadableId: string | undefined;
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
        } as DatasourceColumnType,
        datasource: toBlockShapeId(datasourceReadableId, this.randomnessKey),
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
    // Placeholder - implement value type extraction
    // This would call IrShapeExtractor.extractValueTypeInputShapeIfPresent equivalent
  }

  private getTimeSeriesSyncType(type: Type): TimeSeriesSyncType | undefined {
    if (type.type !== "experimentalTimeDependentV1") return undefined;

    const metadata = type.experimentalTimeDependentV1.seriesValueMetadata;
    const isNumeric = metadata.type === "numeric";

    return isNumeric ? "NUMERIC" : "CATEGORICAL";
  }

  private convertPropertyTypeToMarketplaceType(type: Type): any {
    // Placeholder - should convert Type to ObjectPropertyType
    // This would use TypeToMarketplaceShapeObjectPropertyTypeVisitor equivalent
    return {};
  }

  private typeToConcreteDataType(type: Type): any {
    // Placeholder - should convert Type to ConcreteDataType
    // This would use TypeToConcreteDataTypeVisitor equivalent
    return {};
  }
}
