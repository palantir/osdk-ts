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

import type { ValueTypeReference } from "@osdk/client.unstable";
import type {
  ActionTypeRid,
  DatasourceLocator,
  FilesDatasourceLocator,
  GeotimeSeriesIntegrationRid,
  GroupId,
  InputShape,
  InputShapeMetadata,
  InterfaceLinkTypeRid,
  InterfacePropertyTypeRid,
  InterfaceTypeRid,
  LinkTypeRid,
  ObjectTypeRid,
  OutputShape,
  PropertyTypeRid,
  ResolvedDatasourceColumnShape,
  SharedPropertyTypeRid,
  StructFieldRid,
  TimeSeriesSyncRid,
} from "@osdk/client.unstable/api";
// ParameterRid is defined in ontology-metadata but may not be re-exported through the main API
type ParameterRid = string;
import { createHash, randomUUID } from "crypto";
import { toBlockShapeId } from "../cli/marketplaceSerialization/CodeBlockSpec.js";

// Given a unique key generates a rid deterministically (from a lock file eventually)
export type ReadableId = string & { __brand: "ReadableId" };

/**
 * Placeholder interface for OntologyRidGenerator
 * This should be filled in with actual implementation
 */
// Types for datasource locators
export interface DatasetDatasourceLocator {
  rid: string;
  branchId: string;
}

export interface StreamLocator {
  streamLocatorRid: string;
  branchId: string;
}

export interface RestrictedViewLocator {
  rid: string;
}

export interface MediaSetViewLocator {
  mediaSetRid: string;
  mediaSetViewRid: string;
  mediaSetBranchRid: string;
}

export interface OntologyRidGenerator {
  getActionTypeRids(): BiMap<ReadableId, ActionTypeRid>;
  getParameterRidAndIds(): Map<string, BiMap<ReadableId, ParameterRidAndId>>;
  getInterfaceRids(): BiMap<ReadableId, InterfaceTypeRid>;
  getSharedPropertyTypeRids(): BiMap<ReadableId, SharedPropertyTypeRid>;
  getInterfaceLinkTypeRids(): BiMap<ReadableId, InterfaceLinkTypeRid>;
  getInterfacePropertyTypeRids(): BiMap<ReadableId, InterfacePropertyTypeRid>;
  getPropertyTypeRids(): BiMap<ReadableId, PropertyTypeRid>;
  getDatasourceLocators(): BiMap<ReadableId, DatasourceLocator>;
  getFilesDatasourceLocators(): BiMap<ReadableId, FilesDatasourceLocator>;
  getGeotimeSeriesIntegrationRids(): BiMap<
    ReadableId,
    GeotimeSeriesIntegrationRid
  >;
  getTimeSeriesSyncs(): BiMap<ReadableId, TimeSeriesSyncRid>;
  getColumnShapes(): BiMap<ReadableId, ResolvedDatasourceColumnShape>;
  getObjectTypeRids(): BiMap<ReadableId, ObjectTypeRid>;
  getLinkTypeRids(): BiMap<ReadableId, LinkTypeRid>;
  getGroupIds(): BiMap<ReadableId, GroupId>;
  getConsumedValueTypeReferences(): BiMap<ReadableId, ValueTypeReference>;
  getProducedValueTypeReferences(): Map<ValueTypeReference, ReadableId>;
  valueTypeMappingForReference(valueTypeReference: ValueTypeReference): {
    input: ReadableId;
    output: ReadableId;
  };
  hashString(input: string): string;
  // Generic RID generation for types without specific generators (datasources, sections, etc.)
  generateRid(key: string): string;
  generateRidForInterface(apiName: string): InterfaceTypeRid;
  generateRidForInterfaceLinkType(
    apiName: string,
    interfaceTypeApiName: string,
  ): InterfaceLinkTypeRid;
  generateRidForObjectType(apiName: string): ObjectTypeRid;
  generateRidForValueType(apiName: string, version: string): ValueTypeReference;
  generateRidForTimeSeriesSync(name: string): TimeSeriesSyncRid;
  generateRidForLinkType(linkTypeId: string): LinkTypeRid;
  generateRidForGeotimeSeriesIntegration(
    name: string,
  ): GeotimeSeriesIntegrationRid;
  generateRidForActionType(apiName: string): ActionTypeRid;
  generateRidForParameter(
    actionTypeApiName: string,
    parameterId: string,
  ): ParameterRid;
  generateSptRid(apiName: string): SharedPropertyTypeRid;
  generatePropertyRid(
    apiName: string,
    objectTypeApiName: string,
  ): PropertyTypeRid;
  generateInterfacePropertyTypeRid(
    apiName: string,
    interfaceTypeApiName: string,
  ): InterfacePropertyTypeRid;
  generateStructFieldRid(
    propertyApiName: string,
    apiName: string,
  ): StructFieldRid;
  // Datasource locator methods
  generateLocator(dataSetName: string, columnNames: Set<string>): DatasetDatasourceLocator;
  generateStreamLocator(streamName: string, columnNames: Set<string>): StreamLocator;
  generateRestrictedViewLocator(restrictedViewName: string, columnNames: Set<string>): RestrictedViewLocator;
  generateMediaSetViewLocator(mediaSetViewName: string): MediaSetViewLocator;
  toBlockInternalId(readableId: ReadableId): string;
  generateObjectTypeId(objectTypeApiName: string): string;
  getObjectTypeIds(): BiMap<ReadableId, string>;
}

