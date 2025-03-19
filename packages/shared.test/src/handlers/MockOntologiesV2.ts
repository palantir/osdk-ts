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

import type { MediaReference } from "@osdk/foundry.core";
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { OpenApiCallFactory } from "./util/handleOpenApiCall.js";
import { handleOpenApiCallFactory } from "./util/handleOpenApiCall.js";

const MockActions: {
  applyBatch: OpenApiCallFactory<
    "ontologyApiName" | "actionType",
    OntologiesV2.BatchApplyActionRequestV2,
    OntologiesV2.BatchApplyActionResponseV2
  >;
  apply: OpenApiCallFactory<
    "ontologyApiName" | "actionType",
    OntologiesV2.ApplyActionRequestV2,
    OntologiesV2.SyncApplyActionResponseV2
  >;
} = {
  applyBatch: handleOpenApiCallFactory(OntologiesV2.Actions.applyBatch, [
    "ontologyApiName",
    "actionType",
  ]),
  apply: handleOpenApiCallFactory(
    OntologiesV2.Actions.apply,
    ["ontologyApiName", "actionType"],
  ),
};

const MockAttachments: {
  upload: OpenApiCallFactory<never, Blob, OntologiesV2.AttachmentV2>;
  get: OpenApiCallFactory<"attachmentRid", never, OntologiesV2.AttachmentV2>;
  read: OpenApiCallFactory<"attachmentRid", never, Response>;
} = {
  upload: handleOpenApiCallFactory(
    OntologiesV2.Attachments.upload,
    [],
  ),
  get: handleOpenApiCallFactory(
    OntologiesV2.Attachments.get,
    ["attachmentRid"],
  ),

  read: handleOpenApiCallFactory(
    OntologiesV2.Attachments.read,
    ["attachmentRid"],
  ),
};

const MockAttachmentPropertiesV2: {
  getAttachment: OpenApiCallFactory<
    "ontologyApiName" | "objectType" | "primaryKey" | "propertyName",
    never,
    OntologiesV2.AttachmentMetadataResponse
  >;
  readAttachment: OpenApiCallFactory<
    "ontologyApiName" | "objectType" | "primaryKey" | "propertyName",
    never,
    Response
  >;
} = {
  getAttachment: handleOpenApiCallFactory(
    OntologiesV2.AttachmentPropertiesV2.getAttachment,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "propertyName",
    ],
  ),

  readAttachment: handleOpenApiCallFactory(
    OntologiesV2.AttachmentPropertiesV2.readAttachment,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "propertyName",
    ],
  ),
};

const MockOntologyObjectsV2: {
  get: OpenApiCallFactory<
    "ontologyApiName" | "objectType" | "primaryKey",
    // these infer wrong, so i have to make it any
    any,
    OntologiesV2.OntologyObjectV2
  >;
  list: OpenApiCallFactory<
    "ontologyApiName" | "objectType",
    // these infer wrong, so i have to make it any
    any,
    OntologiesV2.ListObjectsResponseV2
  >;
} = {
  get: handleOpenApiCallFactory(
    OntologiesV2.OntologyObjectsV2.get,
    ["ontologyApiName", "objectType", "primaryKey"],
  ),
  list: handleOpenApiCallFactory(
    OntologiesV2.OntologyObjectsV2.list,
    ["ontologyApiName", "objectType"],
  ),
};

const MockLinkedObjectsV2: {
  listLinkedObjects: OpenApiCallFactory<
    "ontologyApiName" | "objectType" | "primaryKey" | "linkType",
    any,
    OntologiesV2.ListLinkedObjectsResponseV2
  >;
  getLinkedObject: OpenApiCallFactory<
    | "ontologyApiName"
    | "objectType"
    | "primaryKey"
    | "linkType"
    | "targetPrimaryKey",
    // these infer wrong, so i have to make it any
    any,
    OntologiesV2.OntologyObjectV2
  >;
} = {
  listLinkedObjects: handleOpenApiCallFactory(
    OntologiesV2.LinkedObjectsV2.listLinkedObjects,
    ["ontologyApiName", "objectType", "primaryKey", "linkType"],
  ),
  getLinkedObject: handleOpenApiCallFactory(
    OntologiesV2.LinkedObjectsV2.getLinkedObject,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "linkType",
      "targetPrimaryKey",
    ],
  ),
};

