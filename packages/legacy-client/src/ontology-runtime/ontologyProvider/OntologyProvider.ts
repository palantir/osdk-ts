/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { createOpenApiRequest, isOk } from "@osdk/api";
import {
  aggregateObjectSetV2,
  applyActionV2,
  executeQueryV2,
  getAttachment,
  getAttachmentContent,
  getAttachmentsV2,
  getFirstPoint,
  getLastPoint,
  getLinkedObjectV2,
  getObjectV2,
  listLinkedObjectsV2,
  listObjectsV2,
  loadObjectSetV2,
  streamPoints,
  uploadAttachment,
} from "@osdk/gateway/requests";
import type {
  AttachmentV2,
  ListLinkedObjectsResponseV2,
  ListObjectsResponseV2,
  LoadObjectSetRequestV2,
  LoadObjectSetResponseV2,
  OntologyObjectV2,
  StreamTimeSeriesPointsRequest,
  StreamTimeSeriesPointsRequest as StreamPointsBody,
} from "@osdk/gateway/types";
import { PalantirApiError } from "../../Errors";
import type { Auth } from "../../oauth-client";
import { visitTypeUnion } from "..";
import type {
  AggregationClause,
  AggregationResult,
  BucketGroup,
  BucketKey,
  BucketValue,
  InternalBucketing,
  Metrics,
  MetricValue,
  QueryThreeDimensionalAggregation,
  QueryTwoDimensionalAggregation,
  Range,
  Rangeable,
} from "../aggregations";
import { convertToAggregationResult } from "../aggregations/aggregationConverters";
import type {
  ArrayType,
  Attachment,
  AttachmentMetadata,
  AttachmentType,
  BooleanType,
  ByteType,
  DateType,
  DecimalType,
  DoubleType,
  Edits,
  FloatType,
  GeoJson,
  GeoJsonPoint,
  GeoPointType,
  GeoShapeType,
  IntegerType,
  LongType,
  ObjectSetDefinition,
  ObjectSetType,
  ObjectType,
  OntologyObject,
  QueryBucketKey,
  QueryBucketKeyType,
  QueryBucketRangeableType,
  QueryBucketValueType,
  QueryResponse,
  QueryValueType,
  RangeType,
  SetType,
  ShortType,
  StringType,
  StructType,
  ThreeDimensionalAggregation,
  ThreeDimensionalAggregationType,
  TimeSeriesPoint,
  TimestampType,
  TwoDimensionalAggregation,
  TwoDimensionalAggregationType,
} from "../baseTypes";
import {
  ActionResponse,
  AttachmentProperty,
  GeoPoint,
  GeoShape,
  isOntologyObject,
  LocalDate,
  Timestamp,
} from "../baseTypes";
import type {
  ParameterValue,
  PrimitiveParameterValue,
} from "../baseTypes/ParameterValue";
import type { SearchClause } from "../filters";
import type { Page } from "../paging";
import {
  AggregateObjectsErrorHandler,
  AttachmentsErrorHandler,
  ExecuteActionErrorHandler,
  ExecuteQueryErrorHandler,
  GetLinkedObjectErrorHandler,
  GetObjectErrorHandler,
  handleAggregateObjectsError,
  handleAttachmentsError,
  handleExecuteActionError,
  handleExecuteQueryError,
  handleGetLinkedObjectError,
  handleGetObjectError,
  handleListLinkedObjectsError,
  handleListObjectsError,
  handleLoadObjectSetError,
  handleTimeSeriesError,
  ListLinkedObjectsErrorHandler,
  ListObjectsErrorHandler,
  LoadObjectSetErrorHandler,
  TimeSeriesErrorHandler,
} from ".";
import { mapAggregation, mapBucketing } from "./AggregationUtils";
import type {
  ActionError,
  AggregateObjectsError,
  AttachmentsError,
  FoundryApiError,
  GetLinkedObjectError,
  GetObjectError,
  ListLinkedObjectsError,
  ListObjectsError,
  LoadObjectSetError,
  QueryError,
  TimeSeriesError,
} from "./Errors";
import type { OntologyMetadata } from "./OntologyMetadata";
import type { OntologyObjectFactory } from "./OntologyObjectFactory";
import {
  iterateReadableStream,
  parseStreamedResponse,
} from "./parseStreamedResponse";
import type { Err, Ok, Result } from "./Result";

export class OntologyProvider {
  constructor(
    private authClient: Auth,
    private stack: string,
    private ontologyMetadata: OntologyMetadata,
    private objectFactory?: OntologyObjectFactory,
    private fetchFn = globalThis.fetch,
    // TODO contextPath for createOpenApiRequest?
  ) {
  }

  async get<T extends OntologyObject>(
    apiName: string,
    primaryKey: T["__primaryKey"],
    selectedProperties: Array<keyof T> = [],
  ): Promise<Result<T, GetObjectError>> {
    return this.wrapResult(async () => {
      const object = await getObjectV2(
        createOpenApiRequest(this.stack, this.fetchFn),
        this.ontologyMetadata.ontologyApiName,
        apiName,
        primaryKey.toString(),
        {
          select: selectedProperties.map(x => x.toString()),
        },
      );

      return this.createObject<T>(object);
    }, e => handleGetObjectError(new GetObjectErrorHandler(), e, e.parameters));
  }

