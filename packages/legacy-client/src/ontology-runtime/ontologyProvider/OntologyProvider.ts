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

import type { StreamTimeSeriesPointsRequest as StreamPointsBody } from "@osdk/gateway/types";
import type { Auth } from "../../oauth-client";
import type {
  AggregationClause,
  AggregationResult,
  BucketGroup,
  BucketKey,
  BucketValue,
  InternalBucketing,
  Metrics,
  MetricValue,
} from "../aggregations";
import type {
  ActionResponse,
  Attachment,
  AttachmentMetadata,
  BaseObjectType,
  Edits,
  ObjectSetDefinition,
  OntologyObject,
  OntologyType,
  QueryResponse,
  TimeSeriesPoint,
} from "../baseTypes";
import type { ParameterValue } from "../baseTypes/ParameterValue";
import type { SearchClause } from "../filters";
import type { Page } from "../paging";
import type {
  ActionError,
  AggregateObjectsError,
  AttachmentsError,
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
import type { Result } from "./Result";
export class OntologyProvider {
  private client: any;

  constructor(
    private authClient: Auth,
    private stack: string,
    private ontologyMetadata: OntologyMetadata,
    private objectFactory?: OntologyObjectFactory,
  ) {
    throw new Error("not implemented");
  }

  get<T extends OntologyObject>(
    apiName: string,
    primaryKey: any,
  ): Promise<Result<T, GetObjectError>> {
    throw new Error("not implemented");
  }

  all<T extends OntologyObject>(
    apiName: string,
  ): Promise<Result<T[], ListObjectsError>> {
    throw new Error("not implemented");
  }

  allObjectsFromObjectSet<T extends OntologyObject>(
    apiName: string,
    objectSetDefinition: ObjectSetDefinition,
    orderBy?: SearchClause,
  ): Promise<Result<T[], LoadObjectSetError>> {
    throw new Error("not implemented");
  }

  getFirstPoint<T extends string | number>(
    apiName: string,
    primaryKey: any,
    propertyName: string,
  ): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>> {
    throw new Error("not implemented");
  }

  getLastPoint<T extends string | number>(
    apiName: string,
    primaryKey: any,
    propertyName: string,
  ): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>> {
    throw new Error("not implemented");
  }

  getAllTimeSeriesPoints<T extends string | number>(
    apiName: string,
    primaryKey: any,
    propertyName: string,
    body: StreamPointsBody,
  ): Promise<Result<Array<TimeSeriesPoint<T>>, TimeSeriesError>> {
    throw new Error("not implemented");
  }

  iterateTimeSeriesPoints<T extends string | number>(
    apiName: string,
    primaryKey: any,
    propertyName: string,
    body: StreamPointsBody,
  ): AsyncGenerator<Result<TimeSeriesPoint<T>, TimeSeriesError>, any, unknown> {
    throw new Error("not implemented");
  }

  private iterateTimeSeriesPointsInternal;
  pageObjectsFromObjectSet<T extends OntologyObject>(
    apiName: string,
    objectSetDefinition: ObjectSetDefinition,
    orderBy?: SearchClause,
    options?: {
      pageSize?: number;
      pageToken?: string;
    },
  ): Promise<Result<Page<T>, LoadObjectSetError>> {
    throw new Error("not implemented");
  }

  pageObjects<T extends OntologyObject>(apiName: string, options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<Result<Page<T>, ListObjectsError>> {
    throw new Error("not implemented");
  }

  iterator<T extends OntologyObject>(apiName: string, options?: {
    pageSize?: number;
  }): AsyncGenerator<Result<T, ListObjectsError>, any, unknown> {
    throw new Error("not implemented");
  }

  iteratorOnObjectSet<T extends OntologyObject>(
    apiName: string,
    objectSetDefinition: ObjectSetDefinition,
    orderBy?: SearchClause,
    options?: {
      pageSize?: number;
    },
  ): AsyncGenerator<Result<T, LoadObjectSetError>, any, unknown> {
    throw new Error("not implemented");
  }

  getLinkedObject<T extends OntologyObject>(
    sourceApiName: string,
    targetApiName: string,
    primaryKey: any,
    linkTypeApiName: string,
    linkedObjectPrimaryKey: string,
  ): Promise<Result<T, GetLinkedObjectError>> {
    throw new Error("not implemented");
  }

  listLinkedObjects<T extends OntologyObject>(
    sourceApiName: string,
    targetApiName: string,
    primaryKey: any,
    linkTypeApiName: string,
  ): Promise<Result<T[], ListLinkedObjectsError>> {
    throw new Error("not implemented");
  }

  linkedObjectsIterator<T extends OntologyObject>(
    sourceApiName: string,
    targetApiName: string,
    primaryKey: any,
    linkTypeApiName: string,
    options?: {
      pageSize?: number;
    },
  ): AsyncGenerator<Result<T, ListLinkedObjectsError>, any, unknown> {
    throw new Error("not implemented");
  }

  pageLinkedObjects<T extends OntologyObject>(
    sourceApiName: string,
    targetApiName: string,
    primaryKey: any,
    linkTypeApiName: string,
    options?: {
      pageSize?: number;
      pageToken?: string;
    },
  ): Promise<Result<Page<T>, ListObjectsError>> {
    throw new Error("not implemented");
  }

  aggregate<
    TBucketGroup extends BucketGroup,
    TMetrics extends Metrics | MetricValue,
  >(objectType: BaseObjectType, body: {
    aggregation: AggregationClause[];
    groupBy?: Array<InternalBucketing<BucketKey, BucketValue>>;
    where?: SearchClause;
  }): Promise<
    Result<AggregationResult<TBucketGroup, TMetrics>, AggregateObjectsError>
  > {
    throw new Error("not implemented");
  }

  applyAction(apiName: string, params: {
    [parameterId: string]: ParameterValue;
  }): Promise<
    Result<
      ActionResponse<Edits<OntologyObject, OntologyObject> | undefined>,
      ActionError
    >
  > {
    throw new Error("not implemented");
  }

  applyActionGetResponse(
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
    throw new Error("not implemented");
  }

  validateAction(apiName: string, params: {
    [parameterId: string]: ParameterValue;
  }): Promise<
    Result<
      ActionResponse<Edits<OntologyObject, OntologyObject> | undefined>,
      ActionError
    >
  > {
    throw new Error("not implemented");
  }

  executeQuery(apiName: string, responseType: OntologyType, params?: {
    [parameterId: string]: ParameterValue;
  }): Promise<Result<QueryResponse<ParameterValue>, QueryError>> {
    throw new Error("not implemented");
  }

  uploadAttachment(
    fileName: string,
    data: Blob,
  ): Promise<Result<Attachment, AttachmentsError>> {
    throw new Error("not implemented");
  }

  getAttachmentMetadata(
    ontologyApiName?: string,
    objectTypeApiName?: string,
    primaryKey?: any,
    propertyName?: string,
    attachmentRid?: string,
  ): Promise<Result<AttachmentMetadata, AttachmentsError>> {
    throw new Error("not implemented");
  }

  readAttachmentContent(
    ontologyApiName?: string,
    objectTypeApiName?: string,
    primaryKey?: any,
    propertyName?: string,
    attachmentRid?: string,
  ): Promise<Result<Blob, AttachmentsError>> {
    throw new Error("not implemented");
  }

  private listObjectsFromObjectSet;
  private iterateObjectsFromObjectSet;
  private listObjects;
  private iterateObjects;
  private getLinkedObjectsPage;
  private iterateLinkedObjects;
  private createObject;
  private getRemappedParameters;
  private getParameterValueMapping;
  private remapResponseType;
  private mapObjectSetBody;
  private createPageIterator;
  private wrapResult;
  private wrapIterator;
  private processStream;
}