const MockMediaReferenceProperties: {
  getMediaMetadata: OpenApiCallFactory<
    "ontologyApiName" | "objectType" | "primaryKey" | "propertyName",
    never,
    OntologiesV2.MediaMetadata
  >;
  getMediaContent: OpenApiCallFactory<
    "ontologyApiName" | "objectType" | "primaryKey" | "propertyName",
    never,
    Response
  >;
  upload: OpenApiCallFactory<
    "ontologyApiName" | "objectType" | "propertyName",
    Blob,
    MediaReference
  >;
} = {
  getMediaMetadata: handleOpenApiCallFactory(
    OntologiesV2.MediaReferenceProperties.getMediaMetadata,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
  ),

  getMediaContent: handleOpenApiCallFactory(
    OntologiesV2.MediaReferenceProperties.getMediaContent,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
  ),

  upload: handleOpenApiCallFactory(
    OntologiesV2.MediaReferenceProperties.upload,
    ["ontologyApiName", "objectType", "propertyName"],
  ),
};

const MockOntologyObjectSets: {
  load: OpenApiCallFactory<
    "ontologyApiName",
    OntologiesV2.LoadObjectSetRequestV2,
    OntologiesV2.LoadObjectSetResponseV2
  >;
  aggregate: OpenApiCallFactory<
    "ontologyApiName",
    OntologiesV2.AggregateObjectSetRequestV2,
    OntologiesV2.AggregateObjectsResponseV2
  >;
  loadMultipleObjectTypes: OpenApiCallFactory<
    "ontologyApiName",
    OntologiesV2.LoadObjectSetV2MultipleObjectTypesRequest,
    OntologiesV2.LoadObjectSetV2MultipleObjectTypesResponse
  >;
} = {
  load: handleOpenApiCallFactory(
    OntologiesV2.OntologyObjectSets.load,
    ["ontologyApiName"],
  ),
  aggregate: handleOpenApiCallFactory(
    OntologiesV2.OntologyObjectSets.aggregate,
    ["ontologyApiName"],
  ),
  loadMultipleObjectTypes: handleOpenApiCallFactory(
    OntologiesV2.OntologyObjectSets.loadMultipleObjectTypes,
    ["ontologyApiName"],
  ),
};

const MOntologiesV2: {
  getFullMetadata: OpenApiCallFactory<
    "ontologyApiName",
    never,
    OntologiesV2.OntologyFullMetadata
  >;
  list: OpenApiCallFactory<never, never, OntologiesV2.ListOntologiesV2Response>;
  /**
   * Get specified Ontology
   */
  get: OpenApiCallFactory<"ontologyRid", never, OntologiesV2.OntologyV2>;
} = {
  getFullMetadata: handleOpenApiCallFactory(
    OntologiesV2.OntologiesV2.getFullMetadata,
    ["ontologyApiName"],
  ),
  list: handleOpenApiCallFactory(
    OntologiesV2.OntologiesV2.list,
    [],
  ),
  /**
   * Get specified Ontology
   */
  get: handleOpenApiCallFactory(
    OntologiesV2.OntologiesV2.get,
    ["ontologyRid"],
  ),
};

const MockObjectTypesV2: {
  get: OpenApiCallFactory<
    "ontologyApiName" | "objectTypeApiName",
    never,
    OntologiesV2.ObjectTypeV2
  >;
  getFullMetadata: OpenApiCallFactory<
    "ontologyApiName" | "objectTypeApiName",
    never,
    OntologiesV2.ObjectTypeFullMetadata
  >;
  getOutgoingLinkType: OpenApiCallFactory<
    "ontology" | "objectType" | "linkType",
    never,
    OntologiesV2.LinkTypeSideV2
  >;
  listOutgoingLinkTypes: OpenApiCallFactory<
    "ontology" | "objectType",
    never,
    OntologiesV2.ListOutgoingLinkTypesResponseV2
  >;
  list: OpenApiCallFactory<
    "ontologyApiName",
    never,
    OntologiesV2.ListObjectTypesV2Response
  >;
} = {
  get: handleOpenApiCallFactory(
    OntologiesV2.ObjectTypesV2.get,
    ["ontologyApiName", "objectTypeApiName"],
  ),
  getFullMetadata: handleOpenApiCallFactory(
    OntologiesV2.ObjectTypesV2.getFullMetadata,
    ["ontologyApiName", "objectTypeApiName"],
  ),
  getOutgoingLinkType: handleOpenApiCallFactory(
    OntologiesV2.ObjectTypesV2.getOutgoingLinkType,
    ["ontology", "objectType", "linkType"],
  ),
  listOutgoingLinkTypes: handleOpenApiCallFactory(
    OntologiesV2.ObjectTypesV2.listOutgoingLinkTypes,
    ["ontology", "objectType"],
  ),
  list: handleOpenApiCallFactory(
    OntologiesV2.ObjectTypesV2.list,
    ["ontologyApiName"],
  ),
};