export interface ParameterRidAndId {
  rid: ParameterRid;
  id: string;
}

/**
 * Simple BiMap interface (placeholder)
 */
export interface BiMap<K, V> {
  get(key: K): V | undefined;
  put(key: K, value: V): void;
  asMap(): Map<K, V>;
  inverse(): BiMap<V, K>;
  entries(): IterableIterator<[K, V]>;
}

/**
 * BlockShapes container for input and output shapes
 */
export interface BlockShapes {
  inputShapes: Map<ReadableId, InputShape>;
  outputShapes: Map<ReadableId, OutputShape>;
  inputShapeMetadata: Map<ReadableId, InputShapeMetadata>;
}

/**
 * ReadableId generator functions matching Java's ReadableIdGenerator
 */
export class ReadableIdGenerator {
  static get(interfaceTypeApiName: string): ReadableId;
  static get(
    interfaceApiName: string,
    interfaceLinkTypeApiName: string,
  ): ReadableId;
  static get(arg1: string, arg2?: string): ReadableId {
    if (arg2 !== undefined) {
      // Interface link type
      return `interface-link-type-${arg1}-${arg2}` as ReadableId;
    }
    // Single argument - check context to determine type
    // This will be called from specific methods
    return arg1 as ReadableId;
  }

  static getForInterface(interfaceTypeApiName: string): ReadableId {
    return `interface-${interfaceTypeApiName}` as ReadableId;
  }

  static getForObjectType(objectTypeApiName: string): ReadableId {
    return `object-type-${objectTypeApiName}` as ReadableId;
  }

  static getForStream(streamName: string): ReadableId {
    return `stream-datasource-${streamName}` as ReadableId;
  }

  static getForStreamColumn(
    streamName: string,
    columnName: string,
  ): ReadableId {
    return `stream-datasource-column-${streamName}-${columnName}` as ReadableId;
  }

  static getForTimeSeriesSync(timeSeriesSyncName: string): ReadableId {
    return `time-series-sync-${timeSeriesSyncName}` as ReadableId;
  }

  static getForDataSet(dataSetName: string): ReadableId {
    return `dataset-datasource-${dataSetName}` as ReadableId;
  }

  static getForDataSetColumn(
    dataSetName: string,
    columnName: string,
  ): ReadableId {
    return `dataset-datasource-column-${dataSetName}-${columnName}` as ReadableId;
  }

  static getForMediaSetView(mediaSetViewName: string): ReadableId {
    return `media-set-view-${mediaSetViewName}` as ReadableId;
  }

