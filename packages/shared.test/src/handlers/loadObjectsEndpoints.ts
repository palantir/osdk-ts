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

/* eslint-disable @typescript-eslint/require-await */

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import stableStringify from "json-stable-stringify";
import type { HttpResponseResolver, PathParams, RequestHandler } from "msw";
import type { BaseAPIError } from "../BaseError.js";
import {
  AttachmentNotFoundError,
  AttachmentSizeExceededLimitError,
  InvalidContentTypeError,
  InvalidRequest,
  ObjectNotFoundError,
} from "../errors.js";
import {
  subSelectProperties,
  subSelectPropertiesUrl,
} from "../filterObjects.js";
import {
  attachmentContentRequest,
  attachmentMetadataRequest,
  attachmentUploadRequest,
  attachmentUploadRequestBody,
} from "../stubs/attachments.js";
import {
  latestValueRequestHandlers,
  streamValuesRequestHandlers,
} from "../stubs/geotimeseriesrequests.js";
import {
  fauxFoundry,
  legacyFauxDataStore,
} from "../stubs/ontologies/legacyFullOntology.js";

import {
  mediaContentRequestHandler,
  mediaMetadataRequestHandler,
  mediaUploadRequest,
  mediaUploadRequestBody,
} from "../stubs/media.js";
import { employeeObjectType } from "../stubs/objectTypes.js";
import { defaultOntologyMetadata } from "../stubs/ontologies/defaultOntologyMetadata.js";
import {
  firstPointRequestHandlers,
  lastPointRequestHandlers,
  streamPointsRequestHandlers,
} from "../stubs/timeseriesRequests.js";
import {
  areArrayBuffersEqual,
  pageThroughResponseSearchParams,
} from "./endpointUtils.js";
import { getPaginationParamsFromUrl } from "./util/getPaginationParams.js";
import type { ExtractBody } from "./util/handleOpenApiCall.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";
import { requireParams } from "./util/requireParam.js";