  all<T extends OntologyObject>(
    apiName: string,
    selectedProperties: Array<keyof T> = [],
  ): Promise<Result<T[], ListObjectsError>> {
    return this.wrapResult(
      async () => {
        const allObjects: T[] = [];
        let page = await this.listObjects<T>(apiName, selectedProperties);
        Array.prototype.push.apply(allObjects, page.data);
        while (page.nextPageToken) {
          page = await this.listObjects<T>(apiName, selectedProperties, {
            pageToken: page.nextPageToken,
          });
          Array.prototype.push.apply(allObjects, page.data);
        }
        return allObjects;
      },
      (palantirApiError: PalantirApiError) =>
        handleListObjectsError(
          new ListObjectsErrorHandler(),
          palantirApiError,
          palantirApiError.parameters,
        ),
    );
  }

  allObjectsFromObjectSet<T extends OntologyObject>(
    objectSetDefinition: ObjectSetDefinition,
    selectedProperties: Array<keyof T> = [],
    orderBy?: SearchClause,
  ): Promise<Result<T[], LoadObjectSetError>> {
    return this.wrapResult(
      async () => {
        const allObjects: T[] = [];
        let page = await this.listObjectsFromObjectSet<T>(
          objectSetDefinition,
          orderBy,
        );
        Array.prototype.push.apply(allObjects, page.data);
        if (orderBy && orderBy.take && allObjects.length >= orderBy.take) {
          return allObjects.slice(0, orderBy.take);
        }
        while (page.nextPageToken) {
          page = await this.listObjectsFromObjectSet<T>(
            objectSetDefinition,
            orderBy,
            selectedProperties,
            {
              pageToken: page.nextPageToken,
            },
          );
          Array.prototype.push.apply(allObjects, page.data);
          if (orderBy && orderBy.take && allObjects.length >= orderBy.take) {
            return allObjects.slice(0, orderBy.take);
          }
        }
        return allObjects;
      },
      (palantirApiError: PalantirApiError) =>
        handleLoadObjectSetError(
          new LoadObjectSetErrorHandler(),
          palantirApiError,
          palantirApiError.parameters,
        ),
    );
  }

  getFirstPoint<T extends string | number>(
    apiName: string,
    primaryKey: any,
    propertyName: string,
  ): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>> {
    return this.wrapResult(
      async () => {
        const point = await getFirstPoint(
          createOpenApiRequest(this.stack, this.fetchFn),
          this.ontologyMetadata.ontologyApiName,
          apiName,
          primaryKey,
          propertyName,
        );
        return {
          time: Timestamp.fromISOString(point.time),
          value: point.value as T,
        };
      },
      e => handleTimeSeriesError(new TimeSeriesErrorHandler(), e, e.parameters),
    );
  }

  getLastPoint<T extends string | number>(
    apiName: string,
    primaryKey: any,
    propertyName: string,
  ): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>> {
    return this.wrapResult(
      async () => {
        const point = await getLastPoint(
          createOpenApiRequest(this.stack, this.fetchFn),
          this.ontologyMetadata.ontologyApiName,
          apiName,
          primaryKey,
          propertyName,
        );
        return {
          time: Timestamp.fromISOString(point.time),
          value: point.value as T,
        };
      },
      e => handleTimeSeriesError(new TimeSeriesErrorHandler(), e, e.parameters),
    );
  }

  getAllTimeSeriesPoints<T extends string | number>(
    apiName: string,
    primaryKey: any,
    propertyName: string,
    body: StreamPointsBody,
  ): Promise<Result<Array<TimeSeriesPoint<T>>, TimeSeriesError>> {
    return this.wrapResult(
      async () => {
        const streamPointsIterator = await streamPoints(
          createOpenApiRequest(this.stack, this.fetchFn),
          this.ontologyMetadata.ontologyApiName,
          apiName,
          primaryKey,
          propertyName,
          body,
        );

        const allPoints: Array<TimeSeriesPoint<T>> = [];

        const reader = getReader(streamPointsIterator);
        for await (
          const point of parseStreamedResponse(iterateReadableStream(reader))
        ) {
          allPoints.push({
            time: Timestamp.fromISOString(point.time),
            value: point.value as T,
          });
        }
        return allPoints;
      },
      e => handleTimeSeriesError(new TimeSeriesErrorHandler(), e, e.parameters),
    );
  }

  async *iterateTimeSeriesPoints<T extends string | number>(
    apiName: string,
    primaryKey: any,
    propertyName: string,
    body: StreamPointsBody,
  ): AsyncGenerator<Result<TimeSeriesPoint<T>, TimeSeriesError>, any, unknown> {
    yield* this.wrapIterator(
      () => {
        return this.iterateTimeSeriesPointsInternal(
          apiName,
          primaryKey,
          propertyName,
          body,
        );
      },
      e => handleTimeSeriesError(new TimeSeriesErrorHandler(), e, e.parameters),
    );
  }

  private async *iterateTimeSeriesPointsInternal<T extends string | number>(
    apiName: string,
    primaryKey: any,
    propertyName: string,
    body: StreamTimeSeriesPointsRequest,
  ): AsyncGenerator<TimeSeriesPoint<T>> {
    const streamPointsResponse = await streamPoints(
      createOpenApiRequest(this.stack, this.fetchFn),
      this.ontologyMetadata.ontologyApiName,
      apiName,
      primaryKey,
      propertyName,
      body,
    );
    const reader = getReader(streamPointsResponse);
    const streamPointsIterator = iterateReadableStream(reader);
    const firstChunk = await streamPointsIterator.next();

    const remainingChunksPromise: Promise<any[]> = new Promise(
      (resolve, _reject) => {
        const remainingPoints = this.processStream(streamPointsIterator);
        resolve(remainingPoints);
      },
    );

    yield {
      time: Timestamp.fromISOString((firstChunk.value as any).time),
      value: (firstChunk.value as any).value as T,
    };
    const remainingChunks = await remainingChunksPromise;
    for (const point of remainingChunks) {
      yield {
        time: Timestamp.fromISOString(point.time),
        value: point.value as T,
      };
    }
  }