  static getForRestrictedView(restrictedViewName: string): ReadableId {
    return `restricted-view-datasource-${restrictedViewName}` as ReadableId;
  }

  static getForRestrictedViewColumn(
    restrictedViewName: string,
    columnName: string,
  ): ReadableId {
    return `restricted-view-datasource-column-${restrictedViewName}-${columnName}` as ReadableId;
  }

  static getForLinkType(linkTypeId: string): ReadableId {
    return `link-type-${linkTypeId}` as ReadableId;
  }

  static getForGeotimeSeriesIntegration(name: string): ReadableId {
    return `geotime-series-integration-${name}` as ReadableId;
  }

  static getForActionType(actionTypeApiName: string): ReadableId {
    return `action-type-${actionTypeApiName}` as ReadableId;
  }

  static getForParameter(actionName: string, parameterId: string): ReadableId {
    return `action-${actionName}-parameter-${parameterId}` as ReadableId;
  }

  static getForGroup(groupId: string): ReadableId {
    return `group-${groupId}` as ReadableId;
  }

  static getForProducedValueType(
    valueTypeApiName: string,
    version: string,
  ): ReadableId {
    return `produced-value-type-${valueTypeApiName}-${version}` as ReadableId;
  }

  static getForConsumedValueType(
    valueTypeApiName: string,
    version: string,
  ): ReadableId {
    return `consumed-value-type-${valueTypeApiName}-${version}` as ReadableId;
  }

  static getForSpt(fieldApiName: string): ReadableId {
    return `shared-property-type-${fieldApiName}` as ReadableId;
  }

  static getForObjectProperty(
    objectTypeApiName: string,
    fieldApiName: string,
  ): ReadableId {
    return `${objectTypeApiName}-property-type-${fieldApiName}` as ReadableId;
  }

  static getForInterfaceProperty(
    interfaceTypeApiName: string,
    interfacePropertyTypeApiName: string,
  ): ReadableId {
    return `interface-property-type-${interfaceTypeApiName}-${interfacePropertyTypeApiName}` as ReadableId;
  }

  static getForInterfaceLinkType(
    interfaceApiName: string,
    interfaceLinkTypeApiName: string,
  ): ReadableId {
    return `interface-link-type-${interfaceApiName}-${interfaceLinkTypeApiName}` as ReadableId;
  }
}

export class BiMapImpl<K, V> implements BiMap<K, V> {
  forward: Map<K, V>;
  backward: Map<V, K>;
  public static create<K, V>(): BiMap<K, V> {
    return new BiMapImpl(new Map<K, V>(), new Map<V, K>());
  }

  private constructor(forward: Map<K, V>, backward: Map<V, K>) {
    this.forward = forward;
    this.backward = backward;
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
    return new BiMapImpl(this.backward, this.forward);
  }
  entries(): IterableIterator<[K, V]> {
    return this.forward.entries();
  }
}

export class OntologyRidGeneratorImpl implements OntologyRidGenerator {
  private readonly actionTypeRids: BiMap<ReadableId, ActionTypeRid>;
  private readonly parameterRids: Map<
    string,
    BiMap<ReadableId, ParameterRidAndId>
  >;
  private readonly interfaceRids: BiMap<ReadableId, InterfaceTypeRid>;
  private readonly sharedPropertyTypeRids: BiMap<
    ReadableId,
    SharedPropertyTypeRid
  >;
  private readonly interfaceLinkTypeRids: BiMap<
    ReadableId,
    InterfaceLinkTypeRid
  >;
  private readonly interfacePropertyTypeRids: BiMap<
    ReadableId,
    InterfacePropertyTypeRid
  >;
  private readonly geotimeSeriesIntegrationRids: BiMap<
    ReadableId,
    GeotimeSeriesIntegrationRid
  >;
  private readonly objectTypeRids: BiMap<ReadableId, ObjectTypeRid>;
  private readonly propertyTypeRids: BiMap<ReadableId, PropertyTypeRid>;
  private readonly consumedValueTypeReferences: BiMap<
    ReadableId,
    ValueTypeReference
  >;
  private readonly producedValueTypeReferences: Map<
    ValueTypeReference,
    ReadableId
  >;
  private readonly datasourceLocators: BiMap<ReadableId, DatasourceLocator>;
  private readonly filesDatasourceLocators: BiMap<
    ReadableId,
    FilesDatasourceLocator
  >;
  private readonly timeSeriesSyncs: BiMap<ReadableId, TimeSeriesSyncRid>;
  private readonly columnShapes: BiMap<
    ReadableId,
    ResolvedDatasourceColumnShape
  >;
  private readonly linkTypeRids: BiMap<ReadableId, LinkTypeRid>;
  private readonly groupIds: BiMap<ReadableId, GroupId>;
  private readonly objectTypeIds: BiMap<ReadableId, string>;
  private readonly randomnessUuid?: string;

