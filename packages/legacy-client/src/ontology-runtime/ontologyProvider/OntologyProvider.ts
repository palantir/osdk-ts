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

import type { OntologyDefinition, ThinClient } from "@osdk/api";
import { createOpenApiRequest } from "@osdk/api";
import {
  aggregateObjectSetV2,
  applyActionV2,
  executeQueryV2,
  getFirstPoint,
  getLastPoint,
  streamPoints,
} from "@osdk/gateway/requests";
import type {
  StreamTimeSeriesPointsRequest,
  StreamTimeSeriesPointsRequest as StreamPointsBody,
} from "@osdk/gateway/types";
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
  GeoPoint,
  GeoShape,
  isAttachment,
  isOntologyObject,
  LocalDate,
  Timestamp,
} from "../baseTypes";
import type {
  ParameterValue,
  PrimitiveParameterValue,
} from "../baseTypes/ParameterValue";
import { visitTypeUnion } from "../common/visitior";
import { mapAggregation, mapBucketing } from "./AggregationUtils";
import { getObject } from "./calls/getObject";
import { wrapIterator } from "./calls/util/wrapIterator";
import { wrapResult } from "./calls/util/wrapResult";
import {
  AggregateObjectsErrorHandler,
  ExecuteActionErrorHandler,
  ExecuteQueryErrorHandler,
  handleAggregateObjectsError,
  handleExecuteActionError,
  handleExecuteQueryError,
  handleTimeSeriesError,
  TimeSeriesErrorHandler,
} from "./ErrorHandlers";
import type {
  ActionError,
  AggregateObjectsError,
  QueryError,
  TimeSeriesError,
} from "./Errors";
import type { OntologyObjectFactory } from "./OntologyObjectFactory";
import {
  iterateReadableStream,
  parseStreamedResponse,
} from "./parseStreamedResponse";
import { isOk } from "./Result";
import type { Result } from "./Result";

export class OntologyProvider {
  #client: ThinClient<OntologyDefinition<any>>;
  #objectFactory?: OntologyObjectFactory;

  constructor(
    client: ThinClient<OntologyDefinition<any>>,
    objectFactory?: OntologyObjectFactory,
    // TODO contextPath for createOpenApiRequest?
  ) {
    this.#client = client;
    this.#objectFactory = objectFactory;
  }

  getFirstPoint<T extends string | number>(
    apiName: string,
    primaryKey: any,
    propertyName: string,
  ): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>> {
    return wrapResult(
      async () => {
        const point = await getFirstPoint(
          createOpenApiRequest(this.#client.stack, this.#client.fetch),
          this.#client.ontology.metadata.ontologyApiName,
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
    return wrapResult(
      async () => {
        const point = await getLastPoint(
          createOpenApiRequest(this.#client.stack, this.#client.fetch),
          this.#client.ontology.metadata.ontologyApiName,
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
    return wrapResult(
      async () => {
        const streamPointsIterator = await streamPoints(
          createOpenApiRequest(this.#client.stack, this.#client.fetch),
          this.#client.ontology.metadata.ontologyApiName,
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
    yield* wrapIterator(
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
      createOpenApiRequest(this.#client.stack, this.#client.fetch),
      this.#client.ontology.metadata.ontologyApiName,
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
    return wrapResult(
      async () => {
        const remappedGroups = body.groupBy
          ? body.groupBy.map(group => mapBucketing(group))
          : [];

        const remappedAggregation = body.aggregation.map(aggregationClause =>
          mapAggregation(aggregationClause)
        );

        const response = await aggregateObjectSetV2(
          createOpenApiRequest(this.#client.stack, this.#client.fetch),
          this.#client.ontology.metadata.ontologyApiName,
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
    return wrapResult(
      async () => {
        const response = await applyActionV2(
          createOpenApiRequest(this.#client.stack, this.#client.fetch),
          this.#client.ontology.metadata.ontologyApiName,
          apiName,
          {
            parameters: this.getRemappedParameters(params),
          },
        );
        return ActionResponse.of(this.#client, response);
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
    return wrapResult(
      async () => {
        const response = await applyActionV2(
          createOpenApiRequest(this.#client.stack, this.#client.fetch),
          this.#client.ontology.metadata.ontologyApiName,
          apiName,
          {
            parameters: this.getRemappedParameters(params),
            options: {
              returnEdits: "ALL",
            },
          },
        );
        return ActionResponse.of(this.#client, response, provider);
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
    return wrapResult(
      async () => {
        const response = await applyActionV2(
          createOpenApiRequest(this.#client.stack, this.#client.fetch),
          this.#client.ontology.metadata.ontologyApiName,
          apiName,
          {
            parameters: this.getRemappedParameters(params),
            options: {
              mode: "VALIDATE_ONLY",
            },
          },
        );
        return ActionResponse.of(this.#client, response);
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
    return wrapResult(
      async () => {
        const response: { value: PrimitiveParameterValue } =
          await executeQueryV2(
            createOpenApiRequest(this.#client.stack, this.#client.fetch),
            this.#client.ontology.metadata.ontologyApiName,
            apiName,
            {
              parameters: params ? this.getRemappedParameters(params) : {},
            },
          );
        const remappedResponse = await this.remapQueryResponseType(
          response.value,
          this.#objectFactory!,
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

      async object(
        type: ObjectType,
      ): Promise<OntologyObject> {
        if (typeof responseValue !== "object") {
          const result = await getObject(
            ontologyProvider.#client,
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
          ontologyProvider.#client,
          type.objectTypeApiName,
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

  private async processStream<T extends string | number>(
    streamIterator: AsyncGenerator<any, any, unknown>,
  ): Promise<any[]> {
    const allPoints: Array<TimeSeriesPoint<T>> = [];
    for await (const points of streamIterator) {
      Array.prototype.push.apply(allPoints, points);
    }
    return allPoints;
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
    } else if (isAttachment(value)) {
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