  pageObjectsFromObjectSet<T extends OntologyObject>(
    objectSetDefinition: ObjectSetDefinition,
    orderBy?: SearchClause,
    selectedProperties: Array<keyof T> = [],
    options?: {
      pageSize?: number;
      pageToken?: string;
    },
  ): Promise<Result<Page<T>, LoadObjectSetError>> {
    const response = this.createPageIterator<T, LoadObjectSetError>(
      async () => {
        return this.listObjectsFromObjectSet<T>(
          objectSetDefinition,
          orderBy,
          selectedProperties,
          options,
        );
      },
      () =>
        this.iterateObjectsFromObjectSet(
          objectSetDefinition,
          orderBy,
          selectedProperties,
          options,
        ),
      (palantirApiError: PalantirApiError) => {
        return handleLoadObjectSetError(
          new LoadObjectSetErrorHandler(),
          palantirApiError,
          palantirApiError.parameters,
        );
      },
    );
    return response;
  }

  async pageObjects<T extends OntologyObject>(
    apiName: string,
    selectedProperties: Array<keyof T> = [],
    options?: {
      pageSize?: number;
      pageToken?: string;
    },
  ): Promise<Result<Page<T>, ListObjectsError>> {
    const response = this.createPageIterator<T, ListObjectsError>(
      async () => {
        return this.listObjects<T>(apiName, selectedProperties, options);
      },
      () => this.iterateObjects(apiName, options),
      (palantirApiError: PalantirApiError) => {
        return handleListObjectsError(
          new ListObjectsErrorHandler(),
          palantirApiError,
          palantirApiError.parameters,
        );
      },
    );
    return response;
  }

  async *iterator<T extends OntologyObject>(
    apiName: string,
    options?: { pageSize?: number },
  ): AsyncGenerator<Result<T, ListObjectsError>, any, unknown> {
    yield* this.wrapIterator(
      () => {
        return this.iterateObjects(apiName, options);
      },
      (palantirApiError: PalantirApiError) => {
        return handleListObjectsError(
          new ListObjectsErrorHandler(),
          palantirApiError,
          palantirApiError.parameters,
        );
      },
    );
  }

  async *iteratorOnObjectSet<T extends OntologyObject>(
    objectSetDefinition: ObjectSetDefinition,
    orderBy?: SearchClause,
    selectedProperties: Array<keyof T> = [],
    options?: { pageSize?: number },
  ): AsyncGenerator<Result<T, LoadObjectSetError>, any, unknown> {
    yield* this.wrapIterator(
      () => {
        return this.iterateObjectsFromObjectSet(
          objectSetDefinition,
          orderBy,
          selectedProperties,
          options,
        );
      },
      (palantirApiError: PalantirApiError) => {
        return handleLoadObjectSetError(
          new LoadObjectSetErrorHandler(),
          palantirApiError,
          palantirApiError.parameters,
        );
      },
    );
  }

  getLinkedObject<T extends OntologyObject>(
    sourceApiName: string,
    primaryKey: any,
    linkTypeApiName: string,
    linkedObjectPrimaryKey: string,
  ): Promise<Result<T, GetLinkedObjectError>> {
    return this.wrapResult(
      async () => {
        const object = await getLinkedObjectV2(
          createOpenApiRequest(this.stack, this.fetchFn),
          this.ontologyMetadata.ontologyApiName,
          sourceApiName,
          primaryKey,
          linkTypeApiName,
          linkedObjectPrimaryKey,
          {
            select: [],
          },
        );
        return this.createObject<T>(object);
      },
      e =>
        handleGetLinkedObjectError(
          new GetLinkedObjectErrorHandler(),
          e,
          e.parameters,
        ),
    );
  }

  listLinkedObjects<T extends OntologyObject>(
    sourceApiName: string,
    primaryKey: any,
    linkTypeApiName: string,
  ): Promise<Result<T[], ListLinkedObjectsError>> {
    return this.wrapResult(
      async () => {
        const allObjects: T[] = [];
        let page = await this.getLinkedObjectsPage<T>(
          sourceApiName,
          primaryKey,
          linkTypeApiName,
        );
        Array.prototype.push.apply(allObjects, page.data);
        while (page.nextPageToken) {
          page = await this.getLinkedObjectsPage<T>(
            sourceApiName,
            primaryKey,
            linkTypeApiName,
            {
              pageToken: page.nextPageToken,
            },
          );
          Array.prototype.push.apply(allObjects, page.data);
        }
        return allObjects;
      },
      e =>
        handleListLinkedObjectsError(
          new ListLinkedObjectsErrorHandler(),
          e,
          e.parameters,
        ),
    );
  }