  constructor(randomnessUuid?: string) {
    this.randomnessUuid = randomnessUuid;
    this.geotimeSeriesIntegrationRids = BiMapImpl.create();
    this.interfaceLinkTypeRids = BiMapImpl.create();
    this.interfacePropertyTypeRids = BiMapImpl.create();
    this.interfaceRids = BiMapImpl.create();
    this.actionTypeRids = BiMapImpl.create();
    this.parameterRids = new Map();
    this.sharedPropertyTypeRids = BiMapImpl.create();
    this.consumedValueTypeReferences = BiMapImpl.create();
    this.producedValueTypeReferences = new Map();
    this.objectTypeRids = BiMapImpl.create();
    this.datasourceLocators = BiMapImpl.create();
    this.filesDatasourceLocators = BiMapImpl.create();
    this.columnShapes = BiMapImpl.create();
    this.propertyTypeRids = BiMapImpl.create();
    this.timeSeriesSyncs = BiMapImpl.create();
    this.linkTypeRids = BiMapImpl.create();
    this.groupIds = BiMapImpl.create();
    this.objectTypeIds = BiMapImpl.create();
  }

  hashString(input: string): string {
    const stringToHash = this.randomnessUuid
      ? `${input}-${this.randomnessUuid}`
      : input;
    return createHash("sha256").update(stringToHash, "utf8").digest("hex");
  }

  // Generic RID generation for types without specific generators
  generateRid(key: string): string {
    return `ri.ontology-metadata..temp.${this.hashString(key)}`;
  }

  getActionTypeRids(): BiMap<ReadableId, ActionTypeRid> {
    return this.actionTypeRids;
  }

  getParameterRidAndIds(): Map<string, BiMap<ReadableId, ParameterRidAndId>> {
    return this.parameterRids;
  }

  getInterfaceRids(): BiMap<ReadableId, InterfaceTypeRid> {
    return this.interfaceRids;
  }

  getSharedPropertyTypeRids(): BiMap<ReadableId, SharedPropertyTypeRid> {
    return this.sharedPropertyTypeRids;
  }

  getInterfaceLinkTypeRids(): BiMap<ReadableId, InterfaceLinkTypeRid> {
    return this.interfaceLinkTypeRids;
  }

  getInterfacePropertyTypeRids(): BiMap<ReadableId, InterfacePropertyTypeRid> {
    return this.interfacePropertyTypeRids;
  }

  getPropertyTypeRids(): BiMap<ReadableId, PropertyTypeRid> {
    return this.propertyTypeRids;
  }

  getDatasourceLocators(): BiMap<ReadableId, DatasourceLocator> {
    return this.datasourceLocators;
  }

  getFilesDatasourceLocators(): BiMap<ReadableId, FilesDatasourceLocator> {
    return this.filesDatasourceLocators;
  }

  getGeotimeSeriesIntegrationRids(): BiMap<
    ReadableId,
    GeotimeSeriesIntegrationRid
  > {
    return this.geotimeSeriesIntegrationRids;
  }