export const loadObjectsEndpoints: Array<RequestHandler> = [
  // TODO MOVE THESE TO the `ontologyMetadataEndpoints` file

  /**
   * List ontologies
   */
  handleOpenApiCall(
    OntologiesV2.OntologiesV2.list,
    [],
    async () => {
      return {
        data: fauxFoundry
          .getEveryOntology()
          .map(x => x.getOntologyFullMetadata().ontology),
      };
    },
  ),

  /**
   * Get specified Ontology
   */
  handleOpenApiCall(
    OntologiesV2.OntologiesV2.get,
    ["ontologyRid"],
    async req => {
      return fauxFoundry
        .getOntology(req.params.ontologyRid)
        .getOntologyFullMetadata()
        .ontology;
    },
  ),

  /**
   * List objectTypes V2
   */
  handleOpenApiCall(
    OntologiesV2.ObjectTypesV2.list,
    ["ontologyApiName"],
    async req => {
      return {
        data: fauxFoundry
          .getOntology(req.params.ontologyApiName)
          .getAllObjectTypes()
          .map(x => x.objectType),
      };
    },
  ),

  /**
   * Load object
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectsV2.get,
    ["ontologyApiName", "objectType", "primaryKey"],
    async req => {
      requireParams(req.params, [
        "ontologyApiName",
        "objectType",
        "primaryKey",
      ]);

      const objectType = req.params.objectType;
      const primaryKey = req.params.primaryKey;

      const response = subSelectPropertiesUrl(
        legacyFauxDataStore.getObjectOrThrow(objectType, primaryKey),
        new URL(req.request.url),
      );

      return response;
    },
  ),

  /**
   * Load all objects
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectsV2.list,
    ["ontologyApiName", "objectType"],
    async req => {
      requireParams(req.params, [
        "ontologyApiName",
        "objectType",
      ]);

      const objectType = req.params.objectType;
      const url = new URL(req.request.url);

      const paginationParams = {
        pageSize: url.searchParams.get("pageSize") == null
          ? undefined
          : Number(url.searchParams.get("pageSize")),
        pageToken: url.searchParams.get("pageToken") == null
          ? undefined
          : (url.searchParams.get("pageToken") as string),
      };

      const loadObjects = pageThroughResponseSearchParams(
        legacyFauxDataStore.getObjectsOfType(objectType),
        getPaginationParamsFromUrl(req.request),
        true,
      );

      if (loadObjects) {
        return subSelectProperties(loadObjects, url, true);
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid Request"));
    },
  ),

  /**
   * Load firstPoint
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.getFirstPoint,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "propertyName",
    ],
    async req => {
      const pointParams = {
        primaryKey: req.params.primaryKey,
        propertyName: req.params.propertyName,
      };

      const firstPointResp =
        firstPointRequestHandlers[JSON.stringify(pointParams)];
      if (
        (req.params.ontologyApiName === defaultOntologyMetadata.apiName
          || req.params.ontologyApiName === defaultOntologyMetadata.rid)
        && req.params.objectType === employeeObjectType.apiName
      ) {
        return firstPointResp;
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
    },
  ),

  /**
   * Load lastPoint
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.getLastPoint,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      const pointParams = {
        primaryKey: req.params.primaryKey,
        propertyName: req.params.propertyName,
      };
      const lastPointResp =
        lastPointRequestHandlers[JSON.stringify(pointParams)];
      if (
        (req.params.ontologyApiName === defaultOntologyMetadata.apiName
          || req.params.ontologyApiName === defaultOntologyMetadata.rid)
        && req.params.objectType === employeeObjectType.apiName
      ) {
        return lastPointResp;
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
    },
  ),

  /**
   * stream points
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.streamPoints,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      return handleStreamValues(req, false);
    },
  ),

  /**
   * List Linked Objects
   */
  handleOpenApiCall(
    OntologiesV2.LinkedObjectsV2.listLinkedObjects,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "linkType",
    ],
    async req => {
      requireParams(req.params, [
        "ontologyApiName",
        "objectType",
        "primaryKey",
        "linkType",
      ]);

      const { primaryKey, linkType, objectType, ontologyApiName } = req.params;

      const linkResults = fauxFoundry
        .getDataStore(ontologyApiName)
        .getLinks(objectType, primaryKey, linkType);

      const objects = pageThroughResponseSearchParams(
        linkResults,
        getPaginationParamsFromUrl(req.request),
        true,
      );

      if (objects) {
        return subSelectProperties(
          objects,
          new URL(req.request.url),
          false,
        );
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid Request"));
    },
  ),

  /**
   * Get specific Linked Object
   */
  handleOpenApiCall(
    OntologiesV2.LinkedObjectsV2.getLinkedObject,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "linkType",
      "targetPrimaryKey",
    ],
    async req => {
      requireParams(req.params, [
        "ontologyApiName",
        "objectType",
        "primaryKey",
        "linkType",
        "targetPrimaryKey",
      ]);

      const primaryKey = req.params.primaryKey;
      const linkType = req.params.linkType;
      const objectType = req.params.objectType;
      const targetPrimaryKey = req.params.targetPrimaryKey;

      const links = fauxFoundry.getDataStore(req.params.ontologyApiName)
        .getLinks(objectType, primaryKey, linkType);

      const object =
        links.filter(l => String(l.__primaryKey) === targetPrimaryKey)[0];
      if (!object) {
        throw new OpenApiCallError(
          404,
          ObjectNotFoundError(
            `${objectType} -> ${linkType}`,
            targetPrimaryKey,
          ),
        );
      }
      return subSelectPropertiesUrl(
        object,
        new URL(req.request.url),
      );
    },
  ),

  /**
   * Upload attachment
   */
  handleOpenApiCall(
    OntologiesV2.Attachments.upload,
    [],
    async req => {
      const urlObj = new URL(req.request.url);
      const fileName = urlObj.searchParams.get("filename");

      if (typeof fileName !== "string") {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameter"));
      }

      const attachmentsUploadResponse = attachmentUploadRequest[fileName];
      const body = await req.request.arrayBuffer();

      if (attachmentsUploadResponse) {
        const expectedBody = attachmentUploadRequestBody[fileName];
        const expectedBodyArray = await expectedBody.arrayBuffer();

        if (!areArrayBuffersEqual(body, expectedBodyArray)) {
          throw new OpenApiCallError(400, InvalidContentTypeError);
        }

        return attachmentsUploadResponse as any; // fixme
      }
      throw new OpenApiCallError(400, AttachmentSizeExceededLimitError);
    },
  ),

  /**
   * Get attachment metadata V1
   */
  handleOpenApiCall(
    OntologiesV2.Attachments.get,
    ["attachmentRid"],
    async req => {
      const attachmentRid = req.params.attachmentRid;

      if (typeof attachmentRid !== "string") {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
      }

      const getAttachmentMetadataResponse =
        attachmentMetadataRequest[attachmentRid];
      if (getAttachmentMetadataResponse) {
        return getAttachmentMetadataResponse as any; // fixme
      }

      throw new OpenApiCallError(404, AttachmentNotFoundError);
    },
  ),

  /**
   * Get attachment metadata V2
   */
  handleOpenApiCall(
    OntologiesV2.AttachmentPropertiesV2.getAttachment,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "propertyName",
    ],
    async req => {
      const ontologyApiName = req.params.ontologyApiName;
      const primaryKey = req.params.primaryKey;
      const objectType = req.params.objectType;
      const propertyName = req.params.propertyName;

      if (
        typeof primaryKey !== "string"
        || typeof ontologyApiName !== "string"
        || typeof objectType !== "string"
        || typeof propertyName !== "string"
      ) {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
      }

      const getAttachmentMetadataResponse =
        attachmentMetadataRequest[propertyName];
      if (getAttachmentMetadataResponse) {
        return {
          ...getAttachmentMetadataResponse,
          type: "single" as const,
        } as any; // fixme
      }

      throw new OpenApiCallError(404, AttachmentNotFoundError);
    },
  ),

  /**
   * Read attachment content V1
   */
  handleOpenApiCall(
    OntologiesV2.Attachments.read,
    ["attachmentRid"],
    async req => {
      const attachmentRid = req.params.attachmentRid;

      if (typeof attachmentRid !== "string") {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
      }

      const getAttachmentContentResponse =
        attachmentContentRequest[attachmentRid];

      if (getAttachmentContentResponse) {
        return new Response(JSON.stringify(getAttachmentContentResponse));
      }

      throw new OpenApiCallError(404, AttachmentNotFoundError);
    },
  ),

  /**
   * Read attachment content V2
   */
  handleOpenApiCall(
    OntologiesV2.AttachmentPropertiesV2.readAttachment,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "propertyName",
    ],
    async req => {
      const ontologyApiName = req.params.ontologyApiName;
      const primaryKey = req.params.primaryKey;
      const objectType = req.params.objectType;
      const propertyName = req.params.propertyName;

      if (
        typeof primaryKey !== "string"
        || typeof ontologyApiName !== "string"
        || typeof objectType !== "string"
        || typeof propertyName !== "string"
      ) {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
      }

      const getAttachmentContentResponse =
        attachmentContentRequest[propertyName];
      if (getAttachmentContentResponse) {
        return new Response(JSON.stringify(getAttachmentContentResponse));
      }

      throw new OpenApiCallError(404, AttachmentNotFoundError);
    },
  ),
  /**
   * Load latestValue
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesValueBankProperties.getLatestValue,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      const pointParams = {
        primaryKey: req.params.primaryKey,
        propertyName: req.params.propertyName,
      };
      const lastPointResp =
        latestValueRequestHandlers[JSON.stringify(pointParams)];
      if (
        (req.params.ontologyApiName === defaultOntologyMetadata.apiName
          || req.params.ontologyApiName === defaultOntologyMetadata.rid)
        && req.params.objectType === employeeObjectType.apiName
      ) {
        return lastPointResp;
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
    },
  ),
  /**
   * stream values
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesValueBankProperties.streamValues,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      return handleStreamValues(req, true);
    },
  ),
  /**
   * Load media metadata
   */
  handleOpenApiCall(
    OntologiesV2.MediaReferenceProperties.getMediaMetadata,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      const propertyName = req.params.propertyName;

      const mediaMetadata = mediaMetadataRequestHandler[propertyName];
      if (
        typeof req.params.primaryKey !== "string"
        || typeof req.params.ontologyApiName !== "string"
        || typeof req.params.objectType !== "string"
        || typeof propertyName !== "string"
        || mediaMetadata == null
      ) {
        throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
      }
      return mediaMetadata;
    },
  ),
  /**
   * Read media content
   */
  handleOpenApiCall(
    OntologiesV2.MediaReferenceProperties.getMediaContent,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "propertyName",
    ],
    async req => {
      const propertyName = req.params.propertyName;

      const mediaResponse = mediaContentRequestHandler[propertyName];
      if (
        typeof req.params.primaryKey !== "string"
        || typeof req.params.ontologyApiName !== "string"
        || typeof req.params.objectType !== "string"
        || typeof propertyName !== "string"
        || mediaResponse == null
      ) {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
      }

      return new Response(JSON.stringify(mediaResponse));
    },
  ),
  handleOpenApiCall(
    OntologiesV2.MediaReferenceProperties.upload,
    [
      "ontologyApiName",
      "objectType",
      "propertyName",
    ],
    async req => {
      const urlObj = new URL(req.request.url);
      const fileName = urlObj.searchParams.get("mediaItemPath");

      if (
        typeof fileName !== "string"
        || typeof req.params.ontologyApiName !== "string"
        || typeof req.params.objectType !== "string"
        || typeof req.params.propertyName !== "string"
      ) {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
      }

      const mediaUploadResponse = mediaUploadRequest[fileName];
      const body = await req.request.arrayBuffer();

      if (mediaUploadResponse) {
        const expectedBody = mediaUploadRequestBody[fileName];
        const expectedBodyArray = await expectedBody.arrayBuffer();

        if (!areArrayBuffersEqual(body, expectedBodyArray)) {
          throw new OpenApiCallError(400, InvalidContentTypeError);
        }

        return mediaUploadResponse;
      }
      throw new OpenApiCallError(400, InvalidRequest("Media not found"));
    },
  ),
] as const;

async function handleStreamValues(
  req: Parameters<
    HttpResponseResolver<
      PathParams<string>,
      | ExtractBody<typeof OntologiesV2.TimeSeriesPropertiesV2.streamPoints>
      | Blob
      | BaseAPIError
    >
  >[0],
  useGeotime?: boolean,
) {
  const requestBody = await req.request.json();
  const streamPointsResp = useGeotime
    ? streamValuesRequestHandlers[stableStringify(requestBody)]
    : streamPointsRequestHandlers[stableStringify(requestBody)];
  if (
    streamPointsResp
    && (req.params.ontologyApiName === defaultOntologyMetadata.apiName
      || req.params.ontologyApiName === defaultOntologyMetadata.rid)
    && req.params.objectType === employeeObjectType.apiName
  ) {
    return new Response(JSON.stringify(streamPointsResp));
  }
  throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
}