  async *linkedObjectsIterator<T extends OntologyObject>(
    sourceApiName: string,
    primaryKey: any,
    linkTypeApiName: string,
    options?: { pageSize?: number },
  ): AsyncGenerator<Result<T, ListLinkedObjectsError>, any, unknown> {
    yield* this.wrapIterator(
      () =>
        this.iterateLinkedObjects(
          sourceApiName,
          primaryKey,
          linkTypeApiName,
          options,
        ),
      e =>
        handleListLinkedObjectsError(
          new ListLinkedObjectsErrorHandler(),
          e,
          e.parameters,
        ),
    );
  }

  async pageLinkedObjects<T extends OntologyObject>(
    sourceApiName: string,
    primaryKey: any,
    linkTypeApiName: string,
    options?: {
      pageSize?: number;
      pageToken?: string;
    },
  ): Promise<Result<Page<T>, ListObjectsError>> {
    const response = this.createPageIterator<T, ListObjectsError>(
      async () => {
        return this.getLinkedObjectsPage<T>(
          sourceApiName,
          primaryKey,
          linkTypeApiName,
          options,
        );
      },
      () =>
        this.iterateLinkedObjects(
          sourceApiName,
          primaryKey,
          linkTypeApiName,
          options,
        ),
      (palantirApiError: PalantirApiError) => {
        return handleListObjectsError(
          new ListObjectsErrorHandler(),
          palantirApiError,
          palantirApiError.parameters,
        );
      },
    );
    return response;
  }

  aggregate<
    TBucketGroup extends BucketGroup,
    TMetrics extends Metrics | MetricValue,
  >(body: {
    objectSet: ObjectSetDefinition;
    aggregation: AggregationClause[];
    groupBy?: Array<InternalBucketing<BucketKey, BucketValue>>;
  }): Promise<
    Result<AggregationResult<TBucketGroup, TMetrics>, AggregateObjectsError>
  > {
    return this.wrapResult(
      async () => {
        const remappedGroups = body.groupBy
          ? body.groupBy.map(group => mapBucketing(group))
          : [];

        const remappedAggregation = body.aggregation.map(aggregationClause =>
          mapAggregation(aggregationClause)
        );

        const response = await aggregateObjectSetV2(
          createOpenApiRequest(this.stack, this.fetchFn),
          this.ontologyMetadata.ontologyApiName,
          {
            objectSet: body.objectSet,
            groupBy: remappedGroups,
            aggregation: remappedAggregation,
          },
        );
        const processedResponse = convertToAggregationResult<
          TBucketGroup,
          TMetrics
        >(response, body);
        return processedResponse;
      },
      e =>
        handleAggregateObjectsError(
          new AggregateObjectsErrorHandler(),
          e,
          e.parameters,
        ),
    );
  }

  applyAction(apiName: string, params: {
    [parameterId: string]: ParameterValue;
  }): Promise<
    Result<
      ActionResponse<Edits<OntologyObject, OntologyObject> | undefined>,
      ActionError
    >
  > {
    return this.wrapResult(
      async () => {
        const response = await applyActionV2(
          createOpenApiRequest(this.stack, this.fetchFn),
          this.ontologyMetadata.ontologyApiName,
          apiName,
          {
            parameters: this.getRemappedParameters(params),
          },
        );
        return ActionResponse.of(response);
      },
      e =>
        handleExecuteActionError(
          new ExecuteActionErrorHandler(),
          e,
          e.parameters,
        ),
    );
  }

  async applyActionGetResponse(
    apiName: string,
    params: {
      [parameterId: string]: ParameterValue;
    },
    provider: OntologyProvider,
  ): Promise<
    Result<
      ActionResponse<Edits<OntologyObject, OntologyObject> | undefined>,
      ActionError
    >
  > {
    return this.wrapResult(
      async () => {
        const response = await applyActionV2(
          createOpenApiRequest(this.stack, this.fetchFn),
          this.ontologyMetadata.ontologyApiName,
          apiName,
          {
            parameters: this.getRemappedParameters(params),
            options: {
              returnEdits: "ALL",
            },
          },
        );
        return ActionResponse.of(response, provider);
      },
      e =>
        handleExecuteActionError(
          new ExecuteActionErrorHandler(),
          e,
          e.parameters,
        ),
    );
  }

  async validateAction(
    apiName: string,
    params: {
      [parameterId: string]: ParameterValue;
    },
  ): Promise<
    Result<
      ActionResponse<Edits<OntologyObject, OntologyObject> | undefined>,
      ActionError
    >
  > {
    return this.wrapResult(
      async () => {
        const response = await applyActionV2(
          createOpenApiRequest(this.stack, this.fetchFn),
          this.ontologyMetadata.ontologyApiName,
          apiName,
          {
            parameters: this.getRemappedParameters(params),
            options: {
              mode: "VALIDATE_ONLY",
            },
          },
        );
        return ActionResponse.of(response);
      },
      e =>
        handleExecuteActionError(
          new ExecuteActionErrorHandler(),
          e,
          e.parameters,
        ),
    );
  }

  executeQuery(apiName: string, responseType: QueryValueType, params?: {
    [parameterId: string]: ParameterValue;
  }): Promise<Result<QueryResponse<ParameterValue>, QueryError>> {
    return this.wrapResult(
      async () => {
        const response: { value: PrimitiveParameterValue } =
          await executeQueryV2(
            createOpenApiRequest(this.stack, this.fetchFn),
            this.ontologyMetadata.ontologyApiName,
            apiName,
            {
              parameters: params ? this.getRemappedParameters(params) : {},
            },
            {
              preview: true,
            },
          );
        const remappedResponse = await this.remapQueryResponseType(
          response.value,
          this.objectFactory!,
          responseType,
        );
        return {
          value: remappedResponse,
        };
      },
      e =>
        handleExecuteQueryError(
          new ExecuteQueryErrorHandler(),
          e,
          e.parameters,
        ),
    );
  }