  getTimeSeriesSyncs(): BiMap<ReadableId, TimeSeriesSyncRid> {
    return this.timeSeriesSyncs;
  }

  getColumnShapes(): BiMap<ReadableId, ResolvedDatasourceColumnShape> {
    return this.columnShapes;
  }

  getObjectTypeRids(): BiMap<ReadableId, ObjectTypeRid> {
    return this.objectTypeRids;
  }

  getLinkTypeRids(): BiMap<ReadableId, LinkTypeRid> {
    return this.linkTypeRids;
  }

  getGroupIds(): BiMap<ReadableId, GroupId> {
    return this.groupIds;
  }

  getConsumedValueTypeReferences(): BiMap<ReadableId, ValueTypeReference> {
    return this.consumedValueTypeReferences;
  }

  getProducedValueTypeReferences(): Map<ValueTypeReference, ReadableId> {
    return this.producedValueTypeReferences;
  }

  valueTypeMappingForReference(valueTypeReference: ValueTypeReference): {
    input: ReadableId;
    output: ReadableId;
  } {
    const input = this.consumedValueTypeReferences.inverse().get(
      valueTypeReference,
    );
    const output = this.producedValueTypeReferences.get(valueTypeReference);

    if (!input || !output) {
      throw new Error(`Missing readable ID for value type reference`);
    }

    return { input, output };
  }

  // Interface types
  generateRidForInterface(apiName: string): InterfaceTypeRid {
    const rid = `ri.ontology-metadata..temp.interface-type.${
      this.hashString(apiName)
    }` as InterfaceTypeRid;
    this.interfaceRids.put(ReadableIdGenerator.getForInterface(apiName), rid);
    return rid;
  }

  // Interface Link Types
  generateRidForInterfaceLinkType(
    apiName: string,
    interfaceTypeApiName: string,
  ): InterfaceLinkTypeRid {
    const readableId = ReadableIdGenerator.getForInterfaceLinkType(
      interfaceTypeApiName,
      apiName,
    );
    const rid = `ri.ontology-metadata..temp.interface-link-type.${
      this.hashString(readableId)
    }` as InterfaceLinkTypeRid;
    this.interfaceLinkTypeRids.put(readableId, rid);
    return rid;
  }

  // Object Types
  generateRidForObjectType(apiName: string): ObjectTypeRid {
    const rid = `ri.ontology-metadata..temp.object-type.${
      this.hashString(apiName)
    }` as ObjectTypeRid;
    this.objectTypeRids.put(ReadableIdGenerator.getForObjectType(apiName), rid);
    return rid;
  }

  // Value Types
  generateRidForValueType(
    apiName: string,
    version: string,
  ): ValueTypeReference {
    const rid = `ri.ontology-metadata..temp.value-type.${
      this.hashString(apiName)
    }`;
    // Generate UUID from version string (matching Java's UUID.nameUUIDFromBytes)
    const versionHash = createHash("md5").update(version, "utf8").digest("hex");
    const versionAsUuid = `${versionHash.slice(0, 8)}-${
      versionHash.slice(8, 12)
    }-${versionHash.slice(12, 16)}-${versionHash.slice(16, 20)}-${
      versionHash.slice(20, 32)
    }`;

    const valueTypeReference: ValueTypeReference = {
      rid,
      versionId: versionAsUuid,
    } as ValueTypeReference;

    this.consumedValueTypeReferences.put(
      ReadableIdGenerator.getForConsumedValueType(apiName, version),
      valueTypeReference,
    );
    this.producedValueTypeReferences.set(
      valueTypeReference,
      ReadableIdGenerator.getForProducedValueType(apiName, version),
    );
    return valueTypeReference;
  }

  generateRidForTimeSeriesSync(name: string): TimeSeriesSyncRid {
    const rid = `ri.ontology-metadata..temp.time-series-sync.${
      this.hashString(name)
    }` as TimeSeriesSyncRid;
    this.timeSeriesSyncs.put(
      ReadableIdGenerator.getForTimeSeriesSync(name),
      rid,
    );
    return rid;
  }