const MockActionTypesV2: {
  list: OpenApiCallFactory<
    "ontologyApiName",
    never,
    OntologiesV2.ListActionTypesResponseV2
  >;
  get: OpenApiCallFactory<
    "ontologyApiName" | "actionTypeApiName",
    never,
    OntologiesV2.ActionTypeV2
  >;
} = {
  list: handleOpenApiCallFactory(
    OntologiesV2.ActionTypesV2.list,
    ["ontologyApiName"],
  ),
  get: handleOpenApiCallFactory(
    OntologiesV2.ActionTypesV2.get,
    ["ontologyApiName", "actionTypeApiName"],
  ),
};

const MockQueryTypes: {
  get: OpenApiCallFactory<
    "ontologyApiName" | "queryTypeApiName",
    never,
    OntologiesV2.QueryTypeV2
  >;
  list: OpenApiCallFactory<
    "ontologyApiName",
    never,
    OntologiesV2.ListQueryTypesResponseV2
  >;
} = {
  get: handleOpenApiCallFactory(
    OntologiesV2.QueryTypes.get,
    ["ontologyApiName", "queryTypeApiName"],
  ),
  list: handleOpenApiCallFactory(
    OntologiesV2.QueryTypes.list,
    ["ontologyApiName"],
  ),
};

const MockOntologyInterfaces: {
  list: OpenApiCallFactory<
    "ontologyApiName",
    never,
    OntologiesV2.ListInterfaceTypesResponse
  >;
  get: OpenApiCallFactory<
    "ontologyApiName" | "interfaceType",
    never,
    OntologiesV2.InterfaceType
  >;
} = {
  list: handleOpenApiCallFactory(
    OntologiesV2.OntologyInterfaces.list,
    ["ontologyApiName"],
  ),
  get: handleOpenApiCallFactory(
    OntologiesV2.OntologyInterfaces.get,
    ["ontologyApiName", "interfaceType"],
  ),
};

const MockQueries: {
  execute: OpenApiCallFactory<
    "ontologyApiName" | "queryApiName",
    OntologiesV2.ExecuteQueryRequest,
    OntologiesV2.ExecuteQueryResponse
  >;
} = {
  execute: handleOpenApiCallFactory(
    OntologiesV2.Queries.execute,
    ["ontologyApiName", "queryApiName"],
  ),
};

export const MockOntologiesV2: {
  Actions: typeof MockActions;
  Attachments: typeof MockAttachments;
  AttachmentPropertiesV2: typeof MockAttachmentPropertiesV2;
  OntologyObjectsV2: typeof MockOntologyObjectsV2;
  LinkedObjectsV2: typeof MockLinkedObjectsV2;
  MediaReferenceProperties: typeof MockMediaReferenceProperties;
  OntologyObjectSets: typeof MockOntologyObjectSets;
  OntologyInterfaces: typeof MockOntologyInterfaces;
  QueryTypes: typeof MockQueryTypes;
  ActionTypesV2: typeof MockActionTypesV2;
  ObjectTypesV2: typeof MockObjectTypesV2;
  OntologiesV2: typeof MOntologiesV2;
  Queries: typeof MockQueries;
} = {
  Actions: MockActions,
  Attachments: MockAttachments,
  AttachmentPropertiesV2: MockAttachmentPropertiesV2,
  OntologyObjectsV2: MockOntologyObjectsV2,
  LinkedObjectsV2: MockLinkedObjectsV2,
  MediaReferenceProperties: MockMediaReferenceProperties,
  OntologyObjectSets: MockOntologyObjectSets,
  OntologyInterfaces: MockOntologyInterfaces,
  QueryTypes: MockQueryTypes,
  ActionTypesV2: MockActionTypesV2,
  ObjectTypesV2: MockObjectTypesV2,
  OntologiesV2: MOntologiesV2,
  Queries: MockQueries,
};