  uploadAttachment(
    filename: string,
    data: Blob,
  ): Promise<Result<Attachment, AttachmentsError>> {
    return this.wrapResult(
      async () => {
        const response = await uploadAttachment(
          createOpenApiRequest(this.stack, this.fetchFn),
          data,
          {
            filename,
          },
          {
            "Content-Length": data.length,
            "Content-Type": data.type,
          },
        );
        return remapAttachmentResponse(
          this.authClient,
          this.stack,
          this.ontologyMetadata,
          response,
        );
      },
      e =>
        handleAttachmentsError(new AttachmentsErrorHandler(), e, e.parameters),
    );
  }

  getAttachmentMetadata(
    ontologyApiName?: string,
    objectTypeApiName?: string,
    primaryKey?: any,
    propertyName?: string,
    attachmentRid?: string,
  ): Promise<Result<AttachmentMetadata, AttachmentsError>> {
    return this.wrapResult(
      async () => {
        if (attachmentRid) {
          const response = await getAttachment(
            createOpenApiRequest(this.stack, this.fetchFn),
            attachmentRid,
          );
          return {
            filename: response.filename,
            mediaType: response.mediaType,
            rid: response.rid,
            sizeBytes: response.sizeBytes,
          };
        }

        const response = await getAttachmentsV2(
          createOpenApiRequest(this.stack, this.fetchFn),
          ontologyApiName!,
          objectTypeApiName!,
          primaryKey!,
          propertyName!,
        );

        if (response.type === "single") {
          return {
            filename: response.filename,
            mediaType: response.mediaType,
            rid: response.rid,
            sizeBytes: response.sizeBytes,
          };
        }

        throw new Error(`Remove this code path`);
      },
      e =>
        handleAttachmentsError(new AttachmentsErrorHandler(), e, e.parameters),
    );
  }

  readAttachmentContent(
    ontologyApiName?: string,
    objectTypeApiName?: string,
    primaryKey?: any,
    propertyName?: string,
    attachmentRid?: string,
  ): Promise<Result<Blob, AttachmentsError>> {
    return this.wrapResult(
      async () => {
        const response = await getAttachmentContent(
          createOpenApiRequest(this.stack, this.fetchFn),
          attachmentRid!,
        );
        if (globalThis.Blob && response instanceof globalThis.Blob) {
          return response;
        } else {
          throw new Error(`Expected a Blob!`);
        }
      },
      e =>
        handleAttachmentsError(new AttachmentsErrorHandler(), e, e.parameters),
    );
  }