  generateRidForLinkType(linkTypeId: string): LinkTypeRid {
    const rid = `ri.ontology-metadata..temp.link-type.${
      this.hashString(linkTypeId)
    }` as LinkTypeRid;
    this.linkTypeRids.put(ReadableIdGenerator.getForLinkType(linkTypeId), rid);
    return rid;
  }

  generateRidForGeotimeSeriesIntegration(
    name: string,
  ): GeotimeSeriesIntegrationRid {
    const rid = `ri.ontology-metadata..temp.geotime-series-integration.${
      this.hashString(name)
    }` as GeotimeSeriesIntegrationRid;
    this.geotimeSeriesIntegrationRids.put(
      ReadableIdGenerator.getForGeotimeSeriesIntegration(name),
      rid,
    );
    return rid;
  }

  generateRidForActionType(apiName: string): ActionTypeRid {
    const rid = `ri.ontology-metadata..temp.action-type.${
      this.hashString(apiName)
    }` as ActionTypeRid;
    this.actionTypeRids.put(ReadableIdGenerator.getForActionType(apiName), rid);
    return rid;
  }

  generateRidForParameter(
    actionTypeApiName: string,
    parameterId: string,
  ): ParameterRid {
    const rid = `ri.ontology-metadata..temp.parameter.${
      this.hashString(actionTypeApiName + "." + parameterId)
    }` as ParameterRid;

    let innerMap = this.parameterRids.get(actionTypeApiName);
    if (!innerMap) {
      innerMap = BiMapImpl.create();
      this.parameterRids.set(actionTypeApiName, innerMap);
    }

    innerMap.put(
      ReadableIdGenerator.getForParameter(actionTypeApiName, parameterId),
      { rid, id: parameterId },
    );
    return rid;
  }

  // Shared Property Types
  generateSptRid(apiName: string): SharedPropertyTypeRid {
    const rid = `ri.ontology-metadata..temp.shared-property-type.${
      this.hashString(apiName)
    }` as SharedPropertyTypeRid;
    this.sharedPropertyTypeRids.put(
      ReadableIdGenerator.getForSpt(apiName),
      rid,
    );
    return rid;
  }

  generatePropertyRid(
    apiName: string,
    objectTypeApiName: string,
  ): PropertyTypeRid {
    const rid = `ri.ontology-metadata..temp.property-type.${
      this.hashString(objectTypeApiName + "." + apiName)
    }` as PropertyTypeRid;
    this.propertyTypeRids.put(
      ReadableIdGenerator.getForObjectProperty(objectTypeApiName, apiName),
      rid,
    );
    return rid;
  }

  // Interface Property Types
  generateInterfacePropertyTypeRid(
    apiName: string,
    interfaceTypeApiName: string,
  ): InterfacePropertyTypeRid {
    const rid = `ri.ontology-metadata..temp.interface-property-type.${
      this.hashString(interfaceTypeApiName + "." + apiName)
    }` as InterfacePropertyTypeRid;
    this.interfacePropertyTypeRids.put(
      ReadableIdGenerator.getForInterfaceProperty(
        interfaceTypeApiName,
        apiName,
      ),
      rid,
    );
    return rid;
  }

  // Struct Field RIDs
  generateStructFieldRid(
    propertyApiName: string,
    apiName: string,
  ): StructFieldRid {
    const rid = `ri.ontology-metadata..temp.struct-field.${
      this.hashString(propertyApiName + "." + apiName)
    }` as StructFieldRid;
    return rid;
  }

  // Datasource locator methods
  generateLocator(dataSetName: string, columnNames: Set<string>): DatasetDatasourceLocator {
    const datasetRid = `ri.ontology-metadata..temp.dataset.${this.hashString(dataSetName)}`;
    const branchId = "main";

    // Register column shapes
    columnNames.forEach(name => {
      this.columnShapes.put(
        ReadableIdGenerator.getForDataSetColumn(dataSetName, name),
        {
          datasource: {
            type: "dataset",
            dataset: { rid: datasetRid, branch: branchId }
          } as DatasourceLocator,
          name: name
        } as ResolvedDatasourceColumnShape
      );
    });

    // Register datasource locator
    this.datasourceLocators.put(
      ReadableIdGenerator.getForDataSet(dataSetName),
      {
        type: "dataset",
        dataset: { rid: datasetRid, branch: branchId }
      } as DatasourceLocator
    );

    return { rid: datasetRid, branchId };
  }

  generateStreamLocator(streamName: string, columnNames: Set<string>): StreamLocator {
    const streamLocatorRid = `ri.ontology-metadata..temp.stream-datasource.${this.hashString(streamName)}`;
    const branchId = "main";

    const locator: StreamLocator = {
      streamLocatorRid,
      branchId
    };

    const marketplaceLocator: DatasourceLocator = {
      type: "stream",
      stream: {
        rid: streamLocatorRid,
        branch: branchId
      }
    } as DatasourceLocator;

    // Register column shapes
    columnNames.forEach(name => {
      this.columnShapes.put(
        ReadableIdGenerator.getForStreamColumn(streamName, name),
        {
          datasource: marketplaceLocator,
          name: name
        } as ResolvedDatasourceColumnShape
      );
    });

    // Register datasource locator
    this.datasourceLocators.put(
      ReadableIdGenerator.getForStream(streamName),
      marketplaceLocator
    );

    return locator;
  }

  generateRestrictedViewLocator(restrictedViewName: string, columnNames: Set<string>): RestrictedViewLocator {
    const restrictedViewRid = `ri.ontology-metadata..temp.restricted-view.${this.hashString(restrictedViewName)}`;

    // Register column shapes
    columnNames.forEach(name => {
      this.columnShapes.put(
        ReadableIdGenerator.getForRestrictedViewColumn(restrictedViewName, name),
        {
          datasource: {
            type: "restrictedView",
            restrictedView: { rid: restrictedViewRid }
          } as DatasourceLocator,
          name: name
        } as ResolvedDatasourceColumnShape
      );
    });

    // Register datasource locator
    this.datasourceLocators.put(
      ReadableIdGenerator.getForRestrictedView(restrictedViewName),
      {
        type: "restrictedView",
        restrictedView: { rid: restrictedViewRid }
      } as DatasourceLocator
    );

    return { rid: restrictedViewRid };
  }

  generateMediaSetViewLocator(mediaSetViewName: string): MediaSetViewLocator {
    const mediaSetRid = `ri.ontology-metadata..temp.media-set.${this.hashString(mediaSetViewName)}`;
    const mediaSetBranchRid = `ri.ontology-metadata..temp.media-set-branch.${this.hashString(mediaSetViewName)}`;
    const mediaSetViewRid = `ri.ontology-metadata..temp.media-set-view.${this.hashString(mediaSetViewName)}`;

    // Register files datasource locator
    this.filesDatasourceLocators.put(
      ReadableIdGenerator.getForMediaSetView(mediaSetViewName),
      {
        type: "mediaSet",
        mediaSet: {
          rid: mediaSetRid,
          branch: "master" // matches OntologyMetadataConstants.ONTOLOGY_DATASET_BRANCH_ID
        }
      } as FilesDatasourceLocator
    );

    return {
      mediaSetRid,
      mediaSetViewRid,
      mediaSetBranchRid
    };
  }

  toBlockInternalId(readableId: ReadableId): string {
    const id = toBlockShapeId(readableId, this.randomnessUuid);
    return id;
  }

  getObjectTypeIds(): BiMap<ReadableId, string> {
    return this.objectTypeIds;
  }

  generateObjectTypeId(objectTypeApiName: string): string {
    const readableId = ReadableIdGenerator.getForObjectType(objectTypeApiName);
    const uuid = randomUUID();
    const objectTypeId = `a${uuid}`;
    this.objectTypeIds.put(readableId, objectTypeId);
    return objectTypeId;
  }
}