  private async remapQueryResponseType(
    responseValue: PrimitiveParameterValue,
    objectFactory: OntologyObjectFactory,
    expectedResultType: QueryValueType,
  ): Promise<ParameterValue> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ontologyProvider = this;
    return visitTypeUnion(expectedResultType, {
      date(_type: DateType): LocalDate {
        return LocalDate.fromISOString(responseValue as string);
      },
      timestamp(_type: TimestampType): Timestamp {
        return Timestamp.fromISOString(responseValue as string);
      },
      GeoPoint(_type: GeoPointType): GeoPoint {
        return GeoPoint.fromGeoJson(responseValue as GeoJsonPoint);
      },
      GeoShape(_type: GeoShapeType): GeoShape {
        return GeoShape.fromGeoJson(responseValue as GeoJson);
      },
      attachment(__type: AttachmentType): ParameterValue {
        throw new Error(`Attachment type not supported in response`);
      },
      async struct(
        type: StructType,
      ): Promise<{ [key: string]: ParameterValue }> {
        if (typeof responseValue !== "object") {
          throw new Error(
            `Expected object response, but received ${typeof responseValue}`,
          );
        }

        const responseEntries = Object.entries(responseValue);
        const remappedResponseEntries = await Promise.all(
          responseEntries.map(async ([key, structValue]) => {
            const structType = type.fields.find(field => field.name === key)
              ?.fieldType;
            const remappedValue = await ontologyProvider.remapQueryResponseType(
              structValue,
              objectFactory,
              structType!,
            );
            return [key, remappedValue];
          }),
        );
        const remappedResponse = remappedResponseEntries.reduce(
          (acc, [key, mappedValue]) => {
            acc[key as string] = mappedValue as ParameterValue;
            return acc;
          },
          {} as { [key: string]: ParameterValue },
        );

        return remappedResponse;
      },
      async array(type: ArrayType<QueryValueType>): Promise<ParameterValue[]> {
        if (!Array.isArray(responseValue)) {
          throw new Error(
            `Expected array response, but received ${typeof responseValue}`,
          );
        }
        return Promise.all(
          responseValue.map(async arrayValue =>
            ontologyProvider.remapQueryResponseType(
              arrayValue,
              objectFactory,
              type.subType,
            )
          ),
        );
      },
      string(_type: StringType): string {
        return responseValue as string;
      },
      boolean(_type: BooleanType): boolean {
        return responseValue as boolean;
      },
      byte(_type: ByteType): number {
        return responseValue as number;
      },
      float(_type: FloatType): number {
        return responseValue as number;
      },
      short(_type: ShortType): number {
        return responseValue as number;
      },
      decimal(_type: DecimalType): number {
        return responseValue as number;
      },
      long(_type: LongType): number {
        return responseValue as number;
      },
      integer(_type: IntegerType): number {
        return responseValue as number;
      },
      double(_type: DoubleType): number {
        return responseValue as number;
      },
      async set(type: SetType<QueryValueType>): Promise<Set<ParameterValue>> {
        if (!Array.isArray(responseValue)) {
          throw new Error(
            `Expected response in array format, but received ${typeof responseValue}`,
          );
        }

        const remappedResponse = await Promise.all(
          responseValue.map(async arrayValue =>
            ontologyProvider.remapQueryResponseType(
              arrayValue,
              objectFactory,
              type.subType,
            )
          ),
        );

        return new Set(remappedResponse);
      },
      async object(type: ObjectType): Promise<OntologyObject> {
        if (typeof responseValue !== "object") {
          const result = await ontologyProvider.get(
            type.objectTypeApiName,
            responseValue,
            [],
          );

          if (isOk(result)) {
            return result.value;
          } else {
            throw result.error;
          }
        }

        // The API Gateway returns the object's primary key, but this is defensive
        // in the case we change it to return the full type
        return objectFactory.create(
          type.objectTypeApiName,
          ontologyProvider.authClient,
          ontologyProvider.stack,
          (responseValue as OntologyObject).__rid,
          responseValue,
        );
      },
      unknown(_type: { type: string }): any {
        throw new Error(`Unknown type received ${_type.type}`);
      },
      objectSet(_type: ObjectSetType<ObjectType>) {
        throw new Error(`ObjectSet type not supported in response`);
      },
      twoDimensionalAggregation(
        type: TwoDimensionalAggregationType<
          QueryBucketKeyType,
          QueryBucketValueType
        >,
      ): TwoDimensionalAggregation<
        QueryBucketKey,
        BucketValue
      > {
        const typedValue = responseValue as QueryTwoDimensionalAggregation;
        const groups = typedValue.groups.map(group => {
          const key = ontologyProvider.remapQueryBucketKeyType(
            type.groupKeyType,
            group.key,
          );
          const value = ontologyProvider.remapQueryBucketValueType(
            type.valueType,
            group.value,
          );
          return {
            key,
            value,
          };
        });

        return {
          groups,
        };
      },
      threeDimensionalAggregation(
        type: ThreeDimensionalAggregationType<
          QueryBucketKeyType,
          QueryBucketKeyType,
          QueryBucketValueType
        >,
      ): ThreeDimensionalAggregation<
        QueryBucketKey,
        QueryBucketKey,
        BucketValue
      > {
        const typedValue = responseValue as QueryThreeDimensionalAggregation;
        const groups = typedValue.groups.map(group => {
          const key = ontologyProvider.remapQueryBucketKeyType(
            type.groupKeyType,
            group.key,
          );
          const subBuckets = group.groups.map(subGroup => {
            return {
              key: ontologyProvider.remapQueryBucketKeyType(
                type.segmentKeyType,
                subGroup.key,
              ),
              value: ontologyProvider.remapQueryBucketValueType(
                type.valueType,
                subGroup.value,
              ),
            };
          });
          return {
            key,
            value: subBuckets,
          };
        });

        return {
          groups,
        };
      },
    });
  }

  private remapQueryBucketKeyType(
    queryBucketKeyType: QueryBucketKeyType,
    value: any,
  ): QueryBucketKey {
    const _this = this;
    return visitTypeUnion(queryBucketKeyType, {
      string: () => value as string,
      boolean: () => value as boolean,
      range(type: RangeType<QueryBucketRangeableType>): Range<Rangeable> {
        return _this.remapRangeType(type, value);
      },
      unknown(type: { type: string }): QueryBucketKey {
        throw new Error(`Unknown type received ${type.type}`);
      },
    });
  }

  private remapQueryBucketValueType(
    queryBucketValueType: QueryBucketValueType,
    value: any,
  ): BucketValue {
    return visitTypeUnion<QueryBucketValueType, BucketValue>(
      queryBucketValueType,
      {
        date: () => {
          return LocalDate.fromISOString(value as string);
        },
        timestamp: () => {
          return Timestamp.fromISOString(value as string);
        },
        double: () => {
          return value as number;
        },
        unknown(type: { type: string }): string {
          throw new Error(`Unknown type received ${type.type}`);
        },
      },
    );
  }

  private remapRangeType(
    rangeType: RangeType<QueryBucketRangeableType>,
    value: any,
  ): Range<Rangeable> {
    return visitTypeUnion<QueryBucketRangeableType, Range<Rangeable>>(
      rangeType.subType,
      {
        date: () => {
          let startValue;
          let endValue;
          if (value.startValue) {
            startValue = LocalDate.fromISOString(value.startValue as string);
          }

          if (value.endValue) {
            endValue = LocalDate.fromISOString(value.endValue as string);
          }
          return {
            startValue,
            endValue,
          } as Range<Rangeable>;
        },
        timestamp: () => {
          let startValue;
          let endValue;
          if (value.startValue) {
            startValue = Timestamp.fromISOString(value.startValue as string);
          }

          if (value.endValue) {
            endValue = Timestamp.fromISOString(value.endValue as string);
          }
          return {
            startValue,
            endValue,
          } as Range<Rangeable>;
        },
        double: () => {
          let startValue;
          let endValue;
          if (value.startValue) {
            startValue = value.startValue as number;
          }

          if (value.endValue) {
            endValue = value.endValue as number;
          }
          return {
            startValue,
            endValue,
          } as Range<Rangeable>;
        },
        integer: () => {
          let startValue;
          let endValue;
          if (value.startValue) {
            startValue = value.startValue as number;
          }

          if (value.endValue) {
            endValue = value.endValue as number;
          }
          return {
            startValue,
            endValue,
          } as Range<Rangeable>;
        },
        unknown: type => {
          throw new Error(`Unknown type received ${type.type}`);
        },
      },
    );
  }

  private async createPageIterator<T, E extends FoundryApiError>(
    apiCall: () => Promise<Page<T>>,
    generator: () => AsyncGenerator<T, any, unknown>,
    errorHandler: (palantirApiError: PalantirApiError) => E,
  ) {
    const page = this.wrapResult(apiCall, errorHandler);
    const iterator = this.wrapIterator(generator, errorHandler);

    return Object.assign(page, {
      [Symbol.asyncIterator]: () => iterator,
    });
  }

  private async wrapResult<T, E extends FoundryApiError>(
    apiCall: () => Promise<T>,
    errorHandler: (palantirApiError: PalantirApiError) => E,
  ): Promise<Result<T, E>> {
    try {
      const result = await apiCall();
      return createOkResponse(result);
    } catch (e) {
      if (e instanceof PalantirApiError) {
        return createErrorResponse(errorHandler(e));
      } else {
        // TODO this unknown used to be an UnknownError but it had casting problems
        return createErrorResponse(e as unknown as E);
      }
    }
  }

  private async *wrapIterator<T, E extends FoundryApiError>(
    lambda: () => AsyncGenerator<T, any, unknown>,
    errorHandler: (palantirApiError: PalantirApiError) => E,
  ): AsyncGenerator<Result<T, E>> {
    try {
      for await (const element of lambda()) {
        yield createOkResponse(element);
      }
    } catch (e) {
      if (e instanceof PalantirApiError) {
        yield createErrorResponse(errorHandler(e));
      } else {
        // TODO this unknown used to be an UnknownError but it had casting problems
        yield createErrorResponse(e as unknown as E);
      }
    }
  }

  private async processStream<T extends string | number>(
    streamIterator: AsyncGenerator<any, any, unknown>,
  ): Promise<any[]> {
    const allPoints: Array<TimeSeriesPoint<T>> = [];
    for await (const points of streamIterator) {
      Array.prototype.push.apply(allPoints, points);
    }
    return allPoints;
  }

  private createObject<T extends OntologyObject>(object: OntologyObjectV2): T {
    return this.objectFactory!.create(
      object.__apiName,
      this.authClient,
      this.stack,
      object.__rid,
      object,
    ) as T;
  }

  private async listObjects<T extends OntologyObject>(
    apiName: string,
    selectedProperties: Array<keyof T> = [],
    options?: { pageSize?: number; pageToken?: string },
  ) {
    const pagePromise = await listObjectsV2(
      createOpenApiRequest(this.stack, this.fetchFn),
      this.ontologyMetadata.ontologyApiName,
      apiName,
      {
        pageSize: options?.pageSize,
        pageToken: options?.pageToken,
        select: selectedProperties.map(x => x.toString()),
      },
    );
    return {
      data: pagePromise.data.map(object => this.createObject<T>(object)),
      nextPageToken: pagePromise.nextPageToken,
    };
  }

  private async *iterateObjects<T extends OntologyObject>(
    apiName: string,
    options?: { pageSize?: number },
  ): AsyncGenerator<T> {
    let nextPageToken;
    do {
      const page: ListObjectsResponseV2 = await listObjectsV2(
        createOpenApiRequest(this.stack, this.fetchFn),
        this.ontologyMetadata.ontologyApiName,
        apiName,
        {
          pageSize: options?.pageSize,
          pageToken: nextPageToken,
          select: [],
        },
      );

      for (const object of page.data) {
        yield this.createObject<T>(object);
      }

      nextPageToken = page.nextPageToken;
    } while (nextPageToken);
  }

  private async getLinkedObjectsPage<T extends OntologyObject>(
    sourceApiName: string,
    primaryKey: any,
    linkTypeApiName: string,
    options?: { pageSize?: number; pageToken?: string },
  ) {
    const pagePromise = await listLinkedObjectsV2(
      createOpenApiRequest(this.stack, this.fetchFn),
      this.ontologyMetadata.ontologyApiName,
      sourceApiName,
      primaryKey,
      linkTypeApiName,
      {
        pageSize: options?.pageSize,
        pageToken: options?.pageToken,
        select: [],
      },
    );
    return {
      data: pagePromise.data.map(object => {
        return this.createObject<T>(object);
      }),
      nextPageToken: pagePromise.nextPageToken,
    };
  }

  private async listObjectsFromObjectSet<T extends OntologyObject>(
    objectSetDefinition: ObjectSetDefinition,
    orderBy?: SearchClause,
    selectedProperties: Array<keyof T> = [],
    options?: { pageSize?: number; pageToken?: string },
  ) {
    const pagePromise = await loadObjectSetV2(
      createOpenApiRequest(this.stack, this.fetchFn),
      this.ontologyMetadata.ontologyApiName,
      this.mapObjectSetBody(
        objectSetDefinition,
        orderBy,
        selectedProperties,
        options,
      ),
    );
    return {
      data: pagePromise.data.map(object => this.createObject<T>(object)),
      nextPageToken: pagePromise.nextPageToken,
    };
  }

  private mapObjectSetBody(
    objectSetDefinition: ObjectSetDefinition,
    orderBy?: SearchClause,
    selectedProperties: any[] = [],
    options?: { pageSize?: number; pageToken?: string },
  ): LoadObjectSetRequestV2 {
    let objectSetBody: LoadObjectSetRequestV2 = {
      objectSet: objectSetDefinition,
      select: selectedProperties.map(x => x.toString()),
    };
    if (orderBy && orderBy?.orderBy?.fields?.length > 0) {
      objectSetBody = { ...objectSetBody, orderBy: orderBy?.orderBy };
    }
    if (options && options?.pageSize) {
      objectSetBody = { ...objectSetBody, pageSize: options.pageSize };
    }
    if (options && options?.pageToken) {
      objectSetBody = { ...objectSetBody, pageToken: options.pageToken };
    }
    return objectSetBody;
  }

  private async *iterateObjectsFromObjectSet<T extends OntologyObject>(
    objectSetDefinition: ObjectSetDefinition,
    orderBy?: SearchClause,
    selectedProperties: Array<keyof T> = [],
    options?: { pageSize?: number },
  ): AsyncGenerator<T> {
    let nextPageToken;
    do {
      const page: LoadObjectSetResponseV2 = await loadObjectSetV2(
        createOpenApiRequest(this.stack, this.fetchFn),
        this.ontologyMetadata.ontologyApiName,
        this.mapObjectSetBody(
          objectSetDefinition,
          orderBy,
          selectedProperties,
          {
            pageSize: options?.pageSize,
            pageToken: nextPageToken,
          },
        ),
      );

      for (const object of page.data) {
        yield this.createObject<T>(object);
      }

      nextPageToken = page.nextPageToken;
    } while (nextPageToken);
  }

  private async *iterateLinkedObjects<T extends OntologyObject>(
    sourceApiName: string,
    primaryKey: any,
    linkTypeApiName: string,
    options?: { pageSize?: number },
  ): AsyncGenerator<T, any, unknown> {
    let nextPageToken;
    do {
      const page: ListLinkedObjectsResponseV2 = await listLinkedObjectsV2(
        createOpenApiRequest(this.stack, this.fetchFn),
        this.ontologyMetadata.ontologyApiName,
        sourceApiName,
        primaryKey,
        linkTypeApiName,
        {
          pageSize: options?.pageSize,
          pageToken: nextPageToken,
          select: [],
        },
      );

      for (const object of page.data) {
        yield this.createObject<T>(object);
      }

      nextPageToken = page.nextPageToken;
    } while (nextPageToken);
  }

  private getRemappedParameters(
    params: { [parameterId: string]: any },
  ): { [parameterId: string]: any } {
    const parameterMap: { [parameterName: string]: any } = {};
    const remappedParams = Object.entries(params).reduce(
      (acc, [key, value]) => {
        acc[key] = this.getParameterValueMapping(value);
        return acc;
      },
      parameterMap,
    );

    return remappedParams;
  }

  private getParameterValueMapping(
    value: ParameterValue,
  ): PrimitiveParameterValue {
    if (isOntologyObject(value)) {
      return this.getParameterValueMapping(value.__primaryKey);
    } else if (value instanceof LocalDate) {
      return value.toISOString();
    } else if (value instanceof Timestamp) {
      return value.toISOString();
    } else if (value instanceof AttachmentProperty) {
      return value.attachmentRid!;
    } else if (Array.isArray(value)) {
      return value.map(a => this.getParameterValueMapping(a));
    } else if (value instanceof Set) {
      return Array.from(value, this.getParameterValueMapping);
    } else if (GeoShape.isGeoShape(value)) {
      return value.toGeoJson();
    } else if (value instanceof GeoPoint) {
      return value.toGeoJson();
    } else if (this.isOntologyObjectSet(value)) {
      return value.objectSetDefinition;
    } else if (typeof value === "object") {
      // Since structs are valid arguments for Queries, we map the values
      return Object.entries(value).reduce((acc, [key, structValue]) => {
        acc[key] = this.getParameterValueMapping(structValue);
        return acc;
      }, {} as { [key: string]: PrimitiveParameterValue });
    }

    return value as string | number | boolean;
  }

  private isOntologyObjectSet(
    obj: any,
  ): obj is { objectSetDefinition: ObjectSetDefinition } {
    return obj && obj.objectSetDefinition;
  }
}

function createOkResponse<V>(value: V): Ok<V> {
  return { type: "ok", value };
}

function createErrorResponse<E>(error: E): Err<E> {
  return { type: "error", error };
}

async function remapAttachmentResponse(
  authClient: Auth,
  stack: string,
  ontologyMetadata: OntologyMetadata,
  response: AttachmentV2,
): Promise<Attachment> {
  return AttachmentProperty.constructAttachment(
    authClient,
    stack,
    ontologyMetadata,
    undefined,
    undefined,
    undefined,
    {
      rid: response.rid,
    },
  );
}

function getReader(streamOrBlob: ReadableStream<Uint8Array> | Blob) {
  if (isBlob(streamOrBlob)) {
    return streamOrBlob.stream().getReader();
  }
  return streamOrBlob.getReader();
}

function isBlob(
  streamOrBlob: ReadableStream<Uint8Array> | Blob,
): streamOrBlob is Blob {
  return (streamOrBlob as Blob).stream != null;
}
